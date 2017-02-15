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
