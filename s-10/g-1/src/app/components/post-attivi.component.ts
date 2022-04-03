import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { recupera, aggiorna } from 'src/app/service/posts.service';
import * as PostService from 'src/app/service/posts.service';

@Component({
  selector: 'app-post-attivi',
  template: `
  <div class="container mt-5">
  <div *ngFor="let post of posts ; let i= index">
    <app-post-card *ngIf="post.active" [post]="post">
      <button (click)="disattiva(post.id, i)">Disattiva</button>
    </app-post-card>
  </div>
</div>
`,
  styles: [``]
})
export class PostAttiviComponent implements OnInit {

  posts!: Post[];

  constructor() {
    PostService.recupera().then(
      (posts) => (this.posts = posts.filter((post) => post.active))
    )
   }

  async ngOnInit(){
    const posts = await recupera();
    this.posts = posts;
  }

  disattiva(id: number, i: number){
    aggiorna({active:false}, id);
    this.posts.splice(i, 1);
  }

}
