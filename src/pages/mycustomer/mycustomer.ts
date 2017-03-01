import { Component ,ViewChild } from '@angular/core';

import {NavController, Toast, Loading, ViewController, ToastController} from 'ionic-angular';
import {Http, Headers, RequestOptions}from '@angular/http';
import {Helper} from'../helper/helper';

import { Storage } from '@ionic/storage';
import { ConferenceData } from '../../providers/conference-data';
// import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
// import { SessionDetailPage } from '../session-detail/session-detail';
import { UserData } from '../../providers/user-data';

import { AlertController, App, FabContainer, ItemSliding, List, ModalController,  LoadingController } from 'ionic-angular';


/*
  Generated class for the Mycustomer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mycustomer',
  templateUrl: 'mycustomer.html'
})

export class MycustomerPage {

  @ViewChild('scheduleList', { read: List }) scheduleList: List;


  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks: any = [];
  shownSessions: any = [];
  groups: any = [];
  confDate: string;


  dataFinish: boolean = false;
  hasErr: boolean = false;


  constructor(public alertCtrl: AlertController,
              public app: App,
              public loadingCtrl: LoadingController,
              public modalCtrl: ModalController,
              public navCtrl: NavController,
              public confData: ConferenceData,
              public user: UserData) {  }

  //下拉刷新
  doRefresh(refresher) {
    alert("刷新");
  }






  //上拉加载
  doInfinite(infiniteScroll) {
    //上拉加载前先为当前page++


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MycustomerPage');
    this.updateSchedule();
  }

  updateSchedule() {
    // Close any open sliding items when the schedule updates
    this.scheduleList && this.scheduleList.closeSlidingItems();

    this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
      this.shownSessions = data.shownSessions;
      this.groups = data.groups;
    });
  }

  presentFilter() {
    // let modal = this.modalCtrl.create(ScheduleFilterPage, this.excludeTracks);
    // modal.present();
    //
    // modal.onWillDismiss((data: any[]) => {
    //   if (data) {
    //     this.excludeTracks = data;
    //     this.updateSchedule();
    //   }
    // });

  }

  goToSessionDetail(sessionData: any) {
    // go to the session detail page
    // and pass in the session data
    // this.navCtrl.push(SessionDetailPage, sessionData);
  }

  addFavorite(slidingItem: ItemSliding, sessionData: any) {

    if (this.user.hasFavorite(sessionData.name)) {
      // woops, they already favorited it! What shall we do!?
      // prompt them to remove it
      this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
    } else {
      // remember this session as a user favorite
      this.user.addFavorite(sessionData.name);

      // create an alert instance
      let alert = this.alertCtrl.create({
        title: 'Favorite Added',
        buttons: [{
          text: 'OK',
          handler: () => {
            // close the sliding item
            slidingItem.close();
          }
        }]
      });
      // now present the alert on top of all other content
      alert.present();
    }

  }

  removeFavorite(slidingItem: ItemSliding, sessionData: any, title: string) {
    let alert = this.alertCtrl.create({
      title: title,
      message: 'Would you like to remove this session from your favorites?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            // they clicked the cancel button, do not remove the session
            // close the sliding item and hide the option buttons
            slidingItem.close();
          }
        },
        {
          text: 'Remove',
          handler: () => {
            // they want to remove this session from their favorites
            this.user.removeFavorite(sessionData.name);
            this.updateSchedule();

            // close the sliding item and hide the option buttons
            slidingItem.close();
          }
        }
      ]
    });
    // now present the alert on top of all other content
    alert.present();
  }

  openSocial(network: string, fab: FabContainer) {
    let loading = this.loadingCtrl.create({
      content: `Posting to ${network}`,
      duration: (Math.random() * 1000) + 500
    });
    loading.onWillDismiss(() => {
      fab.close();
    });
    loading.present();
  }

}
