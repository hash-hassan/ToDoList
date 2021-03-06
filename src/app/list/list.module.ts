import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ListRoutingModule } from './list-routing.module';
import { ToDoComponent } from './to-do/to-do.component';
import { ItemClickDirective } from './item-click.directive';
import { ToDoChildComponent } from './to-do-child/to-do-child.component';
import { ListMessageService } from './list-message.service';
import { SingleInputModalComponent } from './single-input-modal/single-input-modal.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [ToDoComponent, ItemClickDirective, ToDoChildComponent, SingleInputModalComponent, HeaderComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: []
})
export class ListModule { }
