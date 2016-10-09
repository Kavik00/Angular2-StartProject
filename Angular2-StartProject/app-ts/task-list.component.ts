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
    task: Task;


    constructor(public taskService: TaskService) {
        this.task = new Task;
    }

    ngOnInit(): void {
        this.getTasks();
    }

    getTasks(): void {
        this.taskService.getTasks().then(tasks => this.tasks = tasks);
    }

    addTask(task: Task) {
        task.title = task.title.trim();
        if (!this.task.title) { return; }
        this.taskService.saveTask(task)
            .then(task => {
                this.task = new Task()
            });
        this.tasks.push(task);
    }



    completeTask(task: Task) {
        if (task.completed !== true) {
            task.completed = true;
            task.buttonText = "Not Complete";
        }

        else {
            task.completed = false;
            task.buttonText = "Complete";
        }
        this.taskService.updateTask(task)
            .then(task => {
                this.task
            });
    }


    deleteTask(task: Task): void {
        alert('sending to be Deleted' + task.title)
        this.taskService
            .deleteTask(task)
            .then(() => { });

        this.tasks = this.tasks.filter(h => h !== task);
    }



}