import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  @Input() getScrollLoadUrl: (startRow: number) => string;
  json: Array<MailSchema>;
  lastRow: number;

  constructor(private http: HttpClient) {
    this.lastRow = 0;
  }

  ngOnInit(): void {
    if (!this.initLoadUrl) return;
    this.http.get<Array<MailSchema>>(this.initLoadUrl).subscribe(data => {
      this.lastRow = 0;
      this.json = data;
      this.lastRow += data.length;
    });
  }

  onScroll($event) {
    if (!this.getScrollLoadUrl) return;
    if(($event.target.scrollTop + $event.target.clientHeight) == $event.target.scrollHeight) {
      let url = this.getScrollLoadUrl(this.lastRow);
      this.http.get<Array<MailSchema>>(url)
        .subscribe(data => {
          data.map(i => this.json.push(i));
          this.json = [...this.json];
          this.lastRow += data.length;
        });
    }
  }
}