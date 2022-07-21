import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from 'src/app/shared/solicitudes.service';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { Paciente } from '../../models/paciente';
import { User } from 'src/app/models/user';
import { HttpErrorResponse } from '@angular/common/http';
// import { User } from 'src/app/models/user';


@Component({
  selector: 'app-solicitud-pacientes',
  templateUrl: './solicitud-pacientes.component.html',
  styleUrls: ['./solicitud-pacientes.component.scss']
})
export class SolicitudPacientesComponent implements OnInit {
  
  public paciente: Paciente[];
  public user: User
  public id: number;
  public group:Paciente[]; 
  public eventoHijo: Paciente;
  public groupShown: any;
  public itGroup: number;

  constructor(public solicitudesService:SolicitudesService,public userService:UserService , private router:Router) { 

    this.itGroup = 0;
  }
  
  aceptar:boolean=false;
  rechazar:boolean=false;

  ngOnInit(): void {

    // this.paciente
    // this.user
    console.log("entro")
    console.log(this.userService.user.id_user)

      this.solicitudesService.getAllPac(this.userService.user.id_user).subscribe((data:Paciente[])=>{
        
        console.log(data[0])
        console.log(data[0].id_user + "id usuario")
        console.log(data[0].id_profesional + "id paciente")
        this.paciente = data;


        
      this.group = data;
      this.setGropShown();
      }, 

      (err: HttpErrorResponse) => {
        console.log("error on parsing: " + err.message);})

  }



  setGropShown() {

    this.groupShown = this.group.slice(this.itGroup * 2, (this.itGroup + 1) * 2);
    console.log("group al tirar de funcion: " + this.group)
  }
  previous() {
    if (this.itGroup != 0) {
      this.itGroup = this.itGroup - 1;
      this.setGropShown();
    }
  }
  next() {
    if (((this.itGroup + 1) * 2) < this.group.length) {
      this.itGroup = this.itGroup + 1;
      this.setGropShown();
    }
  }



}


