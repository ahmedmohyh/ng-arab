import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent  {
  @Input()
  itemTitleChild!: string;
  constructor() { }
  setTitle(title:string){
    console.log(`the title is ${title}`);
  }


}
