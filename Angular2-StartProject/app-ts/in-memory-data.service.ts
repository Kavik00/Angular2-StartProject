import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let tasks = [
            { "title": "First Task", "completed": false, "created_at": "", "updated_at": "", "notes": "", "buttonText": "Complete" },
            { "title": "Second Task", "completed": false, "created_at": "", "updated_at": "", "notes": "", "buttonText": "Complete" },
            { "title": "Third Task", "completed": false, "created_at": "", "updated_at": "", "notes": "", "buttonText": "Complete" },
            { "title": "Fourth Task", "completed": false, "created_at": "", "updated_at": "", "notes": "", "buttonText": "Complete" }

        ];
        return { tasks };
    }


}