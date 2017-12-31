import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-editable-row',
    templateUrl: 'editable-row.component.html',
    styleUrls: ['editable-row.component.scss']
})
export class EditableRowComponent {
    @Input() item: { id: number, name: string, city: string, address: string };
    @Output() onToggleDisplay = new EventEmitter<any>();
    @Output() onDeleteOrder = new EventEmitter<any>();

    toggleToDisplay() {
        this.onToggleDisplay.emit();
    }

    deleteOrder() {
        this.onDeleteOrder.emit();
    }
}
