import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  name: string = "Michal Kaczmarek";
  person = {
    name: this.name,
    age: 23,
    address: {
      street: "Zielona",
      number: 32,
      zipCode: 22222
    },
    desc: "Test"
  };

  get getPerson(){
    return this.person.name + " " + this.person.address.street + " " + this.person.address.number;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
