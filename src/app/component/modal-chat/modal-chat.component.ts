import { Component, Input, OnInit} from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';
import { Mensaje } from 'src/app/models/mensaje';
import { ChatService } from 'src/app/shared/chat.service';
import { Data } from '@angular/router';
import { Paciente } from 'src/app/models/paciente';
@Component({
  selector: 'app-modal-chat',
  templateUrl: './modal-chat.component.html',
  styleUrls: ['./modal-chat.component.scss']
})
export class ModalChatComponent implements OnInit {

@Input() prof:Paciente | User | any;
nuevoMensaje:string;
chatlog:any;
emisor:number;
receptor:number;
modalChat:boolean;
show:boolean = false;
mensaje:Mensaje;
chatRecep:string[];
chat:any;
receptor_name:string; 
constructor(public userService:UserService , public chatService:ChatService) { 

  
}
ngOnInit(): void {
    // console.log("prof")
    // console.log(this.prof)
    console.log(this.prof.id_user)
    this.emisor=this.userService.user.id_user;
     this.receptor =this.prof.id_user;
     this.receptor_name=this.prof.name;
      this.chatService.getChatLog(this.emisor,this.receptor).subscribe((data:any)=>{
      console.log(data)
      this.chat=data;
      //  for (let i=0; i< data.length;i++){
      //   if(data[i].id_emisor=this.emisor){
      //     this.chatEmi[i]=data[i].contenido
      //   }else{
      //     this.chatRecep[i]=data[i].contenido
      //   }
      //  }
      console.log("este es el chat emi" +this.chat)
      console.log("este es el chat recep" +this.chatRecep)
     })
  }
  enviarMensaje(){

     this.mensaje = {id_emisor:this.emisor,id_receptor:this.receptor,contenido:this.nuevoMensaje};
      this.chat.push(this.mensaje)
     this.chatService.postChat(this.mensaje).subscribe((data:any)=>{
      console.log(data)

     })
  }
}
