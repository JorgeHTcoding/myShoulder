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
  public id_user:number = 6;
  constructor( public userService:UserService  ) { }

  afirEdPerfil:boolean=false;

  public modificar(nuevoNombre:HTMLInputElement,nuevoApellido:HTMLInputElement,nuevoCorreo:HTMLInputElement,nuevaDireccion:HTMLInputElement,nuevoTlf:HTMLInputElement,nuevoTexto:HTMLInputElement){

    let nuevoUser = new User ("","",nuevoNombre.value,nuevoApellido.value,nuevoCorreo.value,nuevoTlf.valueAsNumber,nuevoTexto.value,"",nuevaDireccion.value,"","","","");
      this.userService.edit(nuevoUser).subscribe((data:User)=>{
        this.miUsuario.push(data)
      })
  }

  
  public mostrar(id_user:number){
    console.log('Entramos en get');
    this.userService.getOne(id_user).subscribe((data:User)=>{
      this.usuario = data;
      
    })
    console.log(this.usuario)
  }

  ngOnInit(): void {
    console.log('Estamos dentro del on init')
    this.userService.getOne(this.id_user).subscribe((data:User)=>{
    this.usuario = data;
  })
  }
}
