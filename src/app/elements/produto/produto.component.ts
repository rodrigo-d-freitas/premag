import { Component, Input } from '@angular/core';
import { Produtos } from 'src/app/models/Produtos';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {

  @Input()
  produtos! : Produtos;

}
