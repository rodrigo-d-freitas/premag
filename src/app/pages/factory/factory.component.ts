import { Component, OnInit } from '@angular/core';
import { NgxAnimatedCounterParams } from '@bugsplat/ngx-animated-counter';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent implements OnInit {

  

  ngOnInit(): void {

      
  }

  public paramsPontes: NgxAnimatedCounterParams = { start: 0, end: 732, interval: 10, increment: 5 };
  public paramsViadutos: NgxAnimatedCounterParams = { start: 0, end: 87, interval: 10, increment: 5 };
  public paramsPassarelas: NgxAnimatedCounterParams = { start: 0, end: 247, interval: 10, increment: 5 };
  public paramsObras: NgxAnimatedCounterParams = { start: 0, end: 1393, interval: 10, increment: 5 };

}
