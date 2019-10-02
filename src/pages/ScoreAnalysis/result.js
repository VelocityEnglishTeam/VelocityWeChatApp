// src/pages/ScoreAnalysis/result.js
// 成绩单分析结果

Page({
  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    try {
      var score = wx.getStorageSync("score");
      var listening=score.listening
      var speaking=score.speaking
      var writing=score.writing
      var reading = score.reading
      var grammar = score.grammar
      var fluency = score.fluency
      var pronunciation = score.pronunciation
      var spelling = score.spelling
      var vocabulary = score.vocabulary
      var discourse = score.discourse
      var difference = score.target - score.speaking
      var adjust_score = Math.round(difference / 3)
      if (adjust_score < 0) adjust_score = 0
      listening = parseInt(adjust_score) + parseInt(listening)
      reading = parseInt(adjust_score) + parseInt(reading)
      var arr = [listening, speaking, writing, reading]
      var min = arr[0]
      var min_id=0
      var min2_id=0
      var count=1
      var cha = 99
      for(var i=1;i<arr.length;i++){
        if(min>arr[i]){
          min = arr[i];
          min_id = i
        } 
      }
      for(var i=0;i<arr.length;i++){
        if(arr[i]-min<6&&i!=min_id){
          count+=1
          if (arr[i] - min < cha){
            cha = arr[i] - min
            min2_id=i
          }
        }
      }
      if (score) {
        // Do something with return value

        console.log("min:", min);
        console.log("count:", count);
        console.log("min_id:", min_id);
        console.log("min2_id:", min2_id);
        console.log("grammar:", grammar);
        console.log("fluency:", fluency);
        console.log("pronunciation:", pronunciation);
        console.log("spelling:", spelling);
        console.log("vocabulary:", vocabulary);
        console.log("discourse:", discourse)

      }
    } catch (e) {
      // Do something when catch error
    }

    // console.log("options", options);
    var that = this;
    that.setData({
      listening: listening,
      speaking: speaking,
      writing: writing,
      reading: reading,
      count:count,
      min:min,
      difference:difference,
      min_id:min_id,
      min2_id:min2_id,
      grammar: grammar,
      fluency: fluency,
      pronunciation: pronunciation,
      spelling: spelling,
      vocabulary: vocabulary,
      discourse: discourse
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
