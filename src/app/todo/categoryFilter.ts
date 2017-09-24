import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/tasks'

@Pipe({
	name:'categoryFilter'
})

export class CategoryFilter implements PipeTransform {
	transform(list:Task[], showselectedTask:String) {
		if(showselectedTask ==='all' ) {
			return list;
		}
		return list.filter(task=> {
			if(showselectedTask === 'active') {
				return !task.complete;
			} else if (showselectedTask === 'completed') {
				return task.complete;
			}
		})
	}
}
