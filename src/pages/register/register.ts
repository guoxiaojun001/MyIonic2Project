import {Component} from '@angular/core';
import {NavController, Loading, Toast, ViewController} from 'ionic-angular';
// import {RegisterSubPage} from '../login/register_sub'
import {Http, Headers, RequestOptions}from '@angular/http';
import {TabsPage} from "../tabs/tabs";
import {UserData} from "../../providers/user-data";
// import {Helper} from '../helper/helper'
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: 'register.html'
})
export class RegisterPage {

  public btnText: string = "获取验证码";
  public inputPhoneNumber: number;
  public inputYZM: string = '';
  private checkNumberUrl: string = "http://119.29.140.85/index.php/user/check_phone";
  private requestYZMUrl: string = '*******************************************';
  private checkYZMUrl: string = '******************************';
  // loading = Loading.create({
  //   content: ''
  // });
  //设置请求方式并请求接口
  headers: Headers;
  options: RequestOptions;
  // helper: Helper;
  signup: {username?: string, password?: string} = {};
  submitted = false;

  constructor(private nav: NavController, private http: Http,
              private viewCtrl: ViewController,
              public userData: UserData) {
    //this.helper = new Helper(nav);
  }

  //发送验证码方法
  sendYZM(count: number) {
    //判断手机是否已注册
    // if (this.inputPhoneNumber.toString().length == 11
    //   && this.checkPhoneFormat(this.inputPhoneNumber.toString())) {
    //   this.nav.present(this.loading);
    //   this.http.post(this.checkNumberUrl, this.headleAjaxBodyParam({
    //       "phone": this.inputPhoneNumber
    //     }), this.options)
    //     .subscribe((data) => {
    //         let result = data.json();
    //         if (result.status) {
    //           this.http.post(this.requestYZMUrl, this.headleAjaxBodyParam({
    //               'phone': this.inputPhoneNumber
    //             }), this.options)
    //             .subscribe((data)=> {
    //                 let result = data.json();
    //                 if (result.status) {
    //                   this.presentToast('验证码发送成功');
    //
    //                   this.setTime(count);//验证码发送成功 开始倒计时
    //
    //                 } else {
    //                   this.presentToast('短信发送失败,同一小时内不允许发送三次验证码');
    //                 }
    //               },
    //               (err)=> {
    //                 this.presentToast('网络请求失败,请确保你的网络环境正常');
    //               });
    //
    //         } else {
    //           this.presentToast('手机已被注册');
    //           this.loading.dismiss();
    //         }
    //       },
    //       (err) => {
    //         this.presentToast('网络请求失败,请确保你的网络环境正常');
    //       });
    // } else {
    //   this.presentToast('请输入正确的手机号');
    // }


  }


  //计时器
  setTime(count: number) {
    setTimeout(() => this.showDelay(count - 1), 1000);
    var element = <HTMLInputElement> document.getElementById("btnExcel");
    element.disabled = true;

  }

  //延迟执行方法
  showDelay(num: number) {
    this.btnText = num + "秒后重新发送"
    if (num < 1) {
      var element = <HTMLInputElement> document.getElementById("btnExcel");
      element.disabled = false;
      this.btnText = "重新发送";
      return;
    }
    this.setTime(num);
  }


  //检查电话号码格式是否正确
  checkPhoneFormat(phone: string): boolean {
    if ((/^1[3|4|5|7|8]\d{9}$/.test(phone))) {
      return true
    }

    alert("密码不符合规则")
    return false;
  }


  checkPassword(){
    if (this.signup.password.length < 6 || this.signup.password.length > 12) {
      alert('密码长度6-12位');
      return false;
    }

    return true;
  }

  goBack() {
    this.nav.pop();
  }

  //下一步 跳转设置密码界面
  goToSetPasswordPage() {
    // this.http.post(this.checkYZMUrl, this.helper.headleAjaxBodyParam({
    //     'phone': this.inputPhoneNumber,
    //     'code': this.inputYZM
    //   }), this.options)
    //   .subscribe((data)=> {
    //       let response=data.json();
    //       // if(response.status){
    //       //   this.nav.push(RegisterSubPage, {'phone': this.inputPhoneNumber});//跳转页面传递参数
    //       // }else{
    //       //   this.helper.presentToast('验证码验证失败:'+response.info);
    //       // }
    //     }
    //     , (err)=> {
    //       this.helper.presentToast('网络错误，请稍后再试！');
    //     });
  }

  //用于处理请求中body格式
  headleAjaxBodyParam(param) {
    let bodyStr = [];
    for (let item in param) {
      bodyStr.push(item + '=' + param[item])
    }
    return bodyStr.join('&');
  }


  //页面加载完毕 出初始化数据
  ionViewLoaded() {
    this.headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    });
    this.options = new RequestOptions({
      headers: this.headers
    });

  }

  //调用Toast
  presentToast(text: string) {
    // let toast = Toast.create({
    //   message: text,
    //   duration: 2000,
    //   position: 'bottom'
    // });
    //
    // toast.onDismiss(() => {
    //   //toast消失调用
    //   this.loading.dismiss();
    // });
    //
    // this.nav.present(toast);
  }

  ionViewWillEnter() {
    this.viewCtrl.setBackButtonText('返回');
  }


  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid && this.checkPhoneFormat(this.signup.username) && this.checkPassword()) {//基本验证
      this.userData.signup(this.signup.username);
      this.nav.push(TabsPage);
    }
  }
}
