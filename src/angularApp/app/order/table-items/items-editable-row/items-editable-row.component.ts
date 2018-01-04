import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import {  NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-items-editable-row',
    templateUrl: 'items-editable-row.component.html',
    styleUrls: ['items-editable-row.component.scss']
})
export class ItemsEditableRowComponent implements OnInit {

    types: string[] = ['DillerGold', 'DillerSilver', 'Social', 'Retail'];
    status: string[] = ['Valid', 'Cancelled'];
    // model  = { month: 8, day: 8, year: 2017 };
   // model: NgbDateStruct = {year: 2017, month: 8, day: 8};
    dateString: string;

    @Input() item: { id: number, productName: string, timeStart: string, status: string, location: string, type: string };
    @Output() onToggleDisplay = new EventEmitter<any>();
    @Output() onDeleteOrder = new EventEmitter<any>();

    constructor(
     //   private ngbDateParserFormatter: NgbDateParserFormatter
      ) {}

    ngOnInit() {
    // this.model = this.setDefaultDate();
    // this.onSelectDate(this.model);
    }

    // onSelectDate(date: NgbDateStruct) {
    //     if (date != null) {
    //             this.model = date;
    //             this.dateString = this.ngbDateParserFormatter.format(date);
    //         }
    //   }

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

    // setDefaultDate(): NgbDateStruct {
    //     const startDate = new Date();
    //     const startYear = startDate.getFullYear().toString();
    //     const startMonth = startDate.getMonth() + 1;
    //     const startDay = '1';

    //     return this.ngbDateParserFormatter.parse(startYear + '/' + startMonth.toString() + '/' + startDay);
    // }
}
