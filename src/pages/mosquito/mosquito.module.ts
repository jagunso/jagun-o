import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MosquitoPage } from './mosquito';

@NgModule({
  declarations: [
    MosquitoPage,
  ],
  imports: [
    IonicPageModule.forChild(MosquitoPage),
  ],
})
export class MosquitoPageModule {}
