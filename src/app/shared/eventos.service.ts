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

  public newEvento: Eventos[] = [];
  public url : string = "http://localhost:3000/eventos";

  constructor(private http: HttpClient) { }



  add(eventos:Eventos): Observable<Object>{

    console.log("Llego al POST del service")
    console.log(eventos);
    return this.http.post(this.url, eventos);
  }

}






