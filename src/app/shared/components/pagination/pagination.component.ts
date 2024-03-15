import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {
  @Input()  total:number = 0;
  @Input()  pageLimit:number = 5;
  
  @Input()  currentPage:number = 1;
  @Output() currentPageChange = new EventEmitter<number>();

  @Input()  pageSize:number = 10;
  @Output() pageSizeChange = new EventEmitter<number>();

  @Output() paginationChange = new EventEmitter<paginationChangeEvent>();

  totalPages:number = 0;
  pagesArr:number[] = [];

  sliceStart:number = 0;
  sliceEnd:number = this.pageLimit;
  showingNumber:number = 0;

  ngOnChanges(): void {
    this.totalPages = Math.ceil(this.total / this.pageSize);
    this.pagesArr = Array(this.totalPages).fill(0).map((x, i) => i + 1)
    this.calculateSlice();
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.currentPageChange.emit(this.currentPage);
    this.paginationChange.emit({
      total: this.total,
      currentPage: this.currentPage,
      pageSize: this.pageSize
  });

  this.calculateSlice();
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) 
      this.goToPage(this.currentPage - 1);
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) 
      this.goToPage(this.currentPage + 1);
  }

  calculateSlice(): void {
    this.sliceStart = (this.currentPage - 1) < this.pagesArr.length - this.pageLimit ? (this.currentPage - 1) : this.pagesArr.length - this.pageLimit;
    if (this.sliceStart < 0) this.sliceStart = 0;

    this.sliceEnd = (this.currentPage + this.pageLimit - 1) > this.pagesArr.length ? this.pagesArr.length : (this.currentPage + this.pageLimit - 1);
    this.showingNumber = this.currentPage * this.pageSize > this.total ? this.total : this.currentPage * this.pageSize;
  }
}

export interface paginationChangeEvent{
  total:number;
  currentPage:number;
  pageSize:number;
}