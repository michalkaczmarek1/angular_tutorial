
import { Customer, CustomerType } from './model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h1 [style.color] = "nameColor" [class.isActive] = "isActive">{{ customer.name.toUpperCase() }}
        <ng-container [ngSwitch]="customer.type">
          <ng-container *ngSwitchCase="CustomerType.Standard">*</ng-container>
          <ng-container *ngSwitchCase="CustomerType.Premium">**</ng-container>
          <ng-container *ngSwitchCase="CustomerType.VIP">***</ng-container>
          <ng-container *ngSwitchDefault>nieznany typ</ng-container>
        </ng-container>
        </h1>
      </div>
    </div>
    <div class="panel-body">
      <div class="row">
        <div class="col-sm-8">
          <p>Opis: {{ customer.desc }}</p>
          <p>Wiek: {{ customer.age }}</p>
          <p>Adres: {{ customer.address.street }}, {{ customer.address.houseNumber }}, {{ customer.address.city }}</p>  
          <button type="button" class="btn btn-primary" (click)="this.isActive = !this.isActive">Przełącz podkreślenie</button>
          <button type="button" class="btn btn-primary" (click)="changeColor()">Przełącz kolor</button>
        </div>
        <div class="col-sm-4">
          <ng-container *ngIf="showPhoto; then photo else noPhoto"></ng-container>
          <ng-template #photo>
            <img [src]="customer.photoUrl" /><br>
          </ng-template>
          <ng-template #noPhoto>
            <p>Zdjecie ukryte</p>
          </ng-template>
          <div class="checkbox">
            <label><input type="checkbox" [(ngModel)]="showPhoto">Pokaz zdjecie</label>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [`
    .isActive {
      text-decoration: underline;
    }
  `]
})
export class AppComponent {
  // name: string = 'Jan Kowalski';
  nameColor: string = 'green';
  // photoUrl: string = 'assets/images/customer.png';
  isActive: boolean = false;
  customer: Customer = {
    name: "Jan Kowalski",
    photoUrl: "assets/images/customer.png",
    desc: "Opis testowy",
    age: 31,
    address: {
      street: "Zielona",
      houseNumber: 32,
      city: "Poznań"
    },
    type: CustomerType.VIP
  };
  showPhoto: boolean = false;
  CustomerType = CustomerType;




  constructor(){
    // setTimeout(() => {
    //   this.customer.name = 'Wojciech';
    // }, 4000)
  }

  changeColor(){
    this.nameColor = this.nameColor === "green" ? "red" : "green";
  }

}
