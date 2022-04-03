import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FavoritiComponent } from './components/favoriti.component';
import { ErroriInterceptor } from './interceptor/errori.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FavoritiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ErroriInterceptor,
    multi:true // questo è IMPORTANTISSIMO
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
