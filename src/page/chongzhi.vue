<template>
	<div class="dsf_jh_eerx">
		<section class="jgh_jh_sd">
			<section class="sd_jh_title pd">
				<span class="fz15 z6">充值渠道</span>
				<span class="ml20">
            <i class="f_i wei_xin_icon"></i>
                        <span  class="fz14 z3 ml5">微信支付</span>
				</span>
			</section>
			<section class="pd pt10">
				<p class="fz14">
					充值金额
				</p>

				<p class="mt10 pr pm10">
					<span class="z3 dsf_jhj_der">  ￥</span>
					<input type="number" class="csjh_s_sr " placeholder="0.01" v-model="czje">

				</p>

				<p class="pm20 mt30">
					<a class="mui-btn fz15 bgls w100" @click="ynh_ser" v-if="s_dert"> 充值 </a>

                    <a class="mui-btn fz15 bgls w100" v-else> <span >充值中....</span></a>
				</p>

			</section>

		</section>

        <section class="jgh_jh_sd mt10  pd" v-if="rechargecontent.recharge_content_if_show==1">
			<p class="cen z3 pt10 pm10">
    充值说明
            </p>

            <section class="pm10 z3 fz14" >
    <textarea :value="rechargecontent.recharge_content" class="err_e_erts" disabled></textarea>

    </section>
    </section>

	</div>
</template>
<script>
    import {
        Toast
    } from 'mint-ui';
    import {
        Indicator
    } from 'mint-ui';
    import {
        MessageBox
    } from 'mint-ui';
    export default {
        data() {
            return {
                czje: "",
                jsApiParameters: "",
                rechargecontent: "",
                s_dert: true
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
                        this.s_dert = true

                        if (res.err_msg == "get_brand_wcpay_request:ok") {
                            Indicator.open();
                            setTimeout(function() {
                                Indicator.close();
                                th.hf('yuermingxi')
                            }, 2000);
                        } else {
//                            Toast({
//                                message: '支付失败',
//                                iconClass: 'dx icon-close1 fz30'
//                            });
                            return false;
                        }
                    }
                );
            },
            ynh_ser(obj) {
                if (!/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/.test(this.czje)) {
                    Toast({
                        message: '金额输入错误',
                        iconClass: 'dx icon-close1 fz30'
                    });
                    return
                }
                let recharge = {},
                    th = this
                recharge.token = this.token
                recharge.money = this.czje
                this.s_dert = false
                this.post("shopping/recharge", recharge, function(data) {
                    th.jsApiParameters = JSON.parse(data.wxpay)
                    th.callpay()

                })
            }
        },
        mounted() {

            this.Title("充值")
            let rechargecontent = {},
                th = this
            rechargecontent.token = this.token
            this.post('shopping/rechargecontent', rechargecontent, function(data) {
                th.rechargecontent = data
            })
        },
    }

</script>
<style scoped>
    .dsf_jh_eerx {
        padding: 15px 10px;
    }

    .jgh_jh_sd {
        background: #FFFFFF;
        box-shadow: 0 0px 10px rgba(0, 0, 0, .1);
    }

    .sd_jh_title {
        line-height: 50px;
        background: #F7F7F7
    }

    .wei_xin_icon {
        width: 25px;
        height: 25px;
        background-position: -327px -325px;
    }

    .csjh_s_sr {
        border: 0px;
        font-size: 34px;
        line-height: 1 !important;

        height: 50px;
        padding-bottom: 0px;
        border-bottom: 1px solid #f5f5f5;
        color: #333
    }

    .dsf_jhj_der {
        position: absolute;
        left: 0px;
        top: 10px;
    }
    .err_e_erts{
        padding: 0px;
        border: 0px;
        height: 180px;
        text-indent: 0px;
        font-size: 14px;
        color: #666;
    }

</style>
