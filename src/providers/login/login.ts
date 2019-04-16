import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  private urlLogin = "http://200.159.247.135:8083/WebAcademico/rest/usuario/buscarPorLoginSenha/";

  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }

  getLoginUser(){
    return this.http.get(this.urlLogin + "1701130027/GMC4620");
  }

}
