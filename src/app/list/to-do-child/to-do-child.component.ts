import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ListMessageService } from '../list-message.service';
import { ListDataModel } from '../listDataModel';
import { CurrentUserService } from 'src/app/Services/current-user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SingleInputModalComponent } from '../single-input-modal/single-input-modal.component';

@Component({
  selector: 'app-to-do-child',
  templateUrl: './to-do-child.component.html',
  styleUrls: ['./to-do-child.component.css', '../to-do/to-do.component.css']
})
export class ToDoChildComponent implements OnInit {

  @Input() data

  selectedIndex = -1
  listObj:ListDataModel = {name: "", tasks: []}
  toDo:Array<string> = []

  constructor(
    private router:Router, 
    private listService:ListMessageService, 
    private currentUser:CurrentUserService,
    private modalService: NgbModal) 
  { 
    listService.lists$.subscribe(() => {
      console.log("Child Subscriber")
      console.log(this.selectedIndex)
    })
    console.log("this is data",this.data)
    listService.index$.subscribe(i => {
      console.log("addda")
      this.selectedIndex = i
      this.listObj = listService.getSelectedList()
      console.log(this.listObj)
      
      this.toDo = this.listObj? this.listObj.tasks:[];
      
      console.log("Index Subscribe",this.listObj)
    })

    this.listObj = this.listService.getSelectedList()
    //console.log("listObj",this.listObj)
    if (this.listObj != null)
    {
      this.toDo = this.listObj.tasks
    }
  }

  ngOnInit(): void {
  }

  isEmpty()
  {
    if(this.toDo.length == 0)
    {
      return true
    }
    return false
  }

  taskClick()
  {

  }

  newTask()
  {
    this.data.head = "CREATE A NEW TASK"
    this.data.placeholder = "Enter task name."
    this.data.preFill = ""
    this.data.option = 2;
    const modalRef = this.modalService.open(SingleInputModalComponent,{centered:true});
    modalRef.componentInstance.data = this.data;
    //this.router.navigate(['./list/newTask'])
  }

  deleteTask(index)
  {
    if(confirm("Are you sure you want to Delete this item")) 
    {
      if (this.listObj.tasks.length - 1 == index)
      {
        this.listObj.tasks.pop()
      }
      else
      {
        this.listObj.tasks[index] = this.listObj.tasks[this.listObj.tasks.length - 1]
        this.listObj.tasks.pop()
      }
    }
  }

  editTask(val)
  {
    this.data.head = "EDIT TASK"
    this.data.placeholder = "Enter task name."
    this.data.preFill = this.toDo[val]
    this.data.taskIndex = val
    this.data.option = 3;
    const modalRef = this.modalService.open(SingleInputModalComponent,{centered:true});
    modalRef.componentInstance.data = this.data;
    //this.router.navigate(['./list/editTask', {task: val}]);
  }

}
