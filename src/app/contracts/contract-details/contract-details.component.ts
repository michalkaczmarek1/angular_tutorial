import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContractService } from '../contract.service';
import { Contract } from '../model';

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.css']
})
export class ContractDetailsComponent implements OnInit {

  contract: Contract;

  constructor(
    private contractService: ContractService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.activatedRoute.data.subscribe(data => {
      this.contract = data.contract;
      console.log(this.contract);
    });

    // this.activatedRoute.params.subscribe(params => {
    //   const id = parseInt(params['id']);
    //   this.contractService.getContract(id).subscribe(contract => {
    //     this.contract = contract;      
    //   })
    // })
  }

}
