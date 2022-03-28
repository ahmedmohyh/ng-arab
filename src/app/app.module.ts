//Class el modeer xD:
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppFormsComponent } from './app.FormsComponent';
import { AppForComponent } from './app.ForComponent';
import { ngSwitchComponent } from './app.ngSwtichComponent';

@NgModule({
    declarations:[
        AppComponent,
        AppFormsComponent,
        AppForComponent,
        ngSwitchComponent
    ],
    imports:[BrowserModule,FormsModule],
    bootstrap:[ngSwitchComponent]
})
export class AppModule{}
