import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { GeventosService } from 'src/app/shared/geventos.service';
import { Gevento } from 'src/app/models/gevento.model';

@Component({
  selector: 'app-gestionar-evento',
  templateUrl: './gestionar-evento.component.html',
  styleUrls: ['./gestionar-evento.component.scss']
})
export class GestionarEventoComponent implements OnInit {

  @Input() evento:Gevento 


  constructor() { }
  modalNoIr:boolean=false;
  modalIr:boolean=false;
  ngOnInit(): void {
  }

}
