import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestePage } from '../teste/teste';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
    
  private matricula:number;
  private password:string;
  constructor(
    public navCtrl: NavController,
    ) 
    {      
  }

  goToTestePage(){
    this.navCtrl.push(TestePage,{
      userLogin: this.matricula, //user login é uma variavel local utilizada para passagem de valor, a mesma é usada por login.ts
      senhaLogin: this.password,
    });
  }

  testandoAlert(){
    alert(this.matricula); 
  }


}
