
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
  selector: 'app-landing-familiar',
  templateUrl: './landing-familiar.component.html',
  styleUrls: ['./landing-familiar.component.scss']
})
export class LandingFamiliarComponent implements OnInit {
  user: User;
  evento1: Gevento;
  evento2: Gevento;
  id = this.userService.user.id_user;
  prof: any;
  constructor(public geventosService: GeventosService,
    public registroService: RegistroService,
    public userService: UserService,
    private router: Router,
    public pacienteService:PacientesService) {
this.user = this.userService.user;
   }
  show:boolean= true;
  ngOnInit(): void {
    console.log(this.user)
  console.log(
      'este es la id del usuario en el landing profesional: ' +
        this.userService.user.id_user
    );
    //Buscamos sus profesionales

     this.pacienteService.getPro(this.id).subscribe((data3:any)=>{
        console.log(data3)
        console.log(data3.name)
        this.prof=data3
      })
      //Buscamos los eventos que este apuntado
       console.log("Pedimos eventos")
    this.geventosService
      .getOne(this.user.id_user)
      .subscribe((data: any) => {
        this.evento1 = data[0];
        
      })
      //Buscamos los eventos que anfitriona

       this.geventosService
      .getAllAnfitrion(this.user.id_user)
      .subscribe((data1: any) => {
        this.evento2 = data1[0];
        
        
      })
      console.log(this.evento1)
      console.log(this.evento2)
    }
    detalle(evento1){
      this.geventosService.evento =evento1;
       this.router.navigateByUrl('/tarjeta-evento')
    }
}
