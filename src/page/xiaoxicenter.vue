<!--消息中心-->
<template>
	<div>
		<user_top></user_top>

		<section class="xiaoy_tapsd">
			<mt-navbar v-model="selected">
				<mt-tab-item id="1">交易物流</mt-tab-item>
				<mt-tab-item id="2">通知中心</mt-tab-item>
				<mt-tab-item id="3">系统公告</mt-tab-item>
			</mt-navbar>
		</section>

		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">

				<section class="pd pt10 pm10" v-if="false">
					<ul class="wulist_s">
						<li class="pd yj4 bgff pt10 pm5 mb10" v-for="sdf in 8" @click="hf('wuliuxq')">
							<p class="z3 fz14">
								订单已发货
								<span class="fz12 z9 fr">2017-11-8 10:32:02</span>
							</p>
							<section class="mui-row mt5">
								<img src="http://mall.cangniaowl.com/static/img/daifukuang.jpg" class="fen_sdf_ertx fl">
								<section class="ov pl10">
									<p class="z3 fz13 sd_jh_derx dianer">您的订单（12017110709163780735 ）已于2017- 11-6 15:21:23被签收</p>
									<p class="fz12">
										运单编号：201569481
									</p>
								</section>

								<section class=""></section>
							</section>
						</li>
					</ul>

				</section>

				<kongbai v-else :kb="kb" @ziding='$router.back(-1)'></kongbai>

			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<section class="pd pt10 pm10" v-if="false">
					<ul class="wulist_s  ">
						<li class="pd yj4 bgff pt10 pm10 mb10 mui-row" v-for="sdf in 8" @click="hf('gonggaoxq')">
							<i class="f_i laba_icons cz fl"></i>
							<section class="ov  pl10">
								<section class="mui-row">
									<p class="dian mui-col-xs-7  fz14 z3">
										收藏商品降价
									</p>
									<p class="fz12 dian mui-col-xs-5 tr">
										2017-11-6 15:33:48
									</p>
								</section>
								<p class="fz12 z9 sd_jhdsrtx">

									您收藏的商品已降价650.00元，立即查看。
								</p>
							</section>
						</li>
						<li class="pd yj4 bgff pt10 pm10 mb10 mui-row" @click="hf('gonggaoxq')">
							<i class="f_i laba_icons cz fl"></i>
							<section class="ov  pl10">
								<section class="mui-row">
									<p class="dian mui-col-xs-7  fz14 z3">
										收藏商品降价
									</p>
									<p class="fz12 dian mui-col-xs-5 tr">
										2017-11-6 15:33:48
									</p>
								</section>
								<p class="fz12 z9 sd_jhdsrtx">

									您收藏的商品已降价650.00元，立即查看。 您收藏的商品已降价650.00元，立即查看立即查看立立 即查看立即查看立立即查看立即查看即查看立即查看立 立即查看立即查
								</p>
							</section>
						</li>
					</ul>

				</section>
				<kongbai v-else :kb="kb" @ziding='$router.back(-1)'></kongbai>
			</mt-tab-container-item>
			<mt-tab-container-item id="3">

				<section class="pd pt10 pm10" v-if="false">
					<ul class="wulist_s">
						<li class="pd yj4 bgff pt10 pm10 mb10" v-for="sdf in 8" @click="hf('gonggaoxq')">
							<p class="z3 fz14">
								网站新功能更新
								<span class="fz12 z9 fr">2017-11-8 10:32:02</span>
							</p>
							<section class="mui-row mt5">
								<img src="http://mall.cangniaowl.com/static/img/daifukuang.jpg" class="fen_sdf_ertx fl">
								<section class="ov pl10">
									<p class="fz12 z3 sd_jhdsrtx">
										为了获取更多的粉丝关注，企业势必要尝试各种推广，但如果获取的不是精准和有效用户群体，那么不论是线下扫街的增粉方式还是线上付费的各种推广，都是在大海捞针。一方面是拓粉覆盖面积不够大为了获取更多的粉丝关注，企业势必要尝试各种推广如果获取的不是精准和有效用户群体 线下扫街的增粉方式还是线上付费的各种推广
									</p>

								</section>

							</section>
						</li>
					</ul>

				</section>
				<kongbai v-else :kb="kb" @ziding='$router.back(-1)'></kongbai>

			</mt-tab-container-item>
		</mt-tab-container>

	</div>
</template>
<script>
	import user_top from "../components/user_top.vue"
	import kongbai from "../components/kongbai.vue"
	export default {
		data() {
			return {
				selected: "1",
				kb: {
					icom: "dsf_hss_sd",
					msg: "没有更多数据了",
					btn_name: "返回上一页",
					btn_url: "-1"
				}
			}
		},
		components: {
			user_top: user_top,
			kongbai: kongbai
		},
		methods: {

		},
		mounted() {
			window.scrollTo(0, 0);
			this.Title("消息中心")
		},
	}
</script>
<style scoped>
	.xiaoy_tapsd {
		position: sticky !important;
		top: 0px;
		z-index: 100;
	}

	.xiaotop_ose {
		background: #0076EF;
		padding-top: 30px;
		padding-bottom: 40px;
	}

	.laba_icons {
		width: 41px;
		height: 40px;
		background-position: -164px -298px;
	}

	.sd_jhdsrtx {
		line-height: 16px;
	}
</style>
