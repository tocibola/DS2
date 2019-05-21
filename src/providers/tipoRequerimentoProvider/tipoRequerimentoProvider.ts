import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the TipoRequerimentoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TipoRequerimentoProvider {

  //private tipoRequerimento:String;
  private urlTipoRequerimento = "http://localhost:8080/DS1_Femass/rest/requerimento/tiposRequerimento";

  constructor(public http: HttpClient,
    public navCtrl: NavController,
    public navParams: NavParams,) {
    console.log('Hello TipoRequerimentoProvider Provider');
  }

  getTipoRequerimento(){
    return this.http.get(this.urlTipoRequerimento);
  }

}
