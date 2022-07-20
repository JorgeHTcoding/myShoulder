import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { Eventos } from 'src/app/models/eventos';
import { EventosService } from 'src/app/shared/eventos.service';
import { GeventosService } from 'src/app/shared/geventos.service';
import { Gevento } from 'src/app/models/gevento.model';

@Component({
  selector: 'app-admin-eventos-fam-anfi',
  templateUrl: './admin-eventos-fam-anfi.component.html',
  styleUrls: ['./admin-eventos-fam-anfi.component.scss']
})

export class AdminEventosFamAnfiComponent implements OnInit {
  public eventos:Eventos;
  
  public group:Gevento[]; 
  public eventoHijo: Eventos;
  public groupShown: any;
  public itGroup: number;



  constructor(public geventosService:GeventosService, public userService: UserService, public eventosService:EventosService) {
    this.itGroup = 0;
   }


  ngOnInit(): void {

    console.log("id user: " + this.userService.user.id_user)
      this.geventosService.getAllAnfitrion(this.userService.user.id_user).subscribe( (data: Gevento[]) => {
        
        console.log(data)
        this.group = data;
        this.setGropShown();
    },

    (err: HttpErrorResponse) => {
      console.log("error on parsing: " + err.message);})
    
  }  


  setGropShown() {

    this.groupShown = this.group.slice(this.itGroup * 3, (this.itGroup + 1) * 3);
    console.log("group al tirar de funcion: " + this.group)
  }
  previous() {
    if (this.itGroup != 0) {
      this.itGroup = this.itGroup - 1;
      this.setGropShown();
    }
  }
  next() {
    if (((this.itGroup + 1) * 3) < this.group.length) {
      this.itGroup = this.itGroup + 1;
      this.setGropShown();
    }
  }

}
