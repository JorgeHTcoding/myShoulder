import { Component, OnInit } from '@angular/core';
import { Gevento } from 'src/app/models/gevento.model';
import { GeventosService } from 'src/app/shared/geventos.service';
import { observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestionar-evento',
  templateUrl: './gestionar-evento.component.html',
  styleUrls: ['./gestionar-evento.component.scss']
})
export class GestionarEventoComponent implements OnInit {

  public gevento:Gevento[];

  constructor(public geventoService: GeventosService){}

  modalNoIr:boolean=false;
  modalIr:boolean=false;

  ngOnInit(): void {
  }

  mostrarOne(id_evento:number){
    this.gevento = []
    
    this.geventoService.getOne(id_evento).subscribe((data:Gevento) =>
    {
      console.log("data es" + data)
      this.gevento = data[0]
      console.log("this.gevento es :" + this.gevento)
    })
  }

}
