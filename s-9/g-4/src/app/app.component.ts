import { Component } from '@angular/core';
import { Posts } from './models/posts';
import { getPost } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 's9-e2';
  post! : Posts[];

  constructor(){
    // getPost().then(post => {
    //   console.log(post)
    //   const creaList = document.createElement('li');
    //   this.post = post;
    //   this.completa();
    // })
  }

//   completa(){
//     this.post = this.post.map(post => {
//       return {...post, active:true}
//     })
//   }
}
