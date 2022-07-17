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

     edit(id_user:User):Observable<Object>{
      this.url = "http://localhost:3000/user";
      console.log("Hemos entrado");
      console.log(id_user);
      return this.http.put(this.url,id_user)
    }

    // MOSTRAR  PERFIL 
     
    getOne(id_user:number):Observable<Object>{
      console.log(id_user + " Esta es la ID de usuario")  
      this.url ="http://localhost:3000/user" ; 
      console.log(id_user);    
      console.log(id_user + " AQUI ID USUARIO SERVICE")
      return this.http.get(this.url+"?id="+ id_user)
    }

    
              
}

