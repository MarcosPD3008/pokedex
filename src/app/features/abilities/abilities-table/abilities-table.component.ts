import { Component, OnInit } from '@angular/core';
import { AbilitiesService } from '../../../core/services/abilities.service';
import { paginationChangeEvent } from '../../../shared/components/pagination/pagination.component';
import { AbilityEffect, EffectChange } from '../../../core/models/abilities.models';

@Component({
  selector: 'app-abilities-table',
  templateUrl: './abilities-table.component.html',
  styleUrls: ['./abilities-table.component.scss']
})
export class AbilitiesTableComponent implements OnInit {
  loading: boolean = false;
  abilities: AbilityEffect[] = [];

  pagination:paginationChangeEvent = {
    total: 0,
    currentPage: 1,
    pageSize: 8
  }  
  
  constructor(private abilitiesService:AbilitiesService) { }

  ngOnInit() {
    this.getAbilities();
  }

  getAbilities() {
    this.loading = true;
    const { currentPage, pageSize } = this.pagination;

    this.abilitiesService.getAbilities(currentPage, pageSize).subscribe({
      next: (response) => {
        this.abilities = response.results;
        this.pagination.total = response.count;
        this.loading = false;
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
}
