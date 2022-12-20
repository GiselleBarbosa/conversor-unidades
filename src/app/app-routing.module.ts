import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversorComponent } from './conversor/conversor.component';
import { SeletorComponent } from './seletor/seletor.component';

// Rota
const routes: Routes = [
  {path: 'home', component: SeletorComponent }, // Seleciona como tela principal 
  {path: 'conversor/:de/:para', component: ConversorComponent }, // Rota do calculo
  {path: 'conversor', component: ConversorComponent },
  {path: '', pathMatch: 'full', redirectTo: 'home'}, // Direciona qdo não encontra uma rota, encaminha para tela inicial

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
