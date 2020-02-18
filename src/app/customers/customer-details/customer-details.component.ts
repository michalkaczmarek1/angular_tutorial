import { Component, OnInit, Input, EventEmitter, Output, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Customer, CustomerType } from '../model';
import { CounterService } from '../../core/counter.service';
import { MessageService } from '../../core/message.service';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit, OnDestroy, OnChanges {

  @Input() customer: Customer;
  @Output() shift = new EventEmitter<string>();

  CustomerType = CustomerType;

  nameColor: string = 'green';
  isActive: boolean = false;
  showPhoto: boolean = false;
  counter: number = 0;
  counterHandle: number;
  

  constructor(private counterService: CounterService, private messageService: MessageService) { }

  ngOnInit() {
    console.log('init');
    this.counterService.increase();
    // this.counterHandle = setInterval(() => {this.counter++;}, 1000);
  }

  ngOnDestroy(): void {
    console.log('destroy');
    // clearInterval(this.counterHandle);
  }

  ngOnChanges(changes: SimpleChanges): void {

    if(!changes.customer.firstChange){
      console.log(`change from ${changes.customer.previousValue.name} to ${changes.customer.currentValue.name}`);
    }
    
  }

  changeColor(){
    this.nameColor = this.nameColor === "green" ? "red" : "green";
    this.messageService.success("Udalo sie zmienic kolor");
  }

  right(){
    this.shift.emit("right");
  }

  left(){
    this.shift.emit("left");
  }

}
