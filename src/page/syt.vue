<!--收银台-->
<template>
	<div>
		<p class="cen z3  mt20">
			订单编号：{{xq_sdd.order_sn}}
		</p>
		<p class="fz40 z3 mt30 cen">
			￥ <span v-html="price_guo(xq_sdd.total_money)" class="sd_jh_drt"></span>
		</p>

		<ul class="mui-table-view mt40 fz14">
			<li class="mui-table-view-cell">
				<span class="z6">收款方</span>
				<span class="fr">{{$store.state.shopinfo.company}}</span>
			</li>
		</ul>

		<section class="mt10 bgff">
			<p class="pd z6 dsf_jh_ert">
				选择支付方式
			</p>

			<ul class="zi_sdffw">
				<li class="btm pd" @click="hgf_sd=0">
					<p class="skh_detxc fl">
						<i class="f_i zhifu_sd"></i>
					</p>
					<section class="ov pr pl10">
						<span class="cz  fz14">微信支付</span>

						<i class="f_i gou_xsdf" :class="hgf_sd==0?'act':''"></i>
					</section>
				</li>

				<li class="btm pd" @click="hgf_sd=1">
					<p class="skh_detxc fl">
						<i class="f_i zhifu_sd ab"></i>
					</p>
					<section class="ov pr df_jh_erx pl10">
						<span class="cz  fz14">余额支付</span>
						<p class="fz12">
							可用余额：{{xq_sdd.user_money}}元
						</p>

						<i class="f_i gou_xsdf" :class="hgf_sd==1?'act':''"></i>
					</section>
				</li>
			</ul>

		</section>

		<p class="mt60 pd" @click="queren_er">
			<a class="mui-btn bgls w100 fz16">确认支付</a>
		</p>

	</div>
</template>
<script>
    import {
        Indicator
    } from 'mint-ui';
    import {
        MessageBox
    } from 'mint-ui';
    import {
        Toast
    } from 'mint-ui';
    export default {
        data() {
            return {
                hgf_sd: 0, //0微信支付  1余额支付
                jsApiParameters: "",
                order_id: "",
                xq_sdd: "",
                shopinfo_p: ""
            }
        },
        components: {

        },
        methods: {
            callpay() {
                let th = this
                if (typeof WeixinJSBridge == "undefined") {
                    if (document.addEventListener) {
                        document.addEventListener('WeixinJSBridgeReady', th.jsApiCall, false);
                    } else if (document.attachEvent) {
                        document.attachEvent('WeixinJSBridgeReady', th.jsApiCall);
                        document.attachEvent('onWeixinJSBridgeReady', th.jsApiCall);
                    }
                } else {
                    th.jsApiCall();
                }
            },

            jsApiCall() {
                let th = this
                WeixinJSBridge.invoke(
                    'getBrandWCPayRequest', th.jsApiParameters,
                    function(res) {
                        if (res.err_msg == "get_brand_wcpay_request:ok") {
                            Indicator.open();
                            setTimeout(function() {
                                Indicator.close();
                                th.xq_sdd.sd_er = "微信支付"
                                th.hf('pay_success', {
                                    xq_sdd: th.xq_sdd
                                })
                            }, 2000);
                        } else {
                            return false;
                        }
                    }
                );
            },
            queren_er() { //确认支付

                let th = this
                if (this.hgf_sd == 0) {
                    this.callpay()
                } else {

                    if (this.xq_sdd.user_money < this.xq_sdd.goods_money) {
                        MessageBox({
                            title: '温馨提示！',
                            message: '余额不足',
                            showCancelButton: true,
                            showCancelButton: true,
                            confirmButtonText: "去充值"
                        }).then(action => {
                            if (action == "confirm") {
                                th.hf("chongzhi")
                            }
                        });
                        return
                    } else {
                        MessageBox({
                            title: '温馨提示！',
                            message: '确认使用余额支付吗?',
                            showCancelButton: true,
                            showCancelButton: true
                        }).then(action => {
                            if (action == "confirm") {
                                let balancepayment = {}
                                balancepayment.token = this.token
                                balancepayment.order_id = this.order_id
                                th.post("shopping/balancepayment", balancepayment, function(data) {
                                    th.xq_sdd.sd_er = "余额支付"
                                    th.hf('pay_success', {
                                        xq_sdd: th.xq_sdd
                                    })
                                })
                            }
                        });



                    }
                }
            }

        },
        mounted() {

            this.xq_sdd = this.$route.query.xq_sdd
            try {
                this.jsApiParameters = JSON.parse(this.xq_sdd.wxpay)
            } catch (e) {
                this.$router.back(-1)
            }
            console.log(this.xq_sdd);
            let th = this
            this.order_id = this.xq_sdd.order_id
            console.log(this.xq_sdd);

        },
    }

</script>
<style>
    .sd_jh_drt .fz12 {
        font-size: 20px !important
    }

</style>
<style scoped>
    .dsf_jh_ert {
        line-height: 35px;
    }

    .zi_sdffw li {
        line-height: 50px;
        height: 50px;
    }

    .zhifu_sd {
        width: 36px;
        height: 36px;
        background-position: -150px -189px;
        transform: scale(0.8)
    }

    .zhifu_sd.ab {
        width: 40px;
        height: 40px;
        background-position: -205px -185px;
    }

    .skh_detxc {
        width: 45px;
    }

    .gou_xsdf {
        width: 26px;
        height: 26px;
        background-position: -308px -198px;
        position: absolute;
        right: 0px;
        top: 16px;
        transform: scale(0.8)
    }

    .gou_xsdf.act {
        background-position: -268px -199px;
    }

    .df_jh_erx {
        line-height: 1.5;
        padding-top: 2px;
    }

</style>
