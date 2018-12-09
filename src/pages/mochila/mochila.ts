import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstacaoPage } from '../estacao/estacao';
import { MalaProntaPage } from '../mala-pronta/mala-pronta';

/**
 * Generated class for the MochilaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
  
@IonicPage()
@Component({
  selector: 'page-mochila',
  templateUrl: 'mochila.html',
})
export class MochilaPage {
  estacao = EstacaoPage;
  clima: "inverno";
  inverno:String;
  camisetas:number;
  blusas:number;
  calcas:number;
  tenis:number;
  bermudas:number;
   
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MochilaPage');
  }

  mala() {
    if (this.clima=="inverno"){
      this.inverno = "inverno";
    }
  }

  finalizarMala() {
      this.navCtrl.push("MalaProntaPage",{
        qtdCamisetas: this.camisetas,
        qtdBlusas: this.blusas,
        qtdCalcas: this.calcas,
        qtdBermudas: this.bermudas,
        qtdTenis: this.tenis

      });
  }
}
