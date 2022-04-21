import { User } from './../../models/user.model';
import { UsersService } from './../../services/users.service';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  activeMenu = false
  token = ''
  user : User | null = null
  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) { }

  toogleMenu() {
    this.activeMenu = !this.activeMenu
  }
  
  login(){
    this.authService.loginAndGetProfile('maria@mail.com', '12345')
      .subscribe(res => {
        this.user = res
      })
  }
  
  logOut(){
    this.token = ''
    this.user = null
  }
  
  users(){
    this.usersService.getAll()
      .subscribe(console.log)
  }
}
