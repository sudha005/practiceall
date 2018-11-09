import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substringPipe'
})
export class SubstringPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.length > 10 ? value.substring(0 , 10 ) : value ;
  }

}
