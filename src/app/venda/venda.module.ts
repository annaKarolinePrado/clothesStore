import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AtoPageRoutingModule } from './venda-routing.module';
import { VendaPage } from './venda.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [VendaPage]
})
export class VendaPageModule {}
