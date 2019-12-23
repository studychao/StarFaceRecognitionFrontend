// pages/singer/singer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    album:'',
    poster: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573118730858&di=99fc72c7a939d6eb146075bc4b396d41&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fent%2Ftransform%2F600%2Fw300h300%2F20190927%2F7ab0-ifffqup1096516.jpg',
    name: '说好不哭',
    author: '周杰伦',
    src: 'http://ws.stream.qqmusic.qq.com/C400002NaWsW47NEwt.m4a?guid=358840384&vkey=49DC2D3C3E55E320BBEBE928863A6DCEED466D30D78A8349A79480956766D93476B84F096A5E952075C4A6D21165F21514CC95C45871C316&uin=0&fromtag=66',
    pic:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var songlist = options.songlist
    console.log(songlist)
    var r = Math.floor((Math.random() * 5))
    songlist = JSON.parse(decodeURIComponent(songlist))[r]
    console.log(typeof(songlist))
    this.setData({
      poster: songlist.albumpic_url,
      name: songlist.songname,
      author: songlist.musician,
      src: songlist.song_url,
      album: songlist.albumname,
      pic: songlist.musicianpic_url
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.audioCtx = wx.createAudioContext('myAudio')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  MusicStart: function (e) {
    var progress = parseInt((e.detail.currentTime / e.detail.duration) * 100)
    var that = this
    that.setData({
      progress: progress
    })
  },


})