import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-evento',
  templateUrl: './detalle-evento.component.html',
  styleUrls: ['./detalle-evento.component.scss']
})
export class DetalleEventoComponent implements OnInit {
  modalNoIr:boolean=false;
  modalIr:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
