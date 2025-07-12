import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: any[] = [];

  constructor() {
    // Inicializa os itens se estiver no navegador
    if (typeof window !== 'undefined') {
      const local = localStorage.getItem('cards');
      if (local) {
        this.itens = JSON.parse(local);
      }
    }
  }

  //carrega os itens do carrinho que está no localStorage
  obterCarrinho() {
    if (typeof window !== 'undefined') {
      const local = localStorage.getItem('cards');
      return local ? JSON.parse(local) : [];
    }
    return [];
  }

  //adiciona o produto ao carrinho e salva no localStorage
  addCarrinho(produto: any) {
    this.itens.push(produto);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cards', JSON.stringify(this.itens));
    }
  }

  //remove o produto do carrinho e atualiza o localStorage
  limparCarrinho() {
    this.itens = [];
    if (typeof window !== 'undefined') {
      localStorage.removeItem('cards');
    }
  }

  //remove um produto específico do carrinho pelo ID
  removeById(id: number) {
    const local = localStorage.getItem('cards')
    if(local){
      const itens = JSON.parse(local);
      const itensFilter = itens.filter((item: any) => item.id !== id);
      localStorage.setItem('cards', JSON.stringify(itensFilter));
    }
  }

  sumPrice(): number {
    if (typeof window === 'undefined') return 0;

    const local = localStorage.getItem('cards');
    const itens = JSON.parse(local || '[]');
    let total = 0;

    itens.forEach((item: any) => {
      const price = parseFloat(item.price);
      if (!isNaN(price)) {
        total += price;
      }
    });

    total = parseFloat(total.toFixed(2));
    console.log(total);
    return total;
  }

}
