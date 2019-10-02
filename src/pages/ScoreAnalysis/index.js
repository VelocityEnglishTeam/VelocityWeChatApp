// src/pages/SocreAnalysis/index 成绩单分析首页

Page({
  /**
   * 页面的初始数据
   */
  data: {
    scores: [
      {
        id: 1,
        name: "Target Score",
        each_score: [{ id: 11, name_cn: "目标", name: "target" }]
      },
      {
        id: 2,
        name: "Overall Score",
        each_score: [{ id: 21, name_cn: "总分", name: "overall" }]
      },
      {
        id: 3,
        name: "Communicative Skills",
        each_score: [
          { id: 31, name_cn: "听力", name: "listening" },
          { id: 32, name_cn: "阅读", name: "reading" },
          { id: 33, name_cn: "口语", name: "speaking" },
          { id: 34, name_cn: "写作", name: "writing" }
        ]
      },
      {
        id: 4,
        name: "Enabling Skills",
        each_score: [
          { id: 41, name_cn: "语法", name: "grammar" },
          { id: 42, name_cn: "流利", name: "fluency" },
          { id: 43, name_cn: "发音", name: "pronunciation" },
          { id: 44, name_cn: "拼写", name: "spelling" },
          { id: 43, name_cn: "单词", name: "vocabulary" },
          { id: 44, name_cn: "表达", name: "discourse" }
        ]
      }
    ]
  },

  formSubmit: function(e) {
    var formData = e.detail.value;
    // console.log(e.detail.value);

    //验证form表单是否填写完整
    for (var item in formData) {
      var this_score = parseInt(formData[item], 10);
      // console.log(this_score);

      if (!this_score || this_score < 10 || this_score > 90) {
        wx.showToast({
          title: "请填写完整有效数据",
          icon: "none",
          duration: 1000
        });
        return;
      }
    }

    // 把成绩数据存储在本地缓存中，后期可以改成存在服务器数据库中，把往期的考试成绩也保存下来，加入考试日期信息
    try {
      wx.setStorage({
        key: "score",
        data: {
          overall: formData.overall,
          target: formData.target,
          listening: formData.listening,
          speaking: formData.speaking,
          writing: formData.writing,
          reading: formData.reading,
          grammar: formData.grammar,
          fluency: formData.fluency,
          pronunciation: formData.pronunciation,
          spelling: formData.spelling,
          vocabulary: formData.vocabulary,
          discourse: formData.discourse
        }
      });
    } catch (e) {
      console.log("setstoragesync fail");
      // 这里要改进一下，存储失败的话就跳出提示框重新尝试之类的
    }

    // 跳转到结果页面
    wx.navigateTo({
      url: "../ScoreAnalysis/result"
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

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
