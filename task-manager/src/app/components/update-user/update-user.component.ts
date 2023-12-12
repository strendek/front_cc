import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'update-user',
    templateUrl: './update-user.component.html',
    styleUrls: ['./update-user.component.css']
})

export class UpdateUserComponent {

    userUsername: string = '';
    userPassword: string = '';
    userName: string = '';
    userRole: string = '';
    isLoading: boolean = false;
    userId: string = '';

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
        const userSession = localStorage.getItem('userSettings');
        if (userSession !== "Logged") {
          this.router.navigateByUrl('/login');
        }
        else {
            this.userId = 'Id: ' + this.route.snapshot.paramMap.get('id') ?? '';
        }
    }

    onSubmit() {
        if (this.userUsername.trim().length == 0 && this.userPassword.trim().length == 0 && this.userName.trim().length == 0 && this.userRole.trim().length == 0) {
            this.isLoading = false;
            alert("There is no data to update!");
        } else {
            const confirmation = confirm('Are you sure you want to update this user?');
            if (confirmation) {
                this.isLoading = true;
                //TODO: API request is missing
                setTimeout(() => {
                    this.isLoading = false;
                    alert('User updated successfully!');
                  }, 1500);
            } 
            else {
                this.isLoading = false;
            }
        }
    }

} 