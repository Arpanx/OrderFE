import { HttpClientModule } from '@angular/common/http';
import { OrderService } from './services/order-data.service';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Configuration } from '../app.constants';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ]
})

export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                OrderService,
                Configuration
            ]
        };
    }
}
