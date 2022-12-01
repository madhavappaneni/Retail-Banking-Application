import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ComplaintComponent } from './complaint/complaint.component'
import { TransactionComponent } from './transaction/transaction.component'
import { LoanComponent } from './loan/loan.component'
import { ClientComponent } from './client/client.component'
import { ComplaintUpdateComponent } from './complaint-update/complaint-update.component'

const routes: Routes = [
  { path: 'complaints', component: ComplaintComponent },
  { path: 'transactions', component: TransactionComponent },
  { path: 'clients', component: ClientComponent },
  { path: 'loans', component: LoanComponent },
  {
    path: 'complaints/:complaintId/update',
    component: ComplaintUpdateComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
