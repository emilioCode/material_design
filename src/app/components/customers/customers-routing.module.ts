import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerNewComponent } from './customer-new/customer-new.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerListComponent
  },
  {
    path: 'info',
    component: CustomerCardComponent
  },
  {
    path: 'new',
    component: CustomerNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
