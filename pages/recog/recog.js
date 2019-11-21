// pages/recog/recog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    files:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  chooseImage: function (e) {
    var that = this;
    let len = 0;
    if (that.data.files!= null) {
      len = that.data.files.length;
    }
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      },
      fail: function () {
        wx.showToast({
          title: '图片上传失败',
          icon: 'none'
        })
        return;
      }
    })
  },

  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },

  deleteImage: function (e) {
    var that = this;
    var images = that.data.files;
    var index = e.currentTarget.dataset.index; //获取当前长按图片下标
    wx.showModal({
      title: '系统提醒',
      content: '确定要删除此图片吗？',
      success: function (res) {
        if (res.confirm) {
          images.splice(index, 1);
        } else if (res.cancel) {
          return false;
        }
        that.setData({
          files: images
        });
      }
    })
  },

  upload: function () {
    //const user = app.globalData.openid
    let that = this;
    let pic = that.data.files;
    var src,name;
    wx.showLoading({ title: '加载中', icon: 'loading', duration: 10000 });
    wx.uploadFile({
      url: 'http://101.132.38.226/upload',
      filePath: pic[0],
      name: 'img',
      success: function (e) {
        wx.hideLoading();
        console.log(typeof(e.data));
        var json=JSON.parse(e.data);
        console.log(typeof(json));
        src = json['msg'];
        console.log(typeof(src));
        name = JSON.stringify(json['list']);
        wx.navigateTo({
          url: '../result/result?src=' + src+'&name='+name
        })
      }
    })
  },

  submit: function (e) {
    var src = 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg';
    wx.navigateTo({
      url: '../result/result?src='+src
    })
  },
})