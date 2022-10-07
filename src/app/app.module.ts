import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeformComponent,
    NavbarComponent,
    SearchemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
