import { outputAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

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

  constructor() { }
  ngOnInit(): void {
    let slider = document.getElementById("myRange");
    console.log(slider)
  }
  enviar(){
    this.enviado="Enviado"
    this.animo= (<HTMLInputElement>document.getElementById("animo")).value;
    this.energia= (<HTMLInputElement>document.getElementById("energia")).value 
    this.ansiedad= (<HTMLInputElement>document.getElementById("ansiedad")).value
    console.log("Esta es la animo" +this.animo)
    console.log("Esta es la energia" +this.energia)
    console.log("Esta es la ansiedad" +this.ansiedad)
    let a = typeof(this.animo)
    console.log(a)
    Number(this.animo)
  }
}
