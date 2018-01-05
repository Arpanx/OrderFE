import { RouterModule, Routes } from '@angular/router';

import { EditableTableComponent } from './table-order/editableTable.component';

const routes: Routes = [
    { path: 'order', component: EditableTableComponent }
];

export const EditableTableRoutes = RouterModule.forChild(routes);
