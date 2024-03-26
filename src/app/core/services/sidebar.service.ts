import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private isVisible = new BehaviorSubject<boolean>(false);
  private isMobile = new BehaviorSubject<boolean>(window.innerWidth < 768);

  public visibility$ = this.isVisible.asObservable();
  public mobile$ = this.isMobile.asObservable(); // Corrected to isMobile

  constructor() {
    this.checkMobileAndVisibility(window.innerWidth);

    window.addEventListener('resize', () => {
      this.checkMobileAndVisibility(window.innerWidth);
    });
  }

  private checkMobileAndVisibility(width: number): void {
    const isMobileWidth = width < 768;
    this.isMobile.next(isMobileWidth);
    
    if (isMobileWidth) {
      this.isVisible.next(false);
    } else {
      this.isVisible.next(true);
    }
  }

  toggle(): void {
    this.isVisible.next(!this.isVisible.value);
  }

  open(): void {
    this.isVisible.next(true);
  }

  close(): void {
    this.isVisible.next(false);
  }
}
