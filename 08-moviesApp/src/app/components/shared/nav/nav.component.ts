import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {

  constructor(private _r: Router) { }

  ngOnInit() { }

  search(query: string) {
    if (query.length == 0) { return ; }
    
    this._r.navigate(['/search', query]);
  }

}
