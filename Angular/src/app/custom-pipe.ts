import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {
  transform (value: any, ...args: any[]): any {
    if (value == '' || value == null || value == undefined) {
      return 'NA'
    } else {
      return value ? '+94 ' + value : value
    }
  }
}
