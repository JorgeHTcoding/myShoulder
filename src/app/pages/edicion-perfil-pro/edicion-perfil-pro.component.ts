import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/shared/user.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edicion-perfil-pro',
  templateUrl: './edicion-perfil-pro.component.html',
  styleUrls: ['./edicion-perfil-pro.component.scss']
})
export class EdicionPerfilProComponent implements OnInit {

  public user:User;

  constructor(public userService:UserService , private router:Router) { 
   this.user = this.userService.user
  }

  afirEdPerfil:boolean=false;
  
  public modificar(){

  
    this.userService.edit(this.user).subscribe((data:User)=>{
      // this.user.push(data)
      console.log(data + "data del put")
    })
    
}

  ngOnInit(): void {
    console.log(this.user);
    console.log(this.userService.user)
    console.log( "este es la id del usuario en el edicion-perfil-pro: " + this.userService.user.id_user ) 
  }

}
