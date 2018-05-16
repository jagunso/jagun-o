import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IluminacaoPage } from './iluminacao';

@NgModule({
  declarations: [
    IluminacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(IluminacaoPage),
  ],
})
export class IluminacaoPageModule {}
