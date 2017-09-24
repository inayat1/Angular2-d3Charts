import { Component } from '@angular/core';
import { Task } from '../models/tasks';

@Component({
  selector: 'todo',
  templateUrl: 'app/todo/todo.component.html',
  styleUrls:['./todo.component.css']
})
export class Todo {
  private taskName:String;
  private task:Task[]=[];
  private categorySelected:String='all';

  addTask(){
    this.task = [...this.task,{taskname:this.taskName,
                editable:false,
                complete:false,
              }];
   //this.task.push({taskname:this.taskName,
    //          editable:false,
      //      complete:false,
        //    });
    this.taskName='';
  }
  deleteTask(task:Task){
    this.task = this.task.filter(obj => obj.taskname != task.taskname)
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
     this.task = this.task.map(obj => {
      if(obj === task) {
        obj.complete =!obj.complete;
      }
      return obj;
    });
  }

  updateCategory (category:String) {
    this.categorySelected = category;
  }

  deleteCompletedTasks() {
    this.task = this.task.filter(obj => !obj.complete);
  }
}
