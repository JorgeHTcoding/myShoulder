import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gevento } from 'src/app/models/gevento.model';
import { User } from 'src/app/models/user';
import { GeventosService } from 'src/app/shared/geventos.service';
import { UserService } from 'src/app/shared/user.service';
@Component({
  selector: 'app-mostrar-evento',
  templateUrl: './mostrar-evento.component.html',
  styleUrls: ['./mostrar-evento.component.scss']
})
export class MostrarEventoComponent implements OnInit {
  public id_user:number
  @Input() evento: any
  
  constructor( public userService:UserService, public geventoService:GeventosService, private router:Router) {
    this.id_user=this.userService.user.id_user;
   }
  ngOnInit(): void {
    
  }

}
