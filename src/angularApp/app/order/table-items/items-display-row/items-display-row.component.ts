import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-items-display-row',
    templateUrl: 'items-display-row.component.html',
    styleUrls: ['items-display-row.component.scss']
})
export class ItemsDisplayRowComponent {
    @Input() item: { id: number, productName: string, city: string, address: string };
    @Output() onToggleEdit = new EventEmitter<any>();

    toggleToEdit() {
        this.onToggleEdit.emit();
    }
}
