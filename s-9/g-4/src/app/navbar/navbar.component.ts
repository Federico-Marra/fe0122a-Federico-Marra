import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav id="navB" class="navbar navbar-expand navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item ">
              <a
                class="nav-link "
                aria-current="page"
                routerLinkActive="active"
                routerLink="/"
                [routerLinkActiveOptions]="{exact: true}"
                >Home</a
              >
            </li>
            <li class="nav-item ">
              <a class="nav-link " routerLinkActive="active" routerLink="/postattivi"
                >Post Attivi</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link "
                routerLinkActive="active"
                routerLink="/postinattivi"
                >Post Non Attivi</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
  `],
})
export class NavbarComponent {
  constructor() {}
}


