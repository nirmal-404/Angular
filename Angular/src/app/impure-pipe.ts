import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impure',
})
export class ImpurePipe implements PipeTransform {

  transform(value: any): any {
    return new Date().toLocaleTimeString();
  }

}
