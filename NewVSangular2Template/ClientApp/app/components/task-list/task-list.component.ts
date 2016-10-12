/// <reference path="task.ts" />
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Task } from './task';
import { TaskService } from '../../services/task.service';

@Component({
    selector: 'task-list',
    template: ('./task-list.component.html')

})

export class TaskListComponent implements OnInit {
    errorMessage: string;
    tasks: Task[] = new Array<Task>();
    buttonText: String = "Complete";
    task: Task;


    constructor(public taskService: TaskService, private _http: Http) {
        this.task = new Task;
    }

    ngOnInit(): void {
        this.getTasks();
    }

    getTasks() {
        this._http.get('/api/TaskData/GetTasks').subscribe(result => {
            this.tasks = result.json();
        });
    }

    //getTasks() {
    //    this.taskService.getTasks().subscribe(
    //        tasks => this.tasks,
    //    error => this.errorMessage = <any>error);
    //}





    //completeTask(task: Task) {
    //    if (task.completed !== true) {
    //        task.completed = true;
    //        task.buttonText = "Not Complete";
    //    }

    //    else {
    //        task.completed = false;
    //        task.buttonText = "Complete";
    //    }
    //    this.taskService.updateTask(task)
    //        .then(task => {
    //            this.task
    //        });
    //}






}