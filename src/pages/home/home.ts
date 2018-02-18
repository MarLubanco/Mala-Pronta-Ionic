import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicialPage } from '../inicial/inicial';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    usuarioo: number;
    senhaaaa: number;
    resultado;
    inicial = InicialPage;
 
  

  constructor(public navCtrl: NavController) {
    this.usuarioo;
    this.senhaaaa;
   
  }

  public logar(){
      this.navCtrl.push("InicialPage");
      console.log("Usuario: " + this.usuarioo + " Senha: " + this.senhaaaa );
  }

  limparCampos(){
    this.usuarioo =null;
    this.senhaaaa =  null;
    console.log("Dados limpos");
  }

}