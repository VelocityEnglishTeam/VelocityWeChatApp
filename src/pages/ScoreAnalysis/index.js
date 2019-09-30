// src/pages/SocreAnalysis/index
// 成绩单分析首页

Page({
  data: {
    score: [
      { name: "target", value: "Target Score", value_cn: "目标" },
      { name: "overall", value: "Overall Score", value_cn: "总分" },
      { name: "listening", value: "Listening", value_cn: "听力" },
      { name: "speaking", value: "Speaking", value_cn: "口语" },
      { name: "writing", value: "Writing", value_cn: "写作" },
      { name: "reading", value: "Reading", value_cn: "阅读" },
      { name: "grammar", value: "Grammar", value_cn: "语法" },
      { name: "fluency", value: "Olal Fluency", value_cn: "流利" },
      { name: "pronunciation", value: "Pronunciation", value_cn: "发音" },
      { name: "spelling", value: "Spelling", value_cn: "拼写" },
      { name: "vocabulary", value: "Vocabulary", value_cn: "单词" },
      { name: "discourse", value: "Written Discourse", value_cn: "表达" }
    ]
  },

  //确认按钮把数据上传后台
  upload_score: function(e) {
    var formData = e.detail.value;

    // 把成绩数据存储在本地缓存中，后期可以改成存在服务器数据库中，把往期的考试成绩也保存下来，加入考试日期信息
    try {
      wx.setStorage({
        key: "score",
        data: {
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
      // 这里要改进以下，存储失败的话就跳出提示框重新尝试之类的
    }

    wx.navigateTo({
      url: "../ScoreAnalysis/result"
    });
  }
});
