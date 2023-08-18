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
  //public itensObras!: Obras[];
  itensObras: Obras[] = [
    {
      imagem : "../../../assets/images/ponte-integracao-sao-joao-da-barra.jpg",
      alt : "Ponte de Integração em São João da Barra",
      titulo : "Ponte de Integração em São João da Barra",
      local : "Ponte Sobre o Rio Paraíba do Sul – São João da Barra/RJ",
      ano: "2014",
      comprimento : "1.344,30 m",
      largura : "16,20 m",
      cliente : "Governo do Estado do RJ"
  },
  {
      imagem : "../../../assets/images/montagem-varginha.jpg",
      alt : "Montagem Varginha",
      titulo : "Montagem Varginha",
      local : " Condomínio Reserva Manhattan Green, Varginha/MG",
      ano: "2021",
      comprimento : "40,00 m",
      largura : "18,00 m",
      cliente : "Construtora Dharma S.A"
  },
  {
      imagem : "../../../assets/images/passarela-km-181.jpg",
      alt : "Passarela do KM 181",
      titulo : "Passarela do KM 181",
      local : " Passarela em Guararema/SP",
      ano: "2018",
      comprimento : "275,64 m",
      largura : "2,04 m",
      cliente : "ANTT – Agência Nacional de Transportes Terrestres"
  },
  {
      imagem : "../../../assets/images/montagem-barra-mansa.jpg",
      alt : "Montagem Barra Mansa",
      titulo : "Montagem Barra Mansa",
      local : "  Barra Mansa/RJ",
      ano: "2021",
      comprimento : "",
      largura : "",
      cliente : "Estado do Rio de Janeiro"
  },
  {
      imagem : "../../../assets/images/ponte-canal-ponta-negra.jpg",
      alt : "Ponte sobre o Canal de Ponta Negra Maricá",
      titulo : "Ponte sobre o Canal de Ponta Negra Maricá",
      local : "Ponte sobre o Canal de Ponta Negra - Maricá/RJ",
      ano: "2021",
      comprimento : "",
      largura : "",
      cliente : "Prefeitura de Maricá"
  },
  {
      imagem : "../../../assets/images/marques-parana.jpg",
      alt : "Marquês Paraná - Niteroi",
      titulo : "Marquês Paraná - Niteroi",
      local : " Avenida Marquês de Paraná - Niteroi/RJ",
      ano: "2019",
      comprimento : "",
      largura : "",
      cliente : "Prefeitura de Niterói - EMUSA"
  },
  {
      imagem : "../../../assets/images/viaduto-gramacho.jpg",
      alt : "Viaduto Gramacho",
      titulo : "Viaduto Gramacho",
      local : "Viaduto em Gramacho - Duque de Caxias/RJ",
      ano: "2017",
      comprimento : "",
      largura : "",
      cliente : "Prefeitura de Duque de Caxias"
  },
  {
      imagem : "../../../assets/images/montagem-travessa.jpg",
      alt : "Montagem Travessa",
      titulo : "Montagem Travessa",
      local : "Ponte sobre o Rio João Pinto",
      ano: "2021",
      comprimento : "",
      largura : "",
      cliente : "Prefeitura Municipal de Duque de Caxias"
  },
  {
      imagem : "../../../assets/images/passarela-bambui.jpg",
      alt : "Passarela Bambuí",
      titulo : "Passarela Bambuí",
      local : "Passarela no Canal de Bambuí",
      ano: "2020",
      comprimento : "",
      largura : "",
      cliente : "SOMAR - Prefeitura do Município de Maricá"
  },
  {
      imagem : "../../../assets/images/viaduto-km-236.jpg",
      alt : "Viaduto KM 236",
      titulo : "Viaduto KM 236",
      local : "Viaduto no KM 236 - Rod. Senador Mario Covas - BR 101/RJ",
      ano: "2014",
      comprimento : "",
      largura : "",
      cliente : "Autopista Fluminense"
  },
  {
      imagem : "../../../assets/images/corisco-paraty.jpg",
      alt : "Corisco - Paraty",
      titulo : "Corisco - Paraty",
      local : "Ponte da Estrada do Corisco",
      ano: "2020",
      comprimento : "",
      largura : "",
      cliente : "Prefeitura Municipal de Paraty"
  }
  ]

  constructor(private premagService: PremagService) {
    this.menucollapse = true;
  }

  ngOnInit(): void {
    /*this.premagService.construirCardObras()
    .subscribe(
      obras => {
        this.itensObras = obras;
      }, 
      error => console.log(error)
    )*/

    
  }

  slides = [
    { img: '../../../assets/images/fiat.svg' },
    { img: '../../../assets/images/embratel-1.svg' },
    { img: '../../../assets/images/br-petrobras.svg' },
    { img: '../../../assets/images/ccr.svg' },
    { img: '../../../assets/images/globo.svg' },
  ];
  slideConfig = { 
    slidesToShow: 4, 
    slidesToScroll: 4, 
    autoplay: true, 
    mobileFirst: true,
    responsive: [{
      breakpoint: 430,
      settings: {
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        infinite: true,
        slidesToScroll: 2
      }
     } , {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          infinite: true,
          slidesToScroll: 4
        }
    }] 
  };
  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  }
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }

}
