import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'produto/listagem-produto',
    loadChildren: () => import('./produto/listagem-produtos/listagem-produtos.module').then( m => m.ListagemProdutoPageModule)
  },
  {
    path: 'produto/cadastro-produto',
    loadChildren: () => import('./produto/produto.module').then( m => m.ProdutoPageModule)
  },
  {
    path: 'produto/edicao/:id',
    loadChildren: () => import('./produto/produto.module').then( m => m.ProdutoPageModule)
  },

  {
    path: 'pessoa/listagem-pessoa',
    loadChildren: () => import('./pessoa/listagem-pessoas/listagem-pessoas.module').then( m => m.ListagemPessoaPageModule)
  },
  {
    path: 'funcionario/listagem-funcionario',
    loadChildren: () => import('./pessoa/listagem-funcionarios/listagem-funcionarios.module').then( m => m.ListagemFuncionarioPageModule)
  },
  {
    path: 'venda/listagem-venda',
    loadChildren: () => import('./venda/listagem-vendas/listagem-vendas.module').then( m => m.ListagemVendaPageModule)
  },

  {
    path: 'venda/cadastro-venda',
    loadChildren: () => import('./venda/venda.module').then( m => m.VendaPageModule)
  },
  {
    path: 'pessoa/cadastro-pessoa',
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
