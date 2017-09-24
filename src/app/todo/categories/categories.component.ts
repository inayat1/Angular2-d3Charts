import { Component, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { Task } from '../../models/tasks';

@Component({
	selector: 'all-categories',
	templateUrl: './categories.component.html',
	styleUrls:['./categories.component.css']
})

export class Catergories implements OnChanges {
	@Input() list:Task[];
	@Input() categoryActive:string;
	@Output() selectCategory:EventEmitter<String> = new EventEmitter<String>();
	@Output() removeCompletedTasks:EventEmitter<String> = new EventEmitter<String>();
	private taskLeft:number;
	private taskCompleted:number;

	categoryClicked(category:String) {
		this.selectCategory.emit(category);
	}
	clearCompleted() {
		this.removeCompletedTasks.emit();
	}
	ngOnChanges(changes:any) {
		this.taskLeft = 0;
		this.taskCompleted =0;
		this.list.forEach(task => {
			if(!task.complete) {
				this.taskLeft++;
			}
		});
		this.taskCompleted = this.list.length-this.taskLeft;
	}
}
