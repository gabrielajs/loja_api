import { Component } from '@angular/core';
import { LojaService } from '../../loja.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produtos',
  imports: [CommonModule],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css'
})
export class Produtos {

  constructor(private lojaService: LojaService) {}

  produtos: any[] = [];

  ngOnInit() {
    this.getProdutos();
  }

  // Método para obter os produtos da loja
  // Faz uma requisição ao serviço LojaService e atribui os produtos à variável produtos
  getProdutos() {
    this.lojaService.getProdutos().subscribe((data: any) => {
      this.produtos = data;
      console.log(this.produtos);
    }, error => {
      console.error('Erro ao obter produtos:', error);
    });
  }

}
