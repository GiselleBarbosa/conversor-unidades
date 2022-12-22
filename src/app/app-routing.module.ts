import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecebeParamsComponent } from './recebeParams/recebeParams.component';
import { SeletorComponent } from './seletor/seletor.component';

// Rota
const routes: Routes = [
  { path: 'seletor', component: SeletorComponent },
  { path: 'conversor', component: RecebeParamsComponent },
  { path: 'conversor/:de/:para', component: RecebeParamsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'seletor' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
