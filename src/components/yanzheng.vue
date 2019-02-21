<!--验证新用户-->
<template>
	<div >
	
                <section class="bgff wd_jh_dr yj4 pr"  v-if="popupVisibleer_e">
                    <span class="yj close_eer" @click="popupVisibleer_e=false;$emit('yc_sd')"><i class="dx icon-close1 cf"></i></span>
                    <p class="cen z3 fz16 ">新用户验证</p>

                    <section class="mui_forw mt10">
                    <p>
                        <input type="tel" placeholder="请输入手机号码"  v-model="form_s.phone">
                    </p>
                    <p class="pr">
                        <input type="text" placeholder="请输入验证码" v-model="form_s.yzm">
                        <button class="mui-btn-red huw_wet" @click="djsh" :class="daoji==60?'':'act'"> <span v-if="daoji==60"> 获取验证码</span>
				<span v-else>{{daoji+"s后重新获取"}}</span></button>
                    </p>
 
                        <p class="mt10">
                            <button class="mui-btn-red w100" @click="bangding_s">立即验证</button>
                            </p>
                           <p class="mt10" v-if="!is_sdf">
                            <button class="bgls  w100" @click="$emit('tijiao')">跳过，立即支付</button>
                            </p>
                    </section>
                </section>
        <p class="dsdf_jh_eetr" v-if="popupVisibleer_e"  @click="popupVisibleer_e=false;$emit('yc_sd')"></p>
    
	</div>
</template>
<script>
    import {
        Toast
    } from 'mint-ui';
    export default {
        props: {
            pher_er: "",
            is_sdf: "",
            is_sdfer: ""
        },
        data() {
            return {
                popupVisibleer_e: true,
                form_s: {
                    phone: "",
                    yzm: ""
                },
                daoji: 60, //倒计时
                jhgg: true,
            }
        },
        components: {

        },
        methods: {
            djsh() {
                if (!this.yazs()) {
                    return
                }

                let th = this
                //                发送短信
                let bindsendsms = {}
                bindsendsms.token = this.token
                bindsendsms.mobile_phone = this.form_s.phone
                this.post("user/bindsendsms", bindsendsms, function(a, b) {

                })

                if (th.jhgg == true) {
                    th.jhgg = false
                    th.daoji--
                        var sdf_wer = setInterval(function() {
                            th.daoji--
                                if (th.daoji < 0) {
                                    th.daoji = 60
                                    th.jhgg = true
                                    clearTimeout(sdf_wer)
                                }
                        }, 1000)
                }

            },
            bangding_s() { //绑定按钮触发
                if (!this.yazs()) {
                    return
                }
                if (!this.form_s.yzm) {
                    Toast('请输入验证码');
                    return
                }
                let bindphone = {},
                    th = this
                bindphone.token = this.token
                bindphone.mobile_phone = this.form_s.phone
                bindphone.phone_code = this.form_s.yzm
                this.post('user/bindphone', bindphone, function(a, b) {
                    Toast({
                        message: b.return_msg,
                        iconClass: 'dx icon-gou fz40'
                    });
                    th.$emit('tijiao')

                })

                console.log("验证完毕")
            },
            yazs() {
                if (!this.form_s.phone) {
                    Toast('请输入手机号');
                    return false
                }
                if (!this.yanza.phone(this.form_s.phone)) {
                    Toast('手机号格式错误');
                    return false
                }
                return true
            }
        },
        mounted() {
            setTimeout(a => {
                this.form_s.phone = this.pher_er
            }, 500);
        },
        watch: {
            is_sdfer: {
                handler: function() {
                   this.popupVisibleer_e=this.is_sdfer
                },
                deep: true
            },
             popupVisibleer_e: {
                handler: function() {
                  if(!this.popupVisibleer_e){
                      this.$emit('yc_sd')
                  }
                },
                deep: true
            }
        }

    }

</script>
<style scoped>
    .wd_jh_dr {
        width: 300px;
        padding: 15px;
        position: absolute;
        left: 0px;
        top: 30%;
        right: 0px;
        z-index: 1001;
        margin: auto;
    }

    .huw_wet {
        position: absolute;
        right: 0px;
        top: 0px;
        height: 40px;
        line-height: 40px;
        padding-top: 0px;
        padding-bottom: 0px;
    }

    .huw_wet.act {
        background: #999 !important;
        border: 1px solid #999 !important;
    }

    .close_eer {
        position: absolute;
        right: -10px;
        top: -10px;
        background: #F94F4F;
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
    }

    .close_eer i {
        font-size: 12px;
    }

    .wd_jh_dr input {
        text-indent: 0px;
    }
    .dsdf_jh_eetr{
        position: fixed;
        left: 0px;
        top: 0px;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 1000%;
        z-index: 1000
    }

</style>
