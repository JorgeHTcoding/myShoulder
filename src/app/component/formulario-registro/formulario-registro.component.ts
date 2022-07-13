import { Component, OnInit } from '@angular/core';

import { RegistroService } from 'src/app/shared/registro.service';
import { FormGroup, NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { Registro } from 'src/app/models/registro';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.scss']
})
export class FormularioRegistroComponent implements OnInit {
public myForm: FormGroup;
public user: User;
public registro: Registro;
public passCheck: string = "Las contraseñas no coinciden";

  constructor(public registroService:RegistroService) { 
    this.user = new User("","","","","",0,"","","","","","","");
    this.registro = new Registro(this.user,"")
  }
  modalAfir2:boolean=false;
  onSubmit(form:NgForm){  
      
      let passvalue = form.value.password;
      console.log(passvalue)
    
      console.log(form.value)
   
    if(passvalue != this.registro.pass2){    
      
      console.log(this.registro.pass2 + " pass2")
      console.log("Las contraseñas no coinciden")
    }else{
      console.log("valores form: " + form.value)
      this.registroService.registrar(form.value).subscribe((data:User)=>{
        console.log(data)
       
      })
    }
  }
  

  ngOnInit(): void {
  }

}
