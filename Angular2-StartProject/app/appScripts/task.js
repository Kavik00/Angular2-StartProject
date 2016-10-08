"use strict";
var Task = (function () {
    function Task() {
        this.title = "";
        this.completed = false;
        this.createdDate = this.getToday();
        this.updatedDate = this.getToday();
        this.notes = "";
        this.buttonText = "Complete";
    }
    Task.prototype.getToday = function () {
        var currentDate = new Date();
        var datetime = "Last Sync: " + currentDate.getDate() + "/"
            + (currentDate.getMonth() + 1) + "/"
            + currentDate.getFullYear() + " @ "
            + currentDate.getHours() + ":"
            + currentDate.getMinutes() + ":"
            + currentDate.getSeconds();
        return currentDate;
    };
    return Task;
}());
exports.Task = Task;
