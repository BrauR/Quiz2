import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BocinaPage } from '../bocina/bocina';
import { TelePage } from '../tele/tele';
import { LamparaPage } from '../lampara/lampara';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bocina=BocinaPage;
  tv=TelePage;
  lamp=LamparaPage;

  constructor(public navCtrl: NavController) {
    
  }
  bocina1(){
    this.navCtrl.push(this.bocina)
  }
  tele(){
    this.navCtrl.push(this.tv)
  }
  lampara(){
    this.navCtrl.push(this.lamp)
  }

}
