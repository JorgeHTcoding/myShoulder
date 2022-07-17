import { Component, Input, OnInit } from '@angular/core';
import { EventosService } from 'src/app/shared/eventos.service';
import { UserService } from 'src/app/shared/user.service';
import { Eventos } from 'src/app/models/eventos';
import { User } from 'src/app/models/user';
import { observable } from 'rxjs';
import { Router } from '@angular/router';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-busqueda-evento',
  templateUrl: './busqueda-evento.component.html',
  styleUrls: ['./busqueda-evento.component.scss']
})
export class BusquedaEventoComponent implements OnInit {
  public eventos:Eventos;
  public group:Eventos[]; 
  public eventoHijo: Eventos;
  responsiveOptions;

  constructor(public userService:UserService, public eventosService:EventosService) {
    this.eventosService.getAll(this.userService.user.id_user).subscribe((data: Eventos[]) => {               
      this.group = data;
      console.log(data)
    })
    this.responsiveOptions = [{
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
  }];

   }

  ngOnInit(): void {
  
   }
}
