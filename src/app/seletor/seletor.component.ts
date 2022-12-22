import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seletor',
  templateUrl: './seletor.component.html',
  styleUrls: ['./seletor.component.scss']
})
export class SeletorComponent implements OnInit {

  // Array de Tipos de Temperaturas que será mostrado no select utilizando ngFor 
  temperaturas = ['Celsius', 'Kelvin', 'Fahrenheit'];

  // Encapsula os campos do formulario
  temperaturaForm = new FormGroup({
    formTempDe: new FormControl('', Validators.required),
    formTempPara: new FormControl('', Validators.required),
  });

  // Variavel que recebe o valor dos input vinda do [(value)]="tempInputDe" 
  tempInputDe: string = '';
  tempInputPara: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  enviaParams() {
    console.log(this.tempInputDe);
    console.log(this.tempInputPara);
    this.router.navigate(['/conversor', this.tempInputDe, this.tempInputPara]);
  }

}



