import { Component, OnInit, Input } from '@angular/core';
import { importType } from '@angular/compiler/src/output/output_ast';
import { FormGroup, FormControl, Validators, FormControlName} from '@angular/forms'
import { ListDataModel } from '../listDataModel';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ListMessageService } from '../list-message.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-single-input-modal',
  templateUrl: './single-input-modal.component.html',
  styleUrls: ['./single-input-modal.component.css']
})
export class SingleInputModalComponent implements OnInit {

  @Input() public data;

  modalForm:FormGroup

  constructor(private listService: ListMessageService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    // console.log(this.data)
    // this.modalForm.value._input = this.data.preFill
    this.modalForm = new FormGroup({
      _input: new FormControl(this.data.preFill,[Validators.required])
    })
  }


  get put(){return this.modalForm.get('_input')}

  onSubmit()
  {
    console.log("option in modal submit",this.data.option)
    switch(this.data.option)
    {
      case 0:
        this.addNewList(this.modalForm.value._input)
        break;
      case 1:
        this.editList(this.modalForm.value._input, this.data.listIndex)
        break;
      case 2:
        this.addNewTask(this.modalForm.value._input)
        break;
      case 3:
        this.editTask(this.modalForm.value._input, this.data.taskIndex)
        break;
      default:

    }
    this.cancel()
  }
  editList(_input: any, listIndex: any) {
    (this.listService.listArray[listIndex]).name = _input
  }

  addNewList(val)
  {
    let newList:ListDataModel = { name:val, tasks: []}
    console.warn(newList)
    this.listService.newList(newList)
    console.warn("submitted")
    console.log(val)
  }

  addNewTask(val)
  {
    let activeList = this.listService.getSelectedList()
    console.log("adding new list from modal",activeList)
    activeList.tasks.push(val)
  }

  editTask(val, index)
  {
    let curr = this.listService.getSelectedList()
    curr.tasks[index] = val
    this.listService.updateList(curr, this.listService.selectedIndex)
  }

  cancel()
  {
    this.activeModal.close()
  }
}
