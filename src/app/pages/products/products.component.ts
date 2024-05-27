import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/Produtos';
import { PremagService } from 'src/app/services/premag.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  itensProdutos : Produtos[] = [
    {
        "imagem" : "../../../assets/images/thumb-ponte.png",
        "alt" : "Foto de uma ponte fabricada pela Premag",
        "titulo" : "Pontes",
        "descricao" : "As Estruturas de nossas pontes desempenham um papel importante, conectando terras, cidades vizinhas, vales. Sendo feita de concreto, aço e misturas inovadores, impacta na durabilidade e na capacidade de suportar cargas. Além da concecpção arquitetônica sendo essencial equilibrando a estética e funcionalidade.",
        "lado" : "esquerdo"
    },
    {
        "imagem" : "../../../assets/images/galeria/Galerias1.jpg",
        "alt" : "Foto de uma galeria da Premag",
        "titulo" : "Galerias",
        "descricao" : "Nossas galerias possuem estrutura de concreto armado, proporcionando solucoes eficientes para passagens em áreas urbanas densas ou em locais com restrições de espaço, podendo abrigar redes de serviços públicos como água e esgoto, garantindo estabilidade e segurança ao longo do tempo.",
        "lado" : "direito"
    },
    {
        "imagem" : "../../../assets/images/thumb-viaduto.png",
        "alt" : "Foto de um viaduto fabricado pela Premag",
        "titulo" : "Viadutos",
        "descricao" : "São elementos sempre marcantes na paisagem urbana, essas estruturas elevadas proporcionam passagens eficientes e falicita o tráfego. Feitas em concreto armado ou aço, design estrutural preciso são essenciais para garantir a segurança e durabilidade.",
        "lado" : "esquerdo"
    },
    {
        "imagem" : "../../../assets/images/thumb-passarelas.png",
        "alt" : "Foto de uma passarela fabricada pela Premag",
        "titulo" : "Passarelas",
        "descricao" : "As passarelas representam um elo vital na rede urbana, facilitando a mobilidade e promovendo a segurança dos pedestres.",
        "lado" : "direito"
    },
    {
        "imagem" : "../../../assets/images/mobiliario_urbano/mobiliario_urbano.jpg",
        "alt" : "Foto de um mobiliário urbano fabricado pela Premag",
        "titulo" : "Mobiliário Urbano",
        "descricao" : "Desempenham um papel fundamento na criação de espaços públicos funcionais e esteticamente agradáveis. Além de dar segurança aos pedestres também enriquecem a experiencia urbana, tornando os espaços públicos mais convidativos.",
        "lado" : "esquerdo"
    }
]

  constructor(private premagService: PremagService) {}

  ngOnInit(): void {
    /*this.premagService.construirListaProdutos()
    .subscribe(
      produtos => {
        this.itensProdutos = produtos;
      }, 
      error => console.log(error)
    )*/
  }



}
