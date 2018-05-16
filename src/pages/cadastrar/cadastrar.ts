import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { user } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '@firebase/auth-types';
import { async } from '@firebase/util';
import { LoginPage } from '../login/login';


/**
 * Generated class for the CadastrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html',
})
export class CadastrarPage {

  user = {} as user;

  constructor
    (private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

 
  async cadastrar(user: user){
    try {
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
console.log(result);
  } 
  catch (e) {
    console.error(e);
  }
} 

goToLogin(params) {
  if (!params) params = {};
  this.navCtrl.push(LoginPage);
}
}



