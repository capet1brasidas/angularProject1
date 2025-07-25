import {Component, Input} from '@angular/core';
import { TaskComponent} from './task/task';
import {NewTask} from './new-task/new-task';
import {type NewTaskData} from './task/task.model';
import { TasksService} from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [
    TaskComponent,
    NewTask
  ],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class TasksComponent {
  @Input({required:true}) userId!:string;
  @Input({required:true}) username: string | undefined;

  isAddingTask = false;
  constructor(private tasksService: TasksService) {
  }

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }


  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCancelNewTask(){
    this.isAddingTask = false;
  }


}
