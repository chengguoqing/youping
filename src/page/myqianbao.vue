<!--我的钱包-->
<template>
	<div>

		<section class="xiaotop_ose cen pr cz_w w100 ">

			<section class="cz_a w100">

				<p class="cf fz13 mt5">
					累计收入魅币
				</p>
				<p class="cf fz30 mt10">
					{{mywallet_data.total_commissions||'0'|baoliu}}
				</p>
				<p class="cf mt15 fz12 pm40">
					昨日收入魅币： {{mywallet_data.yesterday_commissions||'0'|baoliu }}
				</p>

			</section>
			<section class="kh_kihj_qian mui-row">
				<section class="mui-col-xs-6 sdf_jh_d_dsr ">
					<p class="cf fz12 ">可提魅币</p>
					<p class="cf fz15">
						{{mywallet_data.count_un_commissions||'0'|baoliu }}
					</p>
				</section>
<!--
				<section class="mui-col-xs-4 sdf_jh_d_dsr ">
					<p class="cf fz12 ">待可提魅币</p>
					<p class="cf fz15">
						{{(mywallet_data.commission_wait)||'0'|baoliu }}
					</p>
				</section>
-->

				<section class="mui-col-xs-6 sdf_jh_d_dsr ">
					<p class="cf fz12 ">已提魅币</p>
					<p class="cf fz15">
						{{mywallet_data.count_commissions||'0'|baoliu }}
					</p>
				</section>

			</section>

			<bolang></bolang>
		</section>

		<ul class="mui-table-view mt10">
			<li class="mui-table-view-cell" @click="hf('shourujl')">
				<span class="jh_liu_s f_b">
                  <i class="f_i xingbie "></i>
            </span>

				<span class="fz13">金额变动明细</span>

				<i class="f_i right_icons"></i>
			</li>
			<li class="mui-table-view-cell" @click="hf('tixianjilu')">
				<span class="jh_liu_s f_b">
                  <i class="f_i xingbie ab"></i>
            </span>

				<span class="fz13">兑换记录</span>

				<i class="f_i right_icons"></i>
			</li>

		</ul>


		<section class="btm pd bgff mt10 btm pm10">
			<p class="pt10 pm10 z3  sd_hjg_derx">
				<span class="pd">兑换说明</span>
			</p>

			<section class="df_jh_dertxc fz12 z3 pd" v-html="mywallet_data.illustrate"> 

			</section>
			
		</section>
        
        <section class="btm pd bgff mt10 btm pm10 ">
            	<p class="pt10 pm10 z3  sd_hjg_derx">
				<span class="pd">
兑换步骤</span>
			</p>
            <img src="https://mall.cangniaowl.com/static_youpin/img/buzou.png?v=102" class="w100">
            
    </section>


		<p class="pd baocun_btn mt20">
			<a class="mui-btn bgls w100 fz16" @click="hf('tixian')">兑换</a>
		</p>

	</div>
</template>
<script>
	import bolang from "../components/bolang.vue"
     import suspension from "../components/suspension.vue"
	export default {
		data() {
			return {
				mywallet_data: ""
			}
		},
		components: {
			bolang: bolang,
            suspension
		},
		methods: {

		},
		mounted() {
			this.Title("我的钱包")
			let mywallet = {},
				th = this
			mywallet.token = this.token
			this.post("user/mywallet", mywallet, function(data) {
				th.mywallet_data = data
			})
		},
		filters: { //过滤器   页面上调用{{dt.state|lei}}
			baoliu(num) {
				return parseFloat(num).toFixed(2)
			}
		}

	}
</script>
<style scoped>
	.xiaotop_ose {
		background: #0076EF;
		height: 12.4rem
	}

	.kh_kihj_qian {
		position: absolute;
		left: 0px;
		bottom: 7px;
		width: 100%
	}

	.sdf_jh_d_dsr {
		line-height: 1.4;
		border-right: 1px solid #50AEFA
	}

	.sdf_jh_d_dsr:last-child {
		border: 0px;
	}

	.xingbie {
		width: 18px;
		height: 22px;
		background-position: -147px -386px;
	}

	.xingbie.ab {
		width: 17px;
		height: 17px;
		background-position: -176px -391px;
	}

	.sd_hjg_derx span {
		border-left: 3px solid #414651;
		line-height: 1
	}

	.df_jh_dertxc {
		line-height: 17px;
	}
    .baocun_btn{
        position: relative;
        top: 0px;
    }
</style>
