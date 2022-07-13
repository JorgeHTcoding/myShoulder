import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators';
import { registerLocaleData } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private url:string;
  public logueado:boolean;
  public user: User;

  constructor(private http: HttpClient) {
    this.logueado = false;
  }

    registrar(user:User){
      this.url ="https://angularmyshoulder.herokuapp.com/registro";
      console.log(this.url +"aqui url")      
      console.log(user.name + "este es el nombre del usuario en el service");
      return this.http.post<User>(this.url,user)         
    }

    login(user:User){
      console.log(user)
      console.log(user.name + "este es el nombre del usuario en el service");
      this.url ="https://angularmyshoulder.herokuapp.com/#openModal";     
      return this.http.post(this.url,user)
    }          
  }
 