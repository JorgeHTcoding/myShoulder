import { Injectable } from '@angular/core';
import {Eventos } from '../models/eventos';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators';
import { registerLocaleData } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class EventosService {
  public evento:Eventos;
  public newEvento: Eventos[] = [];

  public eventos:Eventos;
  public url : string = "https://myshoulder.herokuapp.com/eventos";

  constructor(private http: HttpClient) { }



  add(eventos:Eventos): Observable<Object>{

    console.log("Llego al POST del service")
    console.log(eventos);
    return this.http.post(this.url, eventos);
  }

  getAll(id_user:number): Observable<Object>{

    this.url ="https://myshoulder.herokuapp.com/eventos"; 
    console.log("esta es la id_user en el evento_service: " + id_user)
    return this.http.get(this.url+"?id_user="+ id_user);
  }


  delete(id_user: number, id_eventos: number): Observable<Object> {
    console.log("ENTRO AL SERVICES DE EVENTOS")
    console.log("Id del Usuario del Service: " + id_user)
    console.log("Id del Evento del Service: "  + id_eventos)

    return this.http.delete(this.url + "?id_user=" + id_user + "&id_eventos=" + id_eventos);
  }

  
}





