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
    this.url="http://localhost:3000/eventosUser"
    return this.http.get(this.url + "?id_user=" + id_user);
  }
<<<<<<< HEAD

  modificar(id_evento:number):any{
    id_evento=id_evento;
=======
  getOne(id_evento:number):any{
    console.log("Entramos a getEvento")
    this.url="http://localhost:3000/eventos?id="+id_evento
    return this.http.get(this.url)
  }
  modificar(id_evento:number,evento:Eventos):any{
    
>>>>>>> main
    console.log("Entramos a modificar")
    this.url="http://localhost:3000/gestion-evento?id="+id_evento
    return this.http.put(this.url,evento)
  }
  
  eliminar(id_evento:number):any{
    
    console.log("Esntramos a eliminar")
    this.url="http://localhost:3000/gestion-evento?id="+id_evento
    return this.http.delete(this.url)
  }
}
