import { Component, OnInit } from '@angular/core';
import { MovesService } from '../../../core/services/moves.service';
import { Move } from '../../../core/models/moves.models';
import { paginationChangeEvent } from '../../../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-moves-table',
  templateUrl: './moves-table.component.html',
  styleUrls: ['./moves-table.component.scss']
})
export class MovesTableComponent implements OnInit {
  loading: boolean = false;
  moves:Move[] = [];

  pagination:paginationChangeEvent = {
    total: 0,
    currentPage: 1,
    pageSize: 8
  }
  constructor(private movesService:MovesService) { }

  ngOnInit() {
    this.getMoves();
  }

  getMoves() {
    this.loading = true;
    const { currentPage, pageSize } = this.pagination;
    this.movesService.getMoves(currentPage, pageSize).subscribe({
      next: (response:any) => {
        this.moves = response.results;
        this.pagination.total = response.count;
        this.loading = false;
      },
      error: (error:any) => {
        console.error(error);
        this.loading = false;
      }
    });
  }

  onPaginationChange(event:paginationChangeEvent) {
    this.pagination = event;
    this.getMoves();
  }
}
