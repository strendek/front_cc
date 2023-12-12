import { Component } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { SharedService } from 'src/app/services/shared-service';
import { Router } from '@angular/router';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {

    viewUsersClicked: boolean = true; 
    addUserClicked: boolean = true; 
    viewTasksClicked: boolean = true; 
    addTaskClicked: boolean = true;
    subscriptionOne: Subscription;
    subscriptionTwo: Subscription;
    subscriptionThree: Subscription;
    subscriptionFour: Subscription;
  
    constructor(private router: Router, private sharedService: SharedService) {
      this.subscriptionOne = this.sharedService.currentValueOne.subscribe(value => {
        this.viewUsersClicked = value;
        
      });
  
      this.subscriptionTwo = this.sharedService.currentValueTwo.subscribe(value => {
        this.addUserClicked = value;
        
      });
  
      this.subscriptionThree = this.sharedService.currentValueThree.subscribe(value => {
        this.viewTasksClicked = value;
        
      });
  
      this.subscriptionFour = this.sharedService.currentValueFour.subscribe(value => {
        this.addTaskClicked = value;
        
      });
    }

    ngOnInit(): void {
      const userSession = localStorage.getItem('userSettings');
      if (userSession !== "Logged") {
        this.router.navigateByUrl('/login');
      } else {
        this.router.navigateByUrl('/home/view-tasks');
      }
    }
  
    ngOnDestroy() {
      this.subscriptionOne.unsubscribe();
      this.subscriptionTwo.unsubscribe();
      this.subscriptionThree.unsubscribe();
      this.subscriptionFour.unsubscribe();
    }
  
}
  