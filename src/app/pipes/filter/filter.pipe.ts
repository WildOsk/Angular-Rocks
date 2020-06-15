import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(bandas: any[], banda: string): any[] {
    if(!bandas) return [];
    if(!banda) return bandas;

    banda = banda.toLowerCase();
        return bandas.filter( it => {
        return it.nombre.toLowerCase().includes(banda);
    });
   }
}