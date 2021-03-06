import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { GeventosService } from 'src/app/shared/geventos.service';
import { Gevento } from 'src/app/models/gevento.model';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-gestionar-evento',
  templateUrl: './gestionar-evento.component.html',
  styleUrls: ['./gestionar-evento.component.scss']
})
export class GestionarEventoComponent implements OnInit {

  public gevento:Gevento;

  constructor(public geventosService: GeventosService, public userService:UserService, public router:Router){}

  @Input() evento:Gevento 

public tipo;
  modalNoIr:boolean=false;
  modalIr:boolean=false;

  ngOnInit(): void {
this.tipo = this.userService.user.tipo
    // mostrarOne(id_evento:number){
      this.gevento 

      console.log("PASO POR NGONINIT")
      console.log(this.geventosService.evento.id_eventos)
      
      this.geventosService.getOneAdminEven(this.geventosService.evento.id_eventos).subscribe((data:Gevento[]) => ///// Cambiar!!! hardcodeado
      {
        this.gevento = data[0]
        console.log("this.gevento es :" + this.gevento)
      })
    }

    eliminar(id_eventos: number) { 
      let IDeventos: number = id_eventos;
      console.log(IDeventos + "dentro del enviar")
      if (id_eventos != null) {
        this.geventosService.eliminar(this.geventosService.evento.id_eventos).subscribe((data:Gevento[]) => 
        { 
           this.gevento = data[0]
            console.log(data)
        })

        if(this.userService.user.tipo == "familiar"){
          this.router.navigateByUrl('/admin-eventos-fam-anfi')
        }
        if(this.userService.user.tipo == "profesional"){
          this.router.navigateByUrl('/administrar-eventos-pro')
        }

      }
    }

    modificar(){
      this.geventosService.modificar(this.gevento).subscribe((data:Gevento[])=>{
        // this.user.push(data)
        console.log(data + "data del put del gevento")
      })
      if(this.userService.user.tipo == "familiar"){
        this.router.navigateByUrl('/admin-eventos-fam-anfi')
      }
      if(this.userService.user.tipo == "profesional"){
        this.router.navigateByUrl('/administrar-eventos-pro')
      }
    }
  }

  //   modificar(id_eventos:number,img:string,localidad:string,direccion:string,descripcion:string,fecha:string)
  //   {   
          
  //     let nuevoGevento = new Gevento (id_eventos,0,"", localidad,direccion,descripcion,0,"",fecha,img );
    
  //     this.geventoService.modificar(nuevoGevento).subscribe((data:Gevento[]) =>{
  //      this.gevento.push(data)

  //    })
  // }
