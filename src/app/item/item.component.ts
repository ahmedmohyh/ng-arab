import { ItemDetailsComponent } from './../item-details/item-details.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent  {
  pushedFromChild: string = '';
  itemtitleinParent:string = '';
  @ViewChild('mychild')
  mychild!: ItemDetailsComponent;
  constructor() {
    setTimeout(() => {
      this.mychild.setTitle(this.mychild.itemTitleChild);
    }, 3000);
  }

}
