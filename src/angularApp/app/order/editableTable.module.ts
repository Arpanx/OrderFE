import { ItemsDisplayHeaderComponent } from './table-items/items-display-header/items-display-header.component';
import { ItemsDisplayRowComponent } from './table-items/items-display-row/items-display-row.component';
import { ItemsEditableRowComponent } from './table-items/items-editable-row/items-editable-row.component';
import { ItemsComponent } from './table-items/items.component';
import { DisplayHeaderComponent } from './table-order/display-header/display-header.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { DisplayRowComponent } from './table-order/display-row/display-row.component';
import { EditableRowComponent } from './table-order/editable-row/editable-row.component';
import { EditableTableComponent } from './table-order/editableTable.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EditableTableRoutes } from '../order/editableTable.routes';
import { NgxPaginationModule } from 'ngx-pagination';
import { Form1Component } from './form1/form1.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2FlatpickrComponent } from 'ng2-flatpickr/ng2-flatpickr';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/bs-moment';
import { de } from 'ngx-bootstrap/locale';
defineLocale('de', de);

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        EditableTableRoutes,
        BsDatepickerModule.forRoot(),
        NgbModule.forRoot(),
    ],
    declarations: [
        EditableTableComponent,
        EditableRowComponent,
        DisplayHeaderComponent,
        DisplayRowComponent,
        Form1Component,
        ItemsComponent,
        ItemsEditableRowComponent,
        ItemsDisplayRowComponent,
        ItemsDisplayHeaderComponent,
        Ng2FlatpickrComponent,
    ],

    exports: [
        EditableTableComponent,
        EditableRowComponent,
        DisplayHeaderComponent,
        DisplayRowComponent,
        ItemsComponent,
        ItemsEditableRowComponent,
        ItemsDisplayRowComponent,
        ItemsDisplayHeaderComponent,
        Ng2FlatpickrComponent,
    ]
})

export class EditableTableModule { }
