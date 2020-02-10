import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InboxLibModule } from 'projects/inbox-lib/src/lib/inbox-lib.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InboxLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
