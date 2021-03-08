import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
//this is a better way to make directives because using renderer
//renderer not limited running in browser
//allows angular to use service workers
@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
  }
}
