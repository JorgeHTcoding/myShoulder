import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-header-fam',
  templateUrl: './header-fam.component.html',
  styleUrls: ['./header-fam.component.scss']
})
export class HeaderFamComponent implements OnInit {

  constructor( public userService : UserService , private router:Router) { }

  goBusquedaProfesional (){
    this.router.navigateByUrl('/busqueda-profesional')
  }
  goEditarPaciente(){
    console.log('Hemos entrado en navigate')
    this.router.navigateByUrl('/edicion-perfil')
  }

  ngOnInit(): void {
  }

}
