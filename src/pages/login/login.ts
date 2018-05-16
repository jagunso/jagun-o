import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, MenuController } from 'ionic-angular';
import { user } from '../../models/user';
import { CadastrarPage } from '../cadastrar/cadastrar';
import{AngularFireAuth} from'angularfire2/auth';
import { HomePage } from '../home/home';
import * as firebase from 'firebase/app'



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user ={} as user; 
    facebook ={
      logado : false,
      nome: '',
      email: '',
      FotoPerfil: '',
    };

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController) {
  }

 async login(user : user){
    try{
  const result =this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    if (result){
      this.navCtrl.setRoot(HomePage);
    }


  }catch(e){
    console.error(e);

  }

}
  cadastrar(){
    this.navCtrl.push(CadastrarPage);

  }

loginfc(){
  this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
  .then(res =>{
this.facebook.logado = true;
this.facebook.email = res.user.email;
this.facebook.nome = res.user.displayName;
this.facebook.FotoPerfil = res.user.photoURL;

try{

    if (this.loginfc){
      this.navCtrl.setRoot(HomePage);
    }


  }catch(e){
    console.error(e);

  }

  })
}

forgotPass() {
  let forgot = this.forgotCtrl.create({
    title: 'Esqueceu a senha?',
    message: "Digite seu endereço de e-mail para redefinição da senha.",
    inputs: [
      {
        name: 'email',
        placeholder: 'Email',
        type: 'email'
      },
    ],
    buttons: [
      {
        text: 'Cancelar',
        handler: data => {
          console.log('Cancelar clicado!');
        }
      },
      {
        text: 'Enviar',
        handler: data => {
          console.log('Enviar clicado!');
          let toast = this.toastCtrl.create({
            message: 'O email foi enviado com sucesso!',
            duration: 3000,
            position: 'top',
            cssClass: 'dark-trans',
            closeButtonText: 'OK',
            showCloseButton: true
          });
          toast.present();
        }
      }
    ]
  });
  forgot.present();
}







}

