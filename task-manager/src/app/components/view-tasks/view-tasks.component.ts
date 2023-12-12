import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user';
import { Task } from 'src/app/shared/interfaces/task';

@Component({
    selector: 'view-tasks',
    templateUrl: './view-tasks.component.html',
    styleUrls: ['./view-tasks.component.css']
})

export class ViewTasksComponent {

  isLoading: boolean = true;
  displayedColumns: string[] = ['id', 'description', 'user', 'actions'];

  user1: User = {
    id: 1,
    username: 'johndoe',
    name: 'John doe',
    role: 'Admin'
  };
  
  user2: User = {
    id: 2,
    username: 'janesmith',
    name: 'Jane Smith',
    role: 'Regular'
  };
  
  user3: User = {
    id: 3,
    username: 'bobjohnson',
    name: 'Bob Johnson',
    role: 'Admin'
  };
  
  user4: User = {
    id: 4,
    username: 'williamadams',
    name: 'William Adams',
    role: 'Regular'
  };

  user5: User = {
    id: 4,
    username: 'pauljameson',
    name: 'Paul Jameson',
    role: 'Regular'
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    const userSession = localStorage.getItem('userSettings');
    if (userSession !== "Logged") {
      this.router.navigateByUrl('/login');
    }
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }
  
  tasks: Task[] = [
      { id: 1, description: 'First task', user: this.user1 },
      { id: 2, description: 'Second task', user: this.user2 },
      { id: 3, description: 'Third task', user: this.user3 },
      { id: 4, description: 'Fourth task', user: this.user4 }
    ];

    updateTask(task: Task) {
      this.router.navigate(['/home/update-task/' + task.id]);
    }
  
    deleteTask(task: Task) {
      alert("Task with id '" + task.id + "' was deleted successfully.");
    }

} 