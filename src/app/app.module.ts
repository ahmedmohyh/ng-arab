//Class el modeer xD:
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppFormsComponent } from './app.FormsComponent';
import { AppForComponent } from './app.ForComponent';
import { ngSwitchComponent } from './app.ngSwtichComponent';
import { ItemComponent } from './item/item.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { SvgComponent } from './svg/svg.component';

@NgModule({
    declarations:[
        AppComponent,
        AppFormsComponent,
        AppForComponent,
        ngSwitchComponent,
        ItemComponent,
        ItemDetailsComponent,
        SvgComponent
    ],
    imports:[BrowserModule,FormsModule],
    bootstrap:[AppForComponent]
})
export class AppModule{}
