import { Component } from '@angular/core';
import { Task } from '../models/tasks';

@Component({
  selector: 'todo',
  templateUrl: 'app/todo/todo.component.html',
  styleUrls:['./todo.component.css']
})
export class Todo {
  taskName:string;
  private task:Task[]=[];

  addTask(){
    this.task.push({taskname:this.taskName,
                editable:false,
                complete:false,
              });
    this.taskName='';
  }
  deleteTask(task:Task){
    this.task.splice(this.task.indexOf(task),1);
  }
  makeEditable(task:Task) {
    this.task.forEach(obj => {
      if(obj === task) {
        obj.editable =true;
      }
    });
  }
  taskUpdated(task:Task) {
    this.task.forEach(obj => {
      if(obj === task) {
        obj.editable =false;
      }
    });
  }
  taskStatus(task:Task) {
     this.task.forEach(obj => {
      if(obj === task) {
        obj.complete =!obj.complete;
      }
    });
  }
}
