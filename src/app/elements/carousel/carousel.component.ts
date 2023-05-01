import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {

  timerSubs! : Subscription;

  @Input() imagens : string[] = [];

  private _indexImagemAtiva : number = 0;
  get indexImagemAtiva(){
    return this._indexImagemAtiva;
  }
  set indexImagemAtiva(value: number){
    this._indexImagemAtiva = value < this.imagens.length ? value : 0;
  }

  ngOnInit(): void {
    this.iniciarTimer();
      
  }

  ngOnDestroy(): void {
      this.pararTimer();
  }

  iniciarTimer(): void {
    this.timerSubs = timer(1000).subscribe(() => {
      this.ativarImagem(
        this.indexImagemAtiva + 1
      );
    });
  }

  pararTimer(): void {
    this.timerSubs?.unsubscribe;
  }

  ativarImagem(index : number): void {
    this.indexImagemAtiva = index;
    this.iniciarTimer();
  }

}
