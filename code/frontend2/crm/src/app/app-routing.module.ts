import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ComplaintComponent } from './complaint/complaint.component'
import { TransactionComponent } from './transaction/transaction.component'
const routes: Routes = [
  { path: 'complaints', component: ComplaintComponent },
  { path: 'transactions', component: TransactionComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
