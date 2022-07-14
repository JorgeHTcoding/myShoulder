import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud-pacientes',
  templateUrl: './solicitud-pacientes.component.html',
  styleUrls: ['./solicitud-pacientes.component.scss']
})
export class SolicitudPacientesComponent implements OnInit {

  constructor() { }
  aceptar:boolean=false;
  rechazar:boolean=false;
  ngOnInit(): void {
  }

}
