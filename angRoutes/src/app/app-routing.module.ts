import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { OverViewComponent } from './employee-details/over-view/over-view.component';
import { ContactsComponent } from './employee-details/contacts/contacts.component';
import { IndexComponent } from './employee-details/index/index.component';

const routes: Routes = [
  {path:"", redirectTo: "/welcome", pathMatch:"full"},
  {path : 'welcome' , component:WelcomeComponent},
  {path:'employee', component:EmployeeComponent},
  {path:'department',component:DepartmentComponent},
  {
    path: 'employee/:id', 
    component:EmployeeDetailsComponent,
    children :[
      {
        // same as the  'employee/:id' path
        path: '' , component:IndexComponent
      },
      {
        path : "overview" , component:OverViewComponent
      },
      {
        path : "contact" , component:ContactsComponent
      }
    ]
  },
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
