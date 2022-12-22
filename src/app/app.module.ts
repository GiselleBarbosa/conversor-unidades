import { ConversorComponent } from './conversor/conversor.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SeletorComponent } from './seletor/seletor.component';
import { AngularMaterialModule } from "./angular-material/angular-material.module";
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RecebeParamsComponent } from './recebeParams/recebeParams.component';

@NgModule({
  declarations: [
    AppComponent,
    SeletorComponent,
    HeaderComponent,
    ConversorComponent,
    RecebeParamsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
