import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private httpClient: HttpClient) {}

  baseURL = 'https://lionfish-app-y3ij5.ondigitalocean.app/api/api/'

  getCRMEvents() {
    let url = `${this.baseURL}v1/CRMEvents`
    return this.httpClient.get(url)
  }

  insertCRMEvents(data: any) {
    let url = `${this.baseURL}v1/CRMEvents`
    return this.httpClient.post(url, data)
  }
}
