import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Pessoa } from '../pessoa.model';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-listagem-pessoa',
  templateUrl: './listagem-pessoas.page.html',
  styleUrls: ['./listagem-pessoas.page.scss'],
})
export class ListagemPessoaPage implements OnInit {
   pessoas = [];
  constructor(private alertController: AlertController,
    private toastController: ToastController,
    private pessoaService: PessoaService) { }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.listar();
  }
  confirmarExclusao(pessoa: Pessoa) {
    this.alertController.create({
      header: 'Confirmação de exclusão',
      message: `Deseja excluir o pessoa ${pessoa.nome}?`,
      buttons: [
        {
          text: 'Sim',
          handler: () => this.excluir(pessoa)
        },
        {
          text: 'Não',
        }
      ]
    }).then(alerta => alerta.present());
  }

  private excluir(pessoa: Pessoa) {
    this.pessoaService
      .excluir(pessoa.id)
      .subscribe(
        () => this.listar(),
        (erro) => {
          console.error(erro);
          this.toastController.create({
            message: `Não foi possível excluir o autor ${pessoa.nome}`,
            duration: 5000,
            keyboardClose: true,
            color: 'danger'
          }).then(t => t.present());
        }
      );
  }
  listar() {
    this.pessoaService
      .getPessoas()
      .subscribe(
        (dados) => {
          this.pessoas = dados;
        },
        (erro) => {
          console.error(erro);
        }
      );
  }
}
