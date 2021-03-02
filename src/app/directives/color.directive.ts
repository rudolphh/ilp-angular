import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ 
     selector: '[rowColorOnMouseOver]' 
})
export class RowColorOnMouseOverDirective {

   prevColor : string;

   constructor(private elRef: ElementRef) { 
       this.prevColor = this.elRef.nativeElement.style.backgroundColor;
   }

   @HostListener('mouseover') onMouseOver() {
     this.changeColor('#E5E47B', 'black');
   }

   @HostListener('mouseleave') onMouseLeave() {
     this.changeColor(this.prevColor, 'white');
   }

   private changeColor(color: string, textColor: string) {
     this.elRef.nativeElement.style.backgroundColor = color;
     this.elRef.nativeElement.style.color = textColor;
   }  
} 