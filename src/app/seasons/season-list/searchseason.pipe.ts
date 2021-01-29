import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchseason'
})
export class SearchseasonPipe implements PipeTransform {

  transform(items: any[], searchText: string, name: string): any[] {

    // return empty array if array is falsy
    if (!items) { return []; }

    // return the original array if search text is empty
    if (!searchText) { return items; }

    // convert the searchText to lower case
    // searchText = searchText.toLowerCase();

    // retrun the filtered array
    return items.filter(item => {
      if (item && item[name]) {
        return item[name].toLowerCase().includes(searchText.trim());
      }
      return false;
    });
   }

}
