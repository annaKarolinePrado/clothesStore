import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produtos.page.html',
  styleUrls: ['./listagem-produtos.page.scss'],
})
export class ListagemProdutoPage implements OnInit {
   produtos = [];
  constructor(private alertController: AlertController,
    private toastController: ToastController,
    private produtoService: ProdutoService) { }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.listar();
  }
  confirmarExclusao(produto: Produto) {
    this.alertController.create({
      header: 'Confirmação de exclusão',
      message: `Deseja excluir o produto ${produto.descricao}?`,
      buttons: [
        {
          text: 'Sim',
          handler: () => this.excluir(produto)
        },
        {
          text: 'Não',
        }
      ]
    }).then(alerta => alerta.present());
  }

  private excluir(produto: Produto) {
    this.produtoService
      .excluir(produto.id)
      .subscribe(
        () => this.listar(),
        (erro) => {
          console.error(erro);
          this.toastController.create({
            message: `Não foi possível excluir o autor ${produto.descricao}`,
            duration: 5000,
            keyboardClose: true,
            color: 'danger'
          }).then(t => t.present());
        }
      );
  }
  listar() {

    this.produtoService
      .getProdutos()
      .subscribe(
        (dados) => {
          this.produtos = dados;
        },
        (erro) => {
          console.error(erro);
        }
      );
  }
}
