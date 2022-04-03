import { PostService } from './../../service/post.service';
import { Post } from './../../interface/post';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  post!: Post | undefined;
  sub!:Subscription
  constructor(private router: ActivatedRoute, private postSrv:PostService) {}

  ngOnInit(): void {
   this.sub = this.router.params.subscribe((params:Params)=>{
     const id = +params["id"]  // + forza la conversione number
      this.post = this.postSrv.getPost(id); /*= {
      id: params['id'],
      title: params['title'],
      body: params['body'],
      active: params['active'],
      type: params['type'],
      author: params['author']
    };*/
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe()
  }
}
