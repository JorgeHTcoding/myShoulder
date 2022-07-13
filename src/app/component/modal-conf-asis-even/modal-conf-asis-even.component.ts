import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-conf-asis-even',
  templateUrl: './modal-conf-asis-even.component.html',
  styleUrls: ['./modal-conf-asis-even.component.scss']
})
export class ModalConfAsisEvenComponent implements OnInit {

  constructor() { }
  eventos:any=[1,2,3]
  
  ngOnInit(): void {
  }
  popEvent(){
    this.eventos.pop(1)
    console.log("saintentao")
    console.log(this.eventos)
}

}
