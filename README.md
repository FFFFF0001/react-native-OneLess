# react-native-OneLess
# 一个APP的RN版本。
### 问题总结：
* Q1:页面设置视图位置跟随Tab的点击，初始想法是通过Route切换View。但是这样会造成一个问题就是切换View的时候就要刷新页面，会重新走一遍生命周期。造成页面的卡顿，体验很差。然后想到使用Android中的ViewPager+Fragment的想法。
外面使用禁止滑动的ViewPager，每个Item内部可以使用Swiper或者自定义就可以了。
   * 方案如上，但是遇到的问题有：Swiper的底层是分平台，Android使用ViewPagerAndroid
         IOS使用ScrollView，在ViewPagerAndroid上使用setPage可以进行点击切换View。
         但是ScrollView无这个方法。
         所以重新定制了一下Swiper组件，写setPage方法也是分平台。
         Android通过setPage进行切换，
         IOS通过scrollTo进行切换，
         同时给出animated的参数，也可以设置移动效果，但是默认禁止了。
* Q2:PicSwipe进行处理
    * 在底层通过绝对布局固定视图，根据手势对View进行变化。
* Q3:Swipe动态添加Item的处理
    * Item根据首页请求的ListIndex再次获取数据。  
* Q4:MediaPlayer的实现
    * （待定）目前找了一些三方的都不是很好用，改天自己要封装一个，待定。
* Q5:Movie模块List无限滑动的实现。 
    * 利用ListView的onEndReached回调。
* Q6:想一想是否需要Redux来管理状态？ 
    * 目前已经进行Redux重构，用于管理一些跨组件的状态。
* Q7:首页Picture模块的滑动事件冲突。见下图：
![](https://github.com/MIFind/react-native-OneLess/blob/master/image/OneTouchEvent.gif)  
    * 目前找了一些资料学习了RN的事件分发机制与处理，但是由于View嵌套层级较深，而且根View已经加了PanResponse进行手势处理，
    通过事件分发来解决就比较麻烦。通过Redux对项目进行重构，当前通过Redux进行管理状态，解决了这个问题。
 
#### 目前进度见图片：

![](https://github.com/MIFind/react-native-OneLess/blob/master/image/ONE_112.gif)  

#### 欢迎大家关注我的微信公共号：开发者米饭
