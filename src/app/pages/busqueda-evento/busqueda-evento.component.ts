import { Component, Input, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-busqueda-evento',
  templateUrl: './busqueda-evento.component.html',
  styleUrls: ['./busqueda-evento.component.scss']
})
export class BusquedaEventoComponent implements OnInit {
  public eventos: Eventos;
  public eventeActivo: Gevento;
  public group: Eventos[];
  public eventoHijo: Eventos;
  public groupShown: any;
  public itGroup: number;

  constructor(public userService: UserService, public eventosService: EventosService, public geventoService:GeventosService) {
    this.itGroup = 0;
  }
  ngOnInit(): void {
    console.log("id user: " + this.userService.user.id_user)
    this.eventosService.getAll(this.userService.user.id_user).subscribe((data: Eventos[]) => {
      console.log(data)
      this.group = data;
      this.setGropShown();
      
    },
      
    (err: HttpErrorResponse) => {
      console.log("error on parsing: " + err.message);})
    
    
  }


  setGropShown() {
   
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

}
