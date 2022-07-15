import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrar-eventos-pro',
  templateUrl: './administrar-eventos-pro.component.html',
  styleUrls: ['./administrar-eventos-pro.component.scss']
})
export class AdministrarEventosProComponent implements OnInit {

  constructor(public userService:UserService , private router:Router) { }

  ngOnInit(): void {
    console.log( "este es la id del usuario en administracion-eventos-pro " + this.userService.user.id_user )
  }

}
