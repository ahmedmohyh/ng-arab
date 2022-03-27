//class el 3omal xD:
import { Component } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
    selector:'app-root',
    template:`
    <input [(ngModel)]="username"/>
      <p>   Your user name is {{this.username}}</p>
      <p *ngIf="username">   Your user name is ngf</p>
      <p [hidden]="!username">   Your user name is without ngf </p>
      `,
})
export class AppFormsComponent{
  username:string = '';
}
