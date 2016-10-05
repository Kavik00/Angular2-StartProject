import { Component, OnInit, }    from '@angular/core';

import {Task} from './task';
import {TaskService} from './task.service';
import {TaskListComponent} from './task-list.component';


@Component({
    selector: 'task-new',
    templateUrl: 'app/views/task-new.component.html'
    
})
export class TaskNewComponent implements OnInit {
    task: Task;



    constructor(public taskService: TaskService) {
        this.task = new Task;
        
    }

    addTask(task: Task) {
        task.title = task.title.trim();
        if (!this.task.title) { return; }
        alert('Added ' + task.title);
        this.taskService.saveTask(task)
            .then(task => {
                alert('Got Back ' + task.title);
                this.task = { title: "", completed: false, createdDate: null, updatedDate: null, notes: "", buttonText:"Complete" };
                
            });

         
    }

    ngOnInit() { }



}