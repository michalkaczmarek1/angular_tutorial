import { Component, OnInit } from '@angular/core';
import { CustomerType, Customer } from '../model';

@Component({
  selector: 'app-customer-browser',
  templateUrl: './customer-browser.component.html',
  styleUrls: ['./customer-browser.component.css']
})
export class CustomerBrowserComponent implements OnInit {

  customers: Customer[] = [
    {
      name: "Jan Kowalski",
      photoUrl: "assets/images/customer.png",
      age: 34,
      desc: "Bardzo wazny klient",
      address: {
        street: "Zielona",
        houseNumber: 5,
        city: "Warszawa"
      },
      type: CustomerType.Premium,
      categories: [
        "zagraniczny",
        "mikroprzedsiebiorstwo",
        "duzy obrot"
      ]
    },
    {
      name: "Robert Kowalczyk",
      photoUrl: "assets/images/customer.png",
      age: 34,
      desc: "Bardzo wazny klient",
      address: {
        street: "Zielona",
        houseNumber: 5,
        city: "Poznan"
      },
      type: CustomerType.Premium,
      categories: [
        "zagraniczny",
        "mikroprzedsiebiorstwo",
        "duzy obrot"
      ]
    },
    {
      name: "Maria Nowak",
      photoUrl: "assets/images/customer.png",
      age: 34,
      desc: "Bardzo wazny klient",
      address: {
        street: "Zielona",
        houseNumber: 5,
        city: "Gdansk"
      },
      type: CustomerType.Premium,
      categories: [
        "zagraniczny",
        "mikroprzedsiebiorstwo",
        "duzy obrot"
      ]
    }
  ]

  customer: Customer = this.customers[0];
  
  constructor() { }

  ngOnInit() {
  }

  onShift(direction: string){
    const idx = this.customers.indexOf(this.customer);
    if(idx > 0 && direction === 'left'){
      this.customer = this.customers[idx-1];
    } else if (direction === 'right' && idx < this.customers.length -1){
      this.customer = this.customers[idx+1];
    }
  }

}
