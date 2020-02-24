import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomerType } from '../model';
import { CustomerService } from '../customer.service';
import { NgForm } from '@angular/forms';
import { MessageService } from 'src/app/core/message.service';
import { Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {


  name: string;
  age: number;
  type: CustomerType;

  CustomerType = CustomerType;

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit() {
  }

  add(form?: NgForm){
    this.customerService.createCustomer({
      name: this.name,
      age: this.age,
      type: this.type,
      photoUrl: '',
      categories: [],
      desc: '',
      address: {
        city: '',
        houseNumber: 0,
        street: ''
      }
    }).subscribe(() => {
        form.resetForm();
    });

  }

}
