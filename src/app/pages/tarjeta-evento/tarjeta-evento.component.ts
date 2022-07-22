import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
@Component({
  selector: 'app-tarjeta-evento',
  templateUrl: './tarjeta-evento.component.html',
  styleUrls: ['./tarjeta-evento.component.scss']
})
export class TarjetaEventoComponent implements OnInit {

  constructor(public userService: UserService) { }
 public tipo;
  ngOnInit(): void {
    this.tipo = this.userService.user.tipo
  }

}
