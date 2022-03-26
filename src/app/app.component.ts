//class el 3omal xD:
import { Component } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
    selector:'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent{
    constructor(){
    alert(`hi there i am in the ${environment.x} Mode`)
    console.log(`i am in ${environment.x} mode`);
    }

}
