import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AtoPageRoutingModule } from './produto-routing.module';
import { ProdutoPage } from './produto.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProdutoPage]
})
export class ProdutoPageModule {}
