import { CategoryService } from './../../../services/category.service';
import { UsersService } from './../../../services/users.service';
import { AuthService } from './../../../services/auth.service';
import { Category } from './../../../models/product.model';
import { User } from './../../../models/user.model';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  activeMenu = false
  user : User | null = null
  categories: Category[] = []
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private categoryService: CategoryService
  ) { }
    
  ngOnInit(): void{
    this.categoryService.getAll().subscribe(data => this.categories = data)
  }
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
    this.user = null
  }
  
  users(){
    this.usersService.getAll()
      .subscribe(console.log)
  }
}
