import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'order', pathMatch: 'full' },
    {
        path: 'about', loadChildren: './about/about.module#AboutModule'
    },
    {
        path: 'order', loadChildren: './order/editableTable.module#EditableTableModule'
    }
];

export const AppRoutes = RouterModule.forRoot(routes);
