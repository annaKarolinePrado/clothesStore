import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListagemPessoaPageRoutingModule } from './listagem-pessoas-routing.module';
import { ListagemPessoaPage } from './listagem-pessoas.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemPessoaPageRoutingModule
  ],
  declarations: [ListagemPessoaPage]
})
export class ListagemPessoaPageModule {}
