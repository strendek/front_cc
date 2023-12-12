import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'login',   
    templateUrl: './login.component.html',   
    styleUrls: ['./login.component.css']  
})

export class LoginComponent {

    username: string = '';
    password: string = '';
    isLoading: boolean = false;

    constructor(private router: Router) { }
  
    ngOnInit(): void {
        const userSession = localStorage.getItem('userSettings');
        if (userSession === "Logged") {
            this.router.navigateByUrl('/home/view-tasks');
        }
    }

    onSubmit() {
        if (this.username.trim().length == 0 || this.password.trim().length == 0) {
            alert("Remember that all the data is mandatory!");
        } else {
            this.isLoading = true;
            localStorage.setItem('userSettings', "Logged");
            localStorage.setItem('role', "Administrator");
            setTimeout(() => {
                this.router.navigateByUrl('/home/view-tasks');
              }, 3000);
        }
    }

} 