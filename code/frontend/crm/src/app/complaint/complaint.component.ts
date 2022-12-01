import { Component, OnInit } from '@angular/core'
import { AppService } from '../app.service'

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css'],
})
export class ComplaintComponent {
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
    'Date received': '',
    Product: '',
    'Sub-product': '',
    Issue: '',
    'Sub-issue': '',
    'Consumer complaint narrative': '',
    Tags: '',
    'Consumer consent provided?': '',
    'Submitted via': '',
    'Date sent to company': '',
    'Company response to consumer': '',
    'Timely response?': '',
    'Consumer disputed?': '',
    'Complaint ID': '',
    Client_ID: '',
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
      'Date received': '',
      Product: '',
      'Sub-product': '',
      Issue: '',
      'Sub-issue': '',
      'Consumer complaint narrative': '',
      Tags: '',
      'Consumer consent provided?': '',
      'Submitted via': '',
      'Date sent to company': '',
      'Company response to consumer': '',
      'Timely response?': '',
      'Consumer disputed?': '',
      'Complaint ID': '',
      Client_ID: '',
      Date: new Date().toISOString().split('T')[0],
    }
  }
}
