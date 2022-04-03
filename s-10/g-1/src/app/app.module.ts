import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { NavbarComponent } from './components/navbar.component';
import { PostAttiviComponent } from './components/post-attivi.component';
import { PostCardComponent } from './components/post-card.component';
import { PostInattiviComponent } from './components/post-inattivi.component';

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
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PostAttiviComponent,
    PostInattiviComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
