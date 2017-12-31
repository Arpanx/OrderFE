import { Order } from '../../models/order';
import 'rxjs/add/operator/map';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Configuration } from './../../app.constants';

@Injectable()
export class OrderService {

    private actionUrl: string;
    private headers: HttpHeaders;

    constructor(private http: HttpClient, configuration: Configuration) {

        this.actionUrl = configuration.Server + 'api/order/';

        this.headers = new HttpHeaders();
        this.headers = this.headers.set('Content-Type', 'application/json');
        this.headers = this.headers.set('Accept', 'application/json');
    }

    getAll(startPage: number, pageSize: number): Observable<Order[]> {
        this.headers = this.headers.set('Pagination', startPage + ',' + pageSize);
        return this.http.get<Order[]>(this.actionUrl, { headers: this.headers });
    }

    getAllNew(startPage: number, pageSize: number)  {
        this.headers = this.headers.set('Pagination', startPage + ',' + pageSize);
        return this.http.get<any>(this.actionUrl, {observe: 'response', headers: this.headers });
    }

    getSingle(id: number): Observable<Order> {
        return this.http.get<Order>(this.actionUrl + id, { headers: this.headers });
    }

    add(thingToAdd: Order): Observable<Order> {
        const toAdd = JSON.stringify({ name: thingToAdd.name, city: thingToAdd.city, address: thingToAdd.address });

        return this.http.post<Order>(this.actionUrl, toAdd, { headers: this.headers });
    }

    update(id: number, itemToUpdate: any): Observable<Order> {
        return this.http
            .put<Order>(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers });
    }

    delete(id: number): Observable<any> {
        return this.http.delete<any>(this.actionUrl + id, { headers: this.headers });
    }
}
