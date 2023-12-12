import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css']
})

export class AddUserComponent {

    userUsername: string = '';
    userPassword: string = '';
    userName: string = '';
    userRole: string = '';
    isLoading: boolean = false;
    role: string = "";

    constructor(private router: Router) { }

    ngOnInit(): void {
        const userSession = localStorage.getItem('userSettings');
        if (userSession !== "Logged") {
            this.router.navigateByUrl('/login');
        }
    }

    onSubmit() {
        if (this.userUsername.trim().length == 0 || this.userPassword.trim().length == 0 || this.userName.trim().length == 0 || this.userRole.trim().length == 0) {
            this.isLoading = false;
            alert("Remember that all the data is mandatory!");
        } else {
            const confirmation = confirm('Are you sure you want to add the user?');
            if (confirmation) {
                this.isLoading = true;
                //TODO: API request is missing
                setTimeout(() => {
                    this.isLoading = false;
                    this.userName = '';
                    alert('User added successfully!');
                  }, 1500);
            } 
            else {
                this.isLoading = false;
            }
        }
    }

} 