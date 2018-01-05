import { Component } from '@angular/core';
import { OnChanges, OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ItemService } from '../../core/services/item-data.service';
import { Item } from '../../models/item';

@Component({
    selector: 'app-items-table',
    templateUrl: 'items.component.html',
    styleUrls: ['items.component.scss']
})

export class ItemsComponent implements OnChanges, OnInit {
    items: Item[] = [];
    item: Item = new Item();
    p = 1;
    tempstr: string;
    count = 10;
    tableHeader = {id: '#',  productName: 'productName', timeStart: 'timeStart', status: 'status', location: 'location', type: 'type'};
    NullableString?: string | undefined;
    displayingIndeces: boolean[];

    constructor(private itemService: ItemService) {
    }

    first(_event: number) {
        console.log(_event);
    }

    addNewOrder(_event: number) {
        this.items.push(new Item());
    }

    updateOrderCheckId(order: Item) {
        if (!isNaN(order.id)) {
            this.updateOrder(order);
        } else {
            this.addOrder(order);
        }
    }

    pageChanged(page: any) {
        this.p = page;
        this.getAllOrders(page, 10);
    }

    ngOnInit(): void {
        this.getAllOrders(1, 10);
    }

    isDisplay(index: number) {
        return this.displayingIndeces[index];
    }

    toggleEdit(index: number) {
        this.displayingIndeces[index] = !this.displayingIndeces[index];
    }

    ngOnChanges() {
        this.displayingIndeces = new Array(this.items.length);
        this.displayingIndeces.fill(true);
    }

    addOrder(order: Item) {
        this.itemService
            .add(order)
            .subscribe(() => {
                this.getAllOrders(this.p, 10);
                this.item = new Item();
            }, (error) => {
                console.log(error);
            });
    }

    updateOrder(order: Item) {
        this.itemService
            .update(order.id, order)
            .subscribe(() => {
                this.getAllOrders(this.p, 10);
                this.item = new Item();
            }, (error) => {
                console.log(error);
            });
    }

    deleteOrder(order: Item) {
        this.itemService
            .delete(order.id)
            .subscribe(() => {
                this.getAllOrders(this.p, 10);
            }, (error) => {
                console.log(error);
            });
    }

    getAllOrders(startPage: number, pageSize: number) {
        this.itemService
            .getAllNew(startPage, pageSize)
            .subscribe(
            data => {
                this.items = data.body;
                this.displayingIndeces = new Array(this.items.length);
                this.displayingIndeces.fill(true);
                this.NullableString = data.headers.get('Pagination') || 'Pagination: 1,10';
                const obj: ServerHeaderResponse  = JSON.parse(this.NullableString);
                this.count = Number(obj.TotalItems);
            },
            error => console.log(error),
            // () => console.log('Get all complete')
            );
    }
}

