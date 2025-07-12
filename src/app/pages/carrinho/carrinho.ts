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

  itens: any[] = [];
  total: number = 0;

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit() {
    this.atualizarCarrinho();
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

  totalCarrinho(){
    this.carrinhoService.sumPrice();
  }

  atualizarCarrinho() {
    this.itens = this.carrinhoService.obterCarrinho();
    this.total = this.carrinhoService.sumPrice();
  }

}
