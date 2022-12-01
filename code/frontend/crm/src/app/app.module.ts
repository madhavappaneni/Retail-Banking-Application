import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ComplaintComponent } from './complaint/complaint.component'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table';
import { TransactionComponent } from './transaction/transaction.component';
import { ClientComponent } from './client/client.component';
import { LoanComponent } from './loan/loan.component';
import { ComplaintUpdateComponent } from './complaint-update/complaint-update.component'

@NgModule({
  declarations: [AppComponent, ComplaintComponent, TransactionComponent, ClientComponent, LoanComponent, ComplaintUpdateComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatTableModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
