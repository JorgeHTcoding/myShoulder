import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { RegistroService } from 'src/app/shared/registro.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { Gevento } from 'src/app/models/gevento.model';

@Component({
  selector: 'app-landing-profesional',
  templateUrl: './landing-profesional.component.html',
  styleUrls: ['./landing-profesional.component.scss']
})
export class LandingProfesionalComponent implements OnInit {
  user:User;
  evento1:Gevento;
  evento2:Gevento;
  constructor(public registroService:RegistroService, public userService:UserService , private router:Router) { 
    this.user=this.userService.user
  }
  
  ngOnInit(): void {
    console.log( "este es la id del usuario en el landing profesional: " + this.userService.user.id_user)
  }
  public getEventosUser(){
    this.userService.user.id_user

  }
  
}


