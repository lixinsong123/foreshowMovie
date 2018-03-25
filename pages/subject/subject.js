// pages/subject/subject.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      types : [
        {
          name : '喜剧',
          img  : '/assets/image/xiju.png'
        },
        {
          name: '动作',
          img: '/assets/image/dongzuo.png'
        },
        {
          name: '科幻',
          img: '/assets/image/kehuan.png'
        },
        {
          name: '爱情',
          img: '/assets/image/aiqing.png'
        },
        {
          name: '惊悚',
          img: '/assets/image/jingsong.png'
        },
        {
          name: '动画',
          img: '/assets/image/donghua.png'
        }
      ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  typeHandler(e){
    const type = e.currentTarget.dataset.type;
    wx.navigateTo({
      url: '../subject-list/subject-list?type='+type,
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
  
  }
})