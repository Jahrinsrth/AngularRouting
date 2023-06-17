import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { OverViewComponent } from './employee-details/over-view/over-view.component';
import { ContactsComponent } from './employee-details/contacts/contacts.component';
import { UserModule } from './user/user.module';
import { IndexComponent } from './employee-details/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DepartmentComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    PagenotfoundComponent,
    OverViewComponent,
    ContactsComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
