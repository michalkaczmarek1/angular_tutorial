import { Injectable, Inject } from '@angular/core';
import { CustomerType, Customer} from './model';
import { Config, CONFIG } from '../model';
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
    
    return this.httpClient.get<Customer[]>(`${this.config.apiUrl}/customers`);
    
  }

  createCustomer(customer: Customer){
    return this.httpClient.post(`${this.config.apiUrl}/customers`, customer);
  }

  deleteCustomer(customer: Customer){
    return this.httpClient.delete(`${this.config.apiUrl}/customers/${customer.id}`);
  }

}
