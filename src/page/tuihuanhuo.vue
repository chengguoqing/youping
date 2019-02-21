<template>
	<div>
		<section class="bgff pt10 pm10 cen dsf_jh_eerx mb10" v-if="this.sd_jhg_sd==0">
			<a class="mui-btn " v-for="(ts,idx) in tuihs" :class="ts.cls" @click="sd_hgs(idx)">{{ts.name}}</a>
		</section>

		<ul class="bgff ">

			<li class="pd pt10 pm10 btm mui-row pr" v-for="(sd,idx) in orderlist_data.goods_list" >

				<span class="dsf_jhsd yj cz fl mt30 mr10" :class="sd.cls" @click.stop="sd.cls=='act'?sd.cls='':sd.cls='act';sd_rt_er()">
                          <i class="dx icon-gou fz14"></i>
                    </span>

				<p class="cp_icon_sdf fl ">
					<img :src="sd.goods_thumb"> 
				</p>

				<section class="ov pl10 mui-row pr">
					<section class="mui-col-xs-9">
						<p class="dianer z3 sdf_jh_dertx">{{sd.goods_name}}
						</p>
						<p class="fz12 dian">
							{{sd.goods_attr}}
						</p>


					</section>
					<section class="ov tr">
						<span class="fz14">￥{{sd.goods_price}}</span>

					</section>

				</section>

			</li>
		</ul>

		<section class="pd bgff mt10">
			<p class="pt10 z3" v-if="c_type==0">
				退款金额：<span class="red">￥{{numnbre}}</span>
			</p>
			<p class="z3 mt2 pt5">
				退款理由：
			</p>

			<p class="mt10 pr">
				<textarea placeholder="请输入退款理由" class="fz14 sdf_jh_er" rows="5" v-model="liyou"></textarea>
				<span class="dsf_j_s fz6">{{liyou.length}}/500</span>
			</p>

			<section class="pm10">
				<up_img @getimg="getimg"></up_img>
			</section>

		</section>

		<p class="mt20 pd">
			<a class="mui-btn bgls w100 fz15" @click="tijiao">提交</a>
		</p>



	</div>
</template>
<script>
    import up_img from "../components/up_img.vue"
    import {
        Toast
    } from 'mint-ui';
    export default {
        data() {
            return {
                liyou: "",
                c_type: 0,
                sd_jhg_sd: "",
                orderlist_data: "",
                numnbre: 0,
                img_sd: [],
                tuihs: [{
                    name: "退货",
                    cls: "bgls"
                }, {
                    name: "换货",
                    cls: ""
                }],
                kh_sd: [{
                        cls: ''
                    }, {
                        cls: ''
                    },
                    {
                        cls: ''
                    },
                ]
            }
        },
        components: {
            up_img: up_img
        },
        methods: {
            sd_hgs(idx) {
                this.tuihs.map(function(a) {
                    a.cls = ""
                })
                this.c_type = idx
                console.log(this.c_type);
                this.tuihs[idx].cls = "bgls"

            },
            dsd_jh(idx) {

                this.kh_sd[idx].cls = "act"
            },
            sd_rt_er() {
                let numnbre = 0
                try {


                    this.orderlist_data.goods_list.map(a => {
                        if (a.cls == "act") {
                            numnbre += (a.goods_price * a.goods_number)
                        }
                    })
                } catch (e) {

                }
                this.numnbre = numnbre
            },
            getimg(data) { //获取上传的图片地址
                this.img_sd = data
            },
            tijiao() { //提交售后的按钮触发
                let aserte = 0
                      this.orderlist_data.goods_list.map(a => {
                        if (a.cls == "act") {
                          aserte++
                        }
                    })

                console.log(aserte);

                if (aserte <= 0) {
                    Toast('请选择商品');
                    return
                }
                if (!this.liyou) {
                    Toast('请输入退款理由');
                    return
                }
                let rec_id = []
                this.orderlist_data.goods_list.map(a => {
                    if (a.cls == "act") {
                        rec_id.push(a.rec_id)
                    }
                })
                let backgoods = {},
                    th = this
                backgoods.token = this.token
                backgoods.order_id = this.orderlist_data.order_id
                backgoods.images = this.img_sd
                backgoods.content = this.liyou

                if (this.sd_jhg_sd == 1) { //退款
                    this.post('customer/refund', backgoods, function(data) {
                        th.hf('shouhoulist')
                    })
                } else { //退换货
                    backgoods.rec_id = rec_id.join(",")
                    backgoods.type = this.c_type
                    this.post('customer/backgoods', backgoods, function(data) {
                        th.hf('shouhoulist')
                    })
                }

            }
        },
        mounted() {
            this.Title("选择服务类型")
            this.sd_jhg_sd = this.$route.query.type
            try {
                this.$route.query.orderlist_data.goods_list.map(a => {
                    a.cls = "act"
                })
            } catch (e) {

            }

            this.orderlist_data = this.$route.query.orderlist_data
            this.sd_rt_er()
            if (this.sd_jhg_sd == 1) {
                this.Title("退款")
            }
        },
    }

</script>
<style scoped>
    .dsf_jh_eerx {
        position: sticky;
        left: 0px;
        top: 0px;
        z-index: 9999
    }

    .dsf_jh_eerx a {
        padding-left: 30px;
        padding-right: 30px;
    }

    .dsf_jh_eerx a:nth-child(2) {
        margin-left: 30px;
    }

    .sdf_jh_er {
        text-indent: 0px;
        padding: 0px;
        border: 0px;
        background: #F4F4F4;
        padding: 5px 8px;
        margin: 0px;
    }

    .dsf_j_s {
        position: absolute;
        right: 10px;
        bottom: 10px;
    }

</style>
