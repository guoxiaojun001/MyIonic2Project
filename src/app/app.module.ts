import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { NewsPage } from '../pages/news/news';
import { NewsContentPage } from '../pages/news-content/news-content';
import { AboutPage } from '../pages/about/about';
import { MoviePage } from '../pages/movie/movie';
import { MovieCategoryPage } from '../pages/movie-category/movie-category';
import { MovieDetailPage } from '../pages/movie-detail/movie-detail';
import { BaiduMapPage } from '../pages/baidu-map/baidu-map';
import { EchartsPage } from '../pages/echarts/echarts';

import { ImageLoader } from '../components/image-loader/image-loader';
import { ElasticHeader } from '../components/elastic-header/elastic-header';

import { BasicPage }from '../pages/action-sheets/basic/pages'
import { ListPage }from '../pages/list/list'
import { ItemDetailsPage }from '../pages/item-details/item-details'

import { BackHomePage } from '../pages/back-home/back-home';
import { MyinfoPage } from '../pages/myinfo/myinfo';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ProductPage } from '../pages/product/product';
import {MypointPage } from '../pages/mypoint/mypoint';
import { MyloanPage } from '../pages/myloan/myloan';
import { TestPluginPage } from '../pages/test-plugin/test-plugin';
import {ProductdetailPage} from "../pages/productdetail/productdetail";
import { TutorialPage } from '../pages/tutorial/tutorial';
//页面要加这里





//服务要加这里
import {HttpService} from "../providers/HttpService";
import {StorageService} from "../providers/StorageService";
import { Data } from '../providers/data';

import { Storage } from '@ionic/storage';
import {MycustomerPage} from "../pages/mycustomer/mycustomer";
import {UserData} from "../providers/user-data";
import {ConferenceData} from "../providers/conference-data";
import {LayoutPage} from "../pages/layout/layout";



@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    NewsPage,
    NewsContentPage,
    AboutPage,
    MoviePage,
    MovieCategoryPage,
    MovieDetailPage,
    BaiduMapPage,
    EchartsPage,
    ImageLoader,
    ElasticHeader,
    BasicPage,
    ListPage,
    ItemDetailsPage,
    LoginPage,
    RegisterPage,
    MyinfoPage,
    BackHomePage,
    ProductPage,
    MypointPage,
    MyloanPage,
    MycustomerPage,
    TestPluginPage,
    TutorialPage,
    LayoutPage,
    ProductdetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: true,
      backButtonText: "",
      mode:'ios',
      // platforms: {
      //   ios: {
      //     backButtonText: ""
      //   },
      //   md:{
      //     backButtonText: ""
      //   }
      // }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    NewsPage,
    NewsContentPage,
    AboutPage,
    MoviePage,
    MovieCategoryPage,
    MovieDetailPage,
    BaiduMapPage,
    EchartsPage,
    BasicPage,
    ListPage,
    ItemDetailsPage,
    LoginPage,
    RegisterPage,
    MyinfoPage,
    BackHomePage,
    ProductPage,
    MypointPage,
    MyloanPage,
    MycustomerPage,
    TestPluginPage,
    TutorialPage,
    LayoutPage,
    ProductdetailPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler },
    Data,HttpService,StorageService ,Storage ,UserData,ConferenceData]
})
export class AppModule { }
