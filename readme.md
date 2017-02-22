二、使用ngFor显示数组属性
[html] view plain copy 在CODE上查看代码片派生到我的代码片
export class AppComponent {  
  title = 'Tour of Heroes';  
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];  
  myHero = this.heroes[0];  
}  

[html] view plain copy 在CODE上查看代码片派生到我的代码片
template: `  
   <h1>{{title}}</h1>  
   <h2>My favorite hero is: {{myHero}}</h2>  
   <p>Heroes:</p>  
   <ul>  
     <li *ngFor="let hero of heroes">  
       {{ hero }}  
     </li>  
   </ul>  
 `
   
2.通过 NgIf 进行条件显示, 以下实例中我们判断如果网站数 3 个以上，输出提示信息：修改以下 app.component.ts 文件，代码如下：
<p *ngIf="sites.length > 3">你有很多个喜欢的网站!</p>


（二）Ionic页面的生命周期

// 页面被加载完成后调用的函数，切换页面时并不会进行重新加载，因为有cache的存在  
onPageLoaded() {  
  console.log('page 1: page loaded.');  
}  
  
// 页面即将进入的时候  
onPageWillEnter() {  
  // 在这里可以做页面初始化的一些事情  
  console.log('page 1: page will enter.');  
}  
  
// 页面已经进入的时候  
onPageDidEnter() {  
  console.log('page 1: page did enter.');  
}  
  
// 页面即将离开的时候  
onPageWillLeave() {  
  console.log('page 1: page will leave.');  
}  
  
// 页面已经离开的时候  
onPageDidLeave() {  
  console.log('page 1: page did leave.');  
}  
  
// 从 DOM 中移除的时候执行的生命周期  
onPageWillUnload() {  
  
}  
  
// 从 DOM 中移除执行完成的时候  
onPageDidUnload() {  
  
}  


//---------------------------------------
1. 添加移动平台
cordova platform add ios（android）；（ionic platform add android）
2.添加第三方插件，比如
ionic plugin add cordova-plugin-camera
3.创建新页面 （新添加的页面一定要在app.module.ts 中注册，否则会提示找不到，没有定义）
ionic g page camera
4.在手机上运行(在浏览器上运行 ionic serve)
cordova run android,



//----------------------

这种方式显示图片 可以圆角，并且大小适中
 <ion-avatar item-right><img src="assets/image/video.png" alt="头像"></ion-avatar>
 
 
 这种方式图片比较大
 <ion-thumbnail item-right> <img src="assets/image/video.png" ></ion-thumbnail>
 
 
 以下两种效果好像一样
 <!--<img [src]="homeList.image">-->
 <img src="{{homeList.image}}">


5. Ionic2中的Provider、Service、Observable与Promise
    Ionic2中Provider也就是一个Service, 可以用ionic g provider PeopleService命令来生成一个
    名称为PeopleService的provider 。

    Observable相对Promise有许多优势，因此Angular2中使用了RxJS。而当前Ionic中生成provider代码时使用的是ng2中的http模块，它是个observable,
     但then( )返回将它转为一个promise返回, ionic团队正在计划修改。

6.  ionic-native与ngCordoava
    Ionic 2中ionic-native替换了ngCordoava。



-------------------------------------
大家常常会在ionic2页面中见到*号的存在，如： 
<p *ngIf="someBoolean"><p> 
含义与： 
<template [ngIf]="someBoolean"> 
<p></p> 
</template> 
即：如果someBoolean值为true，则显示<p></p>标签，否则，不显示<p></p>标签 
     
<p *ngFor="let item of items">{{item.name}}</p> 
含义： 
获取一个列表items，并遍历其中的元素item，然后显示这个元素的name属性的值 
     
<div [ngSwitch]="paragraphNumber"> 
<p *ngSwitchWhen="1">Paragraph 1</p> 
<p *ngSwitchWhen="2">Paragraph 2</p> 
<p *ngSwitchWhen="3">Paragraph 3</p> 
<p *ngSwitchDefault>Paragraph</p> </div> 
当 
paragraphNumber=1时，显示: Paragraph 1 
paragraphNumber=2时，显示: Paragraph 2 
依次类推 
默认显示：Paragraph 

