import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-items-display-header',
    templateUrl: 'items-display-header.component.html',
    styleUrls: ['items-display-header.component.scss']
})
export class ItemsDisplayHeaderComponent {
    @Input() item: { id: number, name: string, city: string, address: string };
    @Output()
    addOrder: EventEmitter<number> = new EventEmitter<number>();

    addNewOrder(_event: any) {
        this.addOrder.emit(1);
    }
}
