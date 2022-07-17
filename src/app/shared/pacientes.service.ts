import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  private url :string;
  
  constructor(private http:HttpClient) { }

  //Obtenemos todos los pacientes del profesional

  getAllPac(id:number){
    console.log("Buscamos todos los pacientes del profesional")
    this.url="http://localhost:3000/pac?id="+id;
    return this.http.get(this.url)
  }

//Apartir de aqui Ana

}
