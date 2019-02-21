<!--我的地址-->
<template>
	<div>
		<section v-if="address_dta.length>0">
                      <section  class="pm100">
			<section class="pd pt10  bgff  mui-row pr mb10" v-for="(md,idx) in address_dta">
				<section class="mui-row">
					<p class="dian mui-col-xs-8 z3">
						{{md.consignee}} <span class="ml20">{{md.mobile}}</span>
					</p>

				</section>
				<p class="mt5 fz12">
					收货地址：{{md.province_name+"-"+md.city_name+"-"+md.district_name+md.address}}
				</p>
				<section class="btm mt5 pt5 pm5 mui-row">
					<span class="dsf_jhsd yj cz " :class="md.is_default==1?'act':''" @click="df_jh(idx,md.address_id)">
                        <i class="dx icon-gou fz12 "></i>
                    </span> 
					<span class="fz12 ml5">默认地址</span>
					<section class="fr">
						<span class="fz12" @click="hf('add_dizhi',{data:md})">
        <i class="dx icon-bianji cz mr5 "> </i>编辑
        </span>

						<span class="fz12 ml20" @click="delec(idx,md.address_id)">
        <i class="dx icon-lajixiang cz mr5"> </i>删除
        </span>
					</section>

				</section>

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
				address_dta: [],
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
			df_jh(idx, address_id) {
				let th = this,
					saveaddresss = {}
				saveaddresss.token = this.token
				saveaddresss.is_default = 1
				saveaddresss.address_id = address_id
				this.post("user/saveaddresss", saveaddresss, function(data) {
					console.log(data);
				})

				this.address_dta.map(a => {
					a.is_default = 0
				})
				this.address_dta[idx].is_default = 1
			},
			delec(idx, address_id) {
				let th = this
				MessageBox.confirm('确定删除吗?').then(action => {
					if(action) {
						let removeaddresss = {}
						removeaddresss.token = this.token
						removeaddresss.address_id = address_id
						this.post("user/removeaddresss", removeaddresss, function(data) {
							th.address_dta.splice(idx, 1)
						})

					}
				});
			},

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

    .sdf_jh_eetrx {
        background: #fff !important;
        bottom: 0px;
        padding-bottom: 40px;
        padding-top: 10px;
    }

    .pm100 {
        padding-bottom: 100px
    }

</style>
