import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  public artists: any[];

  constructor(private spotify: SpotifyService) {}

  search(searchString: string) {
    console.log(searchString);
    this.spotify.getArtist(searchString).subscribe(data => {
      this.artists = data;
    });
  }
}
