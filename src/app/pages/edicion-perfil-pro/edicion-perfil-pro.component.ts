import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edicion-perfil-pro',
  templateUrl: './edicion-perfil-pro.component.html',
  styleUrls: ['./edicion-perfil-pro.component.scss']
})
export class EdicionPerfilProComponent implements OnInit {

  constructor() { }

  afirEdPerfil:boolean=false;
  
  ngOnInit(): void {
  }

}
