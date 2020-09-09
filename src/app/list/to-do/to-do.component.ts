import { Component, OnInit, DoCheck, ViewChild, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { ListMessageService } from '../list-message.service'
import { SingleInputModalComponent } from '../single-input-modal/single-input-modal.component'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ListDataModel } from '../listDataModel'
import { CurrentUserService } from 'src/app/current-user.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})

export class ToDoComponent implements OnInit, OnChanges {


  constructor(
    private router:Router, 
    private listService:ListMessageService, 
    private currentUser:CurrentUserService,
    private modalService: NgbModal) 
  { }

  arr:ListDataModel[] = []
  selectedIndex = -1
  
  data = {
    head: "",
    placeholder: "",
    preFill: "",
    listIndex: -1,
    taskIndex: -1,
    option: -1
  }

  ngOnInit(): void {
    
    this.arr = this.listService.getAllLists();
    if (this.arr.length > 0)
    {
      this.selectedIndex = 0
      console.log("called from onInit")
      this.listService.listIndex(0)      
    }
    else
    {
      console.log("called from onInit else")
      this.listService.listIndex(-1)
    }
    console.log(this.data)
  }

  ngOnChanges()
  {
    console.log("this is changed data",this.data)
  }

  newList()
  {
    this.data.head = "CREATE A NEW LIST"
    this.data.placeholder = "Enter list name."
    this.data.preFill = ""
    this.data.option = 0;
    console.log(this.data)
    const modalRef = this.modalService.open(SingleInputModalComponent,{centered:true});
    modalRef.componentInstance.data = this.data;
    //this.router.navigate(['./list/new'])
  }

  itemClick(index)
  {
    console.log(index)
    console.log("called from itemClick")
    this.listService.listIndex(index)
    //this.selectedIndex = item
    //ToDoComponent.selected = this.selectedIndex;
  }

  signOut()
  {
    this.currentUser.clear()
    this.router.navigate(['/'])
  }

  deleteTask(index)
  {
    if(confirm("Are you sure you want to Delete this item")) 
    {
      if (this.listService.listArray.length - 1 == index)
      {
        this.listService.listArray.pop()
        this.listService.listIndex(this.listService.listArray.length > 0 ? 0 : -1)
      }
      else
      {
        this.listService.listArray[index] = this.listService.listArray[this.listService.listArray.length - 1]
        this.listService.listArray.pop()
        this.listService.listIndex(0)
      }
    }
  }

  editTask(val)
  {
    this.data.head = "EDIT LIST"
    this.data.placeholder = "Enter list name."
    this.data.preFill = this.arr[val].name
    this.data.listIndex = val
    this.data.option = 1;
    const modalRef = this.modalService.open(SingleInputModalComponent,{centered:true});
    modalRef.componentInstance.data = this.data;
    //this.router.navigate(['./list/editList', {list: val}]);
  }

  isSelected(index)
  {
    return this.selectedIndex == index
  }
}