import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { InicialPage } from '../inicial/inicial';
import { AberturaRequerimentoPage } from '../abertura-requerimento/abertura-requerimento';

/**
 * Generated class for the TestePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teste',
  templateUrl: 'teste.html',
  providers: [
    LoginProvider,
  ]
})

export class TestePage {

  private cpfUser = new Array<any>();
  private cursoUser = new Array<any>();
  private cepUser = new Array<any>();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private loginProvider: LoginProvider,
    ) {
  }

  ionViewDidLoad() {
    this.loginProvider.getLoginUser().subscribe(
      data => {
        const response = (data as any);
        this.cpfUser = response.cpf;
        this.cursoUser = response.curso;
        this.cepUser = response.enderecoCep;
        //console.log(response);
      }, error => {
        alert("Usuario ou senha incorreto!");
        //this.navCtrl.push(HomePage);
      }
    )
  }

  goToInicialPage(){
    this.navCtrl.push(InicialPage,{

    })
  }

  goToAberturaRequerimentoPage(){
    this.navCtrl.push(AberturaRequerimentoPage,{
      
    })
  }

}
