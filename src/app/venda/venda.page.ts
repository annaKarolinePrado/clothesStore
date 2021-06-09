import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
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

  constructor(private toastController: ToastController,
    private activatedRoute: ActivatedRoute,
    private vendaService: VendaService,
    private router: Router) {

      let venda = {
      id: null,
      cliente: null,
      funcionario: null,
      total: 0.0,
      forma_pagamento: '',
      dt_emissao: null,
      observacoes: ''
    };
    this.inicializaFormulario(venda);

   }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id) {
      console.log("passou " + id)
      this.vendaId = parseInt(id);
      this.vendaService
        .getVenda(this.vendaId)
        .subscribe((venda) => {
          this.inicializaFormulario(venda);
        });
    }
  }

  inicializaFormulario(venda: Venda) {
    console.log(venda);
    this.vendaForm = new FormGroup({
      descricao: new FormControl(venda.descricao, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150),
      ]),
      preco: new FormControl(venda.preco, Validators.required),
      tipo: new FormControl(venda.tipo, Validators.required),
      status: new FormControl(venda.status, Validators.required)
    })
  }

  salvar() {
    const venda: Venda = {...this.vendaForm.value, id: this.vendaId}
    this.vendaService.salvar(venda).subscribe(
      () => this.router.navigate(['listagem-venda']),
      (erro) => {
        console.error(erro);
        this.toastController.create({
          message: `Não foi possível salvar o venda ${venda.descricao}`,
          duration: 5000,
          keyboardClose: true,
          color: 'danger'
        }).then(t => t.present());
      }
    );
  }
  get descricao() {
    return this.vendaForm.get('descricao');
  }
  get preco() {
    return this.vendaForm.get('preco');
  }
  get tipo() {
    return this.vendaForm.get('tipo');
  }
  get status() {
    return this.vendaForm.get('status');
  }
}
