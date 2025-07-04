import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  constructor(public carrinhoService: CarrinhoService) { }

  ngOnInit(){
    this.qtdCarrinho();
  }

  qtdCarrinho(){
    const carrinho = this.carrinhoService.obterCarrinho();
    return carrinho ? carrinho.length : 0;
  }

}
