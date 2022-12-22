import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.scss']
})
export class ConversorComponent implements OnInit {

  formConversor = new FormGroup({
    tempInput: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
