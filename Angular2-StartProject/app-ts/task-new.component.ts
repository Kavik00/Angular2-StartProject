import { Component, OnInit, }    from '@angular/core';

import {TaskService} from './task.service';


@Component({
    selector: 'task-new',
    templateUrl: 'app/views/task-new.component.html'
    
})
export class TaskNewComponent implements OnInit {
    task;

    constructor(public taskService: TaskService) {
        this.task = { title: "", completed: false };
    }

    onSubmit() {
        this.taskService.addTask(this.task)
        this.task = { title: "", completed: false };
    }

    ngOnInit() { }

}