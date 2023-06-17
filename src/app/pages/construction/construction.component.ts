import { Component, OnInit } from '@angular/core';
import { Obras } from 'src/app/models/Obras';
import { PremagService } from 'src/app/services/premag.service';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.css']
})
export class ConstructionComponent implements OnInit {

  menucollapse: boolean;
  public itensObras!: Obras[];

  constructor(private premagService: PremagService) {
    this.menucollapse = true;
  }

  ngOnInit(): void {
    this.premagService.construirCardObras()
    .subscribe(
      obras => {
        this.itensObras = obras;
      }, 
      error => console.log(error)
    )
  }

  


}
