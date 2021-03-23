import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  //used to have this pipe to update on each change
  // pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: String): any {
    if(value.length === 0 || !filterString) return value;
    const resultArray = [];
    for(const item of value) {
      if(item.status === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
