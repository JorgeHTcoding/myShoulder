
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
  selector: 'app-landing-paciente',
  templateUrl: './landing-paciente.component.html',
  styleUrls: ['./landing-paciente.component.scss']
})
export class LandingPacienteComponent implements OnInit {
  user: User;
  evento1: Gevento;
  evento2: Gevento;
  id = this.userService.user.id_user;
  prof: any;

  modalChat:boolean=false;
  show:boolean= true;
 
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

     //iniciamos las solicitudes de chat con profesional
      console.log("Buscamos pacientes")
      this.pacienteService.getPro(this.id).subscribe((data:any)=>{
        console.log(data)
        console.log(data[0].name)
        this.prof=data[0]
        console.log("name:" +this.prof.name)
      })
  
    console.log(
      'este es la id del usuario en el landing profesional: ' +
        this.userService.user.id_user
    );
    //iniciamos los eventos que asistente
    console.log("Pedimos eventos")
    this.geventosService
      .getOne(this.user.id_user)
      .subscribe((data: any) => {
        this.evento1 = data[0];
        this.evento2 = data[1];
        console.log(this.evento1)
        console.log(this.evento2)
      })
  }
  detalle(evento1){
      this.geventosService.evento =evento1;
       this.router.navigateByUrl('/tarjeta-evento')
    }
}
