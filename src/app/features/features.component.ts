import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../core/services/sidebar.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  isMobile:boolean = false;
  hideSidebar:boolean = false;
  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    this.sidebarService.mobile$.subscribe({
      next: (isMobile) => {
        this.isMobile = isMobile;
      }
    });

    this.sidebarService.visibility$.subscribe({
      next: (isVisible) => {
        this.hideSidebar = !isVisible;
      }
    })
  }
}
