import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import { InicialPage } from '../inicial/inicial';
import { TipoRequerimentoProvider } from '../../providers/tipoRequerimentoProvider/tipoRequerimentoProvider';

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
  providers: [
    TipoRequerimentoProvider,
  ]
})
export class AberturaRequerimentoPage {

  private nomeUser = new Array<any>();
  private listaRequerimentos = new Array<any>();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private tipoRequerimentoProvider: TipoRequerimentoProvider,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AberturaRequerimentoPage');
    this.carregaListaRequerimento();
    /*this.tipoRequerimentoProvider.getTipoRequerimento().subscribe(  
      data => {
        const response = (data as any);
        console.log('Tipo de requerimento antes erro');
        //console.log(JSON.parse(response));
        //this.tipoReque = response[0].nome; //TODO: vai ser necessario uma estrutura de repetição....
        //const tipoReque = JSON.parse(response); //TODO: Verificar como utilizar dessa forma: JSON.parse(response._body)....
        this.listaRequerimentos = response.nome; //TODO: Verificar como utilizar dessa forma: JSON.parse(response._body)....
        console.log('Tipo de requerimento!! - ' + this.listaRequerimentos);
        //this.listaRequerimentos = tipoReque.results;
        //console.log('Tipo de requerimento[0] - ' + tipoReque.nomeUser);
      }, error => {
        alert("Erro no tipoRequerimentoProvider - InicialTs");
      }
    )*/

  }

  carregaListaRequerimento() {
    console.log('Acessou a função carregaListaRequeriemnto');
    this.tipoRequerimentoProvider.getTipoRequerimento().subscribe(
      data => {
        const response = (data as any);
        for (let cont = 0; response[cont] != undefined; cont++) { //variaveis são definicas com let no ts
          this.listaRequerimentos[cont] = response[cont].nome; //TODO: Verificar como utilizar dessa forma: JSON.parse(response._body)....
          console.log('Tipo de requerimento!! - ' + this.listaRequerimentos);
        }//fecha o loop
      }, error => {
        alert("Erro no tipoRequerimentoProvider - InicialTs");
      }
    )
  }

  goToAberturaRequerimentoPage() {
    this.navCtrl.push(AberturaRequerimentoPage, {
    })
  }

  goToInicialPage() {
    this.navCtrl.push(InicialPage, {
    })
  }
}
