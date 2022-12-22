import { Component, OnInit } from '@angular/core';
import { Medida } from "../medida";

@Component({
  selector: 'app-recebeParams',
  templateUrl: './recebeParams.component.html',
  styleUrls: ['./recebeParams.component.scss']
})
export class RecebeParamsComponent implements OnInit {

  // Variaveis para receber os valores vindos da Url
  de!: string;
  para!: string;

  // Variavel tipo medida tipo objeto com as propriedades = Tipo e Valor (tipo selecionado e valor digitado)
  medidaDe: Medida = {
    tipo: '',
    valor: 0
  };

  medidaPara: Medida = {
    tipo: '',
    valor: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

}
