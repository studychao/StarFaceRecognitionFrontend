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
    wx.request({
      url: 'http://127.0.0.1:7001/musicians',
      method: 'GET',
      data: {
        name: name,
      },
      success(e) {
        console.log(e.data);
        console.log(typeof (e.data));
        var musicians=JSON.stringify(e.data);
        console.log(musicians);
        wx.navigateTo({
          url: '../collection/collection?musicians=' + encodeURIComponent(musicians)
        })
      }
    })

  },

  agetest: function (e) {
    var that = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            that.chooseWxImage('camera')
          }
        }
      }
    })
  },

  chooseWxImage: function (type) {
    var that = this;
     wx.chooseImage({
       sizeType: ['original', 'compressed'],
       sourceType: [type], // 可以指定来源是相册还是相机
       success: function (res) {
         // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
        var tempFilePaths = res.tempFilePaths;  
        console.log(res);
        wx.uploadFile({  
          url: 'http://127.0.0.1:7001/face_rec/age',      //此处换上你的接口地址  
          filePath: tempFilePaths[0],  
          name: 'img',  
          header: {    
            "Content-Type": "multipart/form-data",  
            'accept': 'application/json',  
            'Authorization': 'Bearer ..'    //若有token，此处换上你的token，没有的话省略  
          },  
          formData:{  
            'user':'test'  //其他额外的formdata，可不写  
          },  
          success: function(res){  
            var data=res.data;  
             console.log('data');  
          },  
          fail: function(res){  
            console.log('fail');  
  
          },  
        })  
       }
     })
   }

});