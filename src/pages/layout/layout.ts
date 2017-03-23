import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ViewController} from 'ionic-angular';

/*
  Generated class for the Layout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-layout',
  templateUrl: 'layout.html'
})
export class LayoutPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }


  // 页面被加载完成后调用的函数，切换页面时并不会进行重新加载，因为有cache的存在
  ionViewLoaded() {
    console.log('TTT: page loaded.');
  }

// 页面即将进入的时候
  ionViewWillEnter() {
    // 在这里可以做页面初始化的一些事情
    console.log('TTT: page will enter.');
  }

// 页面已经进入的时候
  ionViewDidEnter() {
    console.log('TTT: page did enter.');
  }

// 页面即将离开的时候
  ionViewWillLeave() {
    console.log('TTT: page will leave.');
  }

// 页面已经离开的时候
  ionViewDidLeave() {
    console.log('TTT: page did leave.');
  }

// 从 DOM 中移除的时候执行的生命周期
  ionViewWillUnload() {
    console.log('TTT: page did onPageWillUnload.');
  }

// 从 DOM 中移除执行完成的时候
  ionViewDidUnload() {
    console.log('TTT: page did ionViewDidUnload.');
  }

}
