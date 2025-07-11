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

  obterCarrinho() {
    if (typeof window !== 'undefined') {
      const local = localStorage.getItem('cards');
      return local ? JSON.parse(local) : [];
    }
    return [];
  }

  addCarrinho(produto: any) {
    this.itens.push(produto);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cards', JSON.stringify(this.itens));
    }
  }

  limparCarrinho() {
    this.itens = [];
    if (typeof window !== 'undefined') {
      localStorage.removeItem('cards');
    }
  }
}
