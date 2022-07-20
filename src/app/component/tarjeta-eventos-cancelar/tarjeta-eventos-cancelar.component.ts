import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Eventos } from 'src/app/models/eventos';
import { GeventosService } from 'src/app/shared/geventos.service';
import { UserService } from 'src/app/shared/user.service';
import { EventosService } from 'src/app/shared/eventos.service';


@Component({
  selector: 'app-tarjeta-eventos-cancelar',
  templateUrl: './tarjeta-eventos-cancelar.component.html',
  styleUrls: ['./tarjeta-eventos-cancelar.component.scss']
})

export class TarjetaEventosCancelarComponent implements OnInit {
  show=true;
  modalConf:boolean=false;
 
  public eventos:Eventos[];
  public array:Eventos[];

  @Input() elementoPadre:Eventos;
  @Output() eventoMisEventos = new EventEmitter<Number>();
 

  constructor(public geventosService:GeventosService, public userService: UserService, public eventosService:EventosService) { }



  eliminarAsisEvento() {
    this.modalConf = false;

    console.log("Elmento Padre en Tarjeta Eventos: " + this.elementoPadre.id_eventos)
    this.eventoMisEventos.emit(this.elementoPadre.id_eventos)

  }


  ngOnInit(): void {
    console.log("id_user : " + this.userService.user.id_user)
  }

  // popEvent(){
  //     this.eventos.pop(3)
  //     console.log("saintentao")
  //     console.log(this.eventos)
  // }
}
