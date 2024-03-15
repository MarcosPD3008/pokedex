import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: MenuItem[] = [
    { color: 'primary', name: 'Pokemons', route: '/home' },
    { color: 'grass', name: 'Moves', route: '/profile' },
    { color: 'electric', name: 'Abilities', route: '/settings' }
  ]
  constructor() { }

  ngOnInit() {
  }

}

interface MenuItem {
  color: string;
  name: string;
  route: string;
}