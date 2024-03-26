import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isMobile: boolean = false;
  menuItems: MenuItem[] = [
    { color: 'primary', name: 'Pokemons', route: '/pokeapi/pokemon' },
    { color: 'grass', name: 'Moves', route: '/pokeapi/moves' },
    { color: 'electric', name: 'Abilities', route: '/pokeapi/abilities' }
  ];

  constructor(private sidebarService:SidebarService) {
    this.sidebarService.mobile$.subscribe(isMobile => {
      this.isMobile = isMobile;
    })
  }

  closeSidebar(): void {
    if(this.isMobile)
      this.sidebarService.toggle();
  }
}

interface MenuItem {
  color: string;
  name: string;
  route: string;
}