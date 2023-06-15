import { Component } from '@angular/core';
import { NgxAnimatedCounterParams } from '@bugsplat/ngx-animated-counter';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  public paramsPontes: NgxAnimatedCounterParams = { start: 0, end: 732, interval: 10, increment: 5 };
  public paramsViadutos: NgxAnimatedCounterParams = { start: 0, end: 87, interval: 30, increment: 3 };
  public paramsPassarelas: NgxAnimatedCounterParams = { start: 0, end: 247, interval: 10, increment: 5 };
  public paramsObras: NgxAnimatedCounterParams = { start: 0, end: 1393, interval: 10, increment: 5 };

}
