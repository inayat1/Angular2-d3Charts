import { Component, OnInit } from '@angular/core';
import { Events } from '../events.service';

@Component({
  selector: 'todo',
  templateUrl: 'app/todo/todo.component.html'
})
export class Todo implements OnInit{
  taskName:string;
  totalTask:any;
  addTask(){
    this.evt.addEvent(this.taskName);
    this.taskName='';
  }
  deleteTask(task:any){
    this.evt.deleteEvent(task);
  }
  constructor(private evt:Events) {
  }
  ngOnInit () {
    this.totalTask=this.evt.getEventArr();
  }
}
