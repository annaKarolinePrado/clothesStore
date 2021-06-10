import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cadastro Produto', url: '/produto/cadastro-produto', icon: 'heart' },
    { title: 'Cadastro Pessoa', url: '/pessoa/cadastro-pessoa', icon: 'heart' },
    { title: 'Cadastro de venda', url: '/venda/cadastro-venda', icon: 'heart' },
    { title: 'Produtos', url: '/produto/listagem-produto', icon: 'archive' },
    { title: 'Clientes', url: '/pessoa/listagem-pessoa', icon: 'person' },
    { title: 'Funcionários', url: '/funcionario/listagem-funcionario', icon: 'person' },
    { title: 'Vendas', url: '/venda/listagem-venda', icon: 'archive' },
  ];
  constructor() {}
}
