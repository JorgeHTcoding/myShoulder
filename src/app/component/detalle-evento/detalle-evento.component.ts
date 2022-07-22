import { Component, OnInit } from '@angular/core';
import { Gevento } from 'src/app/models/gevento.model';
import { GeventosService } from 'src/app/shared/geventos.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { Apuntado } from 'src/app/models/apuntado';
import { ApuntadoService } from 'src/app/shared/apuntado.service';
import { Eventos } from 'src/app/models/eventos';
@Component({
  selector: 'app-detalle-evento',
  templateUrl: './detalle-evento.component.html',
  styleUrls: ['./detalle-evento.component.scss']
})
export class DetalleEventoComponent implements OnInit {
  modalNoIr:boolean=false;
  modalIr:boolean=false;
  user:User;
  id:number;
  evento:Gevento;
  apuntado:Apuntado;
  public tipo;
  constructor(public geventosService:GeventosService, public userService:UserService,public apuntadoService:ApuntadoService) {
    this.user=this.userService.user;
    this.id=this.userService.user.id_user
    console.log(this.geventosService.evento)
   }
   ngOnInit(): void {
    this.evento=this.geventosService.evento
     console.log("Inicializamos la página")
      this.geventosService.getEventAnf(this.evento.id_eventos).subscribe((data:Gevento)=>{
      console.log("data es:"+ data)
      this.evento=data[0]
      console.log(this.evento)
      this.tipo = this.userService.user.tipo
    })
    console.log("esta es la info")
    console.log(this.evento.titulo + "hehe")
    console.log(this.evento.name + "hehe")
  }
  public apuntame(){
    
      let persona:Apuntado= new Apuntado(this.evento.id_eventos,this.id)
      this.apuntadoService.apuntar(persona).subscribe((data:any)=>{
      console.log("data es:"+ data)
    })
      }
  public desapuntame(){
    
      let persona:Apuntado= new Apuntado(this.evento.id_eventos,this.id)
      this.apuntadoService.desapuntar(persona).subscribe((data:any)=>{
      console.log("data es:"+ data)
    })
      }
}
