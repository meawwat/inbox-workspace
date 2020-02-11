import { NgModule } from '@angular/core';
import { InboxLibComponent } from './inbox-lib.component';
import { MailComponent } from './mail/mail.component';
import { PersonaComponent } from './mail/persona/persona.component';

@NgModule({
  declarations: [InboxLibComponent, MailComponent, PersonaComponent],
  imports: [
  ],
  exports: [InboxLibComponent]
})
export class InboxLibModule { }
