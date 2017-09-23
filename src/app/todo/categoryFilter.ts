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
		console.log(list)
		return list.filter(task=> {
			if(showselectedTask === 'active') {
			console.log('active')
				return !task.complete;
			} else if (showselectedTask === 'completed') {
			console.log('active')
				return task.complete;
			}
		})
	}
}