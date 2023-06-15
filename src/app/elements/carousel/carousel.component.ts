import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {

  timerSubs! : Subscription;
  images : any[] = [];



  @Input() imagens : string[] = [];

  private _indexImagemAtiva : number = 0;
  get indexImagemAtiva(){
    return this._indexImagemAtiva;
  }
  set indexImagemAtiva(value: number){
    this._indexImagemAtiva = value < this.imagens.length ? value : 0;
  }

  ngOnInit(): void {
    this.images = [
      '../../../assets/images/br-petrobras.svg',
      '../../../assets/images/embratel-1.svg',
      '../../../assets/images/light.svg'
    ]

    this.slides = this.chunk(this.cards, 4);
      
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

  cards = [
    {
      img: '../../../assets/images/dnit.png'
    },
    {
      img: '../../../assets/images/embratel-1.svg'
    },
    {
      img: '../../../assets/images/metro-rio.svg'
    },
    {
      img: '../../../assets/images/light.svg'
    },
    {
      img: '../../../assets/images/br-petrobras.svg'
    },
    {
      img: '../../../assets/images/ufrj.svg'
    },
    {
      img: '../../../assets/images/logo-mage.png'
    },
    {
      img: '../../../assets/images/marica.png'
    },
    {
      img: '../../../assets/images/globo.svg'
    },
    {
      img: '../../../assets/images/fiat.svg'
    },
    {
      img: '../../../assets/images/ccr.svg'
    },
  ];
  slides: any = [[]];
  chunk(arr: any, chunkSize: any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

}
