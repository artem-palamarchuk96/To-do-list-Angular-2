import { Component, OnInit, OnChanges, SimpleChanges, Input, ViewChild } from '@angular/core';
import { ListsComponent } from './lists/lists.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    name:String = 'Artem';
    toDo:String = 'Learn Angular 2';
    time:Number = 999;

    @ViewChild(ListsComponent)
    private lists: ListsComponent;

}
