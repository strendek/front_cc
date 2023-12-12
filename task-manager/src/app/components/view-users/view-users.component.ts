import { Component } from "@angular/core";
import { User } from 'src/app/shared/interfaces/user';
import { Router } from '@angular/router';

@Component({
    selector: 'view-users',
    templateUrl: './view-users.component.html',
    styleUrls: ['./view-users.component.css']
})

export class ViewUsersComponent {

  isLoading: boolean = true;
  role: string = "";
  displayedColumns: string[] = ['id', 'username', 'name', 'role', 'actions'];

  constructor(private router: Router) { }

  ngOnInit(): void {
    const userSession = localStorage.getItem('userSettings');
    if (userSession !== "Logged") {
      this.router.navigateByUrl('/login');
    } else {
      this.role = localStorage.getItem('role') ?? "";
    }
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  users: User[] = [
      { id: 1, username: 'johndoe', name: 'John doe', role: 'Admin' },
      { id: 2, username: 'janesmith', name: 'Jane Smith', role: 'Regular' },
      { id: 3, username: 'bobjohnson', name: 'Bob Johnson', role: 'Admin' },
      { id: 4, username: 'williamadams', name: 'William Adams', role: 'Regular' },
      { id: 5, username: 'pauljameson', name: 'Paul Jameson', role: 'Regular' }
    ];

  updateUser(user: User) {
    this.router.navigate(['/home/update-user/' + user.id]);
  }

  deleteUser(user: User) {
    alert("User with id '" + user.id + "' was deleted successfully.");
  }

} 