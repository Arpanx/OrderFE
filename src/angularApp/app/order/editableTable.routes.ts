import { RouterModule, Routes } from '@angular/router';

import { EditableTableComponent } from './editable-table/editableTable.component';

const routes: Routes = [
    { path: 'order', component: EditableTableComponent }
];

export const EditableTableRoutes = RouterModule.forChild(routes);
