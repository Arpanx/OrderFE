import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-display-row',
    templateUrl: 'display-row.component.html',
    styleUrls: ['display-row.component.scss']
})
export class DisplayRowComponent {
    @Input() item: { id: number, name: string, city: string, address: string };
    @Output() onToggleEdit = new EventEmitter<any>();

    toggleToEdit() {
        this.onToggleEdit.emit();
    }
}
