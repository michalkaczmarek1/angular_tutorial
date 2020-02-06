import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Customer, CustomerType } from '../model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit, OnDestroy {
  


  @Input() customer: Customer;
  @Output() shift = new EventEmitter<string>();

  CustomerType = CustomerType;

  nameColor: string = 'green';
  isActive: boolean = false;
  showPhoto: boolean = false;

  

  constructor() { }

  ngOnInit() {
    console.log('init');
  }

  ngOnDestroy(): void {
    console.log('destroy');
  }

  changeColor(){
    this.nameColor = this.nameColor === "green" ? "red" : "green";
  }

  right(){
    this.shift.emit("right");
  }

  left(){
    this.shift.emit("left");
  }

}
