import { Item } from '../../models/item';
import 'rxjs/add/operator/map';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Configuration } from './../../app.constants';

@Injectable()
export class ItemService {

    private actionUrl: string;
    private actionUrl2: string;
    private headers: HttpHeaders;

    constructor(private http: HttpClient, configuration: Configuration) {

        this.actionUrl = configuration.Server + 'api/item/';
        this.actionUrl2 = configuration.Server + 'api/order/';

        this.headers = new HttpHeaders();
        this.headers = this.headers.set('Content-Type', 'application/json');
        this.headers = this.headers.set('Accept', 'application/json');
    }

    getAll(startPage: number, pageSize: number): Observable<Item[]> {
        this.headers = this.headers.set('Pagination', startPage + ',' + pageSize);
        return this.http.get<Item[]>(this.actionUrl, { headers: this.headers });
    }

    getAllNew(startPage: number, pageSize: number)  {
        this.headers = this.headers.set('Pagination', startPage + ',' + pageSize);
        return this.http.get<any>(this.actionUrl, {observe: 'response', headers: this.headers });
    }

    getAllByOrderId(id: number)  {
        return this.http.get<any>(this.actionUrl2 + id + '/items' );
    }

    getSingle(id: number): Observable<Item> {
        return this.http.get<Item>(this.actionUrl + id, { headers: this.headers });
    }

    add(thingToAdd: Item): Observable<Item> {
        const toAdd = JSON.stringify({
            productName: thingToAdd.productName,
            description: thingToAdd.description,
            timeStart: thingToAdd.timeStart,
            timeEnd: thingToAdd.timeEnd,
            location: thingToAdd.location,
            type: thingToAdd.type,
            status: thingToAdd.status,
            orderId:  thingToAdd.orderId,
        });
        return this.http.post<Item>(this.actionUrl, toAdd, { headers: this.headers });
    }

    update(id: number, itemToUpdate: any): Observable<Item> {
        return this.http
            .put<Item>(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers });
    }

    delete(id: number): Observable<any> {
        return this.http.delete<any>(this.actionUrl + id, { headers: this.headers });
    }
}
