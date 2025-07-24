import {Component, EventEmitter, inject, Input, Output} from '@angular/core';

import {type Task} from './task.model'
import {Card} from '../../shared/card/card';
import {DatePipe} from '@angular/common';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [
    Card,
    DatePipe
  ],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class TaskComponent {
  @Input({required:true}) task!: Task;
  @Output() complete = new EventEmitter<string>();

  private tasksService = inject(TasksService);

  onCompleteTask(){
   this.tasksService.removeTask(this.task.id)
  }

}
