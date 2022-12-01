import { Component } from '@angular/core'
import { AppService } from './../app.service'

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css'],
})
export class LoanComponent {
  displayedColumns: string[] = [
    'Loan Id',
    'Account Id',
    'Type',
    'Operation',
    'Amount',
    'Balance',
    'Bank',
    'Account',
    'Timestamp',
  ]
  dataSource: any = []
  title = 'Retail Banking Data - CRM'
  loans: any = []
  form = {
    loanId: '',
  }

  constructor(private appService: AppService) {}

  ngOnInit(): void {}

  getLoan() {
    console.log(this.form)
    const loanId = this.form.loanId
    this.appService.getLoan(loanId).subscribe((data: any) => {
      this.loans = data.data
    })
    console.log('loans', this.loans)
  }

  clearFormData() {
    this.form = {
      loanId: '',
    }
  }
}
