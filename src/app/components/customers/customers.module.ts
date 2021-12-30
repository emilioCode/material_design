import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { SharedModule } from '../shared/shared.module';
import { CustomerNewComponent } from './customer-new/customer-new.component';


@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerCardComponent,
    CustomerNewComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule
  ]
})
export class CustomersModule { }
