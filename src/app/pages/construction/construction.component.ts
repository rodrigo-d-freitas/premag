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
      alt : "Super Estrutura de Ponte no Empreendimento Condomínio Reserva Mnhattan Green",
      titulo : "Super Estrutura de Ponte no Empreendimento Condomínio Reserva Mnhattan Green",
      local : "Varginha/MG",
      ano: "2021",
      comprimento : "40,00 m",
      largura : "18,00 m",
      cliente : "Construtora Dharma S.A"
  },
  {
      imagem : "../../../assets/images/passarela-km-181.jpg",
      alt : "Passarela do KM 181",
      titulo : "Passarela do KM 181",
      local : "Rodovia Presidente Dutra, KM181+400 -Guararema/SP",
      ano: "2018",
      comprimento : "275,64 m",
      largura : "2,04 m",
      cliente : "ANTT – Agência Nacional de Transportes Terrestres"
  },
  {
      imagem : "../../../assets/images/montagem-barra-mansa.jpg",
      alt : "Ponte de Concreto Armado em Barra Mansa",
      titulo : "Ponte de Concreto Armado em Barra Mansa",
      local : "  Barra Mansa/RJ",
      ano: "2021",
      comprimento : "",
      largura : "",
      cliente : "Secretaria do Estado de Infraestrutura e Obras/RJ"
  },
  {
      imagem : "../../../assets/images/ponte-canal-ponta-negra.jpg",
      alt : "Ponte sobre o Canal de Ponta Negra Maricá",
      titulo : "Ponte sobre o Canal de Ponta Negra Maricá",
      local : "Ponta Negra - Maricá/RJ",
      ano: "2018",
      comprimento : "75,40 m",
      largura : "11,00 m",
      cliente : "Prefeitura de Maricá"
  },
  {
      imagem : "../../../assets/images/marques-parana.jpg",
      alt : "Passarela sobre a RJ-106 - KM 13",
      titulo : "Passarela sobre a RJ-106 - KM 13",
      local : "Manu Manuela - Maricá/RJ",
      ano: "2023",
      comprimento : "",
      largura : "",
      cliente : "SOMAR - Prefeitura Municipal de Maricá"
  },
  {
      imagem : "../../../assets/images/viaduto-gramacho.jpg",
      alt : "Viaduto sobre a Linha Férrea em Gramacho",
      titulo : "Viaduto sobre a Linha Férrea em Gramacho",
      local : "Gramacho, Duque de Caxias/RJ",
      ano: "2017",
      comprimento : "320,70 m",
      largura : "10,50 m",
      cliente : "Prefeitura de Duque de Caxias"
  },
  {
      imagem : "../../../assets/images/montagem-travessa.jpg",
      alt : "Ponte Sobre sobre o Rio João Pinto",
      titulo : "Ponte Sobre sobre o Rio João Pinto",
      local : "Xerém - Duque de Caxias/RJ",
      ano: "2021",
      comprimento : "",
      largura : "",
      cliente : "Prefeitura Municipal de Duque de Caxias"
  },
  {
      imagem : "../../../assets/images/passarela-bambui.jpg",
      alt : "Passarela no Canal de Bambuí",
      titulo : "Passarela no Canal de Bambuí",
      local : "Bairros Cordeirinho e Balneário - Maricá/RJ",
      ano: "2020",
      comprimento : "",
      largura : "",
      cliente : "SOMAR - Prefeitura do Município de Maricá"
  },
  {
      imagem : "../../../assets/images/viaduto-km-236.jpg",
      alt : "Viaduto KM 236",
      titulo : "Viaduto KM 236",
      local : "Rod. Senador Mario Covas – BR 101/RJ",
      ano: "2014",
      comprimento : "57,17 m",
      largura : "11,43 m",
      cliente : "Autopista Fluminense"
  },
  {
      imagem : "../../../assets/images/corisco-paraty.jpg",
      alt : "Ponte Sobre Rio Perequeaçu",
      titulo : "Ponte Sobre Rio Perequeaçu",
      local : "RJ 165 - Estrada Paraty-Cunha - Paraty/RJ",
      ano: "2021",
      comprimento : "59,00 m",
      largura : "13,00 m",
      cliente : "Consórcio Serra da Bocaina II (Geomecanica)"
  },
  {
      imagem : "../../../assets/images/foto-che-guevara.jpg",
      alt : "Passarela sobre RJ 106 altura Km 23 - Acesso ao Hospital Dr. Ernesto Che Guevara ",
      titulo : "Passarela sobre RJ 106 altura Km 23 - Acesso ao Hospital Dr. Ernesto Che Guevara ",
      local : "São José do Imbassaí - Maricá/RJ",
      ano: "2023",
      comprimento : "",
      largura : "",
      cliente : "SOMAR - Prefeitura Municipal de Maricá"
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
    { img: '../../../assets/images/br-petrobras.svg' },
    { img: '../../../assets/images/ccr.svg' },
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
