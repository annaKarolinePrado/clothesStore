import { Pessoa } from "../pessoa/pessoa.model";
import { Produto } from "../produto/produto.model";

export class Venda {
    id?: number;
    cliente: Pessoa;
    funcionario: Pessoa;
    total: number;
    forma_pagamento: string;
    dt_emissao: Date;
    observacoes: string;
    produto: Produto;
}
