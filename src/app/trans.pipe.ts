import {Pipe, PipeTransform} from '@angular/core';
import {i18n} from './globals';

@Pipe({
  name: 'trans'
})
export class TransPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if (i18n.has(value.toLowerCase())) {
      return i18n.get(value.toLowerCase());
    } else {
      return value;
    }

  }

}
