import { Injectable, Inject } from '@angular/core';
import { CustomerType, Customer, Config, CONFIG } from './model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(
    @Inject(CONFIG) private config: Config,
    private httpClient: HttpClient
  ) { }

  getCustomers(){
    
    return this.httpClient.get<Customer[]>(`${this.config.apiUrl}/customers`).pipe(map(customers => customers.slice(0, this.config.customerLimit)));
    
  }
}
