import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FlatpickrOptions } from 'ng2-flatpickr/ng2-flatpickr';


@Component({
    selector: 'app-items-editable-row',
    templateUrl: 'items-editable-row.component.html',
    styleUrls: ['items-editable-row.component.scss']
})
export class ItemsEditableRowComponent implements OnInit {

    types: string[] = ['DillerGold', 'DillerSilver', 'Social', 'Retail'];
    status: string[] = ['Valid', 'Cancelled'];
    exampleOptions: FlatpickrOptions = {
        defaultDate: '01-03-2018',
        dateFormat: 'd-m-Y',
    };

    @Input() item: { id: number, productName: string, timeStart: string, timeEnd: string, status: string, location: string, type: string };
    @Output() onToggleDisplay = new EventEmitter<any>();
    @Output() onDeleteOrder = new EventEmitter<any>();

    constructor(
    ) {}

    ngOnInit() {

    }

    onChangeDatePickerStart(event: any) {
        this.item.timeStart = event.target.value;
    }

    onChangeDatePickerEnd(event: any) {
        this.item.timeEnd = event.target.value;
    }

    onChangeStatus(event: any) {
        this.item.status = event;
    }

    onChangeType(event: any) {
        this.item.type = event;
    }

    toggleToDisplay() {
        this.onToggleDisplay.emit();
    }

    deleteOrder() {
        this.onDeleteOrder.emit();
    }
}
