//Class el modeer xD:
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppFormsComponent } from './app.FormsComponent';

@NgModule({
    declarations:[
        AppComponent,
        AppFormsComponent
    ],
    imports:[BrowserModule,FormsModule],
    bootstrap:[AppFormsComponent]
})
export class AppModule{}
