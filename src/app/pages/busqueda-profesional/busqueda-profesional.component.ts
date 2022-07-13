import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda-profesional',
  templateUrl: './busqueda-profesional.component.html',
  styleUrls: ['./busqueda-profesional.component.scss']
})
export class BusquedaProfesionalComponent implements OnInit {

  constructor() { }
  contacta:boolean=false;
  modalAfir:boolean=false;
  ngOnInit(): void {
  }

}
