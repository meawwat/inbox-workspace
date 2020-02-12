import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  port: number = 4209;
  limit: number = 20;

  initUrl = `http://localhost:${this.port}/inbox?_start=0&_limit=${this.limit}`;
  
  getScrollLoadUrl(startRow: number): string {
    return `http://localhost:${this.port}/inbox?_start=${startRow}&_limit=${this.limit}`
  }
}
