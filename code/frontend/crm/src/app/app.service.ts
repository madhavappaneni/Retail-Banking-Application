import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private httpClient: HttpClient) {}

  baseURL = 'https://lionfish-app-y3ij5.ondigitalocean.app/api/api/'
  // baseURL = 'http://localhost:8080/api/'

  getCRMEvents() {
    let url = `${this.baseURL}v1/CRMEvents`
    return this.httpClient.get(url)
  }

  getCRMEvent(complaintId: string) {
    let url = `${this.baseURL}v1/CRMEvents/${complaintId}`
    return this.httpClient.get(url)
  }

  updateCRMEvent(data: any) {
    let url = `${this.baseURL}v1/CRMEvents`
    return this.httpClient.put(url, data)
  }

  insertCRMEvent(data: any) {
    let url = `${this.baseURL}v1/CRMEvents`
    return this.httpClient.post(url, data)
  }

  deleteCRMEvent(complaintId: string) {
    let url = `${this.baseURL}v1/CRMEvents/${complaintId}`
    return this.httpClient.delete(url)
  }

  getTransaction(transactionId: string) {
    let url = `${this.baseURL}v1/transactions/${transactionId}`
    return this.httpClient.get(url)
  }

  getTransactions() {
    let url = `${this.baseURL}v1/transactions/`
    return this.httpClient.get(url)
  }

  getLoan(loanId: string) {
    let url = `${this.baseURL}v1/loans/${loanId}`
    return this.httpClient.get(url)
  }

  getLoans() {
    let url = `${this.baseURL}v1/loans`
    return this.httpClient.get(url)
  }

  getClient(clientId: string) {
    let url = `${this.baseURL}v1/clients/${clientId}`
    return this.httpClient.get(url)
  }

  getClients() {
    let url = `${this.baseURL}v1/clients/`
    return this.httpClient.get(url)
  }
}
