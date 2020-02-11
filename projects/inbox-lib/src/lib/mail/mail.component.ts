import { Component, Input, OnInit } from '@angular/core';
import { MailSchema } from './mail.schema';

@Component({
  selector: 'mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {
  @Input() mailContent: MailSchema;

  constructor() { }

  ngOnInit(): void { }
}
