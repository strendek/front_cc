import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'update-task',
    templateUrl: './update-task.component.html',
    styleUrls: ['./update-task.component.css']
})

export class UpdateTaskComponent {

    taskDescription: string = '';
    isLoading: boolean = false;
    taskId: string = '';

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
        const userSession = localStorage.getItem('userSettings');
        if (userSession !== "Logged") {
            this.router.navigateByUrl('/login');
        }
        else {
            this.taskId = 'Id: ' + this.route.snapshot.paramMap.get('id') ?? '';
        }
    }

    onSubmit() {
        if (this.taskDescription.trim().length == 0) {
            this.isLoading = false;
            alert("There is not data to update!");
        } else {
            const confirmation = confirm('Are you sure you want to update this task?');
            if (confirmation) {
                this.isLoading = true;
                //TODO: API request is missing
                setTimeout(() => {
                    this.isLoading = false;
                    alert('Task updated successfully!');
                    }, 1500);
            } 
            else {
                this.isLoading = false;
            }
        }
    }

} 