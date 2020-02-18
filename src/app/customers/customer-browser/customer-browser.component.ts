import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerType, Customer } from '../model';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { CustomerService } from '../customer.service';
import { CounterService } from '../../core/counter.service';
import { MessageService } from '../../core/message.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-browser',
  templateUrl: './customer-browser.component.html',
  styleUrls: ['./customer-browser.component.css']
})
export class CustomerBrowserComponent implements OnInit {

  @ViewChild('details', {static: false}) detaisComponent: CustomerDetailsComponent

  customers: Customer[];
  // customers$: Observable<Customer[]>

  customer: Customer;
  
  constructor(
    private customerSevice: CustomerService, 
    private counterService: CounterService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    
    this.refresh();
    
    this.counterService.increase();

  }

  deleteCustomer(){
    this.customerSevice.deleteCustomer(this.customer).subscribe(
      () => {
      this.messageService.success("Udalo sie usunac klienta");
      this.refresh();
      },
      error => {
        console.log(error);
        this.messageService.error("Blad w polaczeniu z serwerem");
      }
    );
  }

  onShift(direction: string){
    const idx = this.customers.indexOf(this.customer);
    if(idx > 0 && direction === 'left'){
      this.customer = this.customers[idx-1];
    } else if (direction === 'right' && idx < this.customers.length -1){
      this.customer = this.customers[idx+1];
    }
  }

  changeColor(){
    this.detaisComponent.changeColor();
  }

  private refresh() {
    
    // this.customer = null;
    // this.customers$ = this.customerSevice.getCustomers();

    this.customerSevice.getCustomers().subscribe(response => {
      this.customers = response;
      this.customer = this.customers[0];
    });
  }
}
