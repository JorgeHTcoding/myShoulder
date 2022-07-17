import { Component, Input, OnInit } from '@angular/core';
import { EventosService } from 'src/app/shared/eventos.service';
import { UserService } from 'src/app/shared/user.service';
import { Eventos } from 'src/app/models/eventos';

@Component({
  selector: 'app-tarjeta-eventos',
  templateUrl: './tarjeta-eventos.component.html',
  styleUrls: ['./tarjeta-eventos.component.scss']
})
export class TarjetaEventosComponent implements OnInit {
  public eventos:Eventos[]; 
  public array:Eventos[];  
   @Input() tarjetaPadre:Eventos;

  constructor(public eventosService: EventosService, public userService:UserService) {
 
   }

  ngOnInit(): void {
    console.log("id_user : " + this.userService.user.id_user)         
  } 
}
