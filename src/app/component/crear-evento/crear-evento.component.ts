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
  public usuario: User;

  constructor(public eventosService: EventosService, public usuarioService: UserService) { 

    // this.usuario = usuarioService.usuario

  }

  ngOnInit(): void {
  }


  anadirEvento(input1:string, input2:string, input3:string, input4:string, input5:string, input6:string, input7:string, input8:string) {

    let nuevoEvento = new Eventos(this.usuario.id_user,input1,input2,input3,input4,input5,input6,input7,input8)
       this.eventosService.add(nuevoEvento).subscribe((data:Eventos) =>
        {
         console.log(data);
  
        })
  }










}
