import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import './rxjs-extentions';


import { AppComponent}  from './app.component';
import {TasksComponent} from './tasks.component';
import {TaskListComponent} from './task-list.component';
import {TaskNewComponent} from './task-new.component';
import {TaskService} from './task.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
        
    ],

    declarations: [
        AppComponent,
        TasksComponent,
        TaskListComponent,
        TaskNewComponent

        
    ],

    providers: [
        TaskService
        
    ],

   
    bootstrap: [AppComponent]
})


export class AppModule {}

