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

  ngOnInit(): void {
    this.form['Complaint ID'] = this.router.url.split('/')[2]
    this.getCRMEvent(this.form['Complaint ID'])
  }

  getCRMEvent(complaintId: string) {
    console.log(this.form)
    this.appService.getCRMEvent(complaintId).subscribe((data: any) => {
      this.form = data.data
    })
    console.log('crmEvents', this.crmEvents)
  }

  updateCRMEvent() {
    console.log(this.form)
    // this.appService.getCRMEvents().subscribe((data: any) => {
    //   this.crmEvents = data.data
    // })
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
