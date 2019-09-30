// pages/biji/biji.js
Page({

  /**
  * 页面的初始数据
  */
  data: {
    
  },
  // get_result: function(e){
  //   wx.navigateTo({
  //     url:'../chengjidan/fenxi'
  //   })
  // },

  //确认按钮把数据上传后台
  back_houtai: function (e) {
    var that = this;
    var formData = e.detail.value;
    var aim_score = e.detail.value.aim_score; //目标分数
    var listening = e.detail.value.listening; //听力成绩
    var speaking = e.detail.value.speaking; //口语成绩
    var writing = e.detail.value.writing; //写作成绩
    var reading = e.detail.value.reading;//阅读成绩
    console.log(aim_score)
    console.log(listening)
    console.log(speaking)
    console.log(writing)
    console.log(reading)
    wx.navigateTo({
      url: '../ScoreAnalysis/result?listeningScore'+formData.listening
    })
    if (listening > 65){
        KEYI
    }

  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
  },

})
