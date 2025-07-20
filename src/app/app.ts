import {Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {HeaderComponent} from './header/header';
import {UserComponent} from './user/user';
import {DUMMY_USERS} from './dummy-users';
import {TasksComponent} from './tasks/tasks';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, NgForOf, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected title = 'angularStudy1,i am capet';
  users = DUMMY_USERS
  selecteduserID?:string = "";
  selecteduserName?:string = "";

  get selectedUser(){
    return this.users.find((user) => user.id === this.selecteduserID)!;
  }
  onSelectUser(id: string){
    console.log("selectedUser", id);
    this.selecteduserID= id
    for(const user of DUMMY_USERS){
      if(this.selecteduserID==user.id){
        this.selecteduserName = user.name
      }
    }

  }
  // protected readonly signal = signal;
  protected readonly String = String;
}
