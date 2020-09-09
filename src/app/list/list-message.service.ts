import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject} from 'rxjs';
import { ListDataModel } from './listDataModel'
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Injectable({
  providedIn: 'root'
})
export class ListMessageService {

    //Variables
  listArray:ListDataModel[] = []
  selectedIndex = -1

    // Observable string sources
  private listsSource = new Subject<ListDataModel>();
  private index = new Subject<number>();

  // Observable string streams
  lists$ = this.listsSource.asObservable();
  index$ = this.index.asObservable();

  // Service message commands
  newList(list: ListDataModel) 
  {
    this.listArray.push(list);
    this.listsSource.next(list);
  }

  listIndex(index: number)
  {
    console.log("in listIndex func",index)
    this.selectedIndex = index
    this.index.next(index);
  }

  getAllLists():ListDataModel[]
  {
    console.log("In Message Service",this.listArray)
    return this.listArray;
  }

  getSelectedList()
  {
    if(this.selectedIndex >= 0)
    {
      return this.listArray[this.selectedIndex]
    }
    return null
  }

  updateList(list:ListDataModel,index)
  {
    this.listArray[index] = list;
  }
}
