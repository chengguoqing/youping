<!--我的余额-->
<template>
	<div>
		<section class="xiaotop_ose cen pr cz_w w100 ">

			<section class="cz_a w100">

				<p class="cf fz13 mt5">
					当前余额
				</p>
				<p class="cf fz30 mt10">
					{{userinfo.user_money}}
				</p>

			</section>
			<bolang></bolang>
		</section>

		<ul class="mui-table-view mt10">
			<li class="mui-table-view-cell" @click="hf('yuermingxi')">
				<span class="jh_liu_s f_b">
                  <i class="f_i xingbie "></i>
            </span>

				<span class="fz13">余额明细</span>

				<i class="f_i right_icons"></i>
			</li>

		</ul>

<!--
		<p class="pd baocun_btn">
			<a class="mui-btn bgls w100 fz16" @click="hf('chongzhi')">充值</a>
		</p>
-->

	</div>
</template>
<script>
	import bolang from "../components/bolang.vue"
       import suspension from "../components/suspension.vue"
	export default {
		data() {
			return {
				user_money: "",
                userinfo:""
			}
		},
		components: {
			bolang: bolang,
            suspension
		},
		methods: {

		},
		mounted() {
			this.user_money = this.$route.query.user_money
			this.Title("我的余额")
            let userinfo={},
                th=this
            userinfo.token=this.token
            this.post("user/userinfo",userinfo,function(data){
                th.userinfo=data
            })
		},
	}
</script>
<style scoped>
	.xiaotop_ose {
		background: #0076EF;
		height: 12.4rem
	}

	.xingbie {
		width: 23px;
		height: 19px;
		background-position: -296px -355px;
	}
</style>
