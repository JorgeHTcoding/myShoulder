import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mostrar-prof',
  templateUrl: './mostrar-prof.component.html',
  styleUrls: ['./mostrar-prof.component.scss']
})
export class MostrarProfComponent implements OnInit {

  constructor() { }
  show:boolean=false;
  ngOnInit(): void {
  }

}
