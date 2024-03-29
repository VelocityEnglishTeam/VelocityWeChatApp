// src/pages/ScoreAnalysis/result.js
// 成绩单分析结果

Page({
  /**
   * 页面的初始数据
   */
  data: {
    comments: [
      { id: 1, name_cn: "听说读写", name: "communicative", comment: null },
      { id: 2, name_cn: "流利度", name: "fluency", comment: null },
      { id: 3, name_cn: "发音", name: "pronunciation", comment: null },
      { id: 4, name_cn: "语法", name: "grammar", comment: null },
      { id: 5, name_cn: "词汇", name: "vocabulary", comment: null },
      { id: 6, name_cn: "拼写", name: "spelling", comment: null },
      { id: 7, name_cn: "表达", name: "discourse", comment: null }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 所有回复内容
    var comment = {
      count0: "恭喜你！你的各项成绩已经到达目标分数！",
      difference:
        "因为PTE考试为交叉打分，你较低的口语成绩会对听力和阅读成绩产生较大的影响。",
      communicative_1_listen:
        "在其他题目都还可以的情况下，你的Listening主要丢分点应该是听力的两个大项Summarize Spoken Text和Write From Dictation以及细节题上。SST和WFD是整个PTE听力中分数占比最高的题目，但因为机经的广泛使用，让目标是65分和79分的学生除了在内容上拉开差距基本很难拉开差距。你要记住PTE是排名考试，它并不是按分数来给你评分的! 重点抓住这两点，可以使用迅达高频机经网站(全部是机经真题）来练习。同样应该要注意细节题目比如Fill in the Blanks (Listening)和Highlight Incorrect Words 。如果目标是79分的学生更加要注意细节题，随着PTE考试的考生水平越来越高，如果你目标是79的话连选择题都不能放过！同时你必须要注意Repeat Sentence和Retell lecture的内容分，这个将是你和65分的学生拉开距离的重中之重! 而目标分数在65分的学生应把重点放在SST和WFD上面。",
      communicative_1_speak:
        "PTE的Speaking相对于阅读和听力来说是比较容易的，其难度仅次于写作。口语并不是难点，而是PTE的抢分点。也就是说它是可以短期内帮你提高分数的项目，特别是快速提高你的流利度和你的发音。如果你目标是在65分，你的流利度要保持在70分左右，同时你的发音要在50分以上；如果你的目标是79分，你的流利度要在75分以上，同时发音要在60分以上。所以在你PTE听力成绩还可以，口语分数更低的情况下，建议你多做RS的跟读练习。同时可以在我们的迅达PTE练习网站上根据模板进行练习，或者观看William老师的视频和课程。",
      communicative_1_write:
        "较低的写作成绩表明你写作的关键词不足。所谓的关键词不足有两个方面，一是关键词写的不够准确，二是关键词的数量不够。当你使用模板以后，你把这道题做成了简单的填空题，而你填的词并不能满足考试的要求从而无法达到写作分数的提高。你需要花时间来复习PTE的写作机经，建议使用迅达高频写作机经来扩充你的写作高频词。同样，如果你写的答案过于宽泛而不够具体，应该增加足够多的例子和关键的点来强调与文章主题的相关性。",
      communicative_1_read:
        "较低的阅读成绩表明了你的语法、词汇和句子的逻辑判断方面出现了一定的问题。阅读最高比重的是Fill in the Blanks，而随后是口语的Read Aloud以阅读的Re-order Paragraph。如果你口语达到目标，你要重点攻克你的FIB和RO。做FIB的题目的时候也要重点查你是哪一部分的语法和单词出现问题，并查看你的时态、语态、连接词、逻辑的理解和单词的理解。为此你应该有一本专门的订正本，把所有的做错题写在本子上，并且配合用迅达高频机经来做复习和整理。找到做题做错的原因很重要，就像是迅达PTE阅读的练习课一样，每一道FIB的题目后面都会帮你写明他的出题原因和考点是什么。",
      communicative_2_listen_speak:
        "低的听力和口语的分数表明你在Repeat Sentence和Retell Lecture上丢掉了许多分数。由于机经的大量使用和广泛背诵，Write From Dictation和Summarize Spoken Text是听力比重最高的两项，这使得这道题的容错率在不断地缩小。所以现在考PTE，你不但需要背机经，更重要的是要会做新题难题。而对于RS和RL，机经得命中率并不高，而且新题出现频率比一般题型要高。所以这是要考79分学生的第一个要攻克的难题。如果你的听力和口语分数都不高，仅仅攻克听力是远远不够的，还需要提高RS和RL的内容、流利度和发音。",
      communicative_2_listen_write:
        "低分的听力和写作代表着你在Summarize Spoken Text和Write From Dictation上面丢了太多的分数。PTE考试中听力是最难的部分，而写作是最简单的。当你的听力和你的写作同时分数较低的时候，你要重点攻克写作大作文Write Essay，因为写作Essay的分数比重非常大。但同时SST和WFD也是重点，因为它们将同时为你的写作和听力打分。",
      communicative_2_listen_read:
        "较低的阅读成绩表明了你的语法、词汇和句子的逻辑判断方面出现了一定的问题。阅读最高比重的是Fill in the Blanks，而随后是口语的Read Aloud以阅读的Re-order Paragraph。如果你口语达到目标，你要重点攻克你的FIB和RO。做FIB的题目的时候也要重点查你是哪一部分的语法和单词出现问题，并查看你的时态、语态、连接词、逻辑的理解和单词的理解。为此你应该有一本专门的订正本，把所有的做错题写在本子上，并且配合用迅达高频机经来做复习和整理。找到做题做错的原因很重要，就像是迅达PTE阅读的练习课一样，每一道FIB的题目后面都会帮你写明他的出题原因和考点是什么。",
      communicative_2_speak_read:
        "你要知道PTE的Speaking相对于阅读和听力来说是比较容易的，其难度仅次于写作。口语并不是难点，而是PTE的抢分点。也就是说它是可以短期内帮你提高分数的项目，特别是快速提高你的流利度和你的发音。如果你目标是在65分，你的流利度要保持在70分左右，同时你的发音要在50分以上；如果你的目标是79分，你的流利度要在75分以上，同时发音要在60分以上。所以在你PTE听力成绩还可以，口语分数更低的情况下，建议你多做RS的跟读练习。同时可以在我们的迅达PTE练习网站上根据模板进行练习，或者观看William老师的视频和课程。 较低的阅读成绩表明了你的语法、词汇和句子的逻辑判断方面出现了一定的问题。阅读最高比重的是Fill in the Blanks，而随后是口语的Read Aloud以阅读的Re-order Paragraph。如果你口语达到目标，你要重点攻克你的FIB和RO。做FIB的题目的时候也要重点查你是哪一部分的语法和单词出现问题，并查看你的时态、语态、连接词、逻辑的理解和单词的理解。为此你应该有一本专门的订正本，把所有的做错题写在本子上，并且配合用迅达高频机经来做复习和整理。找到做题做错的原因很重要，就像是迅达PTE阅读的练习课一样，每一道FIB的题目后面都会帮你写明他的出题原因和考点是什么。",
      communicative_2_speak_write:
        "PTE的Speaking相对于阅读和听力来说是比较容易的，其难度仅次于写作。口语并不是难点，而是PTE的抢分点。也就是说它是可以短期内帮你提高分数的项目，特别是快速提高你的流利度和你的发音。如果你目标是在65分，你的流利度要保持在70分左右，同时你的发音要在50分以上；如果你的目标是79分，你的流利度要在75分以上，同时发音要在60分以上。所以在你PTE听力成绩还可以，口语分数更低的情况下，建议你多做RS的跟读练习。同时可以在我们的迅达PTE练习网站上根据模板进行练习，或者观看William老师的视频和课程。较低的写作成绩表明你写作的关键词不足。所谓的关键词不足有两个方面，一是关键词写的不够准确，二是关键词的数量不够。当你使用模板以后，你把这道题做成了简单的填空题，而你填的词并不能满足考试的要求从而无法达到写作分数的提高。你需要花时间来复习PTE的写作机经，建议使用迅达高频写作机经来扩充你的写作高频词。同样，如果你写的答案过于宽泛而不够具体，应该增加足够多的例子和关键的点来强调与文章主题的相关性。",
      communicative_2_read_write:
        "阅读和写作同时较低的分数表明了你在Summarize Written Text（SWT）上面丢掉了过多的分数，同样阅读的Fill in the Blanks (Reading Part 2）同样需要加强。虽然SWT占得分数比重没有Write Essay高，但是它的机经很多，对于练习抓住内容分，它是很好的入手题型。",
      fluency_comment_10:
        "10分在PTE中等价于0分。你可以无视该项得分，因为你的声音录入存在问题，计算机不能识别你任何的声音。建议你尽快阅读我们提供的“发音不识别的五大原因”文档或者参加迅达课程更有针对性地解决该问题。",
      fluency_comment_10_30:
        "你的口语流利度成绩说明你读的太没有连贯性，你是在一个一个地读单词，没有任何意群的表达。想要快速提高，需要进行大量的Repeat Sentence练习或者模仿学习native speaker说话的速度、节奏和意群表达的感觉。如果你的速度是可以的，但是成绩依旧很低，很可能是因为你的发音过轻，大部分内容电脑识别不了。你需要确保你在考场中的声音不能被别人的盖住。",
      fluency_comment_30_40:
        "你的口语流利度成绩说明你在错误的地方有太多的停顿，你不知道什么时候该停顿，什么时候不该停顿。在读长句子时，平均来说你需要连续读9-10个词才停顿一次。同时，确保你是在如“and”和“that”这种连接词之前停顿，而不是之后。",
      fluency_comment_40_50:
        "你的口语流利度成绩通常表明你存在“robot reading”现象和节奏的不一致。当你遇到较难的单词时，这会使你缓慢地（分离地）读每个单词，而不能保持适当的流利度。",
      fluency_comment_50_60:
        "你的口语流利度不算太差，但是还有很多提高的空间。对于你来说，模板练习可能是最快的提高方式。迅达提供的模板将会在很大程度帮助到你，迅达英语对于课上的每一道题都会提供模板答案。在每个句子的结尾处，适当地停顿进行换气。当你使用模板时，要确保模板部分和题目关键词之间没有明显的停顿。因为不恰当地使用模板，口语说出来时会像是做填空题，明显的卡顿将会严重影响评分。",
      fluency_comment_60_65:
        "你的口语流利度分数已经非常接近于你的目标成绩。为了保持更好的一致性，一定要有效利用准备时间，在录音开始之前尽可能多地重复练习有挑战的单词（放在其意群中练习）。",
      fluency_comment_65_70:
        "你的口语已经相当流利，但是对于难词还是存在犹豫的现象，这种速度的突然变缓会降低流利度的评分。你应该确保在整个口语考试中，你的语速保持在同一水平，不同的口语小项之间也不存在明显的语速差别。",
      fluency_comment_70_78:
        "你的口语已经相当流利，与79仅有几分之差。这意味着你只需要稍微加强语速的一致性和更地道的语音语调。录音时不要急着讲话，确保想清楚需要强调的关键词。",
      pronunciation_comment_10:
        "10分在PTE中等价于0分。你可以无视该项得分，因为你的声音录入存在问题，计算机不能识别你任何的声音。建议你尽快阅读我们提供的“发音不识别的五大原因”文档或者参加迅达课程更有针对性地解决该问题。",
      pronunciation_comment_10_30:
        "你的发音分数表示你的音量太低，计算机难以识别。你的头等大事是练习大声说话而不会减慢或者打断句子。用大声且清晰的声音大量练习Repeat Sentence，并确保长大嘴巴。",
      pronunciation_comment_30_40:
        "你的发音分数表示你的音量太低，计算机无法很好地识别。一般来说，Repeat Sentence和Retell Lecture是你最大的问题。当你说自己不自信的内容时，不要变得犹豫而使得音量变小。即便回答的不对，也请保持前后音量、语速的一致。",
      pronunciation_comment_40_50:
        "你较低的发音分数通常是由于音量不平衡或者多余音节造成的。做一些Read Aloud练习并且录音记录，在其中尝试大声练习爆破音（特别是T,P,Ch和Sh）。在句子开头检查是否过分强调，在句子结尾检查声音是否较弱，确保你有足够的气息来说出完整的句子。另一个要点是不要在单词中添加任何额外的音节（尤其是and和that这类连接词）。",
      pronunciation_comment_50_60:
        "你的发音分数通常表示音量和呼吸有些不平衡。尝试使辅音更柔和，使元音更强大（特别是对于每个句子中最后的1-2个单词）。大多数学生需要练习以低音调发出较大声的元音。此外，请确保你不会在句子结尾处使用怪异的音调而使得每个句子听起来都像是问题或者建议。",
      pronunciation_comment_60_65:
        "想要进一步提高你的发音分，目标是努力平衡你的发音。当心不自然的音调，并确保所有的关键词都得到明确强调，同时避免连接词发音过强。",
      pronunciation_comment_65_70:
        "你的发音很扎实，但并没有达到native speaker的水准。想要在该项上达到79分，你需要在语气和重读上找到更多的平衡。确保考试时你展示了音调的高低变化，但请注意不要过分强调单词。强调时使元音变长而不是将音量和音调提的太高，这一点可以在Repeat Sentence中练习。",
      pronunciation_comment_70_78:
        "你有一个非常高的发音分数，每次录音时可能只有一个错误而已。确保你的重音，音量和语调的一致，避免仓促地讲话。",
      grammar_comment:
        "语法在整个PTE考试中占的比重并不是很高，较低的语法分数主要会影响你的写作成绩。如果能大幅提高语法成绩，你的写作成绩将会上涨三分左右。想要快速提高语法分数，可以通过使用迅达网课提供的模板进行练习，并且平时写作时关闭文档自带的自动纠错功能。语法分数是最容易提高的分数，只要做到不确定的句子不往上写。",
      spelling_comment:
        "较低的拼写分数说明你有很多不经意的拼写错误或打字手误，这很可能是由于你较差的时间把控能力。对于Summarise Spoken Text, Write Essay和Write from Dictation这几类题型，你需要留下充足的时间去编辑并检查你的答案。建议你能考前参加模考或者参加迅达的练习课程做高效率的练习来熟悉考试氛围。",
      vocabulary_comment:
        "词汇分是最和内容分挂钩的一项成绩。想要提高词汇分，一定要学会如何抓关键词来提高内容分。",
      discourse_comment:
        "Written Discourse成绩意味着你写作的质量，尤其是对于多种时态、逻辑连接词、句子结构的把控。大多数学生在该项上都有达到90分的能力，你的该项分数较低说明你没有使用模板，或者用了模板，但复制了太多原始文本中的内容并不断重复模板句，这些都会减少你的该项评分。"
    };

    try {
      var score = wx.getStorageSync("score");

      // 各项分数
      var listening = parseInt(score.listening);
      var speaking = parseInt(score.speaking);
      var writing = parseInt(score.writing);
      var reading = parseInt(score.reading);
      var grammar = parseInt(score.grammar);
      var fluency = parseInt(score.fluency);
      var pronunciation = parseInt(score.pronunciation);
      var spelling = parseInt(score.spelling);
      var vocabulary = parseInt(score.vocabulary);
      var discourse = parseInt(score.discourse);

      // 调整分数
      var difference = score.target - score.speaking;
      var adjust_score = Math.round(difference / 3);
      if (adjust_score < 0) {
        adjust_score = 0;
      }
      listening = adjust_score + listening;
      reading = adjust_score + reading;

      // 找最小两个分数
      var arr = [listening, speaking, writing, reading];
      var min = arr[0];
      var min_id = 0;
      var min2_id = 0;
      var count = 0;
      var diff = 6;
      var i = 0;
      // 最小数
      for (i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
          min = arr[i];
          min_id = i;
        }
      }
      if (min > target) {
        count = 1;
      }
      // 最小数和第二小数差值在5分以内的，且差值为最小的
      for (i = 0; i < arr.length; i++) {
        if (arr[i] - min < diff && i != min_id) {
          diff = arr[i] - min;
          min2_id = i;
          count = 2;
        }
      }
    } catch (e) {
      // Do something when catch error
      // 改成提示错误信息或者回到上一个页面
    }

    // that.setData({
    //   listening: listening,
    //   speaking: speaking,
    //   writing: writing,
    //   reading: reading,
    //   count: count,
    //   min: min,
    //   difference: difference,
    //   min_id: min_id,
    //   min2_id: min2_id
    // });

    // 判断输出分析结果
    var that = this;
    var comments = that.data.comments;

    // 0-listen 1-speak 2-write 3-read
    if ((count = 0)) {
      comments[0].comment = comment.count0;
    } else if (count == 1) {
      if (min_id == 0) {
        comments[0].comment = comment.communicative_1_listen;
      } else if (min_id == 1) {
        comments[0].comment = comment.communicative_1_speak;
      } else if (min_id == 2) {
        comments[0].comment = comment.communicative_1_write;
      } else if (min_id == 3) {
        comments[0].comment = comment.communicative_1_read;
      }
    } else {
      if (((min_id == 0) & (min2_id == 1)) | ((min_id == 1) & (min2_id == 0))) {
        comments[0].comment = comment.communicative_2_listen_speak;
      } else if (
        ((min_id == 0) & (min2_id == 2)) |
        ((min_id == 2) & (min2_id == 0))
      ) {
        comments[0].comment = comment.communicative_2_listen_write;
      } else if (
        ((min_id == 0) & (min2_id == 3)) |
        ((min_id == 3) & (min2_id == 0))
      ) {
        comments[0].comment = comment.communicative_2_listen_read;
      } else if (
        ((min_id == 1) & (min2_id == 2)) |
        ((min_id == 2) & (min2_id == 1))
      ) {
        comments[0].comment = comment.communicative_2_speak_write;
      } else if (
        ((min_id == 1) & (min2_id == 3)) |
        ((min_id == 3) & (min2_id == 1))
      ) {
        comments[0].comment = comment.communicative_2_speak_read;
      } else if (
        ((min_id == 2) & (min2_id == 3)) |
        ((min_id == 3) & (min2_id == 2))
      ) {
        comments[0].comment = comment.communicative_2_read_write;
      }
    }

    if (difference > 30) {
      comments[0].comment = comment.difference + comments[0].comment;
    }

    // 四项小分
    if (grammar < 60) {
      comments[3].comment = comment.grammar_comment;
    }
    if (vocabulary < 60) {
      comments[4].comment = comment.vocabulary_comment;
    }
    if (spelling < 50) {
      comments[5].comment = comment.spelling_comment;
    }
    if (discourse < 65) {
      comments[6].comment = comment.discourse_comment;
    }

    // 发音
    if (pronunciation == 10 && fluency != 10) {
      comments[2].comment = comment.pronunciation_comment_10;
    } else if (pronunciation <= 30 && pronunciation >= 10) {
      comments[2].comment = comment.pronunciation_comment_10_30;
    } else if (pronunciation <= 40 && pronunciation > 30) {
      comments[2].comment = comment.pronunciation_comment_30_40;
    } else if (pronunciation <= 50 && pronunciation > 40) {
      comments[2].comment = comment.pronunciation_comment_40_50;
    } else if (pronunciation <= 60 && pronunciation > 50) {
      comments[2].comment = comment.pronunciation_comment_50_60;
    } else if (pronunciation <= 65 && pronunciation > 60) {
      comments[2].comment = comment.pronunciation_comment_60_65;
    } else if (pronunciation <= 70 && pronunciation > 65) {
      comments[2].comment = comment.pronunciation_comment_65_70;
    } else if (pronunciation <= 78 && pronunciation > 70) {
      comments[2].comment = comment.pronunciation_comment_70_78;
    }

    // 流利度
    if (fluency == 10) {
      comments[1].comment = comment.fluency_comment_10;
    } else if (fluency <= 30 && fluency > 10) {
      comments[1].comment = comment.fluency_comment_10_30;
    } else if (fluency <= 40 && fluency > 30) {
      comments[1].comment = comment.fluency_comment_30_40;
    } else if (fluency <= 50 && fluency > 40) {
      comments[1].comment = comment.fluency_comment_40_50;
    } else if (fluency <= 60 && fluency > 50) {
      comments[1].comment = comment.fluency_comment_50_60;
    } else if (fluency <= 65 && fluency > 60) {
      comments[1].comment = comment.fluency_comment_60_65;
    } else if (fluency <= 70 && fluency > 65) {
      comments[1].comment = comment.fluency_comment_65_70;
    } else if (fluency <= 78 && fluency > 70) {
      comments[1].comment = comment.fluency_comment_70_78;
    }

    that.setData({ comments });
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
