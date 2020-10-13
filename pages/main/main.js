// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ["北京市", "北京市", "北京市"],
    localCode : 0,
    temp:0,
    pa:0,
    see:0,
    wind_direction:0,
    wind_speed: 0,
    wind_power:0,
    icon : 999
  },

  changeRegion: function(e){
    this.setData({
      region: e.detail.value,
      localCode: e.detail.code
    })

    this.getWeather()
  }, 
 

getWeather : function(){
  var that = this ; //this不可以在wxApi内部使用
  console.log(that.data.localCode);

  wx.request({
    url: 'https://geoapi.heweather.net/v2/city/lookup?',
    data:{
      location:that.data.region[1],
      key:"51cee72b89814b628c1ee77957ea79de"
    },

    success:function(res){
      wx.request({
        url: 'https://devapi.heweather.net/v7/weather/now?',
    
        data:{
          location: res.data.location[1].id,
          key : "51cee72b89814b628c1ee77957ea79de"
        },
        success:function(res) {
          console.log(res.data);
          that.setData({
            temp:res.data.now.temp,
            wind_speed:res.data.now.windSpeed,
            pa:res.data.now.pressure,
            icon: res.data.now.icon
          })
        }
      })
    }
  })
  
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

  }
})