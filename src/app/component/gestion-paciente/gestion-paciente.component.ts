
import { ModalChatComponent } from '../modal-chat/modal-chat.component';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { User } from 'src/app/models/user';
import { PacientesService } from 'src/app/shared/pacientes.service';
import { UserService } from 'src/app/shared/user.service';
import { SolicitudesService } from 'src/app/shared/solicitudes.service'
import { Router } from '@angular/router';
import { ProfesionalPacientes } from 'src/app/models/profesional-pacientes';
import * as e from 'express';

@Component({
  selector: 'app-gestion-paciente',
  templateUrl: './gestion-paciente.component.html',
  styleUrls: ['./gestion-paciente.component.scss']
})
export class GestionPacienteComponent implements OnInit {

  @Input() elementoPadre:Paciente;
 
  @Output() refrescoPacientes = new EventEmitter<Number>();
  public id: User;
  public profesional:User;
  public pacientes: ProfesionalPacientes[]
  public prof:any

  constructor(public userService:UserService , public pacientesService:PacientesService , private router:Router, public solicitudesService:SolicitudesService ) { 
    this.id = this.userService.user
    this.profesional = this.userService.user
      console.log("________________________________________")
    this.prof=this.elementoPadre
    console.log("asignado")
    console.log(this.prof)
  }
  modalChat:boolean=false;
  show2:boolean=false;
  modificar( elementoPadre:Paciente , input:HTMLInputElement ){
    console.log('Vamos a entrar en la funcion modificar del gestion-paciente')
    console.log(this.elementoPadre.id_profesional);
    console.log(input.value + "INPUT . VALUE")
    console.log(this.elementoPadre.id_user)
    
    let cuerpo = new ProfesionalPacientes (elementoPadre.id_user,elementoPadre.id_profesional,"",0,"",input.value)
    
    console.log(cuerpo)
    this.pacientesService.edit(cuerpo).subscribe((data:any)=>{
      
      console.log(data)
    })
  }
  
  // delete(){
    //   console.log(this.elementoPadre.id_user)
    //   this.refrescoPacientes.emit(this.elementoPadre.id_user)
    // }
    delete(elementoPadre:Paciente){
      console.log(this.elementoPadre.id_user)
      // this.refrescoPacientes.emit(this.elementoPadre.id_user)
      // console.log("entro al componente")
      
      
    let cuerpo = new ProfesionalPacientes (this.elementoPadre.id_user,this.elementoPadre.id_profesional,"",3,"","");
    this.pacientesService.delete(cuerpo).subscribe((data:any)=>{
      console.log(data)
      console.log(cuerpo)
      
      
      this.router.navigateByUrl('/landing-profesional')
      // this.router.navigateByUrl("administracion-pacientes")
    }
    )
    
  }
  
  
  
  
  
  ngOnInit(): void {
  
  }
  
  // estadoAceptado(id_user:number){

  // }

    


  }
  



