import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Eventos } from 'src/app/models/eventos';
import { GeventosService } from 'src/app/shared/geventos.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';



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
    let count = 0;

    console.log("este es el data: " + data)

      for(let i=0; i<data.length; i++) {
        for(let j=0; j<3; j++) {
          array[i][j].push(data[count]) 
          count ++
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
  
