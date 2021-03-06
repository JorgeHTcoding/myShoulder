import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { ConsoleReporter } from 'jasmine';
import { Paciente } from '../models/paciente';
import { ProfesionalPacientes } from '../models/profesional-pacientes';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  private url :string;
  id_user: number;
  
  constructor(private http:HttpClient) { }

  //Obtenemos todos los pacientes del profesional

  getAllPac(id:number){
    console.log("Buscamos todos los pacientes del profesional")
    this.url="https://myshoulder.herokuapp.com/pac?id="+id;
    return this.http.get(this.url)
  }
  getPro(id:number){
    console.log("Buscamos  profesional")
    this.url="https://myshoulder.herokuapp.com/pro?id="+id;
    return this.http.get(this.url)
  }

//Apartir de aqui Ana

edit(cuerpo:any){
  console.log("Vamos a modificar el edit");
  
  console.log(cuerpo)
  this.url = "https://myshoulder.herokuapp.compac";
  return this.http.put(this.url,cuerpo)
}

delete(cuerpo:any){
  this.url = "https://myshoulder.herokuapp.com/delete"
  console.log(this.url)
  console.log("aqui4")
  console.log(cuerpo + " ESTA ES LA ID DEL PROFESIONAL EN CONTROLLER")
  return this.http.put(this.url,cuerpo)
}

mostrarSoloAceptadas(id:number){
  console.log("Buscamos  solo pacientes aceptados ")
 
  this.url="https://myshoulder.herokuapp.com/mostrar?id="+id;
  return this.http.get(this.url)
} 
}
