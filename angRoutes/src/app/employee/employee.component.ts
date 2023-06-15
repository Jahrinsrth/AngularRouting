import { Component, importProvidersFrom } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {


  constructor(private router :Router, private route:ActivatedRoute){

  }

  employess = [
    {"Id" : 1 , "Name" : "Steve"},
    {"Id" : 2 , "Name" : "Henry"},
    {"Id" : 3 , "Name" : "Mike"},
    {"Id" : 4, "Name" : "Mary"}
  ]

  OnSelect(emp:any){
 //    this.router.navigate(["/employee", emp.Id]);

    this.router.navigate([emp.Id], {relativeTo: this.route});  
 console.log(emp);
  }

}
