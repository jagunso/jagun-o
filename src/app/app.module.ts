import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import{AngularFireAuthModule} from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SegurancaPage } from '../pages/seguranca/seguranca';
import { BuracosPage } from '../pages/buracos/buracos';
import { EstacionamentoPage } from '../pages/estacionamento/estacionamento';
import { IluminacaoPage } from '../pages/iluminacao/iluminacao';
import { LimpezaPage } from '../pages/limpeza/limpeza';
import { MosquitoPage } from '../pages/mosquito/mosquito';
import { OcupacaoPage } from '../pages/ocupacao/ocupacao';
import { OutrosPage } from '../pages/outros/outros';
import { RemocaoPage } from '../pages/remocao/remocao';
import { LoginPage } from '../pages/login/login';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { CadastrarPage } from '../pages/cadastrar/cadastrar';
import { initializeApp } from 'firebase';
import { TransitoPage } from '../pages/transito/transito';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SegurancaPage,
    BuracosPage,
    EstacionamentoPage,
    IluminacaoPage,
    LimpezaPage,
    MosquitoPage,
    OcupacaoPage,
    OutrosPage,
    RemocaoPage,
    LoginPage,
    CadastrarPage,
    TransitoPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{ 
    scrollAssist: false, 
    autoFocusAssist: false,
    }), 
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,

      ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SegurancaPage,
    BuracosPage,
    EstacionamentoPage,
    IluminacaoPage,
    LimpezaPage,
    MosquitoPage,
    OcupacaoPage,
    OutrosPage,
    RemocaoPage,
    LoginPage,
    CadastrarPage,
    TransitoPage
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
  {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
