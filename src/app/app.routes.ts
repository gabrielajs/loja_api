import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        //inicio da pagina mostra os produtos
        path: '',
        redirectTo: 'produtos',
        pathMatch: 'full'
    },
    {
        //rota de redirecionamento de produtos
        path: 'produtos',
        loadComponent: () => import('./pages/produtos/produtos').then(m => m.Produtos)
    }
];

 
