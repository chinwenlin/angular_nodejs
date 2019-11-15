import { Component, OnInit } from '@angular/core';
import{EmployeeService}from './../employee.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public donations=[];
  public errorMsg;
  constructor( private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getDonations().subscribe(
      (data)=>this.donations=data,
      (error)=>this.errorMsg=error,
      ()=>console.log('this sequence completed!')
    );
    
  }

}
