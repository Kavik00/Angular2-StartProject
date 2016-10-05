import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let tasks = [
            { "title": "First Task", "completed": false, "created_at": "", "updated_at": "", "notes": "" },
            { "title": "Second Task", "completed": false, "created_at": "", "updated_at": "", "notes": "" },
            { "title": "Third Task", "completed": false, "created_at": "", "updated_at": "", "notes": "" },
            { "title": "Fourth Task", "completed": false, "created_at": "", "updated_at": "", "notes": "" }

        ];
        return { tasks };
    }


}