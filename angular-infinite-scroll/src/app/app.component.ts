import { Component, OnInit } from '@angular/core';
// import { Cat } from './cat.model';
// import { CatService } from './cat.service';
import { RegisterUser } from './register-user.model';
import { RegisterUserService } from './register-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  // implements OnInit
  title = 'angular-infinite-scroll-example';

  page = 0;
  RegisterUsers: RegisterUser[] = []

  constructor(private registerUserService: RegisterUserService) {}

  ngOnInit(): void {
    this.registerUserService
      .getRegisterUsers(this.page)
      .subscribe((RegisterUsers: RegisterUser[]) => {
        this.RegisterUsers = RegisterUsers;
      });
  }

  onScroll(): void {
    this.registerUserService
      .getRegisterUsers(++this.page)
      .subscribe((RegisterUser: RegisterUser[]) => {
        this.RegisterUsers.push(...RegisterUser);
      });
  }
}
