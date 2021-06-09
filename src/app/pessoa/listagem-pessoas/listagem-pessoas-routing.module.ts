import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemPessoaPage } from './listagem-pessoas.page';


const routes: Routes = [
  {
    path: '',
    component: ListagemPessoaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemPessoaPageRoutingModule {}
