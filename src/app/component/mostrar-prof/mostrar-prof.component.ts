
import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { RegistroService } from 'src/app/shared/registro.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { Gevento } from 'src/app/models/gevento.model';
import { GeventosService } from 'src/app/shared/geventos.service';
import { Eventos } from 'src/app/models/eventos';
import { Paciente } from 'src/app/models/paciente';
import { PacientesService } from 'src/app/shared/pacientes.service';


@Component({
  selector: 'app-mostrar-prof',
  templateUrl: './mostrar-prof.component.html',
  styleUrls: ['./mostrar-prof.component.scss']
})
export class MostrarProfComponent implements OnInit {
  @Input () prof:User;
  constructor() { }
  show:boolean=false;
  ngOnInit(): void {
  }

}
