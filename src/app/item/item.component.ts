import { ItemDetailsComponent } from './../item-details/item-details.component';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent  {
/*   pushedFromChild: string = '';
  itemtitleinParent:string = '';
  @ViewChild('mychild')
  mychild!: ItemDetailsComponent; */

  @Input() title:string = '';
  @Output() titleChange: EventEmitter<string> = new EventEmitter();
  constructor() {
    /* setTimeout(() => {
      this.mychild.setTitle(this.mychild.itemTitleChild);
    }, 3000); */
  }

}
