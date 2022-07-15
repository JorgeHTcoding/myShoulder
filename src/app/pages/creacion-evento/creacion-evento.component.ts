import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { RegistroService } from 'src/app/shared/registro.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user'

@Component({
  selector: 'app-creacion-evento',
  templateUrl: './creacion-evento.component.html',
  styleUrls: ['./creacion-evento.component.scss']
})
export class CreacionEventoComponent implements OnInit {

  constructor(public userService:UserService , private router:Router) { }

  ngOnInit(): void {
    console.log( "este es la id del usuario en creacion-evento: " + this.userService.user.id_user )
  }

}
