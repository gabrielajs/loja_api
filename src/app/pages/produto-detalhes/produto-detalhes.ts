import { Component, inject } from '@angular/core';
import { LojaService } from '../../loja.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotificacaoService } from '../../notificacao.service';
import { CarrinhoService } from '../../carrinho.service';


@Component({
  selector: 'app-produto-detalhes',
  imports: [CommonModule],
  templateUrl: './produto-detalhes.html',
  styleUrl: './produto-detalhes.css'
})

export class ProdutoDetalhes {

  produto: any = {};

  constructor(private lojaService: LojaService,
              private route: ActivatedRoute,
              private notificacaoService: NotificacaoService,
              private carrinhoService: CarrinhoService
  ) {}

  ngOnInit(){
    this.getProdutoId();
  }

  //retornando produto por id
  getProdutoId(){
    // obtem o id do produto da rota
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (id) {
        this.lojaService.getProdutoById(id).subscribe((data: any) => {
          this.produto = data;
          console.log(this.produto);
        });
      }
    });
  }

  adicionarAoCarrinho() {
    this.carrinhoService.addCarrinho(this.produto);
    this.notificacaoService.notificacao('Produto adicionado ao carrinho com sucesso!');
  }

}
