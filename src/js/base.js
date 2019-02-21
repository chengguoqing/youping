exports.kefu = ""

exports.test_s = {
    data: function () {
        return {
            message: 'hello',
            foo: 'abc'
        }
    },
    methods: {
        up_img_er(idx) { //上传图片按钮触发
            this.img_idx = idx
            let th = this
            wx.chooseImage({
                success: function (res) {
                    var localIds = res.localIds;
                    th.shangchuan(localIds);
                }
            });
        },
        shangchuan(localIds) {
            var localId = localIds.pop(),
                th = this
            wx.uploadImage({
                localId: localId,
                isShowProgressTips: 1,
                success: function (res) {
                    var serverId = res.serverId; // 返回图片的服务器端ID
                    var getmedia = {}
                    getmedia.token = th.token
                    getmedia.media_id = serverId
                    th.post("images/getmedia", getmedia, function (data) {
                        th.goods_lister[th.img_idx].images.push(data.src)
                    })
                    //其他对serverId做处理的代码
                    if (localIds.length > 0) {
                        th.shangchuan(localIds);
                    }
                }
            });
        },
    },
}
