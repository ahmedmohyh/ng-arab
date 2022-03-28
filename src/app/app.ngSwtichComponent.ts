//class el 3omal xD:
import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

import { environment } from "src/environments/environment";

@Component({
    selector:'app-root',
    templateUrl :'./app.component.html',
})
export class ngSwitchComponent{
/*   colors:Array<string>;
  selectedColor:string = ''; */
  /*   colors:Array<string>;
    selectedColor:string = ''; */
  @ViewChild('phone')
  myphone!: ElementRef<HTMLInputElement>;
  constructor(){
    setTimeout(()=>{
      console.log(this.myphone.nativeElement.value);
    },4000)
    //this.colors = ['red','green','blue'];
  }
}
