import { Component, Input, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { SolicitudesService } from 'src/app/shared/solicitudes.service';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { FormGroup, NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';
import { ProfesionalPacientes } from 'src/app/models/profesional-pacientes';


@Component({
  selector: 'app-modal-respuesta',
  templateUrl: './modal-respuesta.component.html',
  styleUrls: ['./modal-respuesta.component.scss']
})
export class ModalRespuestaComponent implements OnInit {
  @Input() id_paciente:number;
  public paciente: Paciente;
  public myForm: FormGroup;
  public profesional: User;
  // public negacion =  (<HTMLInputElement>document.getElementById("rechazo")).value
  


  constructor(public solicitudesService: SolicitudesService, public userService:UserService ) {

    this.profesional = this.userService.user  // aqui tengo el id del profesional
  }

  ngOnInit(): void {
    console.log("Modal respuesta")
  }


  cambiarEstadoNeg(rechazo:HTMLInputElement){
    console.log("Entro a cambiarEstadoNeg del component.ts")

    let mensaje = new ProfesionalPacientes(this.id_paciente,this.profesional.id_user,"",3,rechazo.value,"") // aqui me creo el obj que le paso al service con los dos id y el mensaje
   
    console.log(mensaje)
    this.solicitudesService.cambiarEstadoNeg(mensaje).subscribe((data:any) =>{
    console.log(data + " data estadoNeg")
   }) 
  }


  // modalAfir2:boolean=false;
  onSubmit1(form:NgForm){  
      
    //   let passvalue = form.value.password;
    //   console.log(passvalue)
    
    //   console.log(form.value)
   
    // if(passvalue != this.paciente){    
      
    //   console.log(this.paciente)
    // }else{
      console.log("valores form: " + form)
      // this.solicitudesService.enviarRechazo(this.id_paciente,form.value).subscribe((data:any)=>{
      //   console.log(data)
       
      // })
    }

    
  // enviarRechazo(negacion:HTMLInputElement){
  //   console.log(negacion + "enviarrechazo")
  //    this.solicitudesService.enviarRechazo(this.id_paciente,negacion).subscribe((data:any) =>{
  //   //  this.paciente.push(data)
  //   console.log(data + "data de enviarRechazo")
  //  }) 
  // }

  
  // }


}
