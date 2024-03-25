import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <div class="backdrop">
      <img src="./assets/loading/charmander.gif" alt="loading" class="loading">
    </div>
  `
})
export class LoadingComponent {
}
