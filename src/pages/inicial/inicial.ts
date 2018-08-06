import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstacaoPage } from '../estacao/estacao';

/**
 * Generated class for the InicialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicial',
  templateUrl: 'inicial.html',
})
export class InicialPage {
    clima = EstacaoPage
    pais:String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pais
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicialPage');
  }


  estacao(){ 
    this.navCtrl.push("EstacaoPage");

  }

  canada(){
    this.pais = "Canada";
    this.navCtrl.push("EstacaoPage",{
      paiss: this.pais
    });
    
    console.log("Pais: " +  this.pais)
  
  }

  china(){
    this.pais = "China";
    this.navCtrl.push("EstacaoPage",{
      paiss: this.pais
    });

    console.log("Pais: " +  this.pais)
  
  }

  newyork(){
    this.pais = "New York";
    this.navCtrl.push("EstacaoPage",{
      paiss: this.pais
    });
    console.log("Pais: " +  this.pais)
   
  }

}
