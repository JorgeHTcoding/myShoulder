import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { RegistroService } from 'src/app/shared/registro.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-landing-profesional',
  templateUrl: './landing-profesional.component.html',
  styleUrls: ['./landing-profesional.component.scss']
})
export class LandingProfesionalComponent implements OnInit {
  user:User
  constructor(public registroService:RegistroService, public userService:UserService , private router:Router) { 
    this.user=this.userService.user
  }
  
  ngOnInit(): void {
    console.log( "este es la id del usuario en el landing profesional: " + this.userService.user.id_user)
  }
  public nose(){
    
    this.userService.user.id_user
  }
  
}


