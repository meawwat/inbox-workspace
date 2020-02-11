import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MailSchema } from './mail/mail.schema';

@Component({
  selector: 'inbox-lib',
  templateUrl: './inbox-lib.component.html',
  styleUrls: [
    '../core.scss', 
    '../../../../node_modules/office-ui-fabric-core/dist/css/fabric.min.css',
    './inbox-lib.component.scss'
  ]
})
export class InboxLibComponent implements OnInit {
  @Input() initLoadUrl: string;
  json: Array<MailSchema>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Array<MailSchema>>(this.initLoadUrl).subscribe(data => {
      this.json = data;
    });
  }
}