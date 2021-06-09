import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListagemFuncionarioPageRoutingModule } from './listagem-funcionarios-routing.module';
import { ListagemFuncionarioPage } from './listagem-funcionarios.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemFuncionarioPageRoutingModule

  ],
  declarations: [ListagemFuncionarioPage]
})
export class ListagemFuncionarioPageModule {}
