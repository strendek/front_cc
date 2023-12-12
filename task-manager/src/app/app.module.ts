import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainComponent } from 'src/app/components/main/main.component';
import { NavBarComponent } from'./components/nav-bar/nav-bar.component';
import { AddTaskComponent } from'./components/add-task/add-task.component';
import { UpdateTaskComponent } from'./components/update-task/update-task.component';
import { UpdateUserComponent } from'./components/update-user/update-user.component';
import { ViewTasksComponent } from'./components/view-tasks/view-tasks.component';
import { AddUserComponent } from'./components/add-user/add-user.component';
import { ViewUsersComponent } from'./components/view-users/view-users.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  { path: '', redirectTo: '/home/view-tasks', pathMatch: 'full' },
  { path: 'home', component: MainComponent , children: [
    { path: 'add-task', component: AddTaskComponent },
    { path: 'view-users', component: ViewUsersComponent },
    { path: 'add-user', component: AddUserComponent },
    { path: 'view-tasks', component: ViewTasksComponent },
    { path: 'update-task/:id', component: UpdateTaskComponent },
    { path: 'update-user/:id', component: UpdateUserComponent },
  ]},
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/home/view-tasks' }  ];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddTaskComponent,
    NavBarComponent,
    ViewTasksComponent,
    ViewUsersComponent,
    AddUserComponent,
    LoginComponent,
    UpdateTaskComponent,
    UpdateUserComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    NoopAnimationsModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule
  ],
providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }