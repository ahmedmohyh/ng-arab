import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent  {
  /* @Input()
  itemTitleChild!: string;
  @Output() eventFromChild: EventEmitter<string> = new EventEmitter(); */
  @Input() title:string = '';
  @Output() titleChange: EventEmitter<string> = new EventEmitter();
  constructor() { }
 /*  setTitle(title:string){
    console.log(`the title is ${title}`);
  } */
/* pushEvent(){
  this.eventFromChild.emit('i am here from the child');
} */
}
