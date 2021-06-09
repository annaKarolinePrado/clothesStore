import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListagemProdutoPageRoutingModule } from './listagem-produtos-routing.module';
import { ListagemProdutoPage } from './listagem-produtos.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemProdutoPageRoutingModule
  ],
  declarations: [ListagemProdutoPage]
})
export class ListagemProdutoPageModule {}
