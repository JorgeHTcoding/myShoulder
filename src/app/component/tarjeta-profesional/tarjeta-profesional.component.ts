import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ProfesionalesService } from 'src/app/shared/profesionales.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-tarjeta-profesional',
  templateUrl: './tarjeta-profesional.component.html',
  styleUrls: ['./tarjeta-profesional.component.scss']
})
export class TarjetaProfesionalComponent implements OnInit {
  public user:User[]; 
  @Input() tarjetaPadrePro:User;
  constructor(public userService:UserService, public profesionalesService:ProfesionalesService) {     
  }
  
  contacta:boolean=false;
  ngOnInit(): void {
    
  }

}
