import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListagemVendaPageRoutingModule } from './listagem-vendas-routing.module';
import { ListagemVendaPage } from './listagem-vendas.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemVendaPageRoutingModule
  ],
  declarations: [ListagemVendaPage]
})
export class ListagemVendaPageModule {}
