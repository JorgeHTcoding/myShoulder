import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/shared/eventos.service';
import { UserService } from 'src/app/shared/user.service';
import { GeventosService } from 'src/app/shared/geventos.service';
import { Eventos } from 'src/app/models/eventos';
import { User } from 'src/app/models/user';
import { observable } from 'rxjs';
import { Router } from '@angular/router';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';
import { Gevento } from 'src/app/models/gevento.model';
import { FiltroService } from 'src/app/shared/filtro.service';
import { Filtro } from 'src/app/models/filtro';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-eventos-fam-asis',
  templateUrl: './admin-eventos-fam-asis.component.html',
  styleUrls: ['./admin-eventos-fam-asis.component.scss']
})
export class AdminEventosFamAsisComponent implements OnInit {

  constructor(public filtroService:FiltroService, public userService: UserService, public eventosService: EventosService, public geventoService:GeventosService) { 
    this.itGroup = 0;
  }
  public eventos: Eventos;
  public eventeActivo: Gevento;
  public group: Eventos[];
  public eventoHijo: Eventos;
  public groupShown: any;
  public itGroup: number;
  public filtro:Filtro;

  ngOnInit(): void {
  }
  
  setGropShown() {
    console.log("setgroupShown llamada")   
    this.groupShown = this.group.slice(this.itGroup * 3, (this.itGroup + 1) * 3);
    console.log("group al tirar de funcion: " + this.group)
  }
  previous() {
    if (this.itGroup != 0) {
      this.itGroup = this.itGroup - 1;
      this.setGropShown();
    }
  }
  next() {
    if (((this.itGroup + 1) * 3) < this.group.length) {
      this.itGroup = this.itGroup + 1;
      this.setGropShown();
    }
  }
  onSubmit4(form:NgForm){
    
    console.log("entramos al onSubmit")
    console.log("esta es la localidad: " + form.value.localidad)
       
    this.filtroService.getFiltro(form.value).subscribe((data:any) => {  
      console.log(data)      
      this.group = data;
      this.groupShown=[];
      this.groupShown.push(this.group);
      this.itGroup = 0;
      this.setGropShown();
      console.log(this.groupShown)
    
    })
  }
}
