import { Component } from '@angular/core';
import * as $ from "jquery";
import { NavController } from 'ionic-angular';
import { IonicPage, NavParams, ToastController } from 'ionic-angular';
import { SegurancaPage } from '../seguranca/seguranca';
import { BuracosPage } from '../buracos/buracos';
import { EstacionamentoPage } from '../estacionamento/estacionamento';
import { IluminacaoPage } from '../iluminacao/iluminacao';
import { LimpezaPage } from '../limpeza/limpeza';
import { MosquitoPage } from '../mosquito/mosquito';
import { OcupacaoPage } from '../ocupacao/ocupacao';
import { OutrosPage } from '../outros/outros';
import { RemocaoPage } from '../remocao/remocao';
import { TransitoPage } from '../transito/transito';
import { AngularFireAuth } from 'angularfire2/auth';
import { isComponentView } from '@angular/core/src/view/util';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private afAuth: AngularFireAuth, private toast: ToastController,
    public navCtrl: NavController) {

  }
  goToSeguranca(params) {
    if (!params) params = {};
    this.navCtrl.push(SegurancaPage);
  }

  goToBuracos(params) {
    if (!params) params = {};
    this.navCtrl.push(BuracosPage);
  }

  goToEstacionamento(params) {
    if (!params) params = {};
    this.navCtrl.push(EstacionamentoPage);
  }

  goToIluminacao(params) {
    if (!params) params = {};
    this.navCtrl.push(IluminacaoPage);
  }

  goToLimpeza(params) {
    if (!params) params = {};
    this.navCtrl.push(LimpezaPage);
  }

  goToMosquito(params) {
    if (!params) params = {};
    this.navCtrl.push(MosquitoPage);
  }
  goToOcupacao(params) {
    if (!params) params = {};
    this.navCtrl.push(OcupacaoPage);
  }

  goToOutros(params) {
    if (!params) params = {};
    this.navCtrl.push(OutrosPage);
  }

  goToRemocao(params) {
    if (!params) params = {};
    this.navCtrl.push(RemocaoPage);
  }
  goToTransito(params) {
    if (!params) params = {};
    this.navCtrl.push(TransitoPage);
  }

 
      
     }