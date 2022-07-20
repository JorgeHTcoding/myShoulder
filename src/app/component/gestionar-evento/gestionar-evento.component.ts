import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { GeventosService } from 'src/app/shared/geventos.service';
import { Gevento } from 'src/app/models/gevento.model';

@Component({
  selector: 'app-gestionar-evento',
  templateUrl: './gestionar-evento.component.html',
  styleUrls: ['./gestionar-evento.component.scss']
})
export class GestionarEventoComponent implements OnInit {

  public gevento:Gevento;

  constructor(public geventoService: GeventosService){}

  @Input() evento:Gevento 


  modalNoIr:boolean=false;
  modalIr:boolean=false;

  ngOnInit(): void {

    // mostrarOne(id_evento:number){
      this.gevento 
      
      this.geventoService.getOne(19).subscribe((data:Gevento[]) => ///// Cambiar!!! hardcodeado
      {
        this.gevento = data[0]
        console.log("this.gevento es :" + this.gevento)
      })
    }

    // eliminar(id_eventos: number) { 
    //   let IDeventos: number = id_eventos;
    //   console.log(IDeventos + "dentro del enviar")
    //   if (id_eventos != null) {
    //     this.geventoService.eliminar(19).subscribe((data:Gevento[]) => ///// Cambiar!!! hardcodeado
    //     { 
    //        this.gevento = data[0]
    //         console.log(data)
    //     })
  
    //   }
    // }

    // modificar(){
    //   this.geventoService.modificar(this.gevento).subscribe((data:Gevento[])=>{
    //     // this.user.push(data)
    //     console.log(data + "data del put del gevento")
    //   })
    // }}

  //   modificar(id_eventos:number,img:string,localidad:string,direccion:string,descripcion:string,fecha:string)
  //   {   
          
  //     let nuevoGevento = new Gevento (id_eventos,0,"", localidad,direccion,descripcion,0,"",fecha,img );
    
  //     this.geventoService.modificar(nuevoGevento).subscribe((data:Gevento[]) =>{
  //      this.gevento.push(data)

  // })
  }
