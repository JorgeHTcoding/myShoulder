import { Component, EventEmitter, OnInit, Input} from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { CartaPreService } from 'src/app/shared/carta-pre.service';
import { ProfesionalesService } from 'src/app/shared/profesionales.service';
import { PacientesService } from 'src/app/shared/pacientes.service';
import { User } from 'src/app/models/user';
import { CartaPre } from 'src/app/models/carta-pre';
@Component({
  selector: 'app-modal-presentacion',
  templateUrl: './modal-presentacion.component.html',
  styleUrls: ['./modal-presentacion.component.scss']
})
export class ModalPresentacionComponent implements OnInit {
  @Input() tarjetaIdPro:number;
  public cartaPre: CartaPre;
  modalAfir:boolean=false;

 

  constructor(public userService:UserService, public cartaPreService:CartaPreService, public pacienteService:PacientesService) { }
  
 

  ngOnInit(): void {
  }
enviarCarta(carta:HTMLInputElement){  
  console.log("esto es el usuario: " + this.userService.user.id_user);
  console.log("esto no va a funcionar id profesional: " + this.tarjetaIdPro);
  console.log("esto es la carta a tu puta madre: " + carta.value)
  let cartaPresentacion = new CartaPre(this.userService.user.id_user ,"","","","","",null,"","","","","","","",null,this.tarjetaIdPro,carta.value,"","","");
   this.cartaPreService.postPresentacion(cartaPresentacion).subscribe((data:any)=>{
      console.log("data de la carta: " + data)
     
     
    })
  }
}

