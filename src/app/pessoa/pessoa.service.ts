import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../pessoa/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private url = 'http://localhost:3000/pessoas';

  constructor(
    private httpClient: HttpClient
  ) {}

  getPessoas(): Observable<Pessoa[]> {
    return this.httpClient.get<Pessoa[]>(this.url);
  }

  excluir(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  getPessoa(id: number): Observable<Pessoa> {
    return this.httpClient.get<Pessoa>(`${this.url}/${id}`);
  }

  private adicionar(pessoa: Pessoa)  {
    return this.httpClient.post(this.url, pessoa);
  }

  private atualizar(pessoa: Pessoa) {
    return this.httpClient.put(`${this.url}/${pessoa.id}`, pessoa);
  }

  salvar(pessoa: Pessoa) {
    if(pessoa.id) {
      return this.atualizar(pessoa);
    } else {
      return this.adicionar(pessoa);
    }
  }
}
