import { Component, OnInit } from '@angular/core';
// import { UserService } from 'src/app/shared/user.service';
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

  constructor(public registroService:RegistroService, private router:Router) { 
    this.user = new User("","","","","",null,"","","","","","","",)
   
  }
  public onSubmit(form:NgForm){
    this.registroService.login(this.user).subscribe((data:any)=>{
      if(data.error==true){
        this.registroService.logueado = false;
        this.registroService.user = null;        
      }else{
        this.registroService.logueado = true;         
        this.registroService.user = data.result;   
        console.log( "estado logueo: " + this.registroService.logueado  ) 
        console.log( "este es la id del usuario : " + this.user.id_user )   
        
        this.router.navigateByUrl('/')
      }
    })
  }

  ngOnInit(): void {
  }

}
