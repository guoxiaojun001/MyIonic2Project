import { Component , ViewChild } from '@angular/core';
import {  Nav, Platform, ToastController, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';
import { BaiduMapPage } from '../pages/baidu-map/baidu-map';
import { EchartsPage } from '../pages/echarts/echarts';
import { BasicPage }from '../pages/action-sheets/basic/pages'
import { TutorialPage } from '../pages/tutorial/tutorial';

import { LoginPage }from '../pages/login/login'
import {MypointPage} from "../pages/mypoint/mypoint";
import {MyloanPage} from "../pages/myloan/myloan";
import {MycustomerPage} from "../pages/mycustomer/mycustomer";
import {TestPluginPage} from "../pages/test-plugin/test-plugin";
import { Storage } from '@ionic/storage';
import {LayoutPage} from "../pages/layout/layout";



declare let MyPlugin: any;

declare let DiyiPlugin: any;
declare var AppMinimize;


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any /*= TabsPage*/; //先不指定启动页，判断后是否显示引导页

  pages: Array<{ title: string, icon: string, component: any }>;
  backButtonPressed: boolean = false;


  constructor(public platform: Platform,
  public toastCtrl: ToastController,
  public menuCtrl: MenuController,
              public storage: Storage) {

    // Check if the user has already seen the tutorial
    this.storage.get('hasSeenTutorial')
      .then((hasSeenTutorial) => {
        if (hasSeenTutorial) {
          this.rootPage = TabsPage;
        } else {
          this.rootPage = TutorialPage;
        }

        //this.platformReady()
        this.initializeApp();
      })


    // this.initializeApp();

    this.pages = [
      { title: '百度地图', icon: 'md-map', component: BaiduMapPage },
      { title: '图表', icon: 'md-analytics', component: EchartsPage },
      { title: '相机', icon: 'md-analytics', component: BasicPage },

      { title: '登录', icon: 'md-analytics', component: LoginPage },
      { title: '我的积分', icon: 'md-analytics', component: MypointPage },
      { title: '我的借款', icon: 'md-analytics', component: MyloanPage },
      { title: '我的客户', icon: 'md-analytics', component: MycustomerPage },
      { title: '布局测试', icon: 'md-analytics', component: LayoutPage },

      { title: '插件测试', icon: 'md-analytics', component: TestPluginPage }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.platform.registerBackButtonAction((): any => {
        let activeVC = this.nav.getActive();
        let page = activeVC.instance;

        if (this.menuCtrl.isOpen()) return this.menuCtrl.close();

        if (!(page instanceof TabsPage)) {
          if (!this.nav.canGoBack()) {
            //当前页面为tabs，退出APP
            return  AppMinimize.minimize();
            // return this.showExit();
          }
          //当前页面为tabs的子页面，正常返回
          return this.nav.pop();
        }

        let tabs = page.tabs;
        let activeNav = tabs.getSelected();

        if (!activeNav.canGoBack()) {
          //当前页面为tab栏，退出APP
          return   AppMinimize.minimize();
          // return activeNav.canGoBack() ? activeNav.pop() : AppMinimize.minimize();
          // return this.showExit();
        }
        //当前页面为tab栏的子页面，正常返回
        return activeNav.pop();
      }, 101);
    });
  }
  showExit() {
    if (this.backButtonPressed) this.platform.exitApp();
    else {
      let toast = this.toastCtrl.create({
        message: '再按一次退出应用9999',
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
      this.backButtonPressed = true;
      setTimeout(() => {
        this.backButtonPressed = false;
      }, 2000)
    }
  }
  // openPage(page) {
  //   param1:any;
  //   param2:any;
  //   this.nav.push(page.component,{param1:'11111',param2:'222'});
  // }


    //测试插件
  testPlugin(){
    DiyiPlugin.diyiciFangFaMing("DiyiPlugin 传来的参数",
        function(msg) {
          alert("成功了" + msg);},//成功的回调
        function(msg) {
          alert("失败了"+msg);
        });//失败的回调
  }

  testMyPlugin(){
    MyPlugin.method2("MyPlugin 传来的参数",
      function(msg) {
        alert("成功了" + msg);},//成功的回调
      function(msg) {
        alert("失败了"+msg);
      });//失败的回调
  }

  //引导页
  openTutorial(){
    this.nav.setRoot(TutorialPage);
  }



  //或者
  openPage(page){
    //this.nav.push(page)
    this.nav.push(page,{param1:'11111',param2:'222'});
  }

}
