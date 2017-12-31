import { Component } from '@angular/core';
import { OnChanges, OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { OrderService } from '../../core/services/order-data.service';
import { Order } from '../../models/order';

@Component({
    selector: 'app-editable-table',
    templateUrl: 'editableTable.component.html',
    styleUrls: ['editableTable.component.scss']
})

export class EditableTableComponent implements OnChanges, OnInit {
    constructor(private orderService: OrderService) {
   }
    orders: Order[] = [];
    order: Order = new Order();
    p = 1;
    tempstr: string;
    count = 10;
    tableHeader = {id: '#',  name: 'FIO', city: 'City', address: 'Address' };

    displayingIndeces: boolean[];

    addNewOrder(_event: number) {
        this.orders.push(new Order());
    }

    updateOrderCheckId(order: Order) {
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
        this.displayingIndeces = new Array(this.orders.length);
        this.displayingIndeces.fill(true);
    }

    addOrder(order: Order) {
        this.orderService
            .add(order)
            .subscribe(() => {
                this.getAllOrders(this.p, 10);
                this.order = new Order();
            }, (error) => {
                console.log(error);
            });
    }

    updateOrder(order: Order) {
        this.orderService
            .update(order.id, order)
            .subscribe(() => {
                this.getAllOrders(this.p, 10);
                this.order = new Order();
            }, (error) => {
                console.log(error);
            });
    }

    deleteOrder(order: Order) {
        this.orderService
            .delete(order.id)
            .subscribe(() => {
                this.getAllOrders(this.p, 10);
            }, (error) => {
                console.log(error);
            });
    }

    getAllOrders(startPage: number, pageSize: number) {
        this.orderService
            .getAllNew(startPage, pageSize)
            .subscribe(
            data => {
                this.orders = data.body;
                this.displayingIndeces = new Array(this.orders.length);
                this.displayingIndeces.fill(true);
                data.headers.get('Pagination');
                // const _temp = JSON.parse('sds');
                // const obj: ServerHeaderResponse | null = temp;
                // this.count = Number(obj.TotalItems);
            },
            error => console.log(error),
            // () => console.log('Get all complete')
            );
    }
}

