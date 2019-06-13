import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { InicialPage } from '../pages/inicial/inicial';
import { AberturaRequerimentoPage } from '../pages/abertura-requerimento/abertura-requerimento';
import { UserConfigProvider } from '../providers/userConfigProvider/userConfigProvider';

@Component({
  templateUrl: 'app.html',
  providers: [
    UserConfigProvider,
  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //private matricula: number;
  //private password: string;


  rootPage: any = HomePage; //altera a pagina inicial

  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public userConfigProvider: UserConfigProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [ //local para criar os atalhos da barra de menu
      { title: 'Requerimentos', component: InicialPage },
      { title: 'Abertura de Requerimento', component: AberturaRequerimentoPage },
      //{ title: 'Sobre o App', component: alert("App de requerimento desenvolvido pela turma de DS2.")},
      //{ title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
/*
      let config = this.userConfigProvider.getConfigData();
      if(config==null){
        console.log("entrou no if");
        this.rootPage = HomePage;
        this.userConfigProvider.setConfigData(false);
      }else{
        console.log("entrou no else");
        this.rootPage = InicialPage, {
          userLogin: this.matricula,
          senhaLogin: this.password,
        };
      }*/
    

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
