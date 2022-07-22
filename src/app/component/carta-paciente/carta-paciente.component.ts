// import { Component, OnInit } from '@angular/core';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { ProfesionalPacientes } from 'src/app/models/profesional-pacientes';
import { SolicitudesService } from 'src/app/shared/solicitudes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carta-paciente',
  templateUrl: './carta-paciente.component.html',
  styleUrls: ['./carta-paciente.component.scss']
})

export class CartaPacienteComponent implements OnInit {

  // public paciente:Paciente[]

  @Input() paciente:any;
  chatPadre:any;
  negacionPadre:string;
  id_paciente:number;
  // solicitudesService: any;

  constructor(public solicitudesService: SolicitudesService, public router:Router) {

  
   }
  aceptar:boolean=false;
  rechazar:boolean=false;



  ngOnInit(): void {
    console.log("Este es el paciente" + this.paciente)
    console.log(this.paciente.id_user)
    this.id_paciente=this.paciente.id_user
  } 

  estadoAceptado(id_user:number){
    console.log("Entro a estadoAceptado del component.ts")
    console.log(id_user)
    let persona = new ProfesionalPacientes(id_user,0,"",0,"","") 
    
    this.solicitudesService.aceptarPac(persona).subscribe((data:any) =>{
      console.log(data +" data estadoAceptado")
     })

    //  this.router.navigateByUrl('/administracion-pacientes')
  }


}
// // import { Component, OnInit } from '@angular/core';
// import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
// import { Paciente } from 'src/app/models/paciente';
// import { ProfesionalPacientes } from 'src/app/models/profesional-pacientes';
// import { SolicitudesService } from 'src/app/shared/solicitudes.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-carta-paciente',
//   templateUrl: './carta-paciente.component.html',
//   styleUrls: ['./carta-paciente.component.scss']
// })

// export class CartaPacienteComponent implements OnInit {

//   // public paciente:Paciente[]

//   @Input() paciente:any;
//   chatPadre:any;
//   negacionPadre:string;
//   id_paciente:number;
//   // solicitudesService: any;

//   constructor(public solicitudesService: SolicitudesService, public router:Router) {

  
//    }
//   aceptar:boolean=false;
//   rechazar:boolean=false;



//   ngOnInit(): void {
//     console.log("Este es el paciente" + this.paciente)
//     console.log(this.paciente.id_user)
//     this.id_paciente=this.paciente.id_user
//   } 

//   estadoAceptado(id_user:number){
//     console.log("Entro a estadoAceptado del component.ts")
//     console.log(id_user)
//     let persona = new ProfesionalPacientes(id_user,0,"",0,"","") 
    
//     this.solicitudesService.aceptarPac(persona).subscribe((data:any) =>{
//       console.log(data +" data estadoAceptado")
//      })

//     //  this.router.navigateByUrl('/administracion-pacientes')
//   }


// }
