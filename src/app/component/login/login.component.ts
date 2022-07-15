import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { RegistroService } from 'src/app/shared/registro.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user:User;
 

  constructor(public registroService:RegistroService, public userService:UserService , private router:Router) { 
    this.user = new User("","","","","",null,"","","","","","","",) ;      
   
  }
  public onSubmit(form:NgForm){
    this.registroService.login(this.user).subscribe((data:any)=>{
      if(data.error==true){
        this.registroService.logueado = false;
        this.registroService.user = null;        
      }else{
        this.registroService.logueado = true;         
        this.registroService.user = data.result; 
        this.userService.user = data[0];
        console.log( "estado logueo: " + this.registroService.logueado  ) 
        console.log( "este es la id del usuario: " + this.userService.user.id_user )   
        
        if(this.userService.user.tipo == "paciente"){
          this.router.navigateByUrl('/landing-paciente')
        }else if(this.userService.user.tipo == "profesional"){
          this.router.navigateByUrl('/landing-profesional')
        }else{
          this.router.navigateByUrl('/landing-profesional')
        }       
      }
    })
  }

  ngOnInit(): void {
  }

}
