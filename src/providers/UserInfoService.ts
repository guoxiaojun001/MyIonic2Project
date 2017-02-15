
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import {Storage, LocalStorage} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { HttpService } from "./HttpService";
import { StorageService } from "./StorageService";

@Injectable()
export class UserInfoService {
  API_URL = "http://10.2.11.226:9780/izd-api";
  constructor(
    private http: Http,
    private httpService: HttpService,
    private storageService:StorageService) { }

  //登录
  login(user) {
    var url = this.API_URL + "/member/login";
    return this.httpService.httpPostNoAuth(url, user);
  }

  //注册
  register(form) {
    var url = this.API_URL + "/member/regist";
    return this.httpService.httpPostNoAuth(url, form);
  }

  GetUserInfo(id:number) {
    var url = this.API_URL + "/UserInfo/"+id;
    return this.httpService.httpGetWithAuth(url);
  }


}
