import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSelectedList'
})
export class FilterSelectedListPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
