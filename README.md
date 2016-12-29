# react-native-OneLess
一个APP的RN版本。

###问题总结：
* 页面设置视图位置跟随Tab的点击，初始想法是通过Route切换View。但是这样会造成一个问题就是切换View的时候就要刷新页面，会重新走一遍生命周期。造成页面的卡顿，体验很差。然后想到使用Android中的ViewPager+Fragment的想法。
外面使用禁止滑动的ViewPager，每个Item内部可以使用Swiper或者自定义就可以了。

    * 方案如上，但是遇到的问题有：Swiper的底层是分平台，Android使用ViewPagerAndroid
      IOS使用ScrollView，在ViewPagerAndroid上使用setPage可以进行点击切换View。
      但是ScrollView无这个方法。
      所以重新定制了一下Swiper组件，写setPage方法也是分平台。
      Android通过setPage进行切换，
      IOS通过scrollTo进行切换，
      同时给出animated的参数，也可以设置移动效果，但是默认禁止了。
