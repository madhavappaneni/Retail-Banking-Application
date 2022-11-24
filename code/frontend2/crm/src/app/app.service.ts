import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private httpClient: HttpClient) {}

  getCRMEvents() {
    let url = 'http://localhost:8000/api/v1/CRMEvents'
    return this.httpClient.get(url)
  }

  insertCRMEvents(data: any) {
    let url = 'http://localhost:8000/api/v1/CRMEvents'
    return this.httpClient.post(url, data)
  }
}
