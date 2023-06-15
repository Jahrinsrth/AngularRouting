import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements  OnInit{

  employeeId :any;

  constructor(private route :ActivatedRoute, private router : Router){

  }
  ngOnInit(): void {
      //let id  = this.route.snapshot.paramMap.get('id');
      this.route.paramMap.subscribe( (param:ParamMap) => {
          let id =  param.get('id');
          this.employeeId = id 
      })
      //this.employeeId = id
      //console.log(id);
  }

  OnPrevious(){
      let id  =  parseInt(this.employeeId) - 1;
      this.router.navigate(['/employee', id]);
  }

  OnNext(){
          let id  = parseInt(this.employeeId) + 1;
          this.router.navigate(['/employee', id]); 
  }

}
