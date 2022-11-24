import { Component, OnInit } from '@angular/core'
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = [
    'Complaint ID',
    'Product',
    'Sub-Product',
    'Issue',
    'Consumer complaint narrative',
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

  submitCRMEvent() {
    this.appService.insertCRMEvents(this.form).subscribe((data) => {
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
