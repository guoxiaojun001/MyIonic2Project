import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/toPromise';
import { StorageService } from "./../../providers/StorageService";


import { RegisterPage } from '../register/register';
import { MyinfoPage } from '../myinfo/myinfo';
import {UserInfoService} from "../../providers/UserInfoService";
import {UserInfoData} from "../../model/UserInfoData";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UserInfoService]
})
export class LoginPage {

  local: Storage;
  constructor(
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    public toastCtrl: ToastController,
    private userInfoService: UserInfoService,
    private storageService: StorageService) { }

  loginForm = this.formBuilder.group({
    'mobilePhone': '18810500248',// 第一个参数是默认值
    'password': '123456q'
  });

  ionViewDidLoad() {
    console.log('Hello Login Page');
  }

  login(user, _event) {
    _event.preventDefault();//该方法将通知 Web 浏览器不要执行与事件关联的默认动作
    this.userInfoService.login(user).then(data => {

      var responseData = JSON.stringify(data);
      alert(responseData);

      if(data.code == "success"){
        alert("//登录成功");

      }

      // if (data.Result.ID > 0)//登录成功
      // {
      //   this.storageService.write('UserInfo', data.Result);
      //   //测试写缓存
      //   let ss = this.storageService.read<UserInfoData>('UserInfo');
      //   console.log(ss.UserToken);
      //   alert(ss.UserToken);
      //   //传参
      //   this.navCtrl.push(MyinfoPage, { item: data.Result.ID });
      // }
      // else {
      //   let toast = this.toastCtrl.create({
      //     message: '用户名或密码错误.',
      //     duration: 3000,
      //     position: 'middle',
      //     showCloseButton: true,
      //     closeButtonText: '关闭'
      //   });
      //   toast.present();
      // }
    });
  }


  goRegisterPage(_event){
    _event.preventDefault();//该方法将通知 Web 浏览器不要执行与事件关联的默认动作
    //alert("goRegisterPage");
    //通过设置点击事件
    this.navCtrl.push(RegisterPage);

  }


  logForm(){
    alert("logForm");
    //通过表单方式提交
    this.navCtrl.push(RegisterPage);
  }

}
