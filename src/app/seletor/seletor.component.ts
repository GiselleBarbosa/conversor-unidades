import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  // Var que recebe valor do input
  tempInputDe: string = '';
  tempInputPara: string = '';

  ngOnInit(): void {
  }

  clicou(){
    console.log(this.tempInputDe);
    console.log(this.tempInputPara);
  }

}



