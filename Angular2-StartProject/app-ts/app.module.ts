import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import './rxjs-extentions';


import {TaskService} from './task.service';
import { AppComponent}  from './app.component';
import {TasksComponent} from './tasks.component';
import {TaskListComponent} from './task-list.component';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/tasks',
                pathMatch: 'full'
            },

            {
                path: 'tasks',
                component: TaskListComponent
            }
        ])
        
    ],

    declarations: [
        AppComponent,
        TasksComponent,
        TaskListComponent


        
    ],

    providers: [
        TaskService
        
    ],

   
    bootstrap: [AppComponent]
})


export class AppModule {}

