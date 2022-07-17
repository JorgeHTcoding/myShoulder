import { Component, Input, OnInit } from '@angular/core';
import { EventosService } from 'src/app/shared/eventos.service';
import { UserService } from 'src/app/shared/user.service';
import { Eventos } from 'src/app/models/eventos';
import { User } from 'src/app/models/user';
import { observable } from 'rxjs';
import { Router } from '@angular/router';
import { provideProtractorTestingSupport } from '@angular/platform-browser';

@Component({
  selector: 'app-busqueda-evento',
  templateUrl: './busqueda-evento.component.html',
  styleUrls: ['./busqueda-evento.component.scss']
})
export class BusquedaEventoComponent implements OnInit {
  public eventos:Eventos;
  public group:Eventos[]; 
  public eventoHijo: Eventos;

  constructor(public userService:UserService, public eventosService:EventosService) {
    this.eventosService.getAll(this.userService.user.id_user).subscribe((data: Eventos[]) => {     
      let array=[]      
     
      
      for(let i =0;i<data.length;i++){
          for(let j=0;j<3;j++){
            
            console.log("cero tu puta madra cabron: " + data)
              // array[i][j].push(data)
              
          }
      }
      
      console.log(array)
      this.group = data;
      console.log(data)
    })
   }

  ngOnInit(): void {
  }

}
