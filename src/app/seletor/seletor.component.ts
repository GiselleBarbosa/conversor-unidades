import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-seletor',
  templateUrl: './seletor.component.html',
  styleUrls: ['./seletor.component.scss']
})
export class SeletorComponent implements OnInit {

  // criar as variaveis (3)
  temperaturas = ['Celsius','Kelvin', 'Fahrenheit']

  temperaturaForm = new FormGroup({
    temperaturaDe: new FormControl(''),
    temperaturaPara: new FormControl(''),
  })

  ngOnInit(): void {
  }

}



