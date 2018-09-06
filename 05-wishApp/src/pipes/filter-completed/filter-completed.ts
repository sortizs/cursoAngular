import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../../models/lista.model';

@Pipe({
  name: 'filterCompleted',
  pure: false
})
export class FilterCompletedPipe implements PipeTransform {
  transform(lists: List[], completed: boolean) {
    return lists.filter(list => {
      return list.terminada === completed;
    });
  }
}
