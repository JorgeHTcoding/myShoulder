import { Component, Input, OnInit } from '@angular/core';
import { GeventosService } from 'src/app/shared/geventos.service';
import { EventosService } from 'src/app/shared/eventos.service';
import { UserService } from 'src/app/shared/user.service';
import { Gevento } from 'src/app/models/gevento.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apuntado } from 'src/app/models/apuntado';
import { ApuntadoService } from 'src/app/shared/apuntado.service';
import { Router } from '@angular/router';
import { Eventos } from 'src/app/models/eventos';

@Component({
  selector: 'app-tarjeta-eventos-administrar',
  templateUrl: './tarjeta-eventos-administrar.component.html',
  styleUrls: ['./tarjeta-eventos-administrar.component.scss']
})
export class TarjetaEventosAdministrarComponent implements OnInit {

  public eventos:Gevento[];
  public array:Eventos[];

  @Input() elementoPadre:Gevento;


  constructor(public geventosService:GeventosService, public userService: UserService, public eventosService:EventosService, public router: Router) { }


  ngOnInit(): void {
    console.log("id_user : " + this.userService.user.id_user)
  }


  enviarDatosEvento(elementoPadre) {
    this.geventosService.evento = elementoPadre
    this.router.navigateByUrl("/gestion-evento")

  }

}
