import { Component } from "@angular/core";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html"
})
export class BodyComponent {
  mostrar = true;

  frase: any = {
    mensaje: "Este mundo no te deja ser bueno",
    autor: "Superman"
  };

  personajes: string[] = ['Batman', 'Flash', 'Lex Luthor'];
}
