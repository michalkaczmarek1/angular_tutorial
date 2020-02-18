import { Pipe, PipeTransform } from '@angular/core';
import { utf8Encode } from '@angular/compiler/src/util';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    const limit = args || 1;
    return `${value.slice(0, limit).toUpperCase()}${value.slice(limit).toLowerCase()}`;
  }

}
