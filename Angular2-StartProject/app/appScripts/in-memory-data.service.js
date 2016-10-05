"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var tasks = [
            { "title": "First Task", "completed": false, "created_at": "", "updated_at": "", "notes": "", "buttonText": "Complete" },
            { "title": "Second Task", "completed": false, "created_at": "", "updated_at": "", "notes": "", "buttonText": "Complete" },
            { "title": "Third Task", "completed": false, "created_at": "", "updated_at": "", "notes": "", "buttonText": "Complete" },
            { "title": "Fourth Task", "completed": false, "created_at": "", "updated_at": "", "notes": "", "buttonText": "Complete" }
        ];
        return { tasks: tasks };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
