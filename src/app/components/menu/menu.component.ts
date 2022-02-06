import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  activeMenu = false

  constructor() { }

  ngOnInit(): void {
  }

  toogleMenu() {
    this.activeMenu = !this.activeMenu
  }

}
