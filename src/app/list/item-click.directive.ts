import { Directive, ElementRef, HostListener, NgModule } from '@angular/core';

@Directive({
  selector: '[appItemClick]'
})
export class ItemClickDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click') onClick()
  {
    if (this.el.nativeElement.style.backgroundColor == 'rgb(238, 238, 238)')
    {
      this.el.nativeElement.style.backgroundColor = 'white'
    }
    else
    {
      this.styleIt();
    }
  }

  private styleIt()
  {
    // console.log("hahahhaha")
    
    this.el.nativeElement.style.backgroundColor = 'rgb(238, 238, 238)'
    
    
    // background-color: rgb(248, 248, 248);
    // border-radius: 0px -10px -10px 0px;
  }

}