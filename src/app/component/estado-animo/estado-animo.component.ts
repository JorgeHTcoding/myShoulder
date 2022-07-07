import { outputAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estado-animo',
  templateUrl: './estado-animo.component.html',
  styleUrls: ['./estado-animo.component.scss']
})
export class EstadoAnimoComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    let slider = document.getElementById("myRange");
    console.log(slider)
  }
  
}
