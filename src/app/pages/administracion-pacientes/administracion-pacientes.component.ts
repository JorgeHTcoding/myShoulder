import { Component, OnInit } from '@angular/core';
import { GestionPacienteComponent } from 'src/app/component/gestion-paciente/gestion-paciente.component';
@Component({
  selector: 'app-administracion-pacientes',
  templateUrl: './administracion-pacientes.component.html',
  styleUrls: ['./administracion-pacientes.component.scss']
})
export class AdministracionPacientesComponent implements OnInit {

  constructor() { }
 
  show:boolean= true;
  ngOnInit(): void {
  }
}
