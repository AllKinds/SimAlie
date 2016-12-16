import { Component, OnInit } from '@angular/core';
import { Debt } from '../models/debt';

import { DebtService } from '../debt.service';


@Component({
  selector: 'debt-table',
  templateUrl: './debt-table.component.html',
  styleUrls: ['./debt-table.component.css']
})
export class DebtTableComponent implements OnInit {
  
  errorMessage: string;
  debts: Debt[];
  mode = 'Observable';

  constructor(private debtService: DebtService) { }


  ngOnInit() {
  	this.getDebts();
  }

  getDebts() {
  	this.debtService.getDebts()
  					.subscribe(
  						debts => this.debts = debts,
  						error => this.errorMessage = <any>error);
  }

  addDebt (amount: number) {
  	if(!amount) { return; }
  	this.debtService.addDebt(amount)
  					.subscribe(
  						debt  => this.debts.push(debt),
  						error => this.errorMessage = <any>error);
  }

  deleteDebt (debt: Debt) {
    // Add "R U Sure??"
    this.debtService.deleteDebt(debt._id)
            .subscribe(
              debt  => this.getDebts(),
              error => this.errorMessage = <any>error);
  }

}
