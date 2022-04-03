import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UsersService } from 'src/app/service/users.service';

@Component({
  template: `
<div class="container">
      <ul class="list-group">
        <li *ngFor="let user of users" class="list-group-item" [routerLink]="['/users', user.id]" routerLinkActive="router-link-active" aria-current="true">
          {{ user.name}}
        </li>
      </ul>
      <router-outlet></router-outlet>
</div>

  `,
  styles: [
    `

    .list-group-item:hover{
      background-color: #03a9fc;
    }
    .list-group-item{
      width: 150px;
    }
    .list-group{
      margin-top:50px;
    }

    `,
  ],
})
export class UsersComponent implements OnInit {

  users:User[] = this.usersSrv.getUsers()

  constructor(private usersSrv:UsersService) {}

  ngOnInit(): void {}
}
