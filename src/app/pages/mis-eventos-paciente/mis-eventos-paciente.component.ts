import { Component, OnInit } from '@angular/core';
import { TarjetaEventosCancelarComponent } from 'src/app/component/tarjeta-eventos-cancelar/tarjeta-eventos-cancelar.component';
@Component({
  selector: 'app-mis-eventos-paciente',
  templateUrl: './mis-eventos-paciente.component.html',
  styleUrls: ['./mis-eventos-paciente.component.scss']
})
export class MisEventosPacienteComponent implements OnInit {

  constructor() { }
  eventos=[1,2,3]
  ngOnInit(): void {
  }
  

  
}
