import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/shared/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edicion-perfil',
  templateUrl: './edicion-perfil.component.html',
  styleUrls: ['./edicion-perfil.component.scss']
})
export class EdicionPerfilComponent implements OnInit {
  public usuario:User;
  public miUsuario:User[];
  // public id_user:number = 6;
  constructor( public userService:UserService  ) { 
    
    this.usuario = userService.user
  }

  afirEdPerfil:boolean=false;

  public modificar(){
    // console.log(this.userService.user.id_user + 'este es el user')
    // let nuevoUser = new User ("","",nuevoNombre.value,nuevoApellido.value,nuevoCorreo.value,nuevoTlf.valueAsNumber,nuevoTexto.value,"",nuevaDireccion.value,"","","","");
    // console.log(nuevoUser)
   
    this.userService.edit(this.usuario).subscribe((data:User)=>{
        this.miUsuario.push(data)
        
      })
      
  }

  
  public mostrar(){
    // console.log(this.userService.user.id_user + 'este es el user')
    console.log('Entramos en get');
    this.userService.getOne(this.userService.user.id_user).subscribe((data:User[])=>{
      this.miUsuario = data;
      
    })
    console.log(this.usuario)
  }

  ngOnInit(): void {
    console.log('Estamos dentro del on init')
    this.userService.getOne(this.userService.user.id_user).subscribe((data:User)=>{
    this.usuario = data;
  })
  }
}
