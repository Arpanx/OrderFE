import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FlatpickrOptions } from 'ng2-flatpickr/ng2-flatpickr';
// import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'app-items-editable-row',
    templateUrl: 'items-editable-row.component.html',
    styleUrls: ['items-editable-row.component.scss']
})
export class ItemsEditableRowComponent implements OnInit, OnChanges {

    DateObjectStart: Date = new Date();
    DateObjectEnd: Date = new Date();

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
    ) {

    }

    ngOnInit() {
        this.DateObjectStart = new Date(this.item.timeStart.substr(0, 10));
        this.DateObjectEnd = new Date(this.item.timeEnd.substr(0, 10));
    }

    ngOnChanges(_changes: SimpleChanges) {

    }

    onChangeDatePickerStart(event: any) {
        const dateString = event.target.value;
        const thisDateT = dateString.substr(6, 4) + '-' + dateString.substr(3, 2) + '-' + dateString.substr(0, 2);
        const newDate = new Date(thisDateT);
        this.item.timeStart = newDate.toISOString();
        // console.log('date START', newDate.toISOString());
    }

    onChangeDatePickerEnd(event: any) {
        const dateString = event.target.value;
        const thisDateT = dateString.substr(6, 4) + '-' + dateString.substr(3, 2) + '-' + dateString.substr(0, 2);
        const newDate = new Date(thisDateT);
        this.item.timeEnd = newDate.toISOString();
        // console.log('date END', newDate.toISOString());
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
