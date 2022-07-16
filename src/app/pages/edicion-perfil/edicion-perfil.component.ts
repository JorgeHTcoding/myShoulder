import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/shared/user.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edicion-perfil',
  templateUrl: './edicion-perfil.component.html',
  styleUrls: ['./edicion-perfil.component.scss']
})
export class EdicionPerfilComponent implements OnInit {
  public user:User;
  public users:User[];
  // public id_user:number = 6;

  constructor( public userService:UserService , private router:Router) { 

   this.user = this.userService.user

  }

  afirEdPerfil:boolean=false;

  public modificar(){

  
      this.userService.edit(this.user).subscribe((data:User)=>{
        // this.user.push(data)
        console.log(data + "data del put")
      })
      
  }

  
  // public mostrar(id_user:User){
  //   console.log('Entramos en get');
  //   this.userService.getOne(id_user).subscribe((data:User[])=>{
  //   for(let i = 0; i < data.length ; i++){
  //      id_user= data[i];
  //   }
      
  //     console.log(data + "data del get")
      
  //   })
  //   console.log(this.user.id_user)
  // }

  ngOnInit(): void {
    console.log(this.user);
    console.log(this.userService.user)
    // console.log('Estamos dentro del on init')
    // this.userService.getOne(this.userService.user).subscribe((data:User[])=>{
    //   for(let i = 0; i < data.length ; i++){
    //     this.user = data[i];
    //   }
    //   console.log(data + "data del get")
    // })
    // console.log(this.user.id_user)

  }
}

// public modificar(nuevoNombre:HTMLInputElement,nuevoApellido:HTMLInputElement,nuevoCorreo:HTMLInputElement,nuevaDireccion:HTMLInputElement,nuevoTlf:HTMLInputElement,nuevoTexto:HTMLInputElement){

//   let nuevoUser = new User ("","",nuevoNombre.value,nuevoApellido.value,nuevoCorreo.value,nuevoTlf.valueAsNumber,nuevoTexto.value,"",nuevaDireccion.value,"","","","");
//     this.userService.edit(nuevoUser).subscribe((data:User)=>{
//       this.miUsuario.push(data)
//     })