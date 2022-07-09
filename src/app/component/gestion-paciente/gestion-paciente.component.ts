import { Component, OnInit } from '@angular/core';
import { ModalChatComponent } from '../modal-chat/modal-chat.component';
@Component({
  selector: 'app-gestion-paciente',
  templateUrl: './gestion-paciente.component.html',
  styleUrls: ['./gestion-paciente.component.scss']
})
export class GestionPacienteComponent implements OnInit {

  constructor() { }
  show:boolean=false;
  ngOnInit(): void {
  }

}
