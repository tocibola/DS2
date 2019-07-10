import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicialPage } from '../inicial/inicial';
import { LoginProvider } from '../../providers/loginProvider/loginProvider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    LoginProvider,
  ]
})
export class HomePage {

  private matricula: number;
  private password: string;
  private logado: boolean;

  constructor(
    public navCtrl: NavController,
    private loginProvider: LoginProvider,
  ) {
  }

  goToInicialPage() {
    if ((this.matricula == null) || (this.password == "")) {
      alert("Por favor preencha matricula e senha");
    } else (
      this.navCtrl.push(InicialPage, {
        userLogin: this.matricula,
        senhaLogin: this.password,

      })
      /*this.navCtrl.push(TestePage, {
        userLogin: this.matricula, //user login é uma variavel local utilizada para passagem de valor, a mesma é usada por login.ts
        senhaLogin: this.password,
      })*/
    )
  }

  testandoAlert() {

  }


}
