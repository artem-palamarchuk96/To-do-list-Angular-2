import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-lists',
    templateUrl: './lists.component.html',
    styleUrls: ['./lists.component.css']
})
export class ListsComponent {

    constructor(private dataService:DataService) {};

    @Input() name:String;
    @Input() toDo:String;
    @Input() time:Number;
    done: Boolean = false;

    addNewTask() {
        this.dataService.addToDo(this.name, this.toDo, this.time, this.done);
    }



}
