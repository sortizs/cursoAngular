import { Component } from '@angular/core';
import { ChatService } from 'src/app/providers/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private _cs: ChatService) { }

  login(provider: string) {
    console.log(provider);
    this._cs.login(provider);
  }

}
