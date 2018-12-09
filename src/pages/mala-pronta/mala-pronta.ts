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
  ativoCamiseta: boolean;
  qtdBlusas: number;
  ativoBlusa: boolean;
  qtdCalcas: number;
  ativoCalcas: boolean;
  qtdBermudas: number;
  ativoBermudas: boolean;
  qtdTenis: number;
  ativoTenis: boolean;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.qtdCamisetas = navParams.get("qtdCamisetas");
      this.ativoCamiseta = false;
      this.qtdBlusas = navParams.get("qtdBlusas");
      this.ativoBlusa = false;
      this.qtdCalcas = navParams.get("qtdCalcas");
      this.ativoCalcas = false;
      this.qtdTenis = navParams.get("qtdTenis");
      this.ativoTenis = false;
      this.qtdBermudas =  navParams.get("qtdBermudas");
      this.ativoBermudas = false;
      console.log("Camisetas: " + this.qtdCamisetas + " Blusas: " + this.qtdBlusas + 
      " Calças: " + this.qtdCalcas + " Tenis: " + this.qtdTenis + " Bermudas: " + this.qtdBermudas);
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad MalaProntaPage');
  }

  malaPronta() {
      console.log("Camisetas: " + this.qtdCamisetas + " Blusas: " + this.qtdBlusas);
  } 

  itemColocadoNaMala(ativo) {
    ativo = !ativo;
    console.log('cliquei porra ' + ativo)
  }
}
