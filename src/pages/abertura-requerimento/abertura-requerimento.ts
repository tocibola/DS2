import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InicialPage } from '../inicial/inicial';

/**
 * Generated class for the AberturaRequerimentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-abertura-requerimento',
  templateUrl: 'abertura-requerimento.html',
})
export class AberturaRequerimentoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AberturaRequerimentoPage');
  }

  goToAberturaRequerimentoPage(){
    this.navCtrl.push(AberturaRequerimentoPage,{
    })
  }
  goToInicialPage(){
    this.navCtrl.push(InicialPage,{
    })
  }
}
