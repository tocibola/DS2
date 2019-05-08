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
    ) {      
  }

  goToTestePage(){
    if((this.matricula == null) || (this.password == "")){
      alert("Por favor preencha matricula e senha");
    }else(
      this.navCtrl.push(TestePage,{
        userLogin: this.matricula, //user login é uma variavel local utilizada para passagem de valor, a mesma é usada por login.ts
        senhaLogin: this.password,
      })
    )
  }

  testandoAlert(){
    
    }


}
