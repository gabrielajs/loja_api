import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarrinhoService } from '../../carrinho.service';


@Component({
  selector: 'app-carrinho',
  imports: [CommonModule],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css'
})
export class Carrinho {

  constructor(private carrinhoService: CarrinhoService) {
    
  }

  ngOnInit() {
    this.getCarrinho();
  }

  getCarrinho(){
    return this.carrinhoService.obterCarrinho();
  }

  limparCarrinho(){
    this.carrinhoService.limparCarrinho();
    this.getCarrinho();
  }

  removerPorId(id: number){
    this.carrinhoService.removeById(id);
  }

}
