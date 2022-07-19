
import { ModalChatComponent } from '../modal-chat/modal-chat.component';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { User } from 'src/app/models/user';
import { PacientesService } from 'src/app/shared/pacientes.service';
import { UserService } from 'src/app/shared/user.service';
import { Router } from 'express';
import { ProfesionalPacientes } from 'src/app/models/profesional-pacientes';

@Component({
  selector: 'app-gestion-paciente',
  templateUrl: './gestion-paciente.component.html',
  styleUrls: ['./gestion-paciente.component.scss']
})
export class GestionPacienteComponent implements OnInit {
  @Input() elementoPadre:Paciente;

  public paciente:Paciente;
  public id: User;
  public profesional:User;


  constructor(public userService:UserService , public pacientesService:PacientesService) { 
    this.id = this.userService.user
    this.profesional = this.userService.user
  }
  show:boolean=false;
  show2:boolean=false;

  modificar( elementoPadre:Paciente  ){
    console.log('Vamos a entrar en la funcion modificar del gestion-paciente')
    console.log(this.elementoPadre.id_profesional);
    console.log(this.elementoPadre.diagnostico);
    console.log(this.elementoPadre.id_user)

    // let diagnostico:any = this.elementoPadre.diagnostico.value;
    // let diagnostico2:any = this.paciente.diagnostico.value;
    // console.log(diagnostico + "diagnotico 1 ")
    // console.log(diagnostico2 + "diagnotico 2 ")
    
    let cuerpo = new ProfesionalPacientes (elementoPadre.id_user,elementoPadre.id_profesional,"",0,"",elementoPadre.diagnostico)
    
    console.log(cuerpo)
    this.pacientesService.edit(cuerpo).subscribe((data:any)=>{
      console.log(data)
    })
  }

  ngOnInit(): void {
  }

  // estadoAceptado(id_user:number){

  // }


}

