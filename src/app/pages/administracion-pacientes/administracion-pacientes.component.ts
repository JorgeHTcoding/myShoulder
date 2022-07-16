import { Component, OnInit } from '@angular/core';
import { GestionPacienteComponent } from 'src/app/component/gestion-paciente/gestion-paciente.component';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administracion-pacientes',
  templateUrl: './administracion-pacientes.component.html',
  styleUrls: ['./administracion-pacientes.component.scss']
})
export class AdministracionPacientesComponent implements OnInit {

  constructor(public userService:UserService , private router:Router) { }
 
  show:boolean= true;
  ngOnInit(): void {
    console.log( "este es la id del usuario en administracion-pacientes " + this.userService.user.id_user )
  }
}
