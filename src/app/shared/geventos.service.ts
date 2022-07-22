import { Injectable } from '@angular/core';
import { Gevento } from '../models/gevento.model';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Eventos } from '../models/eventos';

@Injectable({
  providedIn: 'root'
})
export class GeventosService {

  private url:string;
  public evento:Gevento;
  
  constructor(private http: HttpClient) { }

  getAll(id_user:number):Observable<Object>{
    console.log("Entramos a getEvento")
    console.log(id_user);
    this.url="https://myshoulder.herokuapp.com/eventosUser?id="+id_user
    return this.http.get(this.url);
  }

 //get user event
 getAllAnfitrion(id:number):any{
  console.log("Entramos a getEvento")
  this.url="https://myshoulder.herokuapp.com/anfitrion?id="+id
  return this.http.get(this.url)
}
  modificar(gevento:Gevento):Observable<Object>{
    console.log("Entramos a modificar")
    console.log(gevento)
    this.url="https://myshoulder.herokuapp.com/gestion-evento"
    return this.http.put(this.url,gevento)
  }

  eliminar(id_eventos:number):Observable<Object>{
    console.log("Entramos a eliminar")
    this.url="https://myshoulder.herokuapp.com/gestion-evento"
    return this.http.delete(this.url + "?id_eventos=" + id_eventos);
  }

  //obtiene todos los eventos de USER
  getOne(id_evento:number):any{
    console.log("Entramos a getEvento")
    this.url="https://myshoulder.herokuapp.com/eventosUser?id="+id_evento
    return this.http.get(this.url)
  }

  getOneAdminEven(id_eventos:number):Observable<Object>{ 
    this.url="https://myshoulder.herokuapp.com/gestion-evento"
    console.log("Entramos a getOneAdminEven")
    console.log(id_eventos)
    return this.http.get(this.url + "?id_eventos=" + id_eventos);
  }

  //Obtiene todos los datos del organizador
  getEventAnf(id_evento:number):any{
    console.log("Entramos a getEvento Anfitrion")
    this.url="https://myshoulder.herokuapp.com/eventos?id="+id_evento
    return this.http.get(this.url)
  }



}


  // modificar(id_evento:number,evento:Eventos):any{
  //   // id_evento=id_evento;
  //   console.log("Entramos a modificar")
  //   console.log(gevento)
  //   this.url="http://localhost:3000/gestion-evento"
  //   return this.http.put(this.url,gevento)
  // }
  
  // eliminar(id_eventos:number):Observable<Object>{
  //   console.log("Entramos a eliminar")
  //   this.url="http://localhost:3000/gestion-evento"
  //   return this.http.delete(this.url + "?id_eventos=" + id_eventos);
  // }

  // getOne(id_eventos:number):Observable<Object>{ 
  //   this.url="http://localhost:3000/gestion-evento"
  //   console.log("Entramos a getOne")
  //   return this.http.get(this.url + "?id_eventos=" + id_eventos);
  // }

  
  // getOne(id_evento:number):any{
  //   console.log("Entramos a getOne")
  //   this.url="http://localhost:3000/eventos?id="+id_evento
  //   return this.http.get(this.url)
  // }



