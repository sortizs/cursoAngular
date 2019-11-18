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
      'BQAZGzWJeQ2ghnSGDS8cS8mlnZhC4LLyeZI5Jr-5wUKGHpqC-UVpxL1SRCGc5g1l1YpkhG6FR1vpchwRf0VsfleUo01zr5MF62YV_7HMjbbYjQ8qqTA6i-mDd1x89AwlshfYtKjvjUDIXavQfXA';

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
