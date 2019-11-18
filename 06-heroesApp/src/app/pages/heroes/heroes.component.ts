import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroeModel } from 'src/app/models/heroe.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel[] = [];
  loading: boolean = false;

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.loading = true;
    this.heroesService.getHeroes()
      .subscribe(resp => {
        this.heroes = resp;
        this.loading = false;
      });
  }

  deleteHeroe(heroe: HeroeModel, i: number) {

    Swal.fire({
      title: 'Are you sure?',
      text: `Are you sure you want to delete ${heroe.name}`,
      icon: 'question',
      showCancelButton: true,
      showConfirmButton: true
    }).then(resp => {
      if (resp.value) {
        this.heroesService.deleteHeroe(heroe.id).subscribe();
        this.heroes.splice(i, 1);
      }
    })

  }

}
