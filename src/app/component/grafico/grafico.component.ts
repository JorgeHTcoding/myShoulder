import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/shared/chat.service';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss']
})
export class GraficoComponent implements OnInit {
  public grafico:any;
  public animo:number;
  public ansiedad:number;
  public energia:number;
  constructor(public chatService:ChatService, public userService:UserService) { }

  ngOnInit(): void {
    console.log("ID USER EN EL GRAFICO: " + this.userService.user.id_user)
    this.getAnimo();

  }
  getAnimo(){
    this.chatService.getEstado(this.userService.user.id_user).subscribe((data:any)=>{
      this.grafico=data;
      console.log(this.grafico)
      
      let medAnimo=0;
      let medAnsiedad=0;
      let medEnergia=0;
      for (let estado of this.grafico){
        medAnimo+=estado.animo;
        medAnsiedad+=estado.ansiedad;
        medEnergia+=estado.energia;
      }    
      this.animo=medAnimo/this.grafico.length;
      this.ansiedad=medAnsiedad/this.grafico.length;
      this.energia=medEnergia/this.grafico.length;
    
    })
    
  }
}
