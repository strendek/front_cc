import { Component } from "@angular/core";
import { SharedService } from 'src/app/services/shared-service';
import { Router } from '@angular/router';

@Component({
    selector: 'nav-bar',   
    templateUrl: './nav-bar.component.html',   
    styleUrls: ['./nav-bar.component.css']  
})

export class NavBarComponent {

    showViewUsers: boolean = true; 
    showAddUser: boolean = true; 
    showViewTasks: boolean = true; 
    showAddTask: boolean = true;
    role: string = "";

    constructor(private sharedService: SharedService, private router: Router) { }

    ngOnInit(): void {
        const userSession = localStorage.getItem('userSettings');
        this.role = localStorage.getItem('role') ?? "";
        if (userSession !== "Logged") {
            this.router.navigateByUrl('/login');
        } else {
            if (this.role != "Administrator") {
                this.showViewUsers = false;
                this.showAddUser = false;
            }
        }
    }

    viewUsersClicked() {
        this.router.navigateByUrl('/home/view-users');
    }

    addUserClicked() {
        this.router.navigateByUrl('/home/add-user');
    }

    viewTasksClicked() {
        this.router.navigateByUrl('/home/view-tasks');
    }

    addTaskClicked() {
        this.router.navigateByUrl('/home/add-task');
    }

    logoutClicked() {
        localStorage.setItem('userSettings', "");
        this.router.navigateByUrl('/login');
    }

} 