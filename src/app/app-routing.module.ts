import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersModule } from './components/customers/customers.module';
import { MessagesModule } from './components/messages/messages.module';
import { OrdersModule } from './components/orders/orders.module';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: ()=> CustomersModule//'./components/customers/customers.module#CustomersModule'
  },
  {
    path: 'orders',
    loadChildren: ()=> OrdersModule//'./components/orders/orders.module#OrdersModule'
  },
  {
    path: 'messages',
    loadChildren: ()=> MessagesModule//'./components/messages/messages.module#MessagesModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
