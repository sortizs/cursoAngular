import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    let url: string = 'https://api.spotify.com/v1/';
    let token: string =
      'BQBlDjZTHsX1gq2zmgt_lFSIRmfX4SESDyYu2ca0q13AXIl8mUfz4SGtmUK_iN3d1dccMw0L5gccFtV6er0';

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get(`${url}${query}`, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(
      map(data => data['albums'].items),
    );
  }

  getArtist(artist: string) {
    return this.getQuery(`search?q=${artist}&type=artist&limit=20`).pipe(
      map(data => data['artists'].items),
    );
  }
}
