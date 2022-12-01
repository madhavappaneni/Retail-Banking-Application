import { Component } from '@angular/core'
import { AppService } from './../app.service'

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent {
  displayedColumns: string[] = [
    'Complaint ID',
    'Product',
    'Sub-Product',
    'Issue',
    'Consumer complaint narrative',
    'actions',
  ]
  dataSource: any = []
  title = 'Retail Banking Data - CRM'
  crmEvents: any = []
  form = {
    Product: '',
    'Sub-product': '',
    Issue: '',
    'Complaint ID': '',
    'Consumer complaint narrative': '',
    Date: new Date().toISOString().split('T')[0],
  }

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getCRMEvents()
  }

  getCRMEvents() {
    console.log(this.form)
    this.appService.getCRMEvents().subscribe((data: any) => {
      this.crmEvents = data.data
    })
    console.log('crmEvents', this.crmEvents)
  }

  updateCRMEvent(data: any) {
    console.log(data['Complaint ID'])
    // this.appService.getCRMEvents().subscribe((data: any) => {
    //   this.crmEvents = data.data
    // })
  }

  deleteCRMEvent(data: any) {
    this.appService
      .deleteCRMEvent(data['Complaint ID'])
      .subscribe((data: any) => {
        // this.crmEvents = data.data
        this.getCRMEvents()
      })
  }

  submitCRMEvent() {
    this.appService.insertCRMEvent(this.form).subscribe((data: any) => {
      this.getCRMEvents()
      this.clearFormData()
    })
  }

  clearFormData() {
    this.form = {
      'Sub-product': '',
      Product: '',
      Issue: '',
      'Complaint ID': '',
      'Consumer complaint narrative': '',
      Date: new Date().toISOString().split('T')[0],
    }
  }
}
