import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Content } from 'ionic-angular';


/**
 * Generated class for the OutrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estacionamento',
  templateUrl: 'estacionamento.html',
})
export class EstacionamentoPage {
@ViewChild(Content) content: Content;
    showToolbar:boolean = false;
    headerImgSize:string = '100%';
    headerImgUrl:string = '';
    transition:boolean = false;
    articles:Array<any> = new Array(10).fill('');

    constructor(
        public navParams: NavParams,
        public ref: ChangeDetectorRef,
    ) {


    }

  ionViewDidLoad() {
      console.log('ionViewDidLoad EstacionamentoPage');

      this.headerImgUrl = 'assets/imgs/form3.png';

      // this.content.enableScrollListener();
  }


}