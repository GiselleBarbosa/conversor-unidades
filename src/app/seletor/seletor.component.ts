import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-seletor',
  templateUrl: './seletor.component.html',
  styleUrls: ['./seletor.component.scss']
})
export class SeletorComponent implements OnInit {

  // Array de Tipos de Temperaturas que será mostrado no select utilizando ngFor 
  temperaturas = ['Celsius', 'Kelvin', 'Fahrenheit'];

  temperaturaForm = new FormGroup({
    temperaturaDe: new FormControl('', Validators.required),
    temperaturaPara: new FormControl('', Validators.required),
  });

  temperaturaDeValue: string = '';
  temperaturaParaValue: string = '';

  ngOnInit(): void {
  }

  clicou(){
    console.log(this.temperaturaDeValue);
    console.log(this.temperaturaParaValue);
  }

}



