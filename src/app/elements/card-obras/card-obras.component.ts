import { Component, Input } from '@angular/core';
import { Obras } from 'src/app/models/Obras';
import { PremagService } from 'src/app/services/premag.service';

@Component({
  selector: 'app-card-obras',
  templateUrl: './card-obras.component.html',
  styleUrls: ['./card-obras.component.css']
})
export class CardObrasComponent {

  @Input()
  obras!: Obras;

}
