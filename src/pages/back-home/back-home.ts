import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NewsPage} from "../news/news";

/*
  Generated class for the BackHome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-back-home',
  templateUrl: 'back-home.html'
})
export class BackHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BackHomePage');
  }


  backHome(){
    alert("点击了")
    //this.navCtrl.pop();

    //回到首页，把中间的页面都去除
    this.navCtrl.push(NewsPage, {tmd:'小牛在线'}).then(() => {
      const index = this.navCtrl.getActive().index;
      this.navCtrl.remove(0, index);
    })

  }
}
