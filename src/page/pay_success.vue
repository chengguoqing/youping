<!--支付完成-->
<template>
	<div> 
		<section class="bgff pm20">
			<p class="cen pt50">
				<i class="dx icon-gou1 ls_er fz50"></i>
			</p>
			<p class="fz20 cen mt20 ls_er">
				支付成功
			</p>


			<section class="mt30 btm bbm pt10 pm5">
				<p class="fz12 df_er_g_er pd">
					订单编号：{{xq_sdd.order_sn}}<br>
<!--                    支付方式:{{xq_sdd.sd_er}}-->
					<br> 支付金额：
					<span class="red">￥{{xq_sdd.order_amount}}</span>
				</p>
			</section>


			<p class="mt10 cen red fz14 b">
				关注本商城公众号获取订单信息
			</p>

			<section class="qc_imgh mt5">
				<span class="pr f_b">
            <img :src="$store.state.shopinfo.wei_qr_code2" class="qc_erwed">
        <img :src="$store.state.shopinfo.shop_logo" class="logo_dertc">
    </span>

				<p class=" cen fz12">
					长按二维码关注
				</p>

			</section>

		</section>

		<section>
			<p class="mt40 cen ">
				<mt-button type="primary" class="fz14" @click="hf('order_form',{type:2,types:1})">查看订单</mt-button>
				<mt-button type="default" class="ml20 fz14" @click="hf('')">返回首页</mt-button>
			</p>

		</section>

	</div>
</template>
<script>
	export default {
		data() {
			return {
				xq_sdd: "",
				shopinfo_p: ""
			}
		},
		components: {

		},
		methods: {

		},
		mounted() {
			this.Title("苍鸟")
			this.xq_sdd = this.$route.query
			let th = this
		},
	}
</script>
<style scoped>
	.qc_imgh {
		width: 180px;
		background: #F7F7F7;
		padding: 4px;
		margin: auto;
		padding-bottom: 2px;
	}

	.qc_erwed {
		width: 100%;
		height: 180px;
	}

	.df_er_g_er {
		line-height: 2
	}

	.ls_er {
		color: #17B279
	}

	.logo_dertc {
		width: 30px;
		height: 30px;
		position: absolute;
		left: 0px;
		top: 0px;
		right: 0px;
		bottom: 0px;
		margin: auto;
	}
</style>
