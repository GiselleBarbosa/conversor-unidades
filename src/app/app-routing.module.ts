import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversorComponent } from './conversor/conversor.component';
import { SeletorComponent } from './seletor/seletor.component';

// Rota
const routes: Routes = [
  { path: 'seletor', component: SeletorComponent },
  { path: 'conversor', component: ConversorComponent },
  { path: 'conversor/:de/:para', component: ConversorComponent },
  { path: '', pathMatch: 'full', redirectTo: 'seletor' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
