import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

import { HeroesService } from 'src/app/services/heroes.service';
import { HeroeModel } from 'src/app/models/heroe.model';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: HeroeModel = new HeroeModel();

  constructor(private heroesService: HeroesService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'new') {
      this.heroesService.getHeroe(id)
        .subscribe((resp: HeroeModel) => {
          this.heroe = resp;
          this.heroe.id = id;
        });
    }
  }

  saveHeroe(form: NgForm) {
    if (form.invalid) {
      console.log('Invalid form');
      return;
    }

    Swal.fire({
      title: 'Please wait',
      text: 'Storing information',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();
    let petition: Observable<any>;

    if (this.heroe.id) {
      petition = this.heroesService.updateHeroe(this.heroe);
    } else {
      petition = this.heroesService.createHeroe(this.heroe);
    }

    petition.subscribe(() => {
      Swal.fire({
        title: this.heroe.name,
        text: 'Correctly updated',
        icon: 'success'
      })
    })


  }

}
