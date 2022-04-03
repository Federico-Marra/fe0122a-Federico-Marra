import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePage } from './pages/home.page';
import { PostAttiviPage } from './pages/postattivi.page';
import { PostInAttiviPage } from './pages/postinattivi.page';

const routes: Route[] = [
  {
    path: "",
    component: HomePage
  },

  {
    path: "postattivi",
    component: PostAttiviPage
  },

  {
    path: "postinattivi",
    component: PostInAttiviPage
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    PostAttiviPage,
    NavbarComponent,
    PostInAttiviPage
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
