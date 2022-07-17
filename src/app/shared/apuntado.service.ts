import { Injectable } from '@angular/core';
import { Apuntado } from '../models/apuntado';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApuntadoService {
  public url:string;
  // public id_usuario:number=1;
  // public id_evento:number=19;
  public apuntado:Apuntado
  constructor(public http: HttpClient) { }


  apuntar(apuntado:Apuntado):Observable<Object>{

    console.log("Entrmos a apuntarEventos")
    this.url="http://localhost:3000/apuntar"
    console.log("eEnviamos apuntasion")
    console.log(this.url)
    console.log(apuntado)
      return this.http.post<Apuntado>(this.url,apuntado)
  }
  desapuntar(apuntado:Apuntado):Observable<Object>{
    let ap=apuntado
    console.log("Entrmos a apuntarEventos")
    this.url="http://localhost:3000/apuntar?id="+apuntado.id_user+"&id_eventos="+apuntado.id_eventos
    console.log("eEnviamos desapuntasion")
    console.log(this.url)
    console.log(apuntado)
      return this.http.delete<Apuntado>(this.url)
  }
}
