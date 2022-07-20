import { outputAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/shared/chat.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-estado-animo',
  templateUrl: './estado-animo.component.html',
  styleUrls: ['./estado-animo.component.scss']
})
export class EstadoAnimoComponent implements OnInit {
  enviado:string="Enviar"
  animo:any;
  energia:any;
  ansiedad:any;
id_user:number;
  constructor(public userService:UserService, public chatService:ChatService) { }
  ngOnInit(): void {
    let slider = document.getElementById("myRange");
  }
  enviar(){
    this.enviado="Enviado"
    this.animo= (<HTMLInputElement>document.getElementById("animo")).value;
    this.energia= (<HTMLInputElement>document.getElementById("energia")).value 
    this.ansiedad= (<HTMLInputElement>document.getElementById("ansiedad")).value
    console.log("Esta es la animo" +this.animo)
    console.log("Esta es la energia" +this.energia)
    console.log("Esta es la ansiedad" +this.ansiedad)
    Number(this.animo)
    Number(this.energia)
    Number(this.ansiedad)
    this.id_user=this.userService.user.id_user
    this.chatService.postEstado(this.animo,this.energia,this.ansiedad,this.id_user).subscribe((data:any)=>{
        console.log(data)
      })
  }
}
