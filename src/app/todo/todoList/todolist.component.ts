import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/tasks';

@Component({
  selector: 'todo-list',
  templateUrl: './todolist.component.html',
  styleUrls:['./todolist.component.css']
})
export class TodoList {
  @Input() list:Task[];
  @Input() showselectedTask:String;
  @Output() deleteNotify:EventEmitter<Task> = new EventEmitter<Task>();
  @Output() editText:EventEmitter<Task> = new EventEmitter<Task>();
  @Output() textEdited:EventEmitter<Task> = new EventEmitter<Task>();
  @Output() taskComplete:EventEmitter<Task> = new EventEmitter<Task>();

    sendMessage(task:Task) {
      this.deleteNotify.emit(task);
    }
    doubleClick(task:Task) {
      this.editText.emit(task);
    }
    edited(task:Task) {
      this.textEdited.emit(task);
    }
    markCompleted(task:Task) {
      this.taskComplete.emit(task);
    }
}
