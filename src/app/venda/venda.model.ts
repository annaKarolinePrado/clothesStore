import { Pessoa } from "../pessoa/pessoa.model";

export class Venda {
    id?: number;
    cliente: Pessoa;
    funcionario: Pessoa;
    total: number;
    forma_pagamento: string;
    dt_emissao: Date;
    observacoes: string;
}
