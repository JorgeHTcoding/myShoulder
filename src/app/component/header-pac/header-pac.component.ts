import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { RegistroService } from 'src/app/shared/registro.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-header-pac',
  templateUrl: './header-pac.component.html',
  styleUrls: ['./header-pac.component.scss']
})
export class HeaderPacComponent implements OnInit {

  constructor(public registroService:RegistroService, public userService:UserService, private router:Router) { }

  ngOnInit(): void {
    console.log("Este es el id usuario en el header pac:"+this.userService.user.id_user)
  }

}
