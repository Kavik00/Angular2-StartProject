import { Component, OnInit, }    from '@angular/core';

import {TaskService} from './task.service';

@Component({
    selector: 'task-list',
    templateUrl: 'app/views/task-list.component.html',
    styleUrls: ['app/css/task-list.component.css']
})
export class TaskListComponent implements OnInit {

    constructor(public taskService: TaskService) { }

    ngOnInit() { }

    completeTask(task) {
        task.completed = true;
    }

}