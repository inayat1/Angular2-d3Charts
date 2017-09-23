import { Component, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { Task } from '../../models/tasks';

@Component({
	selector: 'all-categories',
	templateUrl: './categories.component.html',
	styleUrls:['./categories.component.css']
})

export class Catergories implements OnChanges {
	@Input() list:Task[];
	@Output() selectCategory:EventEmitter<String> = new EventEmitter<String>();
	@Output() removeCompletedTasks:EventEmitter<String> = new EventEmitter<String>();
	private taskLeft:any = 0;

	categoryClicked(category:String) {
		this.selectCategory.emit(category);
	}
	clearCompleted() {
		this.removeCompletedTasks.emit();
	}
	ngOnChanges(changes:any) {
		//this.taskLeft = 0;
		console.log(changes);
		this.list.forEach(task => {
			if(!task.complete) {
				this.taskLeft++;
			}
		})
	}
}