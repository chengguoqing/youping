<!--提现-->
<template>
	<div class="dsf_jh_eerx">
		<section class="jgh_jh_sd">
			<section class="sd_jh_title pd pt15">
				<span class="fz15 z6 fl">提现到账</span>

				<section class="ov pl20"> 
<!--
					<div class="pr sdf_jh_dertx">
						<i class="f_i wei_xin_icon"></i>
						<span class="fz12 z3 ml5">提现到微信零钱</span>
                        <p class="fz12 z9 ml40">*敬请期待*</p>
						<span class="gouxuan aa" :class="tixianlei==0?'act':''"><i class="dx icon-gou cz"></i> </span>
					</div>
-->
					<p class="   pm10 pr" @click="tixianlei=1">
						<img src="http://mall.cangniaowl.com/static/img/yinlian.png" class="yinliansdf cz">
						<span class="fz12 z3 ml5">提现到银行卡</span>
<!--						<span class="gouxuan" :class="tixianlei==1?'act':''"><i class="dx icon-gou cz"></i></span>-->
					</p>
				</section> 
 
			</section>

			<section class="pd pt10">

				<section v-if="tixianlei==1">
					<p class="mt10">持卡人姓名</p>
					<p>
						<input type="text" class="form_input" v-model="form.name">
					</p>
                    	<p class="mt10">持卡人身份证</p>
					<p>
						<input type="text" class="form_input" v-model="form.shengfen">
					</p>

					<p class="mt15">银行卡号</p>
					<p>
						<input type="tel" class="form_input" v-model="form.yhk" @input="geshihua" maxlength="24" @blur="yhk_df_er">
					</p>
                    <p class="mt15">开户支行</p>
					<p>
						<input type="text" class="form_input"  v-model="form.kaihuzh" placeholder="【必填：XX银行XX支行】" >
					</p>
                    
            <section class="bbm pt5 pm5 sd_jhh_er_er" v-if="bankcardcheck">
                <img :src="bankcardcheck.bank_logo" class="cz" v-if="bankcardcheck.bank_logo">
                <span v-else class="fz12 z9 sd_jh_det">无法识别银行卡所属银行</span>
    </section>


				</section>

				<p class="fz14 mt15">
					提现金额
				</p>

				<p class="mt5 pr">
					<span class="z3 dsf_jhj_der">  ￥</span>
					<input type="number" class="csjh_s_sr " placeholder="" v-model="czje">

				</p>

				<p class=" z9 fz12">
					可提现金额：{{withdraw.count_un_commissions}}元<br> 可提现范围：{{withdraw.money_min}}-{{withdraw.money_max}} 元<br> 可提现次数：  <span v-if="withdraw.way!=2">{{withdraw.already_times}}/{{withdraw.times}}>{{withdraw.already_times}}/{{withdraw.times}} 次 ({{withdraw.frequency|tixianc}})
                        </span>
                    <span v-else>
                        {{withdraw.week_day_str}}
                    </span>
				</p>

				<p class="pm20 mt30">
					<a class="mui-btn fz15 bgls w100" @click="ynh_ser">下一步</a>
				</p>

			</section>

		</section>

        
        <section class="red fz14 mt10 dsf_dr_ert">
    请仔细检查您的银行卡持卡人姓名，开户支行信息，此信息填写错误会导致提现被退回。退回后工作人员需5个工作日再次审核提交。正确的填写方式：**银行**支行，示例中国银行广州南山支行
            
            
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
                tixianlei: 1, //提现类型 0微信 1银行卡
                form: {
                    name: "", //持卡份姓名
                    yhk: "", //银行卡
                    shengfen: "", //身份证
                    kaihuzh: "" //开户支行
                },
                withdraw: "", //可提现信息
                bankcardcheck: "" //银行卡信息
            }
        },
        components: {

        },
        methods: {
            geshihua() { //格式化银行卡格式
                this.form.yhk = this.form.yhk.replace(/[^\d]/g, '').replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, "$1 ")
                console.log();
            },
            ynh_ser(obj) {
                if (this.tixianlei == 1) {
                    if (!this.form.name) {
                        Toast({
                            message: '请输入持卡人姓名',
                            iconClass: 'dx icon-close1 fz30'
                        });
                        return
                    }
                    if (!this.yanza.car_t(this.form.shengfen) && this.form.shengfen) {
                        Toast({
                            message: '身份证号码输入错误',
                            iconClass: 'dx icon-close1 fz30'
                        });
                        return
                    }
                    if (!this.form.yhk) {
                        Toast({
                            message: '请输入银行卡',
                            iconClass: 'dx icon-close1 fz30'
                        });
                        return
                    }

                }

                if (!this.form.kaihuzh) {
                    Toast({
                        message: '请输入开户支行',
                        iconClass: 'dx icon-close1 fz30'
                    });
                    return
                }



                if (!/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/.test(this.czje)) {
                    Toast({
                        message: '金额输入错误',
                        iconClass: 'dx icon-close1 fz30'
                    });
                    return
                }



                let addWithdraw = {},
                    th = this
                addWithdraw.token = this.token
                addWithdraw.money = this.czje

                addWithdraw.wallet_money_type = this.tixianlei + 1
                if (this.tixianlei == 1) {
                    addWithdraw.card_user = this.form.name
                    addWithdraw.bank_card = this.form.yhk
                    addWithdraw.id_card = this.form.shengfen
                    addWithdraw.bank_name = this.form.kaihuzh
                }
                this.post("user/addWithdraw", addWithdraw, function(data) {
                    th.hf('tixianxq', data)
                }, '', function(data) {
                    console.log(data);
                    Toast({
                        message: data.return_msg,
                        iconClass: 'dx icon-close1 fz30'
                    });
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
            this.post("user/withdraw", {
                token: this.token
            }, function(data) {
                th.withdraw = data
                th.form.name = data.card_user
                th.form.yhk = data.bank_card
                th.form.kaihuzh = data.bank_name
                th.form.shengfen = data.id_card
            })
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
        color: #F44336  !important
    }

    input::-moz-input-placeholder {
        color: #F44336  !important
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
