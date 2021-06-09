import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Pessoa } from '../pessoa.model';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-listagem-funcionario',
  templateUrl: './listagem-funcionarios.page.html',
  styleUrls: ['./listagem-funcionarios.page.scss'],
})
export class ListagemFuncionarioPage implements OnInit {
   funcionarios = [];
  constructor(private alertController: AlertController,
    private toastController: ToastController,
    private funcionarioService: PessoaService) { }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.listar();
  }
  confirmarExclusao(funcionario: Pessoa) {
    this.alertController.create({
      header: 'Confirmação de exclusão',
      message: `Deseja excluir o funcionario ${funcionario.nome}?`,
      buttons: [
        {
          text: 'Sim',
          handler: () => this.excluir(funcionario)
        },
        {
          text: 'Não',
        }
      ]
    }).then(alerta => alerta.present());
  }

  private excluir(funcionario: Pessoa) {
    this.funcionarioService
      .excluir(funcionario.id)
      .subscribe(
        () => this.listar(),
        (erro) => {
          console.error(erro);
          this.toastController.create({
            message: `Não foi possível excluir o autor ${funcionario.nome}`,
            duration: 5000,
            keyboardClose: true,
            color: 'danger'
          }).then(t => t.present());
        }
      );
  }
  listar() {
    this.funcionarioService
      .getFuncionarios()
      .subscribe(
        (dados) => {
          this.funcionarios = dados;
        },
        (erro) => {
          console.error(erro);
        }
      );
  }
}
