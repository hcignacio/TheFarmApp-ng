import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmsListComponent } from './farms-list/farms-list.component';
import { FarmCreateComponent } from './farm-create/farm-create.component';
import { FarmEditComponent } from './farm-edit/farm-edit.component';
import { ChickenCreateComponent } from './chicken-create/chicken-create.component';
import { ChickensListComponent } from './chickens-list/chickens-list.component';
import { ChickenDetailComponent } from './chicken-detail/chicken-detail.component';
import { ChickenEditComponent } from './chicken-edit/chicken-edit.component';
import { EggCreateComponent } from './egg-create/egg-create.component';
import { EggsListComponent } from './eggs-list/eggs-list.component';


const routes: Routes = [
  /*
  { path: '', pathMatch: 'full', redirectTo: 'employees-list' },
  { path: 'create-employee', component: EmployeesCreateComponent },
  { path: 'employees-list', component: EmployeesListComponent },
  { path: 'employee-edit/:id', component: EmployeesEditComponent },
  */
  
  { path: 'farms-list', component: FarmsListComponent },
  { path: 'create-farm', component: FarmCreateComponent },
  { path: 'farm-edit/:id', component: FarmEditComponent },

  { path: '', pathMatch: 'full', redirectTo: 'chickens-list' },
  { path: 'create-chicken', component: ChickenCreateComponent },
  { path: 'chickens-list', component: ChickensListComponent },
  { path: ':id/chicken-detail/:id', component: ChickenDetailComponent },
  { path: ':id/chicken-edit/:id', component: ChickenEditComponent },
  
  { path: 'create-egg', component: EggCreateComponent }, 
  { path: 'eggs-list', component: EggsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
