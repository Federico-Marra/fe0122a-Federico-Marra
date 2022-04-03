import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { recupera, aggiorna } from 'src/app/service/posts.service';
import * as PostService from 'src/app/service/posts.service';

@Component({
  selector: 'app-post-inattivi',
  templateUrl: './post-inattivi.component.html',
  styleUrls: ['./post-inattivi.component.scss']
})
export class PostInattiviComponent implements OnInit {

  posts!: Post[];

  constructor() {
    PostService.recupera().then(
      (posts) => (this.posts = posts.filter((post) => !post.active))
    )
  }

  async ngOnInit(){
    const posts = await recupera();
    this.posts = posts;
  }

  attiva(id: number, i: number){
    aggiorna({active:true}, id);
    this.posts.splice(i, 1);
  }

}
