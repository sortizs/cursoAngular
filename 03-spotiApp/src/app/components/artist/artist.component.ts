import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [],
})
export class ArtistComponent {
  public artist: any = {};
  public topTracks: any[] = [];
  public loading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotify: SpotifyService,
  ) {
    activatedRoute.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtist(id: string) {
    this.loading = true;
    this.spotify.getArtist(id).subscribe(data => {
      this.artist = data;
      this.loading = false;
    });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe(data => {
      this.topTracks = data;
      console.log(this.topTracks);
    });
  }
}
