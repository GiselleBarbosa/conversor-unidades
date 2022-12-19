import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-seletor',
  templateUrl: './seletor.component.html',
  styleUrls: ['./seletor.component.scss']
})
export class SeletorComponent implements OnInit {

  seletorTipo = new FormControl('');

  tipos: string[] = ['Medida', 'Temperatura', 'Comprimento'];

  constructor() { }

  ngOnInit(): void {
  }

}
