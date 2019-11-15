import { Injectable } from '@angular/core';
import{ HttpClient,HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import{catchError}from 'rxjs/operators';
import{IEmployee}from './IEmployee';
import{IDonation} from './IDonation';
import { IDonations } from './IDonations';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public _url:string="http://localhost:4000/api/employee";
  public _url1:string="http://localhost:4000/api/donation";
  public _url2:string="http://localhost:4000/api/donationlist";
  employee:IEmployee;
  donation:IDonation;
  donationlist:IDonations;
   isloggedIn: boolean = false;
   isAdmin:boolean=true;
  constructor(private http:HttpClient) { }
  submitRegister(body:any){
    return this.http.post('http://localhost:4000/api/employee', body,{
      observe:'body'
    });
  }
  login(body:any){
    return this.http.post('http://localhost:4000/api/login', body,{
      observe:'body'
    });
  }
    getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url).pipe(catchError(this.errorHandler));
    }
    getDonations():Observable<IDonation[]>{
      return this.http.get<IDonation[]>(this._url1).pipe(catchError(this.errorHandler))
    }
    getDonationList():Observable<IDonations[]>{
      return this.http.get<IDonations[]>(this._url2).pipe(catchError(this.errorHandler))
    }   
    isUserLoggedIn(): boolean {
      if(localStorage.getItem('token')===null)
      return this.isloggedIn;
    }
    isUserAdmin():boolean{
      if(localStorage.getItem('token')!=null){
        //console.log('token=null')
      return this.isAdmin;
    }
      else{
        return this.isloggedIn;
      }
    }
    errorHandler(error:HttpErrorResponse){
      return throwError(error.message||"Server Error");
    }
  }