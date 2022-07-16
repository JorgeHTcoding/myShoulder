import { Component, OnInit } from '@angular/core';
import { GeventosService } from 'src/app/shared/geventos.service';
import { Gevento } from 'src/app/models/gevento.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eventos } from 'src/app/models/eventos';

@Component({
  selector: 'app-tarjeta-eventos',
  templateUrl: './tarjeta-eventos.component.html',
  styleUrls: ['./tarjeta-eventos.component.scss']
})
export class TarjetaEventosComponent implements OnInit {
  
  constructor(public geventosService:GeventosService) { }

  ngOnInit(): void {
   
  }
  
}
