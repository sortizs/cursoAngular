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
      'BQBdSUWhX_TNfQVXWiwyUtnbbDR93nA7xkqSORrn9UKp1ur4t-SOIRlMyjQLuBhDRvjGD0Ks6vQ_moVlPDzT-LDcFdYT2a6njPsU9-mqPqa_AWE2omtcrcv6T6HHEjwcMG78NX3sOUmtSCTJ';

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

  getArtists(artist: string) {
    return this.getQuery(`search?q=${artist}&type=artist&limit=20`).pipe(
      map(data => data['artists'].items),
    );
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=co`).pipe(
      map(data => data['tracks']),
    );
  }
}
