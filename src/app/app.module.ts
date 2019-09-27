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
import { ChickenEditComponent } from './chicken-edit/chicken-edit.component';
import { FarmsListComponent } from './farms-list/farms-list.component';
import { FarmCreateComponent } from './farm-create/farm-create.component';
import { FarmEditComponent } from './farm-edit/farm-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    EmployeesEditComponent,
    EmployeesCreateComponent,
    ChickenCreateComponent,
    ChickensListComponent,
    EggCreateComponent,
    EggsListComponent,
    ChickenEditComponent,
    FarmsListComponent,
    FarmCreateComponent,
    FarmEditComponent
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
