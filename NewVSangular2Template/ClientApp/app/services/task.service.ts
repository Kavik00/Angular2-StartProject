import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Task } from '../components/task-list/task';

@Injectable()
export class TaskService {

    private tasksUrl = 'app/tasks'; //URL to web api
    private headers = new Headers({ 'Content-Type': 'application/json' });


    constructor(private _http: Http) { }

    getTasks(): Observable<Task[]> {
        
        return this._http.get('/api/TaskData/GetTasks')
            .map(this.extractData)
            .catch(this.handleError);

    }


    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
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