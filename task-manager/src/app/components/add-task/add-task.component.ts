import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent {

    taskDescription: string = '';
    isLoading: boolean = false;

    constructor(private router: Router) { }

    onSubmit() {
        if (this.taskDescription.trim().length == 0) {
            this.isLoading = false;
            alert("Task's description can not be empty!");
        } else {
            const confirmation = confirm('Are you sure you want to add the task?');
            if (confirmation) {
                this.isLoading = true;
                //TODO: API request is missing
                setTimeout(() => {
                    this.isLoading = false;
                    this.taskDescription = '';
                    alert('Task added successfully!');
                  }, 1500);
            } 
            else {
                this.isLoading = false;
            }
        }
    }

} 