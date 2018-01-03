import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-items-editable-row',
    templateUrl: 'items-editable-row.component.html',
    styleUrls: ['items-editable-row.component.scss']
})
export class ItemsEditableRowComponent {
    @Input() item: { id: number, productName: string, city: string, address: string };
    @Output() onToggleDisplay = new EventEmitter<any>();
    @Output() onDeleteOrder = new EventEmitter<any>();

    toggleToDisplay() {
        this.onToggleDisplay.emit();
    }

    deleteOrder() {
        this.onDeleteOrder.emit();
    }
}
