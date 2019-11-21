// pages/faceindex/faceindex.js
Page({
  data: {
    inputShowed: false,
    inputVal: ""
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });

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

  search: function (e) {
    var name = e.detail.value;
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
});