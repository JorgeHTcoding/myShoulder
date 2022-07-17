import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { RegistroService } from 'src/app/shared/registro.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { Gevento } from 'src/app/models/gevento.model';
import { GeventosService } from 'src/app/shared/geventos.service';
import { Eventos } from 'src/app/models/eventos';
import { Paciente } from 'src/app/models/paciente';
import { PacientesService } from 'src/app/shared/pacientes.service';
@Component({
  selector: 'app-landing-profesional',
  templateUrl: './landing-profesional.component.html',
  styleUrls: ['./landing-profesional.component.scss'],
})
export class LandingProfesionalComponent implements OnInit {
  user: User;
  evento1: Gevento;
  evento2: Gevento;
  id = this.userService.user.id_user;
  pacientes:Paciente[]=[]
  familiares:Paciente[]=[]
  constructor(
    public geventosService: GeventosService,
    public registroService: RegistroService,
    public userService: UserService,
    private router: Router,
    public pacienteService:PacientesService
  ) {
    this.user = this.userService.user;
  }

  ngOnInit(): void {

     //iniciamos las solicitudes de chat
      console.log("Buscamos pacientes")
      this.pacienteService.getAllPac(this.id).subscribe((data1:Paciente[])=>{
        for (let i = 0; i<data1.length;i++){
          if(data1[i].tipo =="paciente"){
            this.pacientes.push(data1[i])
          }else{
            this.familiares.push(data1[i])
          }
        }
        console.log("pacientes" + this.pacientes)
        console.log("pacientes" + this.familiares)
      })
  
    console.log(
      'este es la id del usuario en el landing profesional: ' +
        this.userService.user.id_user
    );
    //iniciamos los eventos que anfitriona
    this.geventosService
      .getAllAnfitrion(this.user.id_user)
      .subscribe((data: any) => {
        this.evento1 = data[0];
        this.evento2 = data[1];
      })
 
  }

}
