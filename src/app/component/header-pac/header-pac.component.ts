import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-header-pac',
  templateUrl: './header-pac.component.html',
  styleUrls: ['./header-pac.component.scss']
})
export class HeaderPacComponent implements OnInit {

  constructor(public userService : UserService , private router:Router ) { }

  goEditarPaciente(){
    console.log('Hemos entrado en navigate')
    this.router.navigateByUrl('/edicion-perfil')
  }
  
  ngOnInit(): void {
  }

}
