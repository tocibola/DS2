import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestePage } from '../teste/teste';
import { InicialPage } from '../inicial/inicial';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  private matricula: number;
  private password: string;
  constructor(
    public navCtrl: NavController,
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
