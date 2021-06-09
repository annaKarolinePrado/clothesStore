import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemProdutoPage } from './listagem-produtos.page';


const routes: Routes = [
  {
    path: '',
    component: ListagemProdutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemProdutoPageRoutingModule {}
