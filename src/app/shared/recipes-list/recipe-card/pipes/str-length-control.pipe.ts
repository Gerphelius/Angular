import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strLengthControl'
})
export class StrLengthControlPipe implements PipeTransform {
  transform(value: string, maxStrLength: number): any {
    return value.length > maxStrLength ? `${value.slice(0, maxStrLength + 1)}...` : value;
  }
}
