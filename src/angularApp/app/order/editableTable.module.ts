import { DisplayHeaderComponent } from './display-header/display-header.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { DisplayRowComponent } from './display-row/display-row.component';
import { EditableRowComponent } from './editable-row/editable-row.component';
import { EditableTableComponent } from './editable-table/editableTable.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EditableTableRoutes } from '../order/editableTable.routes';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        EditableTableRoutes,
        AngularFontAwesomeModule,
    ],
    declarations: [
        EditableTableComponent,
        EditableRowComponent,
        DisplayHeaderComponent,
        DisplayRowComponent
    ],

    exports: [
        EditableTableComponent,
        EditableRowComponent,
        DisplayHeaderComponent,
        DisplayRowComponent
    ]
})

export class EditableTableModule { }
