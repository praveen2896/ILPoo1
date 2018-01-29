import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }  from './app.routing';

import {AboutComponent} from './about/about.component';
import { EmployeesComponent } from './employees/employees.component';
//import { EmployeeComponent } from './employees/employee.component';
//import { AddEmployeeFormComponent } from './employees/addemployee-form.component';
//import { EditEmployeeFormComponent } from './employees/editemployee-form.component';
//import { EmployeeFilterPipe } from './employees/employees-filter.pipe';
import { MedicineService} from 'app/medicines/medicineservice.ts';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, AboutComponent, EmployeesComponent],
  providers: [ MedicineService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
