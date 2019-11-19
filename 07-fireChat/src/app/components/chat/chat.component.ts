import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  message: string = '';
  element: any;

  constructor(public _cs: ChatService) {
    _cs.loadMessages().subscribe(
      () => {
        setTimeout(() => {
          this.element.scrollTop = this.element.scrollHeight;
        }, 1000);
      }
    );
  }

  ngOnInit() {
    this.element = document.getElementById('app-mensajes');
  }

  sendMessage() {
    console.log(this.message);

    if (this.message.length === 0) { return; }

    this._cs.addMessage(this.message)
      .then(() => this.message = '')
      .catch((err) => console.log('Error sending.', err));

  }

}
