import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inbox-app';
  
  getScrollLoadUrl(startRow: number): string {
    return `http://localhost:3001/inbox?_start=${startRow}&_limit=20`
  }
}
