import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomersModule } from './customers/customers.module';
import { CoreModule } from './core/core.module';
import { RouterModule, Routes } from '@angular/router';
import { CustomerBrowserComponent } from './customers/customer-browser/customer-browser.component';
import { CustomerAddComponent } from './customers/customer-add/customer-add.component';
import { ContractListComponent } from './contracts/contract-list/contract-list.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { EduwebModule } from './eduweb/eduweb.module';
// import { ErrorHandlingInterceptor } from './error-handling-interceptor';

const routes: Routes = [
  { path: 'contracts', loadChildren: 'src/app/contracts/contracts.module#ContractsModule' },
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: "**", component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    CustomersModule,
    CoreModule,
    RouterModule.forRoot(routes),
    EduwebModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
