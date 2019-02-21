<template>
	<div>

		<section class="btm  bgff  d_jh_title">
			<p class="z3 pd" v-if="jinruse!='acc'">
				兑换金额
				<span class="fz18 fr">{{withdrawalsinfo.wallet_money}}</span>
			</p>

			<section class=" bgff pd d_jh_ertxc btm">

				<p class="mui-row fz12 z3">
					申请时间： <span class="z9 fr">{{withdrawalsinfo.add_time|time_s}}</span>
				</p>
				<p class="mui-row fz12 z3">
					持卡人姓名： <span class="z9 fr">{{withdrawalsinfo.card_user}}</span>
				</p>
				<p class="mui-row fz12 z3">
					银行卡号： <span class="z9 fr">{{withdrawalsinfo.bank_card}}</span>
				</p>

				<p class="mui-row fz12 z3">
					兑换单号： <span class="z9 fr">{{withdrawalsinfo.wallet_order_sn}}</span>
				</p>

			</section>

		</section>

		<ul class="mui-table-view mt10">
			<li class="mui-table-view-cell fz14">
				兑换进度 <span class="ml5" v-if="jinruse=='acb'">申请金额有误</span>
			</li>
		</ul>
		<section class=" bgff pd d_jh_ertxc ab pr" :class="withdrawalsinfo.status|jinducl">

			<p class="mui-row fz12 z3 pr">
				<span class="yj jindu_icnsd">1</span> 申请兑换 <span class="z9 fr">{{withdrawalsinfo.add_time|time_s}}</span>
			</p>

			<p class="mui-row fz12 z3 pr">
				<span class="yj jindu_icnsd">2</span> {{withdrawalsinfo.status==0?"商家审核中":'商家审核通过'}}

				<span class="z9 fr" v-if="withdrawalsinfo.status!=0">{{withdrawalsinfo.admin_op_time|time_s}}</span>
			</p>

			<p class="mui-row fz12 z3 pr">
				<span class="yj jindu_icnsd">3</span>
				<span v-if="withdrawalsinfo.status==-1">
                    兑换失败
                    </span>
				<span v-else>
                            {{withdrawalsinfo.status==1?"等待打款":'兑换成功'}}
                    </span>

				<span class="z9 fr" v-if="withdrawalsinfo.status!=1">{{withdrawalsinfo.send_time|time_s}}</span>
			</p>

		</section>

	</div>
</template>
<script>
	export default {
		data() {
			return {
				jindu: 1, //进度
				jinruse: "",
				withdrawalsinfo: ""

			}
		},
		components: {

		},
		methods: {

		},
		mounted() {
			this.Title("兑换详情")
			this.withdrawalsinfo = this.$route.query
		},
		filters: { //过滤器   页面上调用{{dt.state|lei}}
			time_s(t) {
				let time = new Date()
				time.setTime(t * 1000)
				let Year = time.getFullYear(),
					Month = time.getMonth() + 1,
					Data = time.getDate(),
					Hours = time.getHours(),
					Minutes = time.getMinutes()
				return Year + "-" + Month + "-" + Data + " " + Hours + ":" + Minutes
			},
			jinducl(t) {
				if(t == -1) {
					t = 3
				}
				return ["yi", "er", "san", "si"][t]
			}
		}
	}
</script>
<style scoped>
	.sdf_jh_er {
		padding-left: 3px;
		padding-right: 3px
	}

	.df_jh_ser {
		width: 24px;
		height: 24px;
		background-position: -280px -159px;
		background-color: #fff
	}

	.df_jh_ser.act {
		background-position: -244px -158px;
	}

	.df_jh_ser.acb {
		background-position: -326px -560px;
	}

	.dsf_jh_dettx {
		line-height: 1.1;
		margin-top: 2px;
		transform: scale(0.9);
		word-spacing: 30px;
	}

	.dsf_jh_ertx {
		white-space: nowrap;
	}

	.df_h_ertcc {
		overflow: auto;
	}

	.df_h_ertcc .box {
		max-width: 400px;
		margin: auto;
	}

	.s_jh_dert {
		position: absolute;
		left: 0px;
		right: 0px;
		height: 3px;
		width: 72%;
		margin: auto;
		background: #D8D8D8;
		top: 24px;
	}

	.s_jh_dert span {
		display: block;
		float: left;
		height: 100%;
		width: 50%;
		background: #37D680
	}

	.sdf_jh_er.act p {
		color: #37D680;
	}

	.yuy_dr {
		color: #FE7956
	}

	.s_jh_dert.acb span:nth-child(2) {
		background: #FE7956 !important
	}

	.d_jh_ertxc {
		padding-bottom: 5px;
		position: relative
	}

	.d_jh_ertxc.ab {
		padding-top: 20px;
		padding-bottom: 20px;
	}

	.d_jh_ertxc.ab .mui-row {
		padding-left: 40px;
		line-height: 1;
		position: relative;
		margin-bottom: 30px;
	}

	.jindu_icnsd {
		background: #3DCC2B;
		color: #fff;
		position: absolute;
		left: 0px;
		top: -3px;
		width: 20px;
		height: 20px;
		text-align: center;
		line-height: 20px;
	}

	.d_jh_ertxc.ab .mui-row:last-child {
		margin-bottom: 0px;
	}

	.d_jh_ertxc.ab:after {
		content: " ";
		position: absolute;
		left: 20px;
		top: 20px;
		height: 90px;
		z-index: 1;
		border-left: 1px solid #3DCC2B;
	}

	.jindu_sd {
		padding-left: 35px;
		position: absolute;
		left: -25px;
		top: 0px;
		height: 100%;
	}

	.d_jh_ertxc.yi .mui-row:nth-child(3) {
		display: none
	}

	.d_jh_ertxc.yi .mui-row:nth-child(2) .jindu_icnsd {
		background: #DBDBDB
	}

	.d_jh_ertxc.er .mui-row:nth-child(3) .jindu_icnsd {
		background: #DBDBDB
	}

	.d_jh_ertxc.si .mui-row:nth-child(3) .jindu_icnsd {
		background: #F94F4F
	}

	.d_jh_ertxc.yi:after {
		height: 50px;
	}
</style>
