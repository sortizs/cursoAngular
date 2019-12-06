import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'videourl'
})
export class VideourlPipe implements PipeTransform {

  constructor(private _ds: DomSanitizer) { }

  transform(value: string): any {
    const url = 'https://www.youtube.com/embed/';
    return this._ds.bypassSecurityTrustResourceUrl(url + value);
  }

}
