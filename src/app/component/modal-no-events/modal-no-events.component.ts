import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal-no-events',
  templateUrl: './modal-no-events.component.html',
  styleUrls: ['./modal-no-events.component.scss']
})
export class ModalNoEventsComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  ruta(){
    this.router.navigateByUrl('/busqueda-evento-fam')
  }

}
