//class el 3omal xD:
import { Component } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
    selector:'app-root',
    template:`
    <p [style]="colors">hi my name is  {{this.name}} and my age is {{this.getAge()}}
      {{this.getAge() === 25 ? \'x' : 'y'}}</p>
      <button type="button" (click)="doSomething()" [disabled]="!username">do Someting</button>
      <input [value]="username" (input)="username = $any($event.target).value"/>
      <p [style.color]="username ? 'blue':'green'">   Your user name is {{this.username}}</p>
      <br>
      <img [style]="username? 'height:30px;width:20px' : 'height:50px;width:40px'" src="{{imgSrc}}" />
      `,
})
export class AppComponent{
  imgSrc:string='https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?cs=srgb&dl=pexels-nextvoyage-1461974.jpg&fm=jpg';
  username:string = '';
  colors:string ='color:red';
  name:string = 'angualr';
    constructor(){
    //alert(`hi there i am in the ${environment.x} Mode`)
    console.log(`i am in ${environment.x} mode`);
    }
    getAge(){
      return 25;
    }
    doSomething(){
      console.log('just logging');
    }

}
