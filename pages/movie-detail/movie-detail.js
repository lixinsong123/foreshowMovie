// pages/movie-detail/movie-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      movie : {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      const { id } = options;
      //const id = "5ab3925bc87d18388fe49fe8";
    
    wx.showLoading({
      title: '',

    });
    wx.request({
      url: `https://db.miaov.com/doubanapi/v0/movie/detail/${id}`,
      success:(res)=>{
       
        const movie  = res.data.data;
        console.log(movie);
        this.setData({
          movie
        });
        wx.hideLoading();
      }
    })
  },
  videoPlay(){
    const movie = this.data.movie;
    //数据缓存
    wx.getStorage({
      key: 'histroy',
      success: function (res) {
        let newArr = res.data;
        //处理相同情况的影片
        let referrerIds = wx.getStorageSync('ids');
        for(let i=0,len = referrerIds.length;i<len;i++){
          if (referrerIds[i] === movie._id){
                return false;
            }
        }

        var ids = [];
        ids.push(movie._id);
        wx.setStorageSync('ids', ids)


        let len = res.data.length;
        let islen = res.data[len-1].length;
        //数据类型式[[2],[2]]，判断是否增加新数组
        if (islen<2){
          res.data[len - 1].push(movie);
        }else{
          let arr = [];
              arr.push(movie);
          res.data.push(arr);
        }
        console.log(res.data);
        wx.setStorageSync('histroy', newArr)
      },
      fail : function(erro){
        var arr = [];
        var wrap = [];
        arr.push(movie);
        wrap.push(arr);
        wx.setStorageSync('histroy', wrap);
        console.log(movie._id);
        var ids = [];
          ids.push(movie._id);
          wx.setStorageSync('ids',ids)
      }
    })
    
    console.log(this.data.movie);
    
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
  
  }
})