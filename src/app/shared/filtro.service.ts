import { Injectable } from '@angular/core';
import { Mensaje } from '../models/mensaje';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Filtro } from '../models/filtro';
import { Form } from '@angular/forms';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class FiltroService {
private url:string;
public filtrado:any;
public filtro:Filtro;

  constructor(private userService:UserService, private http: HttpClient) { }

  getFiltro(filtro:Form): Observable<Object>{
    
    console.log("Lanzamos el Filtro");
    console.log("este es el contenido del filtro en el service: "+ filtro)
    this.url="https://myshoulder.herokuapp.com/filtro";
    return this.http.post(this.url,filtro)
  }
  getFiltroUser(filtro:Form): Observable<Object>{
    let id= this.userService.user.id_user
    console.log("Lanzamos el Filtro");
    console.log("este es el contenido del filtro en el service: "+ filtro)
    this.url="https://myshoulder.herokuapp.com/filtro?id="+ id;
    return this.http.post(this.url,filtro)
  }
  getFiltroProf(filtro:Form): Observable<Object>{    
    console.log("Lanzamos el Filtro");
    console.log("este es el contenido del filtro en el service: ")
    console.log(filtro)
    this.url="https://myshoulder.herokuapp.com/psicoFiltro";
    return this.http.post(this.url,filtro)
  }
}
