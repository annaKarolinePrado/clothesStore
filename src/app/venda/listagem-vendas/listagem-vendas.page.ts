import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Venda } from '../venda.model';
import { VendaService } from '../venda.service';

@Component({
  selector: 'app-listagem-venda',
  templateUrl: './listagem-vendas.page.html',
  styleUrls: ['./listagem-vendas.page.scss'],
})
export class ListagemVendaPage implements OnInit {
   vendas = [];
  constructor(private alertController: AlertController,
    private toastController: ToastController,
    private vendaService: VendaService) { }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.listar();
  }
  confirmarExclusao(venda: Venda) {
    this.alertController.create({
      header: 'Confirmação de exclusão',
      message: `Deseja excluir o venda ${venda.id}?`,
      buttons: [
        {
          text: 'Sim',
          handler: () => this.excluir(venda)
        },
        {
          text: 'Não',
        }
      ]
    }).then(alerta => alerta.present());
  }

  private excluir(venda: Venda) {
    this.vendaService
      .excluir(venda.id)
      .subscribe(
        () => this.listar(),
        (erro) => {
          console.error(erro);
          this.toastController.create({
            message: `Não foi possível excluir a venda  ${venda.id}`,
            duration: 5000,
            keyboardClose: true,
            color: 'danger'
          }).then(t => t.present());
        }
      );
  }
  listar() {

    this.vendaService
      .getVendas()
      .subscribe(
        (dados) => {
          this.vendas = dados;
        },
        (erro) => {
          console.error(erro);
        }
      );
  }
}
