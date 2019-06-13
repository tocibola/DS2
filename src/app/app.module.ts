import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TestePage } from '../pages/teste/teste';
import { LoginProvider } from '../providers/loginProvider/loginProvider';
import { HttpClientModule } from '@angular/common/http';
import { AberturaRequerimentoPage } from '../pages/abertura-requerimento/abertura-requerimento';
import { InicialPage } from '../pages/inicial/inicial';
import { TipoRequerimentoProvider } from '../providers/tipoRequerimentoProvider/tipoRequerimentoProvider';
import { RequerimentoProvider } from '../providers/requerimentoProvider/requerimentoProvider';
import { UserConfigProvider } from '../providers/userConfigProvider/userConfigProvider';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TestePage,
    AberturaRequerimentoPage,
    InicialPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TestePage,
    AberturaRequerimentoPage,
    InicialPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    TipoRequerimentoProvider,
    RequerimentoProvider,
  ]
})
export class AppModule {}
