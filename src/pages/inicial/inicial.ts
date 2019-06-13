import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AberturaRequerimentoPage } from '../abertura-requerimento/abertura-requerimento';
import { LoginProvider } from '../../providers/loginProvider/loginProvider';
import { TipoRequerimentoProvider } from '../../providers/tipoRequerimentoProvider/tipoRequerimentoProvider';

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
    TipoRequerimentoProvider,
  ]
})
export class InicialPage {

  private tipoReque = new Array<any>();
  public nomeUser = new Array<any>();
  //TipoRequerimentoProvider: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private tipoRequerimentoProvider: TipoRequerimentoProvider,
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

    this.tipoRequerimentoProvider.getTipoRequerimento().subscribe(
      data => {
        const response = (data as any);
        this.tipoReque = response[0].nome; //vai ser necessario uma estrutura de repetição....
        console.log('Tipo de requerimento[0] - ' + this.tipoReque);
      }, error => {
        alert("Erro no tipoRequerimentoProvider - InicialTs");
      }
    )
  }
  
  goToAberturaRequerimentoPage(){
    this.navCtrl.push(AberturaRequerimentoPage,{
      
    })
  }
}
