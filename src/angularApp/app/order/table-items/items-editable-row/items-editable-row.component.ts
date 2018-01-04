import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-items-editable-row',
    templateUrl: 'items-editable-row.component.html',
    styleUrls: ['items-editable-row.component.scss']
})
export class ItemsEditableRowComponent implements OnInit {
    // Property for the gender
    // private types: string[];
    types: string[] = ['DillerGold', 'DillerSilver', 'Social', 'Retail'];

    @Input() item: { id: number, productName: string, status: string, location: string, type: string };
    @Output() onToggleDisplay = new EventEmitter<any>();
    @Output() onDeleteOrder = new EventEmitter<any>();

    ngOnInit() {
        this.types =  ['DillerGold', 'DillerSilver', 'Social', 'Retail'];
        console.log(this.types);
    }

    onChange(event: any) {
        this.item.type = event;
    }

    toggleToDisplay() {
        this.onToggleDisplay.emit();
    }

    deleteOrder() {
        this.onDeleteOrder.emit();
    }
}
