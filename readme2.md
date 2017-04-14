添加插件的详细步骤请参照一下链接：

http://blog.csdn.net/luo_xinran/article/details/52182245

1.创建自己的插件
若我们需要自己编写自己的插件，则可以使用额外的一个叫做plugman的工具, 该工具可直接通过npm来安装。
  npm install -g plugman


2.安装成功后，就可以使用plugman命令来自动生成插件代码框架，避免手工建立和输入代码文件的工作：
plugman create --name <pluginname> --plugin_id <pluginid> --plugin_version 0.0.1


3.之后就可以发现在目录下生成了MyPlugin文件夹。
注意此时去修改插件下的plugin.xml，比如将<clobbers target="cordova.plugins.MyPlugin" />
修改成<clobbers target="MyPlugin" />，否则可能出现插件没有定义


4. 添加平台支持
cd MyPlugin
plugman platform add --platform_name android
plugman platform add --platform_name android


//插件的添加和删除
ionic plugin remove 插件名  //先根据上面的list列出插件，然后根据插件名卸载
cordova plugin remove org.apache.cordova.xmqq

ionic plugin  add  插件地址
cordova plugin add thirdplugin/xmPlugin/


5.将项目导入android studio，即可在src中看到插件的java代码，以及js代码（js代码在www目录下）
js文件只能在外部修改，然后重新把插件添加进来（暂时没有发现其他办法）
可以直接修改src下的java代码，修改后 直接cordova run android 或者 cordova build android，
然后在手机上测试



图片返回base64
let base64Image = "data:image/jpeg;base64," + imageData;


6.插件修改后需要重现删除后，在添加，然后编译再运行


//---------------------------------
就可以把ionic当作一款html5 移动app框架，把phonegap/cordova 当作打包 并且调用原生的框架就可以了

至于：为什么ionic也可以打包，上面也说了，ionic的打包插件是基于phonegap/cordova的

//---------------------
(click)="callFunc2() //新版本的写法
 ng-click="callFunc2()" //这是老版本的写法


//---------------------------------
替换icon图标
复杂方法可以搜“ionic自定义图标”。
简单方法是直接借用 ion-tab 模板，“icon-on” 以及“icon-off”用自定义的class代替ion-*图标系列：


如何在某个界面中去掉导航栏?

如果某个界面上不想要导航栏，可以简单地在最顶端的标签中添加hide-nav-bar="true"



7.如果下载的项目没有node_modules目录， 执行ionic serve 提示npm  install，在项目目录下执行npm  install即可


8. 在项目中展示html网页，$ ionic plugin add cordova-plugin-themeablebrowser 插件


可以执行以下命令来更新版本。
npm update-g cordova ionic
