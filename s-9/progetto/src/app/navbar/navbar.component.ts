import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <nav>
    <li>
        <a routerLinkActive="active" routerLink="/">Todos</a>
    </li>
    <li>
        <a routerLinkActive="active" routerLink="/completati">Completati</a>
    </li>
</nav>

  `,
  styles: [`
  nav {
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: center;
    margin-bottom: 100px;
    font-weight:bold;


    li {
        list-style-type: none;
        padding: 20px;

        a {
            text-decoration: none;
            color: black;
            font-size: 30px;
            transition: transform .1s;
          }
          &:hover{
            transform: scale(1.2,1.2);
            color: darkgrey;
          }
    }
}

  `]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
