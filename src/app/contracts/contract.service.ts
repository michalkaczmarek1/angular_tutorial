import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG, Config } from '../model';
import { Contract } from './model';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(
    private httpdClient: HttpClient,
    @Inject(CONFIG) private config: Config
  ) { }

  getContracts(){
    return this.httpdClient.get<Contract[]>(`${this.config.apiUrl}/contracts`);
  }

  getContract(id: number){
    return this.httpdClient.get<Contract>(`${this.config.apiUrl}/contracts/${id}`);
  }
}
