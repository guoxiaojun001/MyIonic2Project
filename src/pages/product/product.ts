import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';

import {HttpService} from "../../providers/HttpService";
import {ProductdetailPage} from "../productdetail/productdetail";


/*
  Generated class for the Product page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
  providers: [HttpService]
})
export class ProductPage {

  URL = "https://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key=%E9%93%B6%E9%AD%82&bk_length=60";
  // URL= "http://10.2.11.227:8080/HNUST/student/messageList";
  homeList: any;
  dataFinish: boolean = false;
  date: Date = new Date();
  hasErr: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private httpService: HttpService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
    setTimeout(() => {
      this.initData();
    }, 1000)
  }


  initData() {
    this.hasErr = false;
    this.dataFinish = false;
    this.httpService.httpGetNoAuth(this.URL).then(res => {

      var responseData = JSON.stringify(res);
      alert(responseData);

      if(res.code == "success"){
        alert("//登录成功");

      }

      this.homeList = res;
      this.dataFinish = true;
    }, err => {
      this.hasErr = true;
    })
  }


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  pushContent(name) {
    this.navCtrl.push(ProductdetailPage, { name: name });
  }


}
