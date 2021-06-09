import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'listagem-produto',
    loadChildren: () => import('./produto/listagem-produtos/listagem-produtos.module').then( m => m.ListagemProdutoPageModule)
  },
  {
    path: 'cadastro-produto',
    loadChildren: () => import('./produto/produto.module').then( m => m.ProdutoPageModule)
  },
  {
    path: 'edicao/:id',
    loadChildren: () => import('./produto/produto.module').then( m => m.ProdutoPageModule)
  },

  {
    path: 'listagem-pessoa',
    loadChildren: () => import('./pessoa/listagem-pessoas/listagem-pessoas.module').then( m => m.ListagemPessoaPageModule)
  },
  {
    path: 'listagem-funcionario',
    loadChildren: () => import('./pessoa/listagem-funcionarios/listagem-funcionarios.module').then( m => m.ListagemFuncionarioPageModule)
  },
  {
    path: 'listagem-venda',
    loadChildren: () => import('./venda/listagem-vendas/listagem-vendas.module').then( m => m.ListagemVendaPageModule)
  },

  {
    path: 'cadastro-venda',
    loadChildren: () => import('./venda/venda.module').then( m => m.VendaPageModule)
  },
  {
    path: 'cadastro-pessoa',
    loadChildren: () => import('./pessoa/pessoa.module').then( m => m.PessoaPageModule)
  },
  {
    path: 'pessoa/edicao/:id',
    loadChildren: () => import('./pessoa/pessoa.module').then( m => m.PessoaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
