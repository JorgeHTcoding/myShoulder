import { Injectable } from '@angular/core';
import { Apuntado } from '../models/apuntado';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApuntadoService {
  private url:string;
  public id_usuario:number=1;
  public id_evento:number=19;
  public apuntado:Apuntado= new Apuntado(this.id_usuario,this.id_evento)
  constructor(private http: HttpClient) { }


  apuntar(apuntado){
    console.log("Entrmos a apuntarEventos")
    this.url="http://localhost:3000/eventos"
  }
}
