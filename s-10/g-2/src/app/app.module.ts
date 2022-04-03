import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostAttiviComponent } from './components/post-attivi/post-attivi.component';
import { PostInattiviComponent } from './components/post-inattivi/post-inattivi.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './user/user.component';
import { HighlightDirective } from './components/highlight.directive';
import { MaiuscoloPipe } from './components/maiuscolo.pipe';
import { PostDetailsComponent } from './components/post-details/post-details.component';

const routes: Route[] = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "post-attivi",
    component: PostAttiviComponent
  },
  {
    path: "post-inattivi",
    component: PostInattiviComponent
  },
  {
    path: "post-attivi/:id",
    component: PostDetailsComponent
  },
  {
    path: "post-inattivi/:id",
    component: PostDetailsComponent
  },
  {
    path: "users",
    component: UsersComponent,
    children:[
      {
        path: ":id",
        component: UserComponent
      }
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PostAttiviComponent,
    PostInattiviComponent,
    PostCardComponent,
    UsersComponent,
    UserComponent,
    HighlightDirective,
    MaiuscoloPipe,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
