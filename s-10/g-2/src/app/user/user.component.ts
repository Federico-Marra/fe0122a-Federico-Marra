import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../interface/user';
import { UsersService } from '../service/users.service';

@Component({
  template:`

  <div class="container">
    <h2 *ngIf="user">{{user.name}}</h2>
    <p *ngIf="user">email: {{user.email}}</p>
    <p *ngIf="user">ruolo: {{user.role}}</p>
  </div>

  `,
    styles: [
      `
      .container{
        margin-top:50px;
      }

      `,
    ],
})
export class UserComponent implements OnInit {

  user!:User | undefined;
  sub!:Subscription;

  constructor(private router:ActivatedRoute, private usersSrv:UsersService ) { }

  ngOnInit(): void {
    /*this.user = {
      id: this.router.snapshot.params['id'],
      name: this.router.snapshot.params['name'],
      email: this.router.snapshot.params['email'],
      role: this.router.snapshot.params['role']
    };*/

    this.sub = this.router.params.subscribe((params:Params)=>{
      const id = +params['id'] // + forza la conversione number
      this.user = this.usersSrv.getUser(id) ;
    });

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe()
  }

}
