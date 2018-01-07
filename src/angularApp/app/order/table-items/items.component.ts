import { Component, Input, SimpleChanges } from '@angular/core';
import { OnChanges, OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ItemService } from '../../core/services/item-data.service';
import { Item } from '../../models/item';

@Component({
    selector: 'app-items-table',
    templateUrl: 'items.component.html',
    styleUrls: ['items.component.scss']
})

export class ItemsComponent implements OnChanges, OnInit {
    @Input() data: number;
    items: Item[] = [];
    item: Item = new Item();
    p = 1;
    currentOrderId = 1;
    // tempstr: string;
    count = 10;

    tableHeader = {id: '#',  productName: 'productName', timeStart: 'timeStart', status: 'status', location: 'location', type: 'type'};
    NullableString?: string | undefined;
    displayingIndeces: boolean[];

    constructor(private itemService: ItemService) {
    }

    ngOnChanges(_changes: SimpleChanges) {
        if (_changes.data) {
           this.currentOrderId = _changes.data.currentValue;
           this.getItemsByOrderId(_changes.data.currentValue);
        }
        // this.displayingIndeces = new Array(this.items.length);
        // this.displayingIndeces.fill(true);
    }

    addNewOrder(_event: number) {
        this.displayingIndeces = new Array(this.items.length);
        this.displayingIndeces.fill(true);
        console.log('before', this.displayingIndeces);
        this.items.push(new Item());
        console.log('after', this.displayingIndeces);
        // this.displayingIndeces = new Array(this.items.length);
        // this.displayingIndeces.fill(true);
    }

    updateOrderCheckId(item: Item) {
        if (!isNaN(item.id)) {
            this.updateItem(item);
        } else {
            item.orderId = this.currentOrderId;
            this.addItem(item);
        }
    }

    pageChanged(page: any) {
        this.p = page;
        this.getAllItems(page, 10);
    }

    ngOnInit(): void {
        this.getAllItems(1, 10);
    }

    isDisplay(index: number) {
        return this.displayingIndeces[index];
    }

    toggleEdit(index: number) {
        this.displayingIndeces[index] = !this.displayingIndeces[index];
    }

    addItem(item: Item) {
        this.itemService
            .add(item)
            .subscribe(() => {
                this.getItemsByOrderId(this.currentOrderId);
                this.item = new Item();
            }, (error) => {
                console.log(error);
            });
    }

    updateItem(item: Item) {
        this.itemService
            .update(item.id, item)
            .subscribe(() => {
                // this.getAllItems(this.p, 10);
                this.getItemsByOrderId(this.currentOrderId);
                this.item = new Item();
            }, (error) => {
                console.log(error);
            });
    }

    deleteItem(item: Item) {
        this.itemService
            .delete(item.id)
            .subscribe(() => {
                this.getAllItems(this.p, 10);
            }, (error) => {
                console.log(error);
            });
    }

    getAllItems(startPage: number, pageSize: number) {
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

    getItemsByOrderId(OrderId: number) {
        this.itemService
            .getAllByOrderId(OrderId)
            .subscribe(
            data => {
                this.items = data;
                // this.displayingIndeces = new Array(this.items.length);
                // this.displayingIndeces.fill(true);
                // this.NullableString = data.headers.get('Pagination') || 'Pagination: 1,10';
                // const obj: ServerHeaderResponse  = JSON.parse(this.NullableString);
                // this.count = Number(obj.TotalItems);
            },
            error => console.log(error),
            // () => console.log('Get all complete')
            );
    }
}
