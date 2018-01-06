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
    dateString: string;

    @Input() item: { id: number, productName: string, timeStart: string, timeEnd: string, status: string, location: string, type: string };
    @Output() onToggleDisplay = new EventEmitter<any>();
    @Output() onDeleteOrder = new EventEmitter<any>();

    locale = 'ru';

    constructor(private _localeService: BsLocaleService) {
    }

    ngOnInit() {
        console.log('YES');
        this._localeService.use(this.locale);
        this.bsStart = new Date(this.item.timeStart);
        this.bsEnd = new Date(this.item.timeEnd);
    }

    onChangeDatePickerStart(event: any) {
        this.item.timeStart = this.toISO(event);
    }

    onChangeDatePickerEnd(event: any) {
        this.item.timeEnd = this.toISO(event);
    }

    toISO(event: any) {
        const re = /0[0-9]00/gi;
        const str = String(event);
        const res = str.replace(re, '0000');
        const d = new Date(res);

        return d.toJSON();
        // Wed Feb 28 2018 00:00:00 GMT+0200 (Eastern Europe Standard Time)
        // 2018-02-27T22:00:00.000Z
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
