import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  public artists: any[];
  public loading: boolean;

  constructor(private spotify: SpotifyService) {}

  search(searchString: string) {
    this.loading = true;

    this.spotify.getArtists(searchString).subscribe(data => {
      this.artists = data;
      this.loading = false;
    });
  }
}
