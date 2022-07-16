import { Injectable } from '@angular/core';
import { Gevento } from '../models/gevento.model';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeventosService {

  private url:string;
  public evento:Gevento;
  
  constructor(private http: HttpClient) { }

  getAll():any{
    console.log("Entramos a getEvento")
    this.url="http://localhost:3000/eventos"
    return this.http.get(this.url)
  }

  modificar(newGevento:Gevento):Observable<Object>{
    // id_evento=id_evento;
    console.log("Entramos a modificar")
    this.url="http://localhost:3000/gestion-evento?id="
    return this.http.put(this.url,newGevento)
  }
  
  eliminar(id_evento:number):Observable<Object>{
    console.log("Entramos a eliminar")
    this.url="http://localhost:3000/gestion-evento?id="+id_evento
    return this.http.delete(this.url)
  }

  getOne(id_evento:number):Observable<Object>{ 
    this.url="http://localhost:3000/gestion-evento"
    console.log("Entramos a getOne")
    return this.http.get(this.url + "?id_evento=" + id_evento);
  }

  
  // getOne(id_evento:number):any{
  //   console.log("Entramos a getOne")
  //   this.url="http://localhost:3000/eventos?id="+id_evento
  //   return this.http.get(this.url)
  // }

}
