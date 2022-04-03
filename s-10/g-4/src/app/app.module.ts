import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TdComponent } from './componets/td.component';
import { FormComponent } from './componets/form.component';

@NgModule({
  declarations: [
    AppComponent,
    TdComponent,
    FormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
