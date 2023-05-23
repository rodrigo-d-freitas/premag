import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  menucollapse: boolean;

  constructor() {
    this.menucollapse = true;
  }

  ngOnInit(): void {
    
    
  }

  ngOnDestroy(): void {

  }

  collapse() {
    this.menucollapse = !this.menucollapse;
  }

}
