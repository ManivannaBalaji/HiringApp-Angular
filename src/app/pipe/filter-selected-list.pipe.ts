import { Pipe, PipeTransform } from '@angular/core';
import { SelectionService } from '../service/selection.service';

@Pipe({
  name: 'filterSelectedList'
})
export class FilterSelectedListPipe implements PipeTransform {

  transform(selectedList: any, sortOrder: string, job: string, location: string): any {
    let filteredList : any;
   if(job === '' && location === ''){
    return this.performSorting(sortOrder, selectedList);
   } else {
    return selectedList.filter(function(obj : any) {
      return obj.jobtitle.toLowerCase().includes(job.toLowerCase()) && obj.location.toLowerCase().includes(location.toLowerCase());
    });
   }
  }

  performSorting(sortOrder : any, selectedList : any){
    if(sortOrder === 'ascending'){
      return this.sortAscending(selectedList);
    } else if(sortOrder === 'descending'){
      return this.sortDescending(selectedList);
    } else{
      return selectedList;
    }
  }

  sortAscending(selectedList : any){
    selectedList.sort(function (a: any, b: any) {
      return ((parseInt(a.score) < parseInt(b.score)) ? -1 : ((parseInt(a.score) > parseInt(b.score)) ? 1 : 0));
    });
    return selectedList;
  }

  sortDescending(selectedList : any){
    selectedList.sort(function (a: any, b: any) {
      return ((parseInt(a.score) > parseInt(b.score)) ? -1 : ((parseInt(a.score) < parseInt(b.score)) ? 1 : 0));
    });
    return selectedList;
  }

}
