import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-form1',
    templateUrl: 'form1.component.html',
    styleUrls: ['form1.component.scss']
})
export class Form1Component implements OnInit {
    schedule: any;
    statuses: string[] = ['Option1', 'Option2', 'Option3'];
    types: string[] = ['Type1', 'Type2', 'Type3'];

    ngOnInit() {
        this.schedule.timeStart = new Date(); // new DateFormatPipe().transform(schedule.timeStart, ['local']);
        this.schedule.timeEnd = new Date(); // new DateFormatPipe().transform(schedule.timeEnd, ['local']);
    }
}
