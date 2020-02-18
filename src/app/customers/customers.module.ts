import { NgModule } from '@angular/core';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerBrowserComponent } from './customer-browser/customer-browser.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerService } from './customer.service';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'customers', component: CustomerBrowserComponent },
  { path: 'customers/add', component: CustomerAddComponent },
]

@NgModule({
  declarations: [
    CustomerAddComponent,
    CustomerBrowserComponent,
    CustomerDetailsComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CustomerAddComponent,
    CustomerBrowserComponent
  ],
  providers: [CustomerService]
})
export class CustomersModule { }
