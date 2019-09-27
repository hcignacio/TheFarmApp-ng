import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';
import { EmployeesCreateComponent } from './employees-create/employees-create.component';
import { ChickenCreateComponent } from './chicken-create/chicken-create.component';
import { ChickensListComponent } from './chickens-list/chickens-list.component';
import { EggCreateComponent } from './egg-create/egg-create.component';
import { EggsListComponent } from './eggs-list/eggs-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    EmployeesEditComponent,
    EmployeesCreateComponent,
    ChickenCreateComponent,
    ChickensListComponent,
    EggCreateComponent,
    EggsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
