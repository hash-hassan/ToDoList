import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoChildComponent } from './to-do-child.component';

describe('ToDoChildComponent', () => {
  let component: ToDoChildComponent;
  let fixture: ComponentFixture<ToDoChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
