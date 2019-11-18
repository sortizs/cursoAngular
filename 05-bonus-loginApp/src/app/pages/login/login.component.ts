import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel;
  rememberMe = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
    if (localStorage.getItem('email')) {
      this.usuario.email = localStorage.getItem('email');
      this.rememberMe = true;
    }
  }

  login(form: NgForm) {
    if (!form.valid) { return; }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();

    this.auth.login(this.usuario)
      .subscribe(
        data => {
          console.log(data);
          Swal.close();
          if (this.rememberMe) {
            localStorage.setItem('email', this.usuario.email);
          }
          this.router.navigateByUrl('/home');
        },
        err => {
          Swal.fire({
            icon: 'error',
            title: 'Error al autenticar',
            text: err.error.error.message
          });
        }
      );
  }

}
