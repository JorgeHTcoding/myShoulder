import { outputAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estado-animo',
  templateUrl: './estado-animo.component.html',
  styleUrls: ['./estado-animo.component.scss']
})
export class EstadoAnimoComponent implements OnInit {

  constructor() { }
  enviado:string="Enviar"
  ngOnInit(): void {
    let slider = document.getElementById("myRange");
    console.log(slider)
  }
  enviar(){
    this.enviado="Enviado"
  }
}
