//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //向模板传入数据
    // 轮播
    index_index_scroll_tmpl: {
      images: [
        '../../images/2.jpg',
        '../../images/1.jpg',
        '../../images/3.jpg',
      ],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 1200
    },
  }, 
  /**
  * 生命周期函数--监听页面加载
  */


})
