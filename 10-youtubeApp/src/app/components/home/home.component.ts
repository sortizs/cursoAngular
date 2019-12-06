import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public videos: any[];
  public selVideo: any;

  constructor(private _ys: YoutubeService) {
    _ys.getVideos().subscribe(videos => this.videos = videos);
  }

  ngOnInit() {
  }

  viewVideo(video: any) {
    this.selVideo = video;
    $('#videoModal').modal('show');
  }

  closeModal(video: any) {
    this.selVideo = null;
    $('#videoModal').modal('hide');
  }
}
