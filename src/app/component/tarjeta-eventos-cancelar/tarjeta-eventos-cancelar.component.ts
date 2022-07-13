import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-eventos-cancelar',
  templateUrl: './tarjeta-eventos-cancelar.component.html',
  styleUrls: ['./tarjeta-eventos-cancelar.component.scss']
})
export class TarjetaEventosCancelarComponent implements OnInit {
  show=true;
  constructor() { }
  eventos:any=[1,2,3]
  ngOnInit(): void {
  }
  popEvent(){
      this.eventos.pop(1)
      console.log("saintentao")
      console.log(this.eventos)
  }
}
