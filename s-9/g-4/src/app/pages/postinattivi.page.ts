import { Component, OnInit } from '@angular/core';
import { Posts } from '../models/posts';
import { getPost } from '../post.service';

@Component({
  template: `
<div id="container">
      <ul id="lista" class="list-group list-group-flush">
      </ul>
    </div>

    <div id='container-b' class="d-grid gap-2 d-md-flex justify-content-md-start">

    <button class="btn btn-primary" routerLink="/postattivi">Prev</button>
    <button class="btn btn-primary" routerLink="/">Next</button>
    </div>
  `,
  styles: [
  ]
})
export class PostInAttiviPage implements OnInit {

  post!: Posts[];

    constructor() {
      getPost().then((posts:any) => {
          posts.forEach(function (post:any){
              if(post.active == false){
                  let li = document.createElement('li');
                  let ul = document.querySelector('#lista');

                  li.innerHTML= post.title + '<br>' + post.body;
                  li.classList.add("list-group-item");
                  ul!.append(li)
              }
          })
      })
   }


  ngOnInit(): void {
  }

}
