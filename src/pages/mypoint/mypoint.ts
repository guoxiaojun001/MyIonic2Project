import { Component } from '@angular/core';
import {NavController, NavParams, ActionSheetController, Platform, ToastController} from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/filter';

/*
  Generated class for the Mypoint page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mypoint',
  templateUrl: 'mypoint.html'
})
export class MypointPage {
  pet: string = "puppies";
  isAndroid: boolean = false;
  segmentsArray = ['segmentOne','segmentTwo'];
  segmentModel: string = this.segmentsArray[0];

  loadProgress: number = 50;

  toast: any;
  isFetching: boolean
  isMore: boolean

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController,
              public toastCtrl: ToastController,
              public platform: Platform) {
    this.isAndroid = platform.is('android');

    this.toast = this.toastCtrl.create({
      message: "Mission Completed.",
      dismissOnPageChange: true,
      duration: 2000
    })
  }

  ionViewDidLoad(): void {
    let subscription = Observable.interval(100)
      .subscribe(value => {
        if (value <= 60) {
          this.loadProgress = value;
        }
        else {
          subscription.unsubscribe();
          this.toast.present();
        }
      });
  }



  // 弹出选择框
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '提示',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: '保存',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : "trash",
          handler: () => {
            //this.saveImage(imgUrl);
            alert('保存 clicked');
          }
        },
        {
          text: '取消',
          role: 'cancel',
          icon: !this.platform.is('ios') ? 'heart-outline' : "heart-outline",
          handler: () => {
            alert('取消 clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  /**
   * DIRECTION_NONE	1
   DIRECTION_LEFT	2
   DIRECTION_RIGHT	4
   DIRECTION_UP	8
   DIRECTION_DOWN	16
   DIRECTION_HORIZONTAL	6
   DIRECTION_VERTICAL	24
   DIRECTION_ALL	30
     */
  swipeEvent(event) {
    //向左滑
    if (event.direction == 2) {
      //alert("向左滑")
      if (this.segmentsArray.indexOf(this.segmentModel) < 1) {
        this.segmentModel = this.segmentsArray[this.segmentsArray.indexOf(this.segmentModel) + 1];
      }
    }
//向右滑
    if (event.direction == 4) {
      //alert("向右滑")
      if (this.segmentsArray.indexOf(this.segmentModel) > 0) {
        this.segmentModel = this.segmentsArray[this.segmentsArray.indexOf(this.segmentModel) - 1];
      }
    }
  }


  tabChanged() {
    // Close any open sliding items when the schedule updates
    alert("切换tab");
  }

}
