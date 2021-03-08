import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
//this is a better way to make directives because using renderer
//renderer not limited running in browser
//allows angular to use service workers

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  //on the element access style property of background color and set it equal to any background color.
  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    this.backgroundColor= this.defaultColor
  }

  //host listener to listen to the dom and changing the dom
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    this.backgroundColor = this.defaultColor;
  }

}
