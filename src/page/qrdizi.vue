<!--我的地址-->
<template>
	<div>
		<section v-if="true">
			<section class="pd pt10  bgff  mui-row pr mb10 pm5" v-for="(md,idx) in address_dta" @click="user_dian(md)">
				<section class="ov pl10 mui-row pr ">
					<section class="mui-row">
						<p class="dian mui-col-xs-8 z3 pr">
							{{md.consignee}} <span class="ml20">{{md.mobile}}</span>

						</p>
						<span class="fz12 dsdkj_ddt" v-if="md.is_default==1">默认地址</span>
					</section>
					<p class="mt5 fz12">
						收货地址：{{md.province_name+"-"+md.city_name+"-"+md.district_name+md.address}}
					</p>
				</section>
			</section>

			<p class="pd sdf_jh_eetrx" @click="hf('add_dizhi')">
				<a class="mui-btn bgls w100 fz16 l40">新增收货地址</a>
			</p>

		</section>

		<!--        没有地址-->
		<kongbai :kb="kb" v-else></kongbai>

	</div>
</template>
<script>
	import {
		MessageBox
	} from 'mint-ui';
	import kongbai from "../components/kongbai.vue"
	export default {
		data() {
			return {
				address_dta: "",

				kb: {
					icom: "dsf_jh_er",
					msg: "  你还没有设置收货地址，请先设置收货地址",
					btn_name: "去设置",
					btn_url: "add_dizhi"
				}
			}
		},
		components: {
			kongbai: kongbai
		},
		methods: {
			df_jh(idx) {
				this.mydizd.map(function(a) {
					a.moren = false
				})
				this.mydizd[idx].moren = true
			},
			delec(idx) {
				MessageBox.confirm('确定删除吗?').then(action => {
					if(action) {
						this.mydizd.splice(idx, 1)
					}
				});
			},
			user_dian(c_data) { //列表点击
				let que_er = this.$route.query
				que_er.consignee = c_data.consignee
				que_er.mobile = c_data.mobile
				que_er.province_name = c_data.province_name
				que_er.city_name = c_data.city_name
				que_er.district_name = c_data.district_name
				que_er.address = c_data.address
				que_er.address_id = c_data.address_id
				this.hf('order_formqueren', que_er)
			}
		},
		mounted() {
			this.Title("我的地址")
			let address = {},
				th = this
			address.token = this.token
			this.post("user/address", address, function(data) {
				th.address_dta = data

			})
		},
	}
</script>
<style scoped>
	.dsf_jhsd {
		width: 16px;
		height: 16px;
		line-height: 17px;
	}

	.df_jh_cfert {
		position: absolute;
		right: 5px;
		padding-left: 10px;
		line-height: 30px;
		top: 25px;
		z-index: 1000
	}

	.dsdkj_ddt {
		border: 1px solid #0076EF;
		color: #0076EF;
		padding: 0px 6px;
		line-height: 1;
		height: 22px;
		line-height: 22px;
		border-radius: 4px;
		position: absolute;
		transform: scale(0.8)
	}
</style>
