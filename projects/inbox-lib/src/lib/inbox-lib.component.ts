import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}