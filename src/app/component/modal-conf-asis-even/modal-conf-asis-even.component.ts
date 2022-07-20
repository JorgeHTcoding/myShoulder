import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Eventos } from 'src/app/models/eventos';
import { GeventosService } from 'src/app/shared/geventos.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-modal-conf-asis-even',
  templateUrl: './modal-conf-asis-even.component.html',
  styleUrls: ['./modal-conf-asis-even.component.scss']
})
export class ModalConfAsisEvenComponent implements OnInit {

  @Output() eventoCerrar    = new EventEmitter<Boolean>();
  @Output() eventoConfirmar = new EventEmitter<Boolean>();


  constructor() { }


  cerrar() {
    this.eventoCerrar.emit();

  }


  confirmar() {
    this.eventoConfirmar.emit();
 
  }


  
  ngOnInit(): void {
  }



}
