import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Eventos } from 'src/app/models/eventos';
import { GeventosService } from 'src/app/shared/geventos.service';



@Component({
  selector: 'app-mis-eventos-paciente',
  templateUrl: './mis-eventos-paciente.component.html',
  styleUrls: ['./mis-eventos-paciente.component.scss']
})
export class MisEventosPacienteComponent implements OnInit {
  constructor(public geventosService:GeventosService) { }
  eventos=[1,2,3]
  prueba:any;
  mostrar:boolean=false;
  array_eventos:Eventos[];
  ngOnInit(): void {
    console.log("jEntramos al Getall")
    let a = this.geventosService.getAll().subscribe((data:Eventos[])=>{
      for(let i=0;i<data.length;i++){
        this.array_eventos[i]=data[i];
        
      }
      console.log(this.array_eventos)
    })
  }

  //  public borrarevento(id_evento:number){
  //   this.geventosService.getAll().subscribe((data:Eventos[])=>{
  //     console.log("Se ha eliminado")
  //     this.mostrar=true;
  //   }
  //  }
 

  
}
