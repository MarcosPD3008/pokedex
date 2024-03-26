import { Component, OnInit } from '@angular/core';
import { AbilitiesService } from '../../../core/services/abilities.service';
import { paginationChangeEvent } from '../../../shared/components/pagination/pagination.component';
import { AbilityEffect, EffectChange } from '../../../core/models/abilities.models';
import { SidebarService } from '../../../core/services/sidebar.service';
import { scrollToTop } from '../../../shared/helpers/scrollToTop';

@Component({
  selector: 'app-abilities-table',
  templateUrl: './abilities-table.component.html',
  styleUrls: ['./abilities-table.component.scss']
})
export class AbilitiesTableComponent implements OnInit {
  loading: boolean = false;
  isMobile: boolean = false;
  abilities: AbilityEffect[] = [];

  pagination:paginationChangeEvent = {
    total: 0,
    currentPage: 1,
    pageSize: 8
  }  
  
  constructor(private abilitiesService:AbilitiesService,
              private sidebarService:SidebarService) { }

  ngOnInit() {
    this.getAbilities();

    this.sidebarService.mobile$.subscribe({
      next: (isMobile) => {
        this.isMobile = isMobile;
      }
    });
  }

  getAbilities() {
    this.loading = true;
    const { currentPage, pageSize } = this.pagination;

    this.abilitiesService.getAbilities(currentPage, pageSize).subscribe({
      next: (response) => {
        this.abilities = response.results;
        this.pagination.total = response.count;
        this.loading = false;

        if(this.isMobile)
          scrollToTop();
      },
      error: (error) => {
        console.error(error);
        this.loading = false;
      }
    });
  }

  onPaginationChange(event:paginationChangeEvent) {
    this.pagination = event;
    this.getAbilities();
  }

  toggleSidebar(){
    this.sidebarService.toggle();
  }
}
