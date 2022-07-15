import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionar-evento',
  templateUrl: './gestionar-evento.component.html',
  styleUrls: ['./gestionar-evento.component.scss']
})
export class GestionarEventoComponent implements OnInit {

  constructor() { }
  modalNoIr:boolean=false;
  modalIr:boolean=false;
  ngOnInit(): void {
  }

}
