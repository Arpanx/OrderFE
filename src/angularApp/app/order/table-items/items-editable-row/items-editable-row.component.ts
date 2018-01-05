import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';

@Component({
    selector: 'app-items-editable-row',
    templateUrl: 'items-editable-row.component.html',
    styleUrls: ['items-editable-row.component.scss']
})
export class ItemsEditableRowComponent implements OnInit {

    types: string[] = ['DillerGold', 'DillerSilver', 'Social', 'Retail'];
    status: string[] = ['Valid', 'Cancelled'];


    minDate = new Date(2017, 5, 10);
    maxDate = new Date(2018, 9, 15);
    bsStart: Date = new Date();
    bsEnd: Date = new Date();

    @Input() item: { id: number, productName: string, timeStart: string, timeEnd: string, status: string, location: string, type: string };
    @Output() onToggleDisplay = new EventEmitter<any>();
    @Output() onDeleteOrder = new EventEmitter<any>();

    locale = 'de';

    constructor(private _localeService: BsLocaleService) {
    }


    ngOnInit() {
        console.log('YES');
        this._localeService.use(this.locale);
        this.bsStart = new Date(this.item.timeStart.substr(0, 10));
        this.bsEnd = new Date(this.item.timeStart.substr(0, 10));
        // this.DateEnd = new Date(this.item.timeEnd.substr(0, 10));
    }

    onChangeDatePickerStart(event: any) {
        const dateString = event.value;
        const thisDateT = dateString.substr(6, 4) + '-' + dateString.substr(3, 2) + '-' + dateString.substr(0, 2);
        const newDate = new Date(thisDateT);
        this.item.timeStart = newDate.toISOString();
        // console.log('date START', newDate.toISOString());
    }

    onChangeDatePickerEnd(event: any) {
        const dateString = event.value;
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
