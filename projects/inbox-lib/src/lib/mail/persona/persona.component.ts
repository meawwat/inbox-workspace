import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
