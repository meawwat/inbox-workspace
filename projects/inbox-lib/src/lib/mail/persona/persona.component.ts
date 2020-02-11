import { Component, Input, OnInit } from '@angular/core';
import { ColorCode } from './color-code.array';

@Component({
  selector: 'persona',
  templateUrl: './persona.component.html',
  styleUrls: [
    '../../../core.scss', 
    '../../../../../../node_modules/office-ui-fabric-core/dist/css/fabric.min.css',
    './persona.component.scss'
  ]
})
export class PersonaComponent implements OnInit {
  @Input() name: string;
  @Input() email: string;
  
  initial:string = "";
  color:string = ColorCode[0].code;

  constructor() { }

  ngOnInit(): void {
    this.initial = this.getInitial();
    this.color = this.getColor();
  }
  
  getInitial(): string {
    let arrName: string[];

    if (this.name && this.name.length > 0) {
      arrName = this.name.trim().split(' ');
    } else return "";

    if (arrName.length < 1 || arrName[0].length < 1) return "";
    if (arrName.length === 1) {
      return arrName[0].charAt(0);
    }
    return arrName[0].charAt(0) + arrName[arrName.length - 1].charAt(0);
  }

  getColor(): string {
    let sum = 0;
    for (let i = 0; i < this.email.length; i++) {
      sum += this.email.charCodeAt(i);
    }
    let random = sum % ColorCode.length;
    return ColorCode[random].code;//same email will get same color
  }
}
