import { NgModule } from '@angular/core';
import { IonicPageModule, NavController } from 'ionic-angular';
import { AberturaRequerimentoPage } from './abertura-requerimento';
import { Component} from '@angular/core';

@Component({
  selector: 'page-abertura-requerimento',
  templateUrl: 'page-abertura-requerimento.html'
})
@NgModule({
  declarations: [
    AberturaRequerimentoPage,
  ],
  imports: [
    IonicPageModule.forChild(AberturaRequerimentoPage),
  ],
})
export class AberturaRequerimentoPageModule {
  currentDate;
  constructor(public navCtrl: NavController){
    this.currentDate = new Date();
  }
}
