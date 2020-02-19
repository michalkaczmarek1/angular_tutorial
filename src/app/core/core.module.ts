import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from './counter.service';
import { MessageService } from './message.service';
import { CONFIG, Config } from '../model';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';


const config: Config = {
  customerLimit: 2,
  apiUrl: 'http://localhost:13378'
}


@NgModule({
  declarations: [NavbarComponent, NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    CounterService,
    MessageService,
    {provide: CONFIG, useValue: config},
    AuthGuard,
    AuthService
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
