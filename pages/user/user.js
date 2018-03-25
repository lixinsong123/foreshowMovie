// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl :'',
    nickName : '未知'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getUserInfo({
      success : (res)=>{
        this.setData({
          avatarUrl: res.userInfo.avatarUrl,
          nickName: res.userInfo.nickName
        });
      }
    })
  },
  jump(){
    wx.navigateTo({
      url: '../user-histroy/user-histroy',
    })
  },
  clearStorge(){
    try {
      wx.clearStorageSync();
      console.log("清除缓存成功");
    } catch (e) {
      // Do something when catch error
    }
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