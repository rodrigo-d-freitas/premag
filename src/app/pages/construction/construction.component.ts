import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.css']
})
export class ConstructionComponent implements OnInit {

  menucollapse: boolean;

  constructor() {
    this.menucollapse = true;
  }

  ngOnInit(): void {

  }

}
