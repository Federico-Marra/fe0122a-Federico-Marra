import { Component, OnInit } from '@angular/core';

@Component({
  template: `

    <p>home coming soon!</p>

    <div class="container">
      <div class="bar"></div>
    </div>

    <div
      id="container-b"
      class="d-grid gap-2 d-md-flex justify-content-md-start"
    >
      <button class="btn btn-primary" routerLink="/postinattivi">Prev</button>
      <button class="btn btn-primary" routerLink="/postattivi">Next</button>
    </div>
  `,
  styles: [``],
})
export class HomePage implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
