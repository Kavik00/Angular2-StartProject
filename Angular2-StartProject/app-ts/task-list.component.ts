import { Component, OnInit }    from '@angular/core';

import {TaskService} from './task.service';
import {Task} from './task';

@Component({
    selector: 'task-list',
    templateUrl: 'app/views/task-list.component.html',
    styleUrls: ['app/css/task-list.component.css']
})


export class TaskListComponent implements OnInit {
    tasks: Task[] = new Array<Task>();
    buttonText: String = "Complete";


    constructor(public taskService: TaskService) {
        
    }

    ngOnInit(): void {
        this.getTasks();
    }

    getTasks(): void {
        this.taskService.getTasks().then(tasks => this.tasks = tasks);
    }



    completeTask(task) {
        if (task.completed != true) {
            task.completed = true;
            task.buttonText = "Clear";
        }

        else {
            task.completed = false;
            task.buttonText = "Complete";
        }
    }



}