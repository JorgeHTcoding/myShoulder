import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-chat',
  templateUrl: './modal-chat.component.html',
  styleUrls: ['./modal-chat.component.scss']
})
export class ModalChatComponent implements OnInit {

usuarioLogeado:any={
 id_user:1 
}
nuevoMensaje:string ="";
chatlog:any=[
  {
    emisor:"1",
    receptor:"2",
    contenido:"Hola que tal"
  },
  {
    emisor:"2",
    receptor:"1",
    contenido:"Bien y tu?"
  },
  {
    emisor:"1",
    receptor:"2",
    contenido:"Haciendo un chat de angular a las 7 am, lo normal vaya..."
  }
]
//lo que inyectamos tenemos que hablar con jorge para preguntarle el nombre,
//tambien debemos revisar todas las variables que necesitamos tener en comun
  constructor() { }
//inyeccion
//private authService:AuthService
  ngOnInit(): void {
    // this.authService.getUserLogged().subscribe(usuario=>{
    //   this.usuarioLogeado=usuario;
    // })
  }
  show:boolean = false;
  enviarMensaje(){
    console.log(this.nuevoMensaje)
    
    let mensaje={
      emisor:this.usuarioLogeado.id_user,
      receptor:"2",
      contenido:this.nuevoMensaje,

    }
    console.log(mensaje)
    this.chatlog.push(mensaje)
  }
}
