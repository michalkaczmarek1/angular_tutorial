import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerType, Customer } from '../model';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { CustomerService } from '../customer.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-customer-browser',
  templateUrl: './customer-browser.component.html',
  styleUrls: ['./customer-browser.component.css']
})
export class CustomerBrowserComponent implements OnInit {

  @ViewChild('details', {static: false}) detaisComponent: CustomerDetailsComponent

  customers: Customer[];

  customer: Customer;
  
  constructor(private customerSevice: CustomerService, private counterService: CounterService) { }

  ngOnInit() {
    this.customerSevice.getCustomers().subscribe(response => {
      this.customers = response;
      this.customer = this.customers[0];
    });
    
    this.counterService.increase();
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

}
