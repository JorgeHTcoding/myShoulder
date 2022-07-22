import { Injectable } from '@angular/core';
import { Mensaje } from '../models/mensaje';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url:string;

  constructor(private http: HttpClient) { }

  getChatLog(id_emisor:number,id_receptor:number){
    console.log("Vamos por el chatlog")
    this.url="https://myshoulder.herokuapp.com/chat?id_emisor="+id_emisor+"&id_receptor="+id_receptor;
    return this.http.get(this.url)
  }
  postChat(mensaje:Mensaje){
    console.log("Enviamos un mensaje")
    this.url="https://myshoulder.herokuapp.com/chat"
    return this.http.post(this.url,mensaje)
  }
  postEstado(animo:number,energia:number,ansiedad:number,id_user:number){
    console.log("Vamos a enviar Estado Anin")
    let estado = {animo:animo,energia:energia,ansiedad:ansiedad}
    this.url="https://myshoulder.herokuapp.com/animo?id_user="+id_user;
    return this.http.post(this.url,estado)

  }
  getEstado(id:number){
    console.log("Buscamos  profesional")
    this.url="https://myshoulder.herokuapp.com/animo?id="+ id;
    return this.http.get(this.url)
  }
}
