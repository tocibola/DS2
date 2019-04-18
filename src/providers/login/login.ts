import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  private userMatricula:number;
  private userSenha:string;

  private urlLogin = "http://200.159.247.135:8083/WebAcademico/rest/usuario/buscarPorLoginSenha/";

  constructor(public http: HttpClient,
    public navCtrl: NavController,
    public navParams: NavParams,) {
    console.log('Hello LoginProvider Provider');
    let recebeValorUser = navParams.get('userLogin'); /* "recebeValorUser" é uma variavel local da função,
usada para receber o Login da variavel "userLogin", essa variavel é enviada pelo home.ts */
    let recebeValorUserSenha = navParams.get('senhaLogin');
    this.userMatricula = recebeValorUser;
    this.userSenha = recebeValorUserSenha;
    console.log(this.userSenha + ' - ' + this.userMatricula);
  }

  getLoginUser(){
    return this.http.get(this.urlLogin + this.userMatricula + "/" + this.userSenha);
  }

}
