import { Component, OnInit } from '@angular/core';
import { Eventos } from 'src/app/models/eventos';
import { User } from 'src/app/models/user';
import { EventosService } from 'src/app/shared/eventos.service';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.scss']
})


export class CrearEventoComponent implements OnInit {

  public transferEvento: Eventos[];
  public user: User;

  constructor(public eventosService: EventosService, public userService: UserService) { 

    this.user = this.userService.user

  }

  ngOnInit(): void {

    console.log(this.user);
  }


  anadirEvento(titulo:string, localidad:string, direccion:string, descripcion:string, modalidad:string, terapia:string, fecha:string, url:string) {

    let nuevoEvento = new Eventos(0,this.user.id_user,titulo,localidad,direccion,descripcion,modalidad,terapia,fecha,url)

    console.log("Paso por nuevo Evento: " + nuevoEvento);

       this.eventosService.add(nuevoEvento).subscribe((data:Eventos) =>
        {
         console.log(data);
  
        })
  }










}
