<!--上传图片-->
<template>
	<section>
		<section class="sd_shnga_s mui-row mt10">
			<section class="up_ic_sde pr ab" v-for="(tu,idx) in tups">
				<img :src="tu">
				<i class="yj dx icon-close1 bgred cf dfg_closeerx" @click="remo_img(idx)"></i>
			</section>

			<section class="up_ic_sde pr" @click="up_img_er" >
				<i class="dx icon-xiangji fz32 z9"></i>
<!--				<input type="file" @change="previewFile()" id="ssd_ooie">-->
			</section>

		</section>
	</section>
</template>
<script>
     var wx = require('weixin-js-sdk');
    export default {
        props: {
            title: ""
        },
        data() {
            return {
                tups: []
            }
        },
        methods: {
            previewFile() {
                if (this.tups.length >= 3) {
                    return
                }
                var th = this
                var file = document.querySelector('#ssd_ooie').files[0];
                var reader = new FileReader();
                reader.onloadend = function() {
                    let upload = {}
                    upload.token = th.token
                    upload.image = reader.result
                    th.post('images/upload', upload, function(data) {
                        th.tups.push(data.src)
                    })

                    th.$emit("getimg", th.tups)
                }
                if (file) {
                    reader.readAsDataURL(file);
                } else {

                }
            },


            up_img_er(idx) { //上传图片按钮触发
                let th = this
                wx.chooseImage({
                    success: function(res) {
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
                    success: function(res) {
                        var serverId = res.serverId; // 返回图片的服务器端ID
                        var getmedia = {}
                        getmedia.token = th.token
                        getmedia.media_id = serverId
                        th.post("images/getmedia", getmedia, function(data) {
                            th.tups.push(data.src)
                        })
                        //其他对serverId做处理的代码
                        if (localIds.length > 0) {
                            th.shangchuan(localIds);
                        }
                    }
                });
            },



            remo_img(idx) {

                this.tups.splice(idx, 1)
                this.$emit("getimg", this.tups)
            },
        },
        created: function() {

        },
    }

</script>
<style scoped>
    .up_ic_sde {
        border: 1px dashed #e0e0e0;
        width: 80px;
        height: 80px;
        margin-right: 5px;
        text-align: center;
        margin-bottom: 10px;
        line-height: 85px;
        float: left;
    }

    #ssd_ooie {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        opacity: 0
    }

    .up_ic_sde img {
        width: 100%;
        height: 100%;
    }

    .dfg_closeerx {
        position: absolute;
        right: -8px;
        top: -8px;
        line-height: 20px;
        font-size: 12px;
        width: 20px;
        height: 20px;
    }

</style>
