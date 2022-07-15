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
  constructor(public geventosService:GeventosService, public apuntadoService:ApuntadoService) { }
    id:number=20;
    evento:Gevento;
    apuntado:Apuntado;
    
  ngOnInit(): void {
     console.log("Inicializamos la página")
    this.geventosService.getOne(this.id).subscribe((data:Gevento)=>{
      console.log("data es:"+ data)
      this.evento=data[0]
      console.log(this.evento)
    })
    console.log("esta es la info")
    console.log(this.evento.titulo + "hehe")
  }
  public apuntame(id:number,evento:Eventos){
      // let persona:Apuntado= new Apuntado(id,evento.id_evento)
      // this.apuntadoService.apuntar()
      }
}
