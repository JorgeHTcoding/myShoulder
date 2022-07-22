import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Eventos } from 'src/app/models/eventos';
import { GeventosService } from 'src/app/shared/geventos.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EventosService } from 'src/app/shared/eventos.service';
import { FiltroService } from 'src/app/shared/filtro.service';
import { Filtro } from 'src/app/models/filtro';

@Component({
  selector: 'app-mis-eventos-paciente',
  templateUrl: './mis-eventos-paciente.component.html',
  styleUrls: ['./mis-eventos-paciente.component.scss']
})


export class MisEventosPacienteComponent implements OnInit {
  public user:User;  
  public eventos:Eventos;
  public group:Eventos[]; 
  public eventoHijo: Eventos;
  public groupShown: any;
  public itGroup: number;
  public newEvento: Eventos[] = [];
  public filtro:Filtro;
 public tipo;
  constructor(public filtroService:FiltroService,public geventosService:GeventosService, public userService: UserService, public eventosService:EventosService) { 
    this.itGroup = 0;
    
  }

    
  eliminarAsisEvento(id_eventos:number) {
    console.log("entro por eliminar evento-paciente")

    console.log(id_eventos);

    if(id_eventos != null) {

      let posicion = this.group.findIndex(evento => id_eventos == evento.id_eventos );
      this.group.splice(posicion, 1);
      this.setGropShown();
      
      // console.log(this.group);
      // console.log(posicion);
      
      // console.log("Entro dentro del IF y esto es ID_Evento: " + id_eventos);
      // console.log("Entro dentro del IF y esto es ID_User: "   + this.userService.user.id_user);

      // this.eventosService.delete(this.userService.user.id_user, id_eventos).subscribe((data: Eventos[]) => {
      this.eventosService.delete(this.userService.user.id_user, id_eventos).subscribe((data:any) => {
      console.log( data );

      })
    }
  }


  ngOnInit(): void {
    this.tipo = this.userService.user.tipo  
    console.log("id user: " + this.userService.user.id_user)
      this.geventosService.getAll(this.userService.user.id_user).subscribe( (data: Eventos[]) => {
        
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
  onSubmit5(form:NgForm){
    
    console.log("entramos al onSubmit")
    console.log("esta es la localidad: " + form.value.localidad)
       
    this.filtroService.getFiltroUser(form.value).subscribe((data:any) => {  
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
