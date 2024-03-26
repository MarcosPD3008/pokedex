import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menuItems: MenuItem[] = [
    { color: 'primary', name: 'Pokemons', route: '/pokeapi/pokemon' },
    { color: 'grass', name: 'Moves', route: '/pokeapi/moves' },
    { color: 'electric', name: 'Abilities', route: '/pokeapi/abilities' }
  ];
}

interface MenuItem {
  color: string;
  name: string;
  route: string;
}