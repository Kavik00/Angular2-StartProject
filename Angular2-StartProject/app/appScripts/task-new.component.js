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
var TaskNewComponent = (function () {
    function TaskNewComponent(taskService) {
        this.taskService = taskService;
        this.task = { title: "", completed: false };
    }
    TaskNewComponent.prototype.onSubmit = function () {
        this.taskService.addTask(this.task);
        this.task = { title: "", completed: false };
    };
    TaskNewComponent.prototype.ngOnInit = function () { };
    TaskNewComponent = __decorate([
        core_1.Component({
            selector: 'task-new',
            templateUrl: 'app/views/task-new.component.html'
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], TaskNewComponent);
    return TaskNewComponent;
}());
exports.TaskNewComponent = TaskNewComponent;
