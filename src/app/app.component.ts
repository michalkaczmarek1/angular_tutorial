
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .isActive {
      text-decoration: underline;
    }`,`
    .oddCategory {
      color: red;
    }
  `]
})
export class AppComponent {
 
  currentDate: number = Date.now();
  
  constructor(){
  }

}
