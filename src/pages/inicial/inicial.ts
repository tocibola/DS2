import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AberturaRequerimentoPage } from '../abertura-requerimento/abertura-requerimento';
import { LoginProvider } from '../../providers/loginProvider/loginProvider';

/**
 * Generated class for the InicialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicial',
  templateUrl: 'inicial.html',
  providers: [
    LoginProvider,
  ]
})
export class InicialPage {

  private nomeUser = new Array<any>();
  //TipoRequerimentoProvider: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private loginProvider: LoginProvider,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicialPage');
    
    this.loginProvider.getLoginUser().subscribe(
      data => {
        //console.log("nem sei que erro eh esse");
        const response = (data as any);
        this.nomeUser = response.nome;
        console.log('Nome do infeliz: ' + this.nomeUser);
      }, error => {
        alert("Erro no loginProvider - InicialTs");
      }
    )

  }
  
  goToAberturaRequerimentoPage(){
    this.navCtrl.push(AberturaRequerimentoPage,{
      
    })
  }
}
