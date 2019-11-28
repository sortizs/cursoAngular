import { Component, OnInit } from '@angular/core';
import { Marker } from 'src/app/entities/marker.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { EditComponent } from './edit.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public markers: Marker[] = [];

  public lat = 6.183393;
  public lng = -75.585855;

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) {
    if (localStorage.getItem('markers')) {
      this.markers = JSON.parse(localStorage.getItem('markers'));
    }
  }

  ngOnInit() {
  }

  addMarker(event) {
    console.log(event);
    const coords: { lat: number, lng: number } = event.coords;
    const newMarker = new Marker(coords.lat, coords.lng);
    this.markers.push(newMarker);
    this.saveStorage();
    this.snackBar.open('Marker saved', 'Close', { duration: 1000 });
  }

  saveStorage() {
    localStorage.setItem('markers', JSON.stringify(this.markers));
  }

  deleteMarker(i: number) {
    this.markers.splice(i, 1);
    this.saveStorage();
    this.snackBar.open('Marker saved', 'Close', { duration: 1000 });
  }

  editMarker(marker: Marker) {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '250px',
      data: { title: marker.title, desc: marker.desc }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (!result) {
        return;
      }

      marker.title = result.title;
      marker.desc = result.desc;

      this.saveStorage();
      this.snackBar.open('Marker updated', 'Close', { duration: 1000 });
    })
  }

}
