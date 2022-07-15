import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Registro } from '../models/registro';
import { Observable, throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators';
import { registerLocaleData } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  public url:string;
  public logueado:boolean;
  public user: User;

  constructor(public http: HttpClient) {
    this.logueado = false;
  }

    registrar(user:User):Observable<object>{
      this.url ="http://localhost:3000/registro";
      console.log(this.url +"aqui url")      
      console.log(user.name + "este es el nombre del usuario en el service");
      return this.http.post<User>(this.url,user)         
    }

    login(user:User):Observable<object>{
      console.log(user)
      console.log(user.id_user + " este es el id_usuario en el service");
      this.url ="http://localhost:3000/login";      
      return this.http.post(this.url,user)
    }          
  }
 