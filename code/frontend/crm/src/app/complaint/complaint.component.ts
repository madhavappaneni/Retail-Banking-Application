import { Component, OnInit } from '@angular/core'
import { AppService } from '../app.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css'],
})
export class ComplaintComponent {
  displayedColumns: string[] = [
    'Complaint ID',
    'Date received',
    'Product',
    'Sub-product',
    'Issue',
    'Sub-issue',
    // 'Consumer complaint narrative',
    // 'Tags',
    // 'Consumer consent provided?',
    'Submitted via',
    'Date sent to company',
    // 'Company response to consumer',
    // 'Timely response?',
    // 'Consumer disputed?',
    'Client_ID',
    'actions',
  ]
  dataSource: any = []
  title = 'Retail Banking Data - CRM'
  crmEvents: any = []
  form = {
    'Date received': new Date().toISOString().split('T')[0],
    Product: '',
    'Sub-product': '',
    Issue: '',
    'Sub-issue': '',
    'Consumer complaint narrative': '',
    Tags: '',
    'Consumer consent provided?': '',
    'Submitted via': '',
    'Date sent to company': new Date().toISOString().split('T')[0],
    'Company response to consumer': '',
    'Timely response?': '',
    'Consumer disputed?': '',
    'Complaint ID': `CR${Math.floor(
      Math.random() * (10000000000 - 1000000000 + 1) + 1000000000,
    )}`,
    Client_ID: '',
  }

  form2 = {
    complaintId: '',
  }

  constructor(private router: Router, private appService: AppService) {}

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

  getCRMEvent() {
    this.appService
      .getCRMEvent(this.form2.complaintId)
      .subscribe((data: any) => {
        this.crmEvents = data.data
      })
  }

  updateCRMEvent(data: any) {
    this.router.navigate([`/complaints/${data['Complaint ID']}/update`])
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
      'Date received': new Date().toISOString().split('T')[0],
      Product: '',
      'Sub-product': '',
      Issue: '',
      'Sub-issue': '',
      'Consumer complaint narrative': '',
      Tags: '',
      'Consumer consent provided?': '',
      'Submitted via': '',
      'Date sent to company': new Date().toISOString().split('T')[0],
      'Company response to consumer': '',
      'Timely response?': '',
      'Consumer disputed?': '',
      'Complaint ID': `CR${Math.floor(
        Math.random() * (10000000000 - 1000000000 + 1) + 1000000000,
      )}`,
      Client_ID: '',
    }
  }
}
