import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators';
import { registerLocaleData } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalesService {
  private url: string;
  public logueado:boolean;
  public user:User; 
 

  constructor(private http:HttpClient) { }

  getAllProf(id_user:number):Observable<Object>{
    console.log("id_user en prof service: " + id_user)
    this.url ="https://myshoulder.herokuapp.com/psico" ;   
    return this.http.get(this.url)
  }
}
