import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InboxLibComponent } from './inbox-lib.component';
import { MailComponent } from './mail/mail.component';
import { PersonaComponent } from './mail/persona/persona.component';

@NgModule({
  declarations: [InboxLibComponent, MailComponent, PersonaComponent],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [InboxLibComponent]
})
export class InboxLibModule { }
