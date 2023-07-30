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
        "descricao" : "Satisfazem as exigências normais de qualquer rodovia; das vicinais às autoestradas, assegurando o tráfego de todo tipo de veículo",
        "lado" : "esquerdo"
    },
    {
        "imagem" : "../../../assets/images/thumb-galeria.png",
        "alt" : "Foto de uma galeria da Premag",
        "titulo" : "Galerias",
        "descricao" : "Satisfazem as exigências normais de qualquer rodovia; das vicinais às autoestradas, assegurando o tráfego de todo tipo de veículo.",
        "lado" : "direito"
    },
    {
        "imagem" : "../../../assets/images/thumb-viaduto.png",
        "alt" : "Foto de um viaduto fabricado pela Premag",
        "titulo" : "Viadutos",
        "descricao" : "Satisfazem as exigências normais de qualquer rodovia; das vicinais às autoestradas, assegurando o tráfego de todo tipo de veículo.",
        "lado" : "esquerdo"
    },
    {
        "imagem" : "../../../assets/images/thumb-edificacoes.png",
        "alt" : "Foto de uma edificação fabricada pela Premag",
        "titulo" : "Edificações",
        "descricao" : "Satisfazem as exigências normais de qualquer rodovia; das vicinais às autoestradas, assegurando o tráfego de todo tipo de veículo.",
        "lado" : "direito"
    },
    {
        "imagem" : "../../../assets/images/thumb-passarelas.png",
        "alt" : "Foto de uma passarela fabricada pela Premag",
        "titulo" : "Passarelas",
        "descricao" : "Satisfazem as exigências normais de qualquer rodovia; das vicinais às autoestradas, assegurando o tráfego de todo tipo de veículo.",
        "lado" : "esquerdo"
    },
    {
        "imagem" : "../../../assets/images/thumb-mobiliario-urbano.png",
        "alt" : "Foto de um mobiliário urbano fabricado pela Premag",
        "titulo" : "Mobiliário Urbano",
        "descricao" : "Satisfazem as exigências normais de qualquer rodovia; das vicinais às autoestradas, assegurando o tráfego de todo tipo de veículo.",
        "lado" : "direito"
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
