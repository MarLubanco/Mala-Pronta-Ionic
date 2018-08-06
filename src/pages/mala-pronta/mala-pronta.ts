import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MalaProntaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */




@IonicPage()
@Component({
  selector: 'page-mala-pronta',
  templateUrl: 'mala-pronta.html',
})
export class MalaProntaPage {
  qtdCamisetas: number;
  qtdBlusas: number;
  qtdCalcas: number;
  qtdBermudas: number;
  qtdTenis: number;
  country:String;
  estacao: String;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.country = navParams.get("paiss");
      this.estacao = navParams.get("clima");
      this.qtdCamisetas = navParams.get("qtdCamisetas");
      this.qtdBlusas = navParams.get("qtdBlusas");
      this.qtdCalcas = navParams.get("qtdCalcas");
      this.qtdTenis = navParams.get("qtdTenis");
      this.qtdBermudas =  navParams.get("qtdBermudas");
      console.log("Pais: " + this.country + "Estação: " + this.estacao + " Camisetas: " + this.qtdCamisetas + " Blusas: " + this.qtdBlusas + 
      " Calças: " + this.qtdCalcas + " Tenis: " + this.qtdTenis + " Bermudas: " + this.qtdBermudas);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MalaProntaPage');
   
  }

  malaPronta(){
      console.log("Camisetas: " + this.qtdCamisetas + " Blusas: " + this.qtdBlusas);

  }


}
