import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators';
import { registerLocaleData } from '@angular/common';


@Injectable({
  providedIn: 'root'
})


export class UserService {

  private url: string;
  public logueado:boolean;
  public user:User; 
  constructor( private http:HttpClient) { 
    this.logueado = false;}


  //MODIFICAR PERFIL PACIENTE.

    public edit(nuevoUser:User):Observable<Object>{
      this.url = "http://localhost:3000/user";
      console.log("Hemos entrado");
      console.log(nuevoUser);
      return this.http.put(this.url,nuevoUser)
    }
              
}

