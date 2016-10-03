import {Injectable} from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

import {Task} from './task';

@Injectable()
export class TaskService {
    
    private tasksUrl = 'app/tasks'; //URL to web api
    private headers = new Headers({ 'Content-Type': 'application/json' });
    

    constructor(private _http: Http) { }

    getTasks(): Promise<Task[]> {
        return this._http.get(this.tasksUrl)
            .toPromise()
            .then(response => response.json().data as Task[])
            .catch(this.handleError);
    }

    addTask(task: Task): Promise<Task> {
        return this._http
            .post(this.tasksUrl, JSON.stringify(task), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }



    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);

         }

}