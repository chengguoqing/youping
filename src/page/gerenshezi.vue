<template> 
	<div class="ds_kh_tieer">
		<user_top :user_info="user_info"></user_top>

		<ul class="mui-table-view mt5">
			<li class="mui-table-view-cell" @click="popupVisible=true">
				<span class="jh_liu_s f_b">
                  <i class="f_i xingbie"></i>
            </span>

				<span class="fz13">性别</span>

				<span class="shenghri_w z9 fz13">{{user_info.gender}}</span>
				<i class="f_i right_icons"></i>
			</li>

		</ul>

		<ul class="mui-table-view mt10">

			<li class="mui-table-view-cell" @click="open('picker1')">
				<span class="jh_liu_s f_b">
                  <i class="f_i xingbie ab"></i>
            </span>

				<span class="fz13">生日</span>
				<span class="shenghri_w z9 fz13">{{user_info.birthday|data_zh}}</span>
				<i class="f_i right_icons"></i>
			</li>
		</ul>

		<ul class="mui-table-view mt10">
			<li class="mui-table-view-cell" @click="hf('bangding',{mobile_phone:user_info.mobile_phone})">
				<span class="jh_liu_s f_b">
                  <i class="f_i xingbie ac"></i>
            </span>

				<span class="fz13">绑定的手机</span>
				<span class="shenghri_w z9 fz13">{{user_info.mobile_phone}}</span>
				<i class="f_i right_icons"></i>
			</li>

		</ul>

		<ul class="mui-table-view mt10">
			<li class="mui-table-view-cell" @click="hf('mydizi')">
				<span class="jh_liu_s f_b">
                  <i class="f_i xingbie ad"></i>
            </span>

				<span class="fz13">管理收货地址</span>

				<i class="f_i right_icons"></i>
			</li>

		</ul>

		<p class="pd baocun_btn">
			<a class="mui-btn bgls w100 fz16" @click="baocun">保存</a>
		</p>

		<mt-datetime-picker ref="picker1" v-model="value" type="date" :startDate="startDate" :confirmText="'完成'" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" @confirm="handleChange">
		</mt-datetime-picker>

		<danselect :popupVisible="popupVisible" @close="popupVisible=false" @sex="getsex" :data_r="['男','女']"></danselect>
	</div>
</template>
<script>
	import user_top from "../components/user_top.vue"
	import danselect from "../components/danselect.vue"
	import {
		Toast
	} from 'mint-ui';
	export default {
		data() {
			return {
				user_info: "",
				popupVisible: false,
				startDate: new Date('1980/1/1'),
				value: "1980/1/1",
				shengri: "1980/1/1"
			}
		},
		components: {
			user_top: user_top,
			danselect: danselect
		},
		methods: {
			open(picker) {
				this.$refs[picker].open();
			},

			handleChange(value) {
				var sd_htger = new Date(value)

				this.user_info.birthday = sd_htger.getFullYear() + "/" + (sd_htger.getMonth() + 1) + "/" + sd_htger.getDate()
			},
			getsex(data) {
				this.user_info.gender = data
				this.popupVisible = false
			},
			baocun() { //保存按钮触发
				let updateprofile = {}
				updateprofile.token = this.token
				updateprofile.sex = this.user_info.gender == "男" ? 1 : 2
				updateprofile.birthday = this.user_info.birthday.replace('///g', '-')
				let user_od = JSON.parse(localStorage.user)
				user_od.gender = this.user_info.gender
				user_od.birthday = this.user_info.birthday.replace('///g', '-')
				this.setuser_info(user_od)

				this.post("user/updateprofile", updateprofile, function(data, dataer) {
					console.log(dataer);
					Toast({
						message: dataer.return_msg,
						iconClass: 'dx icon-gou fz40'
					});
				})

			}

		},
		mounted() {
			this.Title("个人设置")
			this.user_info = JSON.parse(localStorage.user)

		},
		filters: { //过滤器   页面上调用{{dt.state|lei}}
			data_zh(time) {
				if(!time) {
					return
				}
				let time_sd = time.replace(/-/g, '/')
				return time_sd
			}
		}
	}
</script>
<style scoped>
	.mui-table-view:before,
	.mui-table-view:after {
		background-color: #e0e0e0;
	}

	.xingbie {
		width: 16px;
		height: 14px;
		background-position: -147px -355px;
	}

	.xingbie.ab {
		width: 16px;
		height: 15px;
		background-position: -181px -353px;
	}

	.xingbie.ac {
		width: 13px;
		height: 18px;
		background-position: -214px -351px
	}

	.xingbie.ad {
		width: 15px;
		height: 17px;
		background-position: -240px -352px
	}
</style>
