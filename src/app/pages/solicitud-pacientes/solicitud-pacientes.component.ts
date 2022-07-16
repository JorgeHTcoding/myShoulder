import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitud-pacientes',
  templateUrl: './solicitud-pacientes.component.html',
  styleUrls: ['./solicitud-pacientes.component.scss']
})
export class SolicitudPacientesComponent implements OnInit {

  constructor(public userService:UserService , private router:Router) { }
  aceptar:boolean=false;
  rechazar:boolean=false;
  ngOnInit(): void {
    console.log( "este es la id del usuario en solicitud-pacientes " + this.userService.user.id_user )
  }

}
