import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'averageGrade'
})
export class AverageGradePipe implements PipeTransform {

  transform(items: any): any {
    let sum = 0;
    items.array.forEach(element => {
      sum = sum + element;
    });
    return sum / items.length;
  }

}
