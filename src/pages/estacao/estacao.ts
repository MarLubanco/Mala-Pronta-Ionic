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
export class EstacaoPage  {
  clima: String;
  bag = MochilaPage;
  pais : String;

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.clima;
    this.pais = navParams.get("paiss");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstacaoPage');
  }

  public verao() {
    this.clima ="Verão";
    console.log("Estação: " + this.clima + "Pais: " + this.pais);
    this.navCtrl.push("MochilaPage",{
        paiss : this.pais,
        clima : this.clima
    });
   
  }

  public inverno() {
    this.clima = "Inverno";
    console.log("Estação: " + this.clima);
    this.navCtrl.push("MochilaPage",{
      paiss : this.pais,
      clima : this.clima
  });
  }

  public outono() {
    this.clima = "Outono";
    console.log("Estação: " + this.clima);
    this.navCtrl.push("MochilaPage",{
      paiss : this.pais,
      clima : this.clima
  });
  }

  public primavera() {
    this.clima = "Primavera";
    console.log("Estação: " + this.clima);
    this.navCtrl.push("MochilaPage",{
      paiss : this.pais,
      clima : this.clima
  });
  }


}
