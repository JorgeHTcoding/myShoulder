import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/shared/user.service';
import { RegistroService } from 'src/app/shared/registro.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-header-pac',
  templateUrl: './header-pac.component.html',
  styleUrls: ['./header-pac.component.scss']
})
export class HeaderPacComponent implements OnInit {

  constructor(public registroService:RegistroService, public userService:UserService, private router:Router) { }

  goEditarPaciente(){
    console.log('Hemos entrado en navigate')
    this.router.navigateByUrl('/edicion-perfil')
  }
  
  ngOnInit(): void {
    console.log("Este es el id usuario en el header pac:"+this.userService.user.id_user)
  }

}
