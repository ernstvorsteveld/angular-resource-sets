import { Component, OnInit } from '@angular/core';
import { MENU_ITMES } from './mock-menu-items';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.css']
})

export class CardMenuComponent implements OnInit {

  menuItems = MENU_ITMES
  
  constructor() { }

  ngOnInit(): void {
  }

}
