import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Eventos } from 'src/app/models/eventos';
import { GeventosService } from 'src/app/shared/geventos.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-mis-eventos-paciente',
  templateUrl: './mis-eventos-paciente.component.html',
  styleUrls: ['./mis-eventos-paciente.component.scss']
})


export class MisEventosPacienteComponent implements OnInit {
  public user:User;  
  public eventos:Eventos;
  public group:Eventos[]; 
  public eventoHijo: Eventos;


  constructor(public geventosService:GeventosService, public userService: UserService) { 

    this.geventosService.getAll(this.userService.user.id_user).subscribe( (data: Eventos[]) => {  
    let array=[]
   
    console.log("Informacion del Data: " + data)

      for(let i=0; i < data.length; i++) {  
        console.log("ME QUIERO PEGAR UN TIRO")
        for(let j=0; j<3; j++) {

          console.log("cero tu puta madre cabron: " + data)
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
  
