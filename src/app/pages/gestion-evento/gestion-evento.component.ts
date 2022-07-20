import { Component, OnInit } from '@angular/core';
import { GeventosService } from 'src/app/shared/geventos.service';
import { Gevento } from 'src/app/models/gevento.model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-gestion-evento',
  templateUrl: './gestion-evento.component.html',
  styleUrls: ['./gestion-evento.component.scss']
})
export class GestionEventoComponent implements OnInit {

  public evento: Gevento[];
  
  constructor(public geventosService: GeventosService, public userService: UserService) { }

  ngOnInit(): void {
  }

}
