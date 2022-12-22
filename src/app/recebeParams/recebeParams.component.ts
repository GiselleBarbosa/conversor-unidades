import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-recebeParams',
  templateUrl: './recebeParams.component.html',
  styleUrls: ['./recebeParams.component.scss']
})
export class RecebeParamsComponent implements OnInit {

   
  // receberá os parametros vindos do seletor e armanezara dentro de uma variavel 

  constructor() { }

  ngOnInit(): void {
  }

}
