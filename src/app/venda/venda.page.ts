import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Pessoa } from '../pessoa/pessoa.model';
import { PessoaService } from '../pessoa/pessoa.service';
import { Produto } from '../produto/produto.model';
import { ProdutoService } from '../produto/produto.service';
import { Venda } from './venda.model';
import { VendaService } from './venda.service';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.page.html',
  styleUrls: ['./venda.page.scss'],
})
export class VendaPage implements OnInit {

  vendaId: number;
  vendaForm: FormGroup;
  clientes: Pessoa[];
  funcionarios: Pessoa[];
  produtos: Produto[];

  constructor(private toastController: ToastController,
    private activatedRoute: ActivatedRoute,
    private vendaService: VendaService,
    private pessoaService: PessoaService,
    private produtoService: ProdutoService,
    private router: Router) {

      let venda = {
      id: null,
      cliente: null,
      funcionario: null,
      total: 0.0,
      forma_pagamento: 'debito',
      dt_emissao: null,
      observacoes: '',
      produto: null
    };
    this.inicializaFormulario(venda);

   }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id) {
      this.vendaId = parseInt(id);
      this.vendaService
        .getVenda(this.vendaId)
        .subscribe((venda) => {
          this.inicializaFormulario(venda);
        });
    }
    this.listarClientes();
    this.listarFuncionarios();
    this.listarProdutos();
  }

  async listarClientes() {
    this.pessoaService.getClientes().subscribe((clientes) => {
      this.clientes = clientes;
    });
  }
  async listarFuncionarios() {
    this.pessoaService.getFuncionarios().subscribe((funcionarios) => {
      this.funcionarios = funcionarios;
    });
  }
  async listarProdutos() {
    this.produtoService.getProdutos().subscribe((produtos) => {
      this.produtos = produtos;
    });
  }

  inicializaFormulario(venda: Venda) {
    console.log(venda);
    this.vendaForm = new FormGroup({
      total: new FormControl(venda.observacoes, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(5),
      ]),
      cliente: new FormControl(venda.cliente, Validators.required),
      produto: new FormControl(venda.produto, Validators.required),
      funcionario: new FormControl(venda.funcionario, Validators.required),
      forma_pagamento: new FormControl(venda.forma_pagamento, Validators.required),
      dt_emissao: new FormControl(venda.dt_emissao, Validators.required)
    })
  }

  salvar() {
    const venda: Venda = {...this.vendaForm.value, id: this.vendaId}
    venda.observacoes = "Cliente: " + venda.cliente[0].nome + " (" + venda.dt_emissao + ")";
    this.vendaService.salvar(venda).subscribe(
      () => this.router.navigate(['venda/listagem-venda']),
      (erro) => {
        console.error(erro);
        this.toastController.create({
          message: `Não foi possível salvar a venda de${venda.id}`,
          duration: 5000,
          keyboardClose: true,
          color: 'danger'
        }).then(t => t.present());
      }
    );
  }
  get total() {
    return this.vendaForm.get('total');
  }
  get clienteId() {
    return this.vendaForm.get('cliente');
   }
  get funcionarioId() {
     return this.vendaForm.get('funcionario');
  }
  get produtoId() {
     return this.vendaForm.get('produto');
  }
  get forma_pagamento() {
    return this.vendaForm.get('forma_pagamento');
  }
  get dt_emissao() {
    return this.vendaForm.get('dt_emissao');
  }
  get observacoes() {
    return this.vendaForm.get('observacoes');
  }
}
