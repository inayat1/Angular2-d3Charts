import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: 'app/todoList/todolist.component.html'
})
export class TodoList {
  @Input() list:any;
  @Output() deleteNotify:EventEmitter<string> = new EventEmitter<string>();

    sendMessage(task:any) {
      this.deleteNotify.emit(task)
    }
}
