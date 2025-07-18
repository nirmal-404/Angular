import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  private DatePipe = new DatePipe('en-US')
  transform(value: any, ...args: any[]): any {
    return this.DatePipe.transform(value, 'dd-MM-yy')
  }

}
