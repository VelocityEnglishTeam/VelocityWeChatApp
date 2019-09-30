// src/pages/index/index
// 小程序首页

const app = getApp();

Page({
  data: {
    // 向模板传入数据
    // 轮播
    swiper_scroll: {
      images: [
        "../../images/2.jpg",
        "../../images/1.jpg",
        "../../images/3.jpg"
      ],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 1200,
      circular: true
    }
  }
});
