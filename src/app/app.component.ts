import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store'
  token = ''
  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) { }
  
  createUser(){
    this.usersService.create({
      name: 'Sebas',
      email: 'sebas@gmail.com',
      password: '1212'
    })
      .subscribe(console.log)
  }
  login(){
    this.authService.login('sebas@gmail.com', '1212')
      .subscribe(res => {
        this.token = res.access_token
      })
  }
  
  getProfile(){
    this.authService.profile(this.token)
      .subscribe(console.log)
  }
}
