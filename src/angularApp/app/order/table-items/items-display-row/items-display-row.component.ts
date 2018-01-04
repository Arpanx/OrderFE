import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-items-display-row',
    templateUrl: 'items-display-row.component.html',
    styleUrls: ['items-display-row.component.scss']
})
export class ItemsDisplayRowComponent {
    @Input() item: { id: number, productName: string, timeStart: string, status: string, location: string, type: string };
    @Output() onToggleEdit = new EventEmitter<any>();

    toggleToEdit() {
        this.onToggleEdit.emit();
    }
}
