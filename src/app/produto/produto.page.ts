import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Produto } from './produto.model';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  produtoId: number;
  produtoForm: FormGroup;

  constructor(private toastController: ToastController,
    private activatedRoute: ActivatedRoute,
    private produtoService: ProdutoService,
    private router: Router) {

      let produto = {
      id: null,
      descricao: '',
      preco: 0,
      tipo: 'camiseta',
      status: 'teste'
    };
    this.inicializaFormulario(produto);

   }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id) {
      console.log("passou " + id)
      this.produtoId = parseInt(id);
      this.produtoService
        .getProduto(this.produtoId)
        .subscribe((produto) => {
          this.inicializaFormulario(produto);
        });
    }
  }

  inicializaFormulario(produto: Produto) {
    console.log(produto);
    this.produtoForm = new FormGroup({
      descricao: new FormControl(produto.descricao, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150),
      ]),
      preco: new FormControl(produto.preco, Validators.required),
      tipo: new FormControl(produto.tipo, Validators.required),
      status: new FormControl(produto.status, Validators.required)
    })
  }

  salvar() {
    const produto: Produto = {...this.produtoForm.value, id: this.produtoId}
    this.produtoService.salvar(produto).subscribe(
      () => this.router.navigate(['listagem-produto']),
      (erro) => {
        console.error(erro);
        this.toastController.create({
          message: `Não foi possível salvar o produto ${produto.descricao}`,
          duration: 5000,
          keyboardClose: true,
          color: 'danger'
        }).then(t => t.present());
      }
    );
  }
  get descricao() {
    return this.produtoForm.get('descricao');
  }
  get preco() {
    return this.produtoForm.get('preco');
  }
  get tipo() {
    return this.produtoForm.get('tipo');
  }
  get status() {
    return this.produtoForm.get('status');
  }
}
