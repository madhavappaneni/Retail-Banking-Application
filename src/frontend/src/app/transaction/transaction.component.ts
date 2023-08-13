import { Component } from '@angular/core'
import { AppService } from '../app.service'

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent {
  displayedColumns: string[] = [
    'Transaction Id',
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
  transactions: any = []
  form = {
    transactionId: '',
  }

  constructor(private appService: AppService) {
    this.appService.getTransactions().subscribe((data: any) => {
      this.transactions = data.data
    })
  }

  ngOnInit(): void {}

  getTransaction() {
    console.log(this.form)
    const transactionId = this.form.transactionId
    this.appService.getTransaction(transactionId).subscribe((data: any) => {
      this.transactions = data.data
    })
    console.log('transactions', this.transactions)
  }

  clearFormData() {
    this.form = {
      transactionId: '',
    }
  }
}
