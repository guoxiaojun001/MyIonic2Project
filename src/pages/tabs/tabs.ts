import { Component,ViewChild } from '@angular/core';
import { Tabs } from 'ionic-angular';
import { NewsPage } from '../news/news';
import { MoviePage } from '../movie/movie';
import { AboutPage } from '../about/about';
import {ProductPage} from "../product/product";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('mainTabs') tabs:Tabs;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = NewsPage;
  tab2Root: any = MoviePage;
  tab3Root: any = AboutPage;
  tab4Root: any = ProductPage;

  constructor() {

  }


  //设置默认 选中第三个，在html中也可以设置 <ion-tabs #mainTabs selectedIndex="2">
  ionViewDidEnter() {
    this.tabs.select(0);
  }
}
