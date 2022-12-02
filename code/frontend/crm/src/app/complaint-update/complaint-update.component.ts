import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AppService } from '../app.service'

@Component({
  selector: 'app-complaint-update',
  templateUrl: './complaint-update.component.html',
  styleUrls: ['./complaint-update.component.css'],
})
export class ComplaintUpdateComponent {
  constructor(private router: Router, private appService: AppService) {}

  displayedColumns: string[] = [
    'Date received',
    'Product',
    'Sub-product',
    'Issue',
    'Sub-issue',
    'Consumer complaint narrative',
    'Tags',
    'Consumer consent provided?',
    'Submitted via',
    'Date sent to company',
    'Company response to consumer',
    'Timely response?',
    'Consumer disputed?',
    'Complaint ID',
    'Client_ID',
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

  ngOnInit(): void {
    this.form['Complaint ID'] = this.router.url.split('/')[2]
    this.getCRMEvent(this.form['Complaint ID'])
  }

  getCRMEvent(complaintId: string) {
    console.log(this.form)
    this.appService.getCRMEvent(complaintId).subscribe((data: any) => {
      this.form = data.data
    })
  }

  updateCRMEvent() {
    this.appService.updateCRMEvent(this.form).subscribe((data: any) => {
      this.crmEvents = data.data
      this.router.navigate([`/complaints`])
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
