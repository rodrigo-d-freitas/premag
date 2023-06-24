import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/Produtos';
import { PremagService } from 'src/app/services/premag.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public itensProdutos! : Produtos[];

  constructor(private premagService: PremagService) {}

  ngOnInit(): void {
    this.premagService.construirListaProdutos()
    .subscribe(
      produtos => {
        this.itensProdutos = produtos;
      }, 
      error => console.log(error)
    )
  }



}
