import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carta-paciente',
  templateUrl: './carta-paciente.component.html',
  styleUrls: ['./carta-paciente.component.scss']
})
export class CartaPacienteComponent implements OnInit {

  constructor() { }
  aceptar:boolean=false;
  rechazar:boolean=false;
  ngOnInit(): void {
  }

}
