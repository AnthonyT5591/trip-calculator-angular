import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from 'src/modules/material.module';
import { DisplayCostsComponent } from './components/display-costs/display-costs.component';
import { SharedCostsComponent } from './components/shared-costs/shared-costs.component';
import { AddCostsFormComponent } from './components/add-costs-form/add-costs-form.component'
@NgModule({
  declarations: [
    AppComponent,
    DisplayCostsComponent,
    SharedCostsComponent,
    AddCostsFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
