import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { RegistroService } from 'src/app/shared/registro.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user'

@Component({
  selector: 'app-edicion-perfil-pro',
  templateUrl: './edicion-perfil-pro.component.html',
  styleUrls: ['./edicion-perfil-pro.component.scss']
})
export class EdicionPerfilProComponent implements OnInit {

  constructor(public userService:UserService , private router:Router) { }

  afirEdPerfil:boolean=false;
  
  ngOnInit(): void {
    console.log( "este es la id del usuario en el edicion-perfil-pro: " + this.userService.user.id_user ) 
  }

}
