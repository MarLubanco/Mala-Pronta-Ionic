import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstacaoPage } from '../estacao/estacao';
import { MalaProntaPage } from '../mala-pronta/mala-pronta';
import { AlertController, Alert } from 'ionic-angular';
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

  inverno: String;
  camisetas: number;
  blusas: number;
  calcas: number;
  tenis: number;
  bermudas: number;
  pais: String;
  climaa: String;
  background: String;

  camisetasEx: number;
  blusaEx: number;
  calcaEx: number;
  bermudaEx: number;
  tenisEx: number;



  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    this.pais = navParams.get("paiss");
    this.climaa = navParams.get("clima");
    this.background = this.pais;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MochilaPage');
    console.log(this.pais);
  }





  finalizarMala() {
    this.navCtrl.push("MalaProntaPage", {
      paiss: this.pais,
      clima: this.climaa,
      qtdCamisetas: this.camisetas,
      qtdBlusas: this.blusas,
      qtdCalcas: this.calcas,
      qtdBermudas: this.bermudas,
      qtdTenis: this.tenis

    });

  }

  presentAlert() {
    let alert = Alert.create({
      title: 'Mochila Exemplo',
      template: `<h2>This is a custom alert</h2>
                <button>Go to second page</button>`


    });
    alert.present();
  }


  malaExemplo() {
    switch (this.pais) {
      case "Canada":
        if (this.climaa === "Verão") {
          this.camisetasEx = 5;
          this.blusaEx = 1;
          this.calcaEx = 2;
          this.bermudaEx = 3;
          this.tenisEx = 2;
          console.log("estacao" + this.climaa + this.camisetasEx);
        } else if (this.climaa === "Inverno") {
          this.camisetasEx = 3;
          this.blusaEx = 4;
          this.calcaEx = 3;
          this.bermudaEx = 1;
          this.tenisEx = 3;
        } else if (this.climaa === "Outono") {
          this.camisetasEx = 3;
          this.blusaEx = 3;
          this.calcaEx = 2;
          this.bermudaEx = 2;
          this.tenisEx = 2;
        } else if (this.climaa === "Primavera") {
          this.camisetasEx = 4;
          this.blusaEx = 1;
          this.calcaEx = 2;
          this.bermudaEx = 3;
          this.tenisEx = 2;
        }
      case "China":
        if (this.climaa === "Verão") {
          this.camisetasEx = 7;
          this.blusaEx = 1;
          this.calcaEx = 2;
          this.bermudaEx = 4;
          this.tenisEx = 3;
          console.log("Camisetasssssss" + this.camisetasEx);
        } else if (this.climaa === "Inverno") {
          this.camisetasEx = 5;
          this.blusaEx = 4;
          this.calcaEx = 4;
          this.bermudaEx = 1;
          this.tenisEx = 2;
        } else if (this.climaa === "Outono") {
          this.camisetasEx = 4;
          this.blusaEx = 3;
          this.calcaEx = 2;
          this.bermudaEx = 1;
          this.tenisEx = 2;
        } else if (this.climaa === "Primavera") {
          this.camisetasEx = 5;
          this.blusaEx = 1;
          this.calcaEx = 2;
          this.bermudaEx = 3;
          this.tenisEx = 2;
        }

      case "New York":

        if (this.climaa === "Verão") {
          this.camisetasEx = 7;
          this.blusaEx = 4;
          this.calcaEx = 3;
          this.bermudaEx = 3;
          this.tenisEx = 3;
          console.log(this.camisetasEx);
        } else if (this.climaa === "Inverno") {
          this.camisetasEx = 6;
          this.blusaEx = 5;
          this.calcaEx = 3;
          this.bermudaEx = 2;
          this.tenisEx = 2;
        } else if (this.climaa === "Outono") {
          this.camisetasEx = 6;
          this.blusaEx = 4;
          this.calcaEx = 3;
          this.bermudaEx = 2;
          this.tenisEx = 2;
        } else if (this.climaa === "Primavera") {
          this.camisetasEx = 7;
          this.blusaEx = 3;
          this.calcaEx = 3;
          this.bermudaEx = 2;
          this.tenisEx = 2;
        }


    }

  }



}
