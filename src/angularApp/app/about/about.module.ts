import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AboutRoutes } from './about.routes';
import { AboutComponent } from './components/about.component';
import { Ng2FlatpickrComponent } from 'ng2-flatpickr/ng2-flatpickr';


@NgModule({
    imports: [
        CommonModule,
        AboutRoutes
    ],

    declarations: [
        AboutComponent,
        Ng2FlatpickrComponent
    ],

})

export class AboutModule { }
