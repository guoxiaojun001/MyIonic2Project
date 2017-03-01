import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Broadcaster } from 'ionic-native';
import {Observable} from "rxjs/Observable";


/*
  Generated class for the TestPlugin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/


declare let XmPlugin: any;



@Component({
  selector: 'page-test-plugin',
  templateUrl: 'test-plugin.html'
})
export class TestPluginPage {

  profilePicture: any /*= "assets/image/qrcode.jpg"*/;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.registerBroadcast();

    // let broadcaster:any;
    // Broadcaster.addEventListener( "test.java", function( e ) {
    //   alert("ionic2通知1111111111 + " + e);
    // }).then((event)=>alert("ionic2通知222222222 + " + event));

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPluginPage');
    // Listen to events from Native

  }


  registerBroadcast(){
    console.log( "register didShow received!" );

    // Broadcaster.addEventListener( "test.java", function( e ) {
    //   //log: didShow received! userInfo: {"data":"test"}
    //   console.log( "didShow received! userInfo: " + JSON.stringify(e)  );
    // });

  }


  testPlugin(){
    //alert("openCamera");

    XmPlugin.method02("func2传来的参数0","func2传来的参数1",
      function(msg) {
        alert("成功了" + msg);},//成功的回调
      function(msg) {
        alert("失败了"+msg);
      });//失败的回调
  }

  openCamera(){
    XmPlugin.method03("我要打开相机",
      function(msg) {
        alert(msg );
        this.profilePicture=msg;
        //this.profilePicture = "assets/image/video.png";
      },//成功的回调

      function(msg) {
        alert("失败了"+msg);
      });//失败的回调

  }


  sendMsg(){
    // Send event to Native
     Broadcaster.fireNativeEvent('test.xmqq',
       {userdata:'ionic 发送的测试数据77777'}).then(() => console.log('发送success'));

    // Broadcaster.fireNativeEvent( "test.xmqq", { userdata:'我是测试数据' }, function() {
    //   console.log( "event fired! 成功" );
    // } );

  }

}
