// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [{
      mode: 'aspectFit',
      text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
    }],
    people: [{
      name: '林俊杰',
      text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
    }, {
      name: '周杰伦',
      text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
    }],
    name:[],

    src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571743865347&di=fc0d2c044a44fb2263eda8646897665e&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F283c723bb999d61021ed644d1876a414474f21a0.jpg'

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var src = options.src
    var name = JSON.parse(options.name)
    this.setData({
      src: src,
      name:name
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  singerinfo: function (e) {
    var $this = this;
    var name = e.currentTarget.dataset.name;
    console.log(name);
    wx.request({
      url: 'http://101.132.38.226/musician',
      method: 'GET',
      data: {
        name: name,
      },
      success(e) {
        console.log(e.data);
        console.log(typeof (e.data))
        var songlist = JSON.stringify(e.data);
        console.log(songlist)
        wx.navigateTo({
          url: '../singer/singer?songlist=' + encodeURIComponent(songlist)
        })
      }
    })
    
  },
})