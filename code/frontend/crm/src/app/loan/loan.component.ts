import { Component } from '@angular/core'
import { AppService } from '../app.service'

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css'],
})
export class LoanComponent {
  displayedColumns: string[] = [
    'Loan Id',
    'Account Id',
    'Amount',
    'Duration',
    'Payments',
    'Status',
    'Date',
    'Location',
    'Purpose',
  ]
  dataSource: any = []
  title = 'Retail Banking Data - CRM'
  loans: any = []
  form = {
    loanId: '',
  }

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getLoans().subscribe((data: any) => {
      this.loans = data.data
    })
  }

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
