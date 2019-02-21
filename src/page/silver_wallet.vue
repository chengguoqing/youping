<!--我的钱包-->
<template>
	<div>

		<section class="xiaotop_ose cen pr cz_w w100 ">

			<section class="cz_a w100">
 
				<p class="cf fz13 mt5">
					累计银盛钱包收入</p>
				<p class="cf fz30 mt10">
					{{mywallet_data.money||'0'|baoliu}}
				</p>
				<p class="cf mt15 fz12 pm40">
                    &nbsp;
<!--					昨日银盛钱包收入： {{mywallet_data.yesterday_commissions||'0'|baoliu }}-->
				</p>

			</section>
			<section class="kh_kihj_qian mui-row">
				<section class="mui-col-xs-6 sdf_jh_d_dsr ">
					<p class="cf fz12 ">可提银盛钱包收入</p>
					<p class="cf fz15">
						{{mywallet_data.can_money||'0'|baoliu }}
					</p>
				</section>
<!--
				<section class="mui-col-xs-4 sdf_jh_d_dsr ">
					<p class="cf fz12 ">待可提魅币</p>
					<p class="cf fz15">
						{{(mywallet_data.used_money)||'0'|baoliu }}
					</p>
				</section>
-->

				<section class="mui-col-xs-6 sdf_jh_d_dsr ">
					<p class="cf fz12 ">已提银盛钱包收入</p>
					<p class="cf fz15">
						{{mywallet_data.count_commissions||'0'|baoliu }}
					</p>
				</section>

			</section>

			<bolang></bolang>
		</section>

		<ul class="mui-table-view mt10">
<!--
			<li class="mui-table-view-cell" @click="hf('shourujl')">
				<span class="jh_liu_s f_b">
                  <i class="f_i xingbie "></i>
            </span>

				<span class="fz13">金额变动明细</span>

				<i class="f_i right_icons"></i>
			</li>
-->
			<li class="mui-table-view-cell" @click="hf('tixianjilu',{type:2})">
				<span class="jh_liu_s f_b">
                  <i class="f_i xingbie ab"></i>
            </span>

				<span class="fz13">提现记录</span>

				<i class="f_i right_icons"></i>
			</li>

		</ul>




		<p class="pd baocun_btn mt20">
			<a class="mui-btn bgls w100 fz16" @click="hf('tixian_ys')">提现</a>
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
			this.post("user/yinshengmoney", mywallet, function(data) {
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
        position: fixed;
        bottom: 40px;
    }
</style>
