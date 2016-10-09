"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var task_service_1 = require('./task.service');
var task_1 = require('./task');
var TaskListComponent = (function () {
    function TaskListComponent(taskService) {
        this.taskService = taskService;
        this.tasks = new Array();
        this.buttonText = "Complete";
        this.task = new task_1.Task;
    }
    TaskListComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    TaskListComponent.prototype.getTasks = function () {
        var _this = this;
        this.taskService.getTasks().then(function (tasks) { return _this.tasks = tasks; });
    };
    TaskListComponent.prototype.addTask = function (task) {
        var _this = this;
        task.title = task.title.trim();
        if (!this.task.title) {
            return;
        }
        this.taskService.saveTask(task)
            .then(function (task) {
            _this.task = new task_1.Task();
        });
        this.tasks.push(task);
    };
    TaskListComponent.prototype.completeTask = function (task) {
        var _this = this;
        if (task.completed !== true) {
            task.completed = true;
            task.buttonText = "Not Complete";
        }
        else {
            task.completed = false;
            task.buttonText = "Complete";
        }
        this.taskService.updateTask(task)
            .then(function (task) {
            _this.task;
        });
    };
    TaskListComponent.prototype.deleteTask = function (task) {
        alert('sending to be Deleted' + task.title);
        this.taskService
            .deleteTask(task)
            .then(function () { });
        this.tasks = this.tasks.filter(function (h) { return h !== task; });
    };
    TaskListComponent = __decorate([
        core_1.Component({
            selector: 'task-list',
            templateUrl: 'app/views/task-list.component.html',
            styleUrls: ['app/css/task-list.component.css']
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], TaskListComponent);
    return TaskListComponent;
}());
exports.TaskListComponent = TaskListComponent;
