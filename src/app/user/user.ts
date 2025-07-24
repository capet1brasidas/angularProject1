import {Component, computed, Input, signal, input, Output, EventEmitter, output} from '@angular/core';

import {DUMMY_USERS} from '../dummy-users';
import { type User} from './user.model';
import {Card} from '../shared/card/card';


// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// }

// interface User {
//   id: string;
//   name: string;
//   avatar: string;
// }

@Component({
  selector: 'app-user',
  imports: [
    Card
  ],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class UserComponent {
  @Input({required:true}) user!: User;
  @Input({required:true}) selected!: boolean;
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  // avatar = input.required<string>();
  // name = input.required<string>();
  // @Output() select = new EventEmitter();
  select = output<string>();

  // imagePath = computed(()=> {
  //   return 'assets/users/'+ this.avatar();
  // })
  get imagePath(): string {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectedUser(){
    this.select.emit(this.user.id);
  }
}
