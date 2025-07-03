import { Routes } from '@angular/router';

export const routes: Routes = [
    
    {
        //rota de redirecionamento de produtos
        path: 'produtos',
        loadComponent: () => import('./pages/produtos/produtos').then(m => m.Produtos)
    },
    {
        //inicio da pagina mostra os produtos
        path: '',
        redirectTo: 'produtos',
        pathMatch: 'full'
    },
    {
        //rota de redirecionamento de produto especifico
        path: 'produtos/:id',
        loadComponent: () => import('./pages/produto-detalhes/produto-detalhes').then(m => m.ProdutoDetalhes)
    },
    {
        //rota de redirecionamento de contato
        path: 'contato',
        loadComponent: () => import('./pages/contato/contato').then(m => m.Contato)
    }
];

 
