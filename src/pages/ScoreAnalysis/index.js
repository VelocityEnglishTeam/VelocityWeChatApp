// src/pages/SocreAnalysis/index
// 成绩单分析首页

Page({
  data: {},
  // get_result: function(e){
  //   wx.navigateTo({
  //     url:'../chengjidan/fenxi'
  //   })
  // },

  //确认按钮把数据上传后台
  upload_score: function(e) {
    var that = this;
    var formData = e.detail.value;
    // var target = e.detail.value.target; //目标分数
    // var listening = e.detail.value.listening; //听力成绩
    // var speaking = e.detail.value.speaking; //口语成绩
    // var writing = e.detail.value.writing; //写作成绩
    // var reading = e.detail.value.reading; //阅读成绩

    try {
      wx.setStorage({
        key: "score",
        data: {
          target: formData.target,
          listening: formData.listening,
          speaking: formData.speaking,
          writing: formData.writing,
          reading: formData.reading
        }
      });
    } catch (e) {
      console.log("setstoragesync fail");
    }

    wx.navigateTo({
      url: "../ScoreAnalysis/result"
    });

    if (listening > 65) {
      KEYI;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {}
});
