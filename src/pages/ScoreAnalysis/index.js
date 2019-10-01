// src/pages/SocreAnalysis/index
// 成绩单分析首页

Page({
  data: {
    target_score: [
      { name: "target", value: "Target Score", value_cn: "目标", score: "" }
    ],
    overall_score: [
      { name: "overall", value: "Overall Score", value_cn: "总分", score: "" }
    ],
    communicative_score: [
      { name: "listening", value: "Listening", value_cn: "听力", score: "" },
      { name: "speaking", value: "Speaking", value_cn: "口语", score: "" },
      { name: "writing", value: "Writing", value_cn: "写作", score: "" },
      { name: "reading", value: "Reading", value_cn: "阅读", score: "" }
    ],
    enabling_score: [
      { name: "grammar", value: "Grammar", value_cn: "语法", score: "" },
      { name: "fluency", value: "Olal Fluency", value_cn: "流利", score: "" },
      {
        name: "pronunciation",
        value: "Pronunciation",
        value_cn: "发音",
        score: ""
      },
      { name: "spelling", value: "Spelling", value_cn: "拼写", score: "" },
      { name: "vocabulary", value: "Vocabulary", value_cn: "单词", score: "" },
      {
        name: "discourse",
        value: "Written Discourse",
        value_cn: "表达",
        score: ""
      }
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
      // 这里要改进以下，存储失败的话就跳出提示框重新尝试之类的
    }

    wx.navigateTo({
      url: "../ScoreAnalysis/result"
    });
  }
});
