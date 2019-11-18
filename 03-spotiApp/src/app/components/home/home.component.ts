import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  public newReleases: any[] = [];
  public loading: boolean;
  public error: boolean;
  public errorMessage: any = {};

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases().subscribe((data: any) => {
      this.newReleases = data;
      this.loading = false;
    }, (err) => {
      this.errorMessage = err;
      console.log(this.errorMessage);
      // console.log(this.errorMessage);
      this.loading = false;
      this.error = true;
    });
  }

  ngOnInit() {}
}
