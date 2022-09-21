import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Paciente } from '../models/paciente';
import { ProfesionalPacientes } from '../models/profesional-pacientes';


@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  private url:string;
  public paciente:Paciente;
  Paciente: any;

  constructor(private http: HttpClient) { }

  getAllPac(id:number){
    console.log("entramos a getAllPac del servicio")
    console.log(id)
    this.url="https://myshoulder.herokuapp.com/veruser?id= "+ id;
    console.log(this.url + "url")
    console.log("salgo")
    return this.http.get(this.url)
  } 


  cambiarEstadoNeg(mensaje:ProfesionalPacientes){ //es el obj que traigo del controlador con todos los datos y paso a la api en el body
    console.log("entramos a cambiarEstadoNeg del servicio")
    console.log(mensaje)
    this.url="https://myshoulder.herokuapp.com/cambioestadoneg";
    return this.http.put(this.url,mensaje)

  }

  aceptarPac(persona:ProfesionalPacientes){
    console.log("entramos a aceptarPac del servicio")

    this.url="https://myshoulder.herokuapp.com/veruser2";
    console.log(this.url)
    return this.http.put(this.url,persona)

  }

}

