import { Component, Input, OnInit } from '@angular/core';
import { Eventos } from 'src/app/models/eventos';
import { GeventosService } from 'src/app/shared/geventos.service';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-tarjeta-eventos-cancelar',
  templateUrl: './tarjeta-eventos-cancelar.component.html',
  styleUrls: ['./tarjeta-eventos-cancelar.component.scss']
})

export class TarjetaEventosCancelarComponent implements OnInit {
  show=true;
  modalConf:boolean=false;
  // eventos:any=[1,2,3];

  public eventos:Eventos[];
  public array:Eventos[];

  @Input() elementoPadre:Eventos;


  constructor(public geventosService:GeventosService, public userService: UserService) { }

  ngOnInit(): void {
    console.log("id_user : " + this.userService.user.id_user)
  }

  // popEvent(){
  //     this.eventos.pop(1)
  //     console.log("saintentao")
  //     console.log(this.eventos)
  // }
}
