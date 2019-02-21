<!--评价-->
<template>
	<div>
		<section class="bgff  mb10" v-for="(sd,idxo) in goods_lister">
			<section class="pd pt10 df_kh_erecc">
				<img :src="sd.goods_thumb" class="sd_jh_er cz">
				<span class="fz14 z6 ml5">描述相符</span>
				<span class="ml5">
                    <i class="f_i et_sdf cz mr5" v-for="(sde,idx) in 5 " :class="idx<sd.goods_rank?'act':''" @click="sd.goods_rank=(idx+1)"></i>
                    <span class="fz14 z6 ml5" v-if="sd.goods_rank>0">

                        <span  v-if="sd.goods_rank>=1&&sd.goods_rank<3">差评</span>
				<span v-if="sd.goods_rank>=3&&sd.goods_rank<5">中评</span>
				<span v-if="sd.goods_rank>=5">好评</span>
				</span>
				</span>
			</section>

			<textarea placeholder="这次购买的商品还满意吗？可以在此处写点评价给
其他顾客参考哦" class="sd_jhg_piwer mt10" rows="5 " v-model="sd.content"></textarea>
 
			<section class="pd">
				<section class="sd_shnga_s mui-row mt10">
					<section class="up_ic_sde pr ab" v-for="(tu,idx) in sd.images">
						<img :src="tu">
						<i class="yj dx icon-close1 bgred cf dfg_closeerx" @click="remo_img(idxo,idx)"></i>
					</section>

					<section class="up_ic_sde pr" @click="up_img_er(idxo)">
						<i class="dx icon-xiangji fz32 z9"></i>
					</section>

				</section>
			</section>

		</section>

		<section class="mt10 pd pt10 pm10 bgff ">
			<i class="dx icon-dianpu z6"></i><span class="fz15 ml5 z3">店铺评分</span>
			<section class="btm mt5 ">
				<p class="z3  mt15">
					物流服务
					<span class="ml5">
            <i class="f_i et_sdf cz mr5" v-for="(sd,idx) in 5 " :class="idx<deliver_rank?'act':''" @click="deliver_rank=(idx+1)"></i>
    </span>
				</p>

				<p class="z3  mt20">
					服务态度
					<span class="ml5">
            <i class="f_i et_sdf cz mr5" v-for="(sd,idx) in 5 " :class="idx<services_rank?'act':''" @click="services_rank=(idx+1)"></i>
    </span>
				</p>
			</section>

		</section>

		<section class="dsf_jh_drf btm bgff  mui-row">
			<section class="mui-col-xs-9 pd">

				<span class="dsf_jhsd yj cz " :class="niming?'act':''" @click="!niming?niming=true:niming=false">
                        <i class="dx icon-gou fz14 "></i>

                    </span>
				<span class="fz12 ml5">匿名</span>

			</section>
			<section class="mui-col-xs-3 bgls fz12 cen" @click="submit_comments">
				提交评价
			</section>

		</section>

		<input type="file" @change="previewFile" id="ssd_ooie">
	</div>
</template>
<script>
    var wx = require('weixin-js-sdk');
    import {
        MessageBox
    } from 'mint-ui';
    export default {
        data() {
            return {
                tups: [],
                goods_list: "",
                goods_lister: [],
                order_id: "",
                niming: true, //是否匿名提交
                hg_sd: 0, //描述评价等级
                deliver_rank: 5, //物流评价等级
                services_rank: 5, //服务态度等级
                huaise: true, //开关 
                img_idx: ""
            }
        },
        components: {},
        methods: {
            getimg(data) { //获取上传的图片
                this.tups = data
            },
            up_img_er(idx) { //上传图片按钮触发
                this.img_idx = idx
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
                        getmedia.type_e=1
                        th.post("images/getmedia", getmedia, function(data) {
                            th.goods_lister[th.img_idx].images.push(data.src)
                        })
                        //其他对serverId做处理的代码
                        if (localIds.length > 0) {
                            th.shangchuan(localIds);
                        }
                    }
                });
            },
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
                    console.log(reader);
                    th.post('images/upload', upload, function(data) {
                        th.goods_lister[th.img_idx].images.push(data.src)
                    })

                }
                if (file) {
                    reader.readAsDataURL(file);
                } else {

                }
            },
            remo_img(idxo, idx) {
                this.goods_lister[idxo].images.splice(idx, 1);

            },
            submit_comments() { //提交评论
                let addcomment = {},
                    th = this
                addcomment.token = this.token
                addcomment.order_id = this.order_id
                addcomment.deliver_rank = this.deliver_rank
                addcomment.services_rank = this.services_rank
                this.goods_lister.map(a => {
                    if (this.niming) {
                        a.anonymous = 1
                    } else {
                        a.anonymous = 0
                    }
                })
                addcomment.comment = this.goods_lister

                if (!addcomment.comment[0].content) {
                    MessageBox('提示', "评价内容不能为空");
                    return
                }
                this.post("product/addcomment", addcomment, function(data) {
                    th.$router.back(-1)

                })
            }
        },
        mounted() {
            this.goods_list = this.$route.query.goods_list;
            this.order_id = this.$route.query.order_id
            this.goods_list.map((a, b) => {
                let skshj_s = {}
                skshj_s.images = [] //产品上传图片
                skshj_s.goods_rank = 5 //评分
                skshj_s.rec_id = a.rec_id
                skshj_s.goods_id = a.goods_id
                skshj_s.anonymous = 1 //1=匿名评价
                skshj_s.content = "" //评价内容
                skshj_s.goods_thumb = a.goods_thumb //产品图片
                this.goods_lister.push(skshj_s)

            })

            this.Title("评价")
        },
    }

</script>
<style scoped>
    .sd_jh_er {
        width: 45px;
        height: 45px;
        border: 1px solid #f5f5f5
    }

    .df_kh_erecc {
        line-height: 45px;
    }

    .sd_jhg_piwer {
        border: 0px;
        background: #F8F8F8;
        font-size: 13px;
        text-indent: 0px;
        margin-bottom: 0px;
    }

    .pingjis_s {
        position: fixed;
        left: 0px;
        bottom: 0px;
        width: 100%;
        background: #fff;
        height: 50px;
        line-height: 50px;
    }

    .up_ic_sde {
        border: 1px dashed #e0e0e0;
        width: 80px;
        height: 80px;
        margin-right: 8px;
        margin-bottom: 10px;
        text-align: center;
        line-height: 85px;
        float: left;
    }

    #ssd_ooie {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        display: none
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
