import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-chat',
  templateUrl: './modal-chat.component.html',
  styleUrls: ['./modal-chat.component.scss']
})
export class ModalChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show:boolean = false;

}
