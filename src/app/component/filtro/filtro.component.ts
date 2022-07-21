import { Component, OnInit } from '@angular/core';
import { Filtro } from 'src/app/models/filtro';
import { FiltroService } from 'src/app/shared/filtro.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {
public filtro:Filtro;

  constructor(public filtroService:FiltroService) { }
  
  ngOnInit(): void {
  }
  onSubmit2(form:NgForm){
    
    console.log("entramos al onSubmit")
    console.log("esta es la localidad: " + form.value.localidad)
       
    this.filtroService.getFiltro(form.value).subscribe((data:any) => {  
      console.log(data)      
      this.filtroService.filtrado = data;
    })
  }
  }

