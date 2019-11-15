import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import{EmployeeService} from './../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  successMessage: String = '';
  SERVER_URL="http://localhost:4000/api/employee";
  constructor(private _myservice: EmployeeService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,private formBuilder: FormBuilder,private httpClient:HttpClient) {
    this.myForm =this.formBuilder.group({
      username: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.email), 
      password: new FormControl(null, Validators.required),
      role: new FormControl(null, Validators.required)
    });

    
     
    }
  
  ngOnInit() {
    
  }
  // isValid(controlName) {
  //   return this.myForm.get(myForm.value).invalid && this.myForm.get(controlName).touched;
  // }
  isValid(controlName) {
    return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched;
  }
  register() {
    console.log(this.myForm.value);

    if (this.myForm.valid) {
      var formData={
        FirstName: this.myForm.controls['username'].value,
        LastName: this.myForm.controls['lastname'].value,
        Email: this.myForm.controls['email'].value,
        Password: this.myForm.controls['password'].value,
        Role: this.myForm.controls['role'].value
      }
      this._myservice.submitRegister(formData)
        .subscribe(
          data => this.successMessage = 'Registration Success',
          error => this.successMessage = 'SOme error'
        );
      
      console.log("the session complete");
    this._router.navigate(['/login']);
    }
    
    
  }
 

}
