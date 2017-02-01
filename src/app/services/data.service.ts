import { Injectable, OnInit } from '@angular/core';
import { Data } from './data';


@Injectable()
export class DataService {

    allRecords: Data[] = [
        {name: 'Artem', toDo: 'Work hard', time: 200, done: false},
        {name: 'Vova', toDo: 'Try to catch', time: 555, done: false},
        {name: 'Lalka', toDo: 'Not doing anything', time: 999, done: false},
    ];

    addToDo(name: String, toDo: String, time: Number, done: Boolean) {
        this.allRecords.push(new Data(name, toDo, time, done));
        console.log('With type', JSON.stringify(this.allRecords));
    }

}
