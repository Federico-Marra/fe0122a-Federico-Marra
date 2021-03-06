import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  template: `
  <nav class="navbar navbar-expand navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPrincipale" aria-controls="navbarPrincipale" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarPrincipale">
      <a class="navbar-brand" href="javascript:void(0)">Hidden Brand</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" [routerLink]="['/']" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" [routerLink]="['/post-attivi']" routerLinkActive="active">Post attivi</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" [routerLink]="['/post-inattivi']" routerLinkActive="active">Post non attivi</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`,
  styles: [``]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
