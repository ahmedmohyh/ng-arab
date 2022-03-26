//class el 3omal xD:
import { Component } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
    selector:'app-root',
    template:`
    <p [style]="colors">hi my name is  {{this.name}} and my age is {{this.getAge()}}
      {{this.getAge() === 25 ? \'x' : 'y'}}</p>
      <button type="button" (click)="doSomething()">do Someting</button>
      <input [value]="username" (input)="username = $any($event.target).value"/>
      <p> Your user name is {{this.username}}</p>
      `,
})
export class AppComponent{
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
