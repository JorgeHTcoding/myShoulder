import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GestionPacienteComponent } from 'src/app/component/gestion-paciente/gestion-paciente.component';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { PacientesService } from 'src/app/shared/pacientes.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Paciente } from 'src/app/models/paciente';
import { HttpClient } from '@angular/common/http';
import { ProfesionalPacientes } from 'src/app/models/profesional-pacientes';

@Component({
  selector: 'app-administracion-pacientes',
  templateUrl: './administracion-pacientes.component.html',
  styleUrls: ['./administracion-pacientes.component.scss']
})
export class AdministracionPacientesComponent implements OnInit {

  public paciente: Paciente;
  public user: User
  public id: number;
  public group: Paciente[];
  public eventoHijo: Paciente;
  public groupShown: any;
  public itGroup: number;

  constructor(public userService: UserService, private router: Router, public pacienteService: PacientesService) {

    this.itGroup = 0;

  }

  aceptar: boolean = false;
  rechazar: boolean = false;


  show: boolean = true;



  ngOnInit(): void {
    // this.paciente
    // this.user
    console.log("entro")

  

    this.pacienteService.mostrarSoloAceptadas(this.userService.user.id_user).subscribe((data: any) => {

      // console.log(data[0])
      // console.log(data[0].id_user + "id usuario")
      // console.log(data[0].id_profesional + "id paciente")
      this.paciente = data;





      this.group = data;
      this.setGropShown();
    },

      (err: HttpErrorResponse) => {
        console.log("error on parsing: " + err.message);
      })
    console.log("entro al cacharro" + this.userService.user.id_user)
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
//   delete(elementoPadre:Paciente){
//       console.log("entro al componente")
//       // console.log(id_user);
  
//       let cuerpo = new ProfesionalPacientes (elementoPadre.id_user,elementoPadre.id_profesional,"",3,"","");
//       this.pacienteService.delete(cuerpo).subscribe((data:Paciente)=>{
//         console.log(this.group)
//         this.group.push(data)
//         console.log(data)
//         console.log(cuerpo)

       
//       })
// }


}
