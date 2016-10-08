import { Component, OnInit, }    from '@angular/core';
import { Router } from '@angular/router';

import {Task} from './task';
import {TaskService} from './task.service';
import {TaskListComponent} from './task-list.component';


@Component({
    selector: 'task-new',
    templateUrl: 'app/views/task-new.component.html'
    
})
export class TaskNewComponent implements OnInit {
    task: Task;



    constructor(
        private router: Router,
        public taskService: TaskService) {
        this.task = new Task;
        
    }

    addTask(task: Task) {
        task.title = task.title.trim();
        if (!this.task.title) { return; }
        
        this.taskService.saveTask(task)
            .then(task => {
                this.task = new Task()                
            });
        }

    ngOnInit() { }



}