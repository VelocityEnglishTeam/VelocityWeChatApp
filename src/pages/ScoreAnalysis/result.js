// src/pages/ScoreAnalysis/result.js
// 成绩单分析结果

Page({
  /**
   * 页面的初始数据
   */
  data: {
    listening: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    try {
      var score = wx.getStorageSync("score");
      if (score) {
        // Do something with return value
        console.log("score:", score.listening);
      }
    } catch (e) {
      // Do something when catch error
    }

    // console.log("options", options);
    var that = this;
    that.setData({
      listening: score.listening
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
