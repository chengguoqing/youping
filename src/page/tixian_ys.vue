<!--提现-->
<template>
	<div class="dsf_jh_eerx">
		<section class="jgh_jh_sd">
		

			<section class="pd pt10">

				<p class="fz14 mt15">
					提现金额
				</p>

				<p class="mt5 pr">
					<span class="z3 dsf_jhj_der">  ￥</span>
					<input type="number" class="csjh_s_sr " placeholder="" v-model="czje">

				</p>


				<p class="pm20 mt40">
					<a class="mui-btn fz15 bgls w100" @click="ynh_ser">下一步</a>
				</p>

			</section>

		</section>

      
	</div>
</template>
<script>
    import {
        Toast
    } from 'mint-ui';
    export default {
        data() {
            return {
                czje: "",

            }
        },
        components: {

        },
        methods: {
            ynh_ser(obj) {
                if (!/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/.test(this.czje)) {
                    Toast({
                        message: '金额输入错误',
                        iconClass: 'dx icon-close1 fz30'
                    });
                    return
                }
                if (this.czje < 10) {
                    Toast({
                        message: '提现金额不能小于10元',
                        iconClass: 'dx icon-close1 fz30'
                    });
                    return
                }
                let yinshengwithdraw = {},
                    th = this
                yinshengwithdraw.token = this.token
                yinshengwithdraw.money = this.czje
                this.post("user/yinshengwithdraw", yinshengwithdraw, function(data) {
                    th.hf('tixianxq', data)
                })


            },
            yhk_df_er() { //银行卡输入框离开触发
                let sder_er = this.form.yhk.replace(/\s/g, ""),
                    th = this
                this.post("pay/bankcardcheck", {
                    cardNo: sder_er
                }, function(data) {
                    th.bankcardcheck = data
                })


            }
        },
        mounted() {
            this.Title("提现")
            let th = this

        },
        filters: {
            tixianc(t) {
                return ["每月", '每周', '每天'][t - 1]
            }
        }
    }

    function login_jsonp() {
        alert(222)
    }

</script>
<style scoped>
    input::-webkit-input-placeholder {
        color: #F44336 !important
    }

    input::-moz-input-placeholder {
        color: #F44336 !important
    }



    .dsf_jh_eerx {
        padding: 15px;
    }

    .jgh_jh_sd {
        background: #FFFFFF;
        box-shadow: 0 0px 10px rgba(0, 0, 0, .1);
    }

    .sd_jh_title {
        background: #F7F7F7
    }

    .wei_xin_icon {
        width: 25px;
        height: 25px;
        background-position: -327px -325px;
    }

    .csjh_s_sr {
        border: 0px;
        font-size: 30px;
        line-height: 40px;
        border-bottom: 1px solid #f5f5f5;
        color: #333;
        margin-bottom: 10px;
    }

    .btm {
        border-top: 1px solid #e0e0e0
    }

    .dsf_jhj_der {
        position: absolute;
        left: 0px;
        top: 0px;
    }

    .yinliansdf {
        width: 28px;
    }

    .gouxuan {
        border-radius: 50%;
        width: 18px;
        height: 18px;
        border: 1px solid #e0e0e0;
        position: absolute;
        right: 0px;
        top: 2px;
        text-align: center;
    }

    .gouxuan.aa {
        top: 5px
    }

    .gouxuan.act {
        background: #0076EF;
        border: 1px solid #0076EF;
    }

    .gouxuan i {
        font-size: 13px;
        position: relative;
        bottom: 1px;
        display: none
    }

    .gouxuan.act i {
        display: block;
        color: #fff
    }

    .form_input {
        border: 0px;
        border-bottom: 1px solid #F5F5F5;
        margin: 0 !important;
        text-indent: 0px !important;
        padding: 0px !important;
        font-size: 14px;
        height: 30px;
    }

    .sd_jhh_er_er img {
        width: 105px;
        height: 32px;
        border: 0px !important;
    }

    .sd_jh_det {
        display: block;
        line-height: 32px;
    }

    .sdf_jh_dertx {
        line-height: 1
    }

    .dsf_dr_ert {
        text-indent: 20px;
        padding-left: 10px;
        padding-right: 10px;
    }

</style>
