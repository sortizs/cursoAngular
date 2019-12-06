import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private apiUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyD12Uu1NyTrsuwVGBXIG9vdwub9xbJc_B8';
  private playlist = 'PL-53GSjV53e5Mclk1PuQy5txsDzzR8cz7';
  private nextPageToken = '';

  constructor(private http: HttpClient) { }

  getVideos() {
    let url = `${this.apiUrl}/playlistItems`;

    const parameters = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '10')
      .set('playlistId', this.playlist)
      .set('key', this.apiKey);

    return this.http.get(url, { params: parameters }).pipe(
      map(result => {
        console.log(result);
        this.nextPageToken = result['nextPageToken'];
        let videos: any[] = [];
        for (const video of result['items']) {
          let snippet = video['snippet'];
          videos.push(snippet);
        }
        return videos;
      })
    );

  }
}
