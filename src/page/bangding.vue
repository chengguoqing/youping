<!--绑定手机-->
<template>
	<div>

		<form class="mui-input-group fz14 df_ihg_de">
			<div class="mui-input-row">
				<label>手机号</label>
				<input type="text" class="mui-input-clear fz14" placeholder="+86" v-model="form_s.phone">
			</div>
			<div class="mui-input-row pr">
				<label>验证码</label>
				<input type="text" class="mui-input-clear fz14" placeholder="请输入验证码" v-model="form_s.yzm">
				<span class="yj4 fz12 huoqu_ssd" @click="djsh" :class="daoji==60?'':'act'">
                <span v-if="daoji==60"> 获取验证码</span>
				<span v-else>{{daoji+"s后重新获取"}}</span>

				</span>
			</div>

			<p class="pd pm20 mt40">
				<a class="mui-btn bgls fz15 w100" @click="bangding_s">完成绑定</a>
			</p>
		</form>
	</div>
</template>
<script>
	import {
		Toast
	} from 'mint-ui';
	export default {
		data() {
			return {
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
				if(!this.yazs()) {
					return
				}

				let th = this
				//                发送短信
				let bindsendsms = {}
				bindsendsms.token = this.token
				bindsendsms.mobile_phone = this.form_s.phone
				this.post("user/bindsendsms", bindsendsms, function(a, b) {

				})

				if(th.jhgg == true) {
					th.jhgg = false
					th.daoji--
						var sdf_wer = setInterval(function() {
							th.daoji--
								if(th.daoji < 0) {
									th.daoji = 60
									th.jhgg = true
									clearTimeout(sdf_wer)
								}
						}, 1000)
				}

			},
			bangding_s() { //绑定按钮触发
				if(!this.yazs()) {
					return
				}
				if(!this.form_s.yzm) {
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
					th.hf("user")

				})

				console.log("验证完毕")
			},
			yazs() {
				if(!this.form_s.phone) {
					Toast('请输入手机号');
					return false
				}
				if(!this.yanza.phone(this.form_s.phone)) {
					Toast('手机号格式错误');
					return false
				}
				return true
			}
		},
		mounted() {
			this.Title("绑定手机")
			if(this.$route.query.mobile_phone) {
				this.form_s.phone = this.$route.query.mobile_phone
			}
		},
	}
</script>
<style scoped>
	.df_ihg_de input {
		position: relative;
		bottom: 1px;
	}

	.huoqu_ssd {
		position: absolute;
		right: 10px;
		top: 9px;
		border: 1px solid #0076EF;
		color: #0076EF;
		padding: 2px 8px 1px 8px;
	}

	.huoqu_ssd.act {
		color: #999;
		border: 1px solid #999
	}

	.mui-input-group .mui-input-row {
		height: 45px;
		padding-top: 5px;
	}
</style>
