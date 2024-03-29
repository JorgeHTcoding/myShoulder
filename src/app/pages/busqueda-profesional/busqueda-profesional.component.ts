import { Component, Input, OnInit } from '@angular/core';
import { ProfesionalesService } from 'src/app/shared/profesionales.service';
import { UserService } from 'src/app/shared/user.service';
import { Eventos } from 'src/app/models/eventos';
import { User } from 'src/app/models/user';
import { observable } from 'rxjs';
import { Router } from '@angular/router';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';
import { FiltroService } from 'src/app/shared/filtro.service';
import { Filtro } from 'src/app/models/filtro';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-busqueda-profesional',
  templateUrl: './busqueda-profesional.component.html',
  styleUrls: ['./busqueda-profesional.component.scss']
})
export class BusquedaProfesionalComponent implements OnInit {
  public user:User;
  public group: User[];
  public profesionalHijo: User;
  public groupShown: any;
  public itGroup: number;
  public tipo;
  public filtro;
  constructor(public userService:UserService, public profesionalesService:ProfesionalesService, public filtroService:FiltroService) { 
    this.itGroup = 0;
    this.tipo=this.userService.user.tipo;
    this.user = this.userService.user;
    this.filtro = this.filtroService.getFiltroProf
  }
  
  contacta:boolean=false;
  modalAfir:boolean=false;
  ngOnInit(): void {    
    console.log("id user: " + this.userService.user.id_user)
    this.profesionalesService.getAllProf(this.userService.user.id_user).subscribe((data:any) => {
      console.log( "data de los profesionales: " + data)
      this.group = data;
      this.setGropShown();
      
    },
      
    (err: HttpErrorResponse) => {
      console.log("error on parsing: " + err.message);})
  }


  setGropShown() {
   
    this.groupShown = this.group.slice(this.itGroup * 2, (this.itGroup + 1) * 2);
    console.log("group al tirar de funcion: " + this.group)
  }
  previous() {
    if (this.itGroup != 0) {
      this.itGroup = this.itGroup - 1;
      this.setGropShown();
    }
  }
  next() {
    if (((this.itGroup + 1) * 2) < this.group.length) {
      this.itGroup = this.itGroup + 1;
      this.setGropShown();
    }
  }
  onSubmit5(form:NgForm){
    
    console.log("entramos al onSubmit")
    console.log("esta es la modalidad: " + form.value.modalidad)
    console.log("este es el tipo de terapia: " + form.value.acreditacion)
       
    this.filtroService.getFiltroProf(form.value).subscribe((data:any) => {  
      console.log("Value: ")
      console.log(form.value)      
      console.log("Data: ")
      console.log(data)      
      this.group = data;
      this.groupShown=[];
      this.groupShown.push(this.group);
      console.log("This group: ")
      console.log(this.group)
      this.itGroup = 0;
      this.setGropShown();
      console.log(this.groupShown)      
    })
  }
}

