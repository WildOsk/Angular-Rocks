import { Pipe, PipeTransform,Injectable } from '@angular/core';
import {DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';

@Pipe({
  name: 'youtube'
})
@Injectable()
export class VideoPipe implements PipeTransform {

  constructor(private dom:DomSanitizer){

  }

  transform(value: string, url:string = ''): any {

    return this.dom.bypassSecurityTrustResourceUrl( url + value );

  }
}
