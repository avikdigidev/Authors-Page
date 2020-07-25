import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import {AuthorsService} from './authors.service';
import {AuthorlistComponent} from './authorlist.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    AuthorlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
