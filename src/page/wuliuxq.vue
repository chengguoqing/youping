<template>
	<div>
		<ul class="wulist_s">
			<li class="pd  bgff pt5 pm5 mb10 bbm">

				<section class="mui-row mt5">
					<img :src="goods_list_img" class="fen_sdf_ertx fl">
					<section class="ov pl10 wulj_dsd_sr fz13">
                        	物流公司：<span >{{logistics.shipping_name}}</span><br>
						物流状态：<span class="red">{{logistics.delivery_message}}</span><br> 订单编号：
						<span class="z9">{{logistics.order_sn}}</span><br> 运单编号：
						<span class="z9">{{logistics.express_sn}}</span>
					</section>

					<section class=""></section>
				</section>
			</li>
		</ul>

		<section class="mt10 btm pd bgff">
			<p class="d_jh_title z9">
				物流跟踪
			</p>
			<section class="btm wuliu_list pr">

				<ul>

					<li class="pt10 pm10 bbm" v-for="dl in  logistics.delivery_detail">
						<p class="henxian_sdf"></p>
						<i class="f_i dianewre_uye"></i>
						<p class="fz14 dsf_jh_detx">
							{{dl.AcceptStation}}
						</p>
						<p class="fz12">
							{{dl.AcceptTime}}
						</p>
					</li>
				</ul>

			</section>
		</section> 

	</div>
</template>
<script>
	export default {
		data() {
			return {
				orderlist_data: "",
				goods_list_img: "",
				logistics: ""
			}
		},
		components: {

		},
		methods: {

		},
		mounted() { 
			this.Title("物流详情")

			let logistics = {},
				th = this,
                type_s=this.$route.query.type//0列表  1是售后物流
			this.orderlist_data = this.$route.query.orderlist_data
			this.goods_list_img = this.$route.query.orderlist_data
			logistics.token = this.token
			logistics.order_id = this.$route.query.order_id
            let url_sd="user/logistics"
            if(type_s==1){
                url_sd="customer/logistics"
            }
			this.post(url_sd, logistics, function(data) {
				th.logistics = data
			})


		},
	}
</script>
<style scoped>
	.wulj_dsd_sr {
		line-height: 18px;
	}

	.wulist_s li {
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0);
	}

	.wuliu_list {
		padding-left: 30px;
	}

	.wuliu_list li {
		position: relative;
	}

	.wuliu_list li:last-child .henxian_sdf {
		display: none
	}

	.dsf_jh_detx {
		line-height: 1.4
	}

	.henxian_sdf {
		position: absolute;
		left: -15px;
		top: 15px;
		width: 1px;
		height: 100%;
		background: #CCCCCC
	}

	.dianewre_uye {
		width: 9px;
		height: 9px;
		background-position: -307px -249px;
		position: absolute;
		left: -19px;
		top: 14px;
	}

	.wuliu_list li:first-child .dsf_jh_detx {
		color: #333 !important
	}

	.wuliu_list li:first-child .dianewre_uye {
		width: 17px;
		height: 17px;
		background-position: -277px -244px;
		left: -23px;
		top: 12px;
	}
</style>
