import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemFuncionarioPage } from './listagem-funcionarios.page';


const routes: Routes = [
  {
    path: '',
    component: ListagemFuncionarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemFuncionarioPageRoutingModule {}
