import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-edicion-perfil',
  templateUrl: './edicion-perfil.component.html',
  styleUrls: ['./edicion-perfil.component.scss']
})
export class EdicionPerfilComponent implements OnInit {

  public miUsuario:User[];

  constructor( public userService:UserService  ) { }

  afirEdPerfil:boolean=false;

  modificar(nuevaUrl:HTMLInputElement,nuevoNombre:HTMLInputElement,nuevoApellido:HTMLInputElement,nuevoCorreo:HTMLInputElement,nuevaDireccion:HTMLInputElement,nuevoTlf:HTMLInputElement,nuevoTexto:HTMLInputElement){

    let nuevoUser = new User ("","",nuevoNombre.value,nuevoApellido.value,nuevoCorreo.value,nuevoTlf.valueAsNumber,nuevoTexto.value,nuevaUrl.value,nuevaDireccion.value,"","","","");
      this.userService.edit(nuevoUser).subscribe((data:User)=>{
        this.miUsuario.push(data)
      })


      

  }

  ngOnInit(): void {
  }

}
