import { Component } from '@angular/core'
import { AppService } from '../app.service'
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent {
  displayedColumns: string[] = [
    'Client Id',
    'Sex',
    'Age',
    'Social',
    'First',
    'Middle',
    'Last',
    'Phone',
    'Email',
    'Address_1',
    'Address_2',
    'City',
    'State',
    'Zipcode',
    'District Id',
  ]
  dataSource: any = []
  title = 'Retail Banking Data - CRM'
  clients: any = []
  form = {
    clientId: '',
  }

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getClients().subscribe((data: any) => {
      this.clients = data.data
    })
  }

  getClient() {
    console.log(this.form)
    const clientId = this.form.clientId
    this.appService.getClient(clientId).subscribe((data: any) => {
      this.clients = data.data
    })
    console.log('clients', this.clients)
  }

  clearFormData() {
    this.form = {
      clientId: '',
    }
  }
}
