//class el 3omal xD:
import { Component } from "@angular/core";
import { environment } from "src/environments/environment";
interface Student{
  name:string;
  id:number;
}
@Component({
    selector:'app-root',
    templateUrl:'./app.Component.html',
})
export class AppForComponent{
 students:Array<Student>;
 constructor() {
   this.students=[
     {id:1, name:'ahmed'},
     {id:2, name:'mido'},
     {id:3, name:'mousa'}
   ];
 }
 Refresh(){
  this.students=[
    {id:1, name:'ahmed'},
    {id:2, name:'mido'},
    {id:3, name:'mousa'},
    {id:4, name:'Sa33e'}
  ];
 }
 track(idx:number , student:Student){
return student.id;

 }
}
