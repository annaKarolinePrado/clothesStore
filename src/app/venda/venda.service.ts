import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../produto/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = 'http://localhost:3000/produtos';

  constructor(
    private httpClient: HttpClient
  ) {}

  getProdutos(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.url);
  }

  excluir(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  getProduto(id: number): Observable<Produto> {
    return this.httpClient.get<Produto>(`${this.url}/${id}`);
  }

  private adicionar(produto: Produto)  {
    return this.httpClient.post(this.url, produto)
  }

  private atualizar(produto: Produto) {
    return this.httpClient.put(`${this.url}/${produto.id}`, produto);
  }

  salvar(produto: Produto) {
    if(produto.id) {
      return this.atualizar(produto);
    } else {
      return this.adicionar(produto);
    }
  }
}
