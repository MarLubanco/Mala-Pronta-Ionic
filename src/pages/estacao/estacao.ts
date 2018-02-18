import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MochilaPage } from '../mochila/mochila';



/**
 * Generated class for the EstacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estacao',
  templateUrl: 'estacao.html',
})
export class EstacaoPage {
  clima: String;
  bag = MochilaPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.clima;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstacaoPage');
  }

  public verao() {
    this.clima ="verao";
    console.log("Estação: " + this.clima);
    this.navCtrl.push("MochilaPage");
   
  }

  public inverno() {
    this.clima = "inverno";
    console.log("Estação: " + this.clima);
    this.navCtrl.push("MochilaPage");
  
  }

  public outono() {
    this.clima = "outono";
    console.log("Estação: " + this.clima);
    this.navCtrl.push("MochilaPage");
  
  }

  public primavera() {
    this.clima = "primavera";
    console.log("Estação: " + this.clima);
    this.navCtrl.push("MochilaPage");

  }


}
