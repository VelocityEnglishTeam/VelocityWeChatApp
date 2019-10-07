// src/pages/ScoreAnalysis/result.js
// 成绩单分析结果

var fluency_comment_10 =
  "10分在PTE中等价于0分。你可以无视该项得分，因为你的声音录入存在问题，计算机不能识别你任何的声音。建议你尽快阅读我们提供的“发音不识别的五大原因”文档或者参加迅达课程更有针对性地解决该问题。";
var fluency_comment_10_30 =
  "你的口语流利度成绩说明你读的太没有连贯性，你是在一个一个地读单词，没有任何意群的表达。想要快速提高，需要进行大量的Repeat Sentence练习或者模仿学习native speaker说话的速度、节奏和意群表达的感觉。如果你的速度是可以的，但是成绩依旧很低，很可能是因为你的发音过轻，大部分内容电脑识别不了。你需要确保你在考场中的声音不能被别人的盖住。";
var fluency_comment_30_40 =
  "你的口语流利度成绩说明你在错误的地方有太多的停顿，你不知道什么时候该停顿，什么时候不该停顿。在读长句子时，平均来说你需要连续读9-10个词才停顿一次。同时，确保你是在如“and”和“that”这种连接词之前停顿，而不是之后。";
var fluency_comment_40_50 =
  "你的口语流利度成绩通常表明你存在“robot reading”现象和节奏的不一致。当你遇到较难的单词时，这会使你缓慢地（分离地）读每个单词，而不能保持适当的流利度。";
var fluency_comment_50_60 =
  "你的口语流利度不算太差，但是还有很多提高的空间。对于你来说，模板练习可能是最快的提高方式。迅达提供的模板将会在很大程度帮助到你，迅达英语对于课上的每一道题都会提供模板答案。在每个句子的结尾处，适当地停顿进行换气。当你使用模板时，要确保模板部分和题目关键词之间没有明显的停顿。因为不恰当地使用模板，口语说出来时会像是做填空题，明显的卡顿将会严重影响评分。";
var fluency_comment_60_65 =
  "你的口语流利度分数已经非常接近于你的目标成绩。为了保持更好的一致性，一定要有效利用准备时间，在录音开始之前尽可能多地重复练习有挑战的单词（放在其意群中练习）。";
var fluency_comment_65_70 =
  "你的口语已经相当流利，但是对于难词还是存在犹豫的现象，这种速度的突然变缓会降低流利度的评分。你应该确保在整个口语考试中，你的语速保持在同一水平，不同的口语小项之间也不存在明显的语速差别。";
var fluency_comment_70_78 =
  "你的口语已经相当流利，与79仅有几分之差。这意味着你只需要稍微加强语速的一致性和更地道的语音语调。录音时不要急着讲话，确保想清楚需要强调的关键词。";
var pronunciation_comment_10 =
  "10分在PTE中等价于0分。你可以无视该项得分，因为你的声音录入存在问题，计算机不能识别你任何的声音。建议你尽快阅读我们提供的“发音不识别的五大原因”文档或者参加迅达课程更有针对性地解决该问题。";
var pronunciation_comment_10_30 =
  "你的发音分数表示你的音量太低，计算机难以识别。你的头等大事是练习大声说话而不会减慢或者打断句子。用大声且清晰的声音大量练习Repeat Sentence，并确保长大嘴巴。";
var pronunciation_comment_30_40 =
  "你的发音分数表示你的音量太低，计算机无法很好地识别。一般来说，Repeat Sentence和Retell Lecture是你最大的问题。当你说自己不自信的内容时，不要变得犹豫而使得音量变小。即便回答的不对，也请保持前后音量、语速的一致。";
var pronunciation_comment_40_50 =
  "你较低的发音分数通常是由于音量不平衡或者多余音节造成的。做一些Read Aloud练习并且录音记录，在其中尝试大声练习爆破音（特别是T,P,Ch和Sh）。在句子开头检查是否过分强调，在句子结尾检查声音是否较弱，确保你有足够的气息来说出完整的句子。另一个要点是不要在单词中添加任何额外的音节（尤其是and和that这类连接词）。";
var pronunciation_comment_50_60 =
  "你的发音分数通常表示音量和呼吸有些不平衡。尝试使辅音更柔和，使元音更强大（特别是对于每个句子中最后的1-2个单词）。大多数学生需要练习以低音调发出较大声的元音。此外，请确保你不会在句子结尾处使用怪异的音调而使得每个句子听起来都像是问题或者建议。";
var pronunciation_comment_60_65 =
  "想要进一步提高你的发音分，目标是努力平衡你的发音。当心不自然的音调，并确保所有的关键词都得到明确强调，同时避免连接词发音过强。";
var pronunciation_comment_65_70 =
  "你的发音很扎实，但并没有达到native speaker的水准。想要在该项上达到79分，你需要在语气和重读上找到更多的平衡。确保考试时你展示了音调的高低变化，但请注意不要过分强调单词。强调时使元音变长而不是将音量和音调提的太高，这一点可以在Repeat Sentence中练习。";
var pronunciation_comment_70_78 =
  "你有一个非常高的发音分数，每次录音时可能只有一个错误而已。确保你的重音，音量和语调的一致，避免仓促地讲话。";
var grammar_comment =
  "语法在整个PTE考试中占的比重并不是很高，较低的语法分数主要会影响你的写作成绩。如果能大幅提高语法成绩，你的写作成绩将会上涨三分左右。想要快速提高语法分数，可以通过使用迅达网课提供的模板进行练习，并且平时写作时关闭文档自带的自动纠错功能。语法分数是最容易提高的分数，只要做到不确定的句子不往上写。";
var spelling_comment =
  "较低的拼写分数说明你有很多不经意的拼写错误或打字手误，这很可能是由于你较差的时间把控能力。对于Summarise Spoken Text, Write Essay和Write from Dictation这几类题型，你需要留下充足的时间去编辑并检查你的答案。建议你能考前参加模考或者参加迅达的练习课程做高效率的练习来熟悉考试氛围。";
var vocabulary_comment =
  "词汇分是最和内容分挂钩的一项成绩。想要提高词汇分，一定要学会如何抓关键词来提高内容分。";
var discourse_comment =
  "Written Discourse成绩意味着你写作的质量，尤其是对于多种时态、逻辑连接词、句子结构的把控。大多数学生在该项上都有达到90分的能力，你的该项分数较低说明你没有使用模板，或者用了模板，但复制了太多原始文本中的内容并不断重复模板句，这些都会减少你的该项评分。";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // difference_result: null,
    // overall_result: null,
    // grammar_result: null,
    // fluency_result: null,
    // pronunciation_result: null,
    // spelling_result: null,
    // vocabulary_result: null,
    // discourse_result: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    try {
      var score = wx.getStorageSync("score");
      var listening = score.listening;
      var speaking = score.speaking;
      var writing = score.writing;
      var reading = score.reading;
      var grammar = score.grammar;
      var fluency = score.fluency;
      var pronunciation = score.pronunciation;
      var spelling = score.spelling;
      var vocabulary = score.vocabulary;
      var discourse = score.discourse;
      var difference = score.target - score.speaking;
      var adjust_score = Math.round(difference / 3);
      if (adjust_score < 0) adjust_score = 0;
      listening = parseInt(adjust_score) + parseInt(listening);
      reading = parseInt(adjust_score) + parseInt(reading);
      var arr = [listening, speaking, writing, reading];
      var min = arr[0];
      var min_id = 0;
      var min2_id = 0;
      var count = 1;
      var cha = 99;
      for (var i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
          min = arr[i];
          min_id = i;
        }
      }
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] - min < 6 && i != min_id) {
          count += 1;
          if (arr[i] - min < cha) {
            cha = arr[i] - min;
            min2_id = i;
          }
        }
      }
      if (score) {
        // Do something with return value

        console.log("listening:", listening);
        console.log("speaking:", speaking);
        console.log("writing:", writing);
        console.log("reading:", reading);
        console.log("min:", min);
        console.log("count:", count);
        console.log("min_id:", min_id);
        console.log("min2_id:", min2_id);
        console.log("grammar:", grammar);
        console.log("grammar1:", score.grammar);
        console.log("fluency:", fluency);
        console.log("pronunciation:", pronunciation);
        console.log("spelling:", spelling);
        console.log("vocabulary:", vocabulary_comment);
        console.log("discourse:", discourse);
        console.log("target:", score.target);
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
      count: count,
      min: min,
      difference: difference,
      min_id: min_id,
      min2_id: min2_id,
      grammar: score.grammar,
      fluency: fluency,
      pronunciation: pronunciation,
      spelling: spelling,
      vocabulary: vocabulary,
      discourse: discourse
    });

    var grammar_result = null;
    var spelling_result = null;
    var vocabulary_result = null;
    var discourse_result = null;

    // 判断输出分析结果
    if (grammar < 60) {
      that.setData({
        grammar_result: { comment: grammar_comment, name: "语法" }
      });
    }
    if (spelling < 50) {
      that.setData({
        spelling_result: { comment: spelling_comment, name: "拼写" }
      });
    }
    if (vocabulary < 60) {
      that.setData({
        vocabulary_result: { comment: vocabulary_comment, name: "单词" }
      });
    }
    if (discourse < 65) {
      that.setData({
        discourse_result: { comment: discourse_comment, name: "表达" }
      });
    }
    console.log("data:", data);
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
