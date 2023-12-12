import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private showViewUsers = new BehaviorSubject<boolean>(false);
  private showAddUser = new BehaviorSubject<boolean>(false);
  private showViewTasks = new BehaviorSubject<boolean>(false);
  private showAddTask = new BehaviorSubject<boolean>(false);

  currentValueOne = this.showViewUsers.asObservable();
  currentValueTwo = this.showAddUser.asObservable();
  currentValueThree = this.showViewTasks.asObservable();
  currentValueFour = this.showAddTask.asObservable();

  constructor() { }

  viewUsersClicked() {
    this.showViewUsers.next(true);
    this.showAddUser.next(false);
    this.showViewTasks.next(false);
    this.showAddTask.next(false);
  }

  addUserClicked() {
    this.showViewUsers.next(false);
    this.showAddUser.next(true);
    this.showViewTasks.next(false);
    this.showAddTask.next(false);
  }

  viewTasksClicked() {
    this.showViewUsers.next(false);
    this.showAddUser.next(false);
    this.showViewTasks.next(true);
    this.showAddTask.next(false);
  }

  addTaskClicked() {
    this.showViewUsers.next(false);
    this.showAddUser.next(false);
    this.showViewTasks.next(false);
    this.showAddTask.next(true);
  }

}