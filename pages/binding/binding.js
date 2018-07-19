Page({
	data: {
		swidth: 0,
		sheight: 0
	},

	onLoad: function () {
		let that = this
		wx.getSystemInfo({
			success: function(res){
				that.setData({
					sheight: res.windowHeight
				})
				that.setData({
					swidth: res.windowWidth
				})
				
			}
		})
	}
})