// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies : [],
    page : 1,
    size : 6,
    loading:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMovies();
  },

  loadMovies(){
    const {size,page} = this.data;
    this.setData({loading:true});
    wx.request({
      url: `https://db.miaov.com/doubanapi/v0/movie/list?base=true
            &page=${page}&size=${size}`,
      success : (res)=>{
        const {data} = res.data;
        const movies = this.data.movies;
        for(let i=0;i<data.length;i+=2){
            movies.push([data[i],data[i+1] ? data[i+1] : null ]);
        }
        this.setData({
          movies,
          loading : false
        });
      }
    });
  },
  scrollHandler(){
    const {page} = this.data;
    this.setData({page:page+1});
    this.loadMovies();
  },
  gotoDetailHandler(e){
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../movie-detail/movie-detail?id=' + id,
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