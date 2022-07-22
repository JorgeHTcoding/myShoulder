import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-pac-aceptado',
  templateUrl: './modal-pac-aceptado.component.html',
  styleUrls: ['./modal-pac-aceptado.component.scss']
})
export class ModalPacAceptadoComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }


  ruta(){
    this.router.navigateByUrl('/administracion-pacientes')
  }
}
