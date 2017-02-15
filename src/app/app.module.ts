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

import { Data } from '../providers/data';
import { ImageLoader } from '../components/image-loader/image-loader';
import { ElasticHeader } from '../components/elastic-header/elastic-header';

import { BasicPage }from '../pages/action-sheets/basic/pages'
import { ListPage }from '../pages/list/list'
import { ItemDetailsPage }from '../pages/item-details/item-details'

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
    ItemDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: true,
      platforms: {
        ios: {
          backButtonText: "返回"
        }
      }
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
    ItemDetailsPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler },Data]
})
export class AppModule { }
