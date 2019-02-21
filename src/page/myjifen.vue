<template>
	<div>
		<user_top :num="pay_points" :text="'积分'"></user_top>

		<ul class="mui-table-view mt10">
			<li class="mui-table-view-cell" @click="hf('jifenlist',{type:0})">
				<span class="jh_liu_s f_b">
                  <i class="f_i xingbie "></i>
            </span>

				<span class="fz13">积分消费记录</span>

				<i class="f_i right_icons"></i>
			</li>
			<li class="mui-table-view-cell" @click="hf('jifenlist',{type:1})">
				<span class="jh_liu_s f_b">
                  <i class="f_i xingbie ab"></i>
            </span>

				<span class="fz13">积分获取记录</span>

				<i class="f_i right_icons"></i>
			</li>

		</ul>

		<section class="mt10 bgff btm" v-if="false">
			<p class="cen d_jh_title z3">积分使用规则</p>

			<section class="btm pd bgff  btm pm10">
				<p class="pt10 pm10 z3  sd_hjg_derx">
					<span class="pd">兑换说明</span>
				</p>

				<p class="df_jh_dertxc fz12 z3 pd">

					积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则
				</p>

				<p class="pt10 pm10 z3  sd_hjg_derx mt5">
					<span class="pd">积分系统声明</span>
				</p>

				<p class="df_jh_dertxc fz12 z3 pd">

					积分可抵现金，多赚一下回来吧
				</p>

				<section class="pd mt10">
					<p class="fz12 z6"><span class="yj df_jh_derrt">1</span>首单即送20积分</p>
					<p class="fz12 z6"><span class="yj df_jh_derrt">2</span>购买部分商品获赠积分</p>
					<p class="fz12 z6"><span class="yj df_jh_derrt">3</span>一“荐”获积分，即日起，凡推荐一名粉丝关注苍鸟，可获5积分</p>
				</section>

			</section>

		</section>

	</div>
</template>
<script>
	import user_top from "../components/user_top.vue"
       import suspension from "../components/suspension.vue"
	export default {
		data() {
			return {
				pay_points: ''
			}
		},
		components: {
			user_top: user_top,
            suspension
		},
		methods: {

		},
		mounted() {
			this.Title("积分")

			this.pay_points = JSON.parse(localStorage.user).pay_points

		},
	}
</script>
<style scoped>
	.xingbie {
		width: 19px;
		height: 19px;
		background-position: -221px -609px;
	}

	.xingbie.ab {
		width: 19px;
		height: 19px;
		background-position: -273px -610px;
	}

	.sd_hjg_derx span {
		border-left: 3px solid #414651;
		line-height: 1
	}

	.df_jh_dertxc {
		line-height: 17px;
	}

	.df_jh_derrt {
		background: #FFA904;
		color: #fff;
		display: inline-block;
		width: 20px;
		text-align: center;
		line-height: 20px;
		transform: scale(0.8);
		font-size: 14px;
		height: 20px;
		margin-right: 5px;
	}
</style>
