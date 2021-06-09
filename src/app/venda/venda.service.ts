import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venda } from '../venda/venda.model';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  private url = 'http://localhost:3000/vendas';

  constructor(
    private httpClient: HttpClient
  ) {}

  getVendas(): Observable<Venda[]> {
    return this.httpClient.get<Venda[]>(this.url);
  }

  excluir(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  getVenda(id: number): Observable<Venda> {
    return this.httpClient.get<Venda>(`${this.url}/${id}`);
  }

  private adicionar(venda: Venda)  {
    return this.httpClient.post(this.url, venda)
  }

  private atualizar(venda: Venda) {
    return this.httpClient.put(`${this.url}/${venda.id}`, venda);
  }

  salvar(venda: Venda) {
    if(venda.id) {
      return this.atualizar(venda);
    } else {
      return this.adicionar(venda);
    }
  }
}
