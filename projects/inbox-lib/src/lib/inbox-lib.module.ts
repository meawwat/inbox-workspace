import { NgModule } from '@angular/core';
import { InboxLibComponent } from './inbox-lib.component';
import { MailComponent } from './mail/mail.component';

@NgModule({
  declarations: [InboxLibComponent, MailComponent],
  imports: [
  ],
  exports: [InboxLibComponent]
})
export class InboxLibModule { }
