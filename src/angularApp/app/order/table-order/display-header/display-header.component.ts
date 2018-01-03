import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-display-header',
    templateUrl: 'display-header.component.html',
    styleUrls: ['display-header.component.scss']
})
export class DisplayHeaderComponent {
    @Input() item: { id: number, name: string, city: string, address: string };
    @Output()
    addOrder: EventEmitter<number> = new EventEmitter<number>();

    addNewOrder(_event: any) {
        this.addOrder.emit(1);
    }
}
