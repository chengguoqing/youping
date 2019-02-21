<!--客户详情-->
<template>
	<div class="ds_kh_tieer">
		<section v-if="is_body">
			<section class="user_toubu pd pt20 pm10">
				<img :src="user_info.header_image" class="user_iconsd yj fl">
				<section class="ov pl10">
					<p class="cf fz15 pr">
						{{user_info.user_name}}

						<span class="f_i hiu_sd ml5 cz">
            <span>{{user_info.user_level}}</span>
						</span>
<!--						<span class="biangeng" @click="getlevel_f(true)">变更级别</span>-->
					</p>
					<p class="cf fz12 mt2">
						ID:{{user_info.user_id}}
					</p>
					<p class="btmer mt2  pt2 cf fz12">
						消费次数 <span class="fz14">{{user_info.order_num}}</span>
						<span class="ml40">消费金额</span>
						<span>{{user_info.order_money}}元</span>
					</p>
				</section>
				<p class="qc"> </p>

			</section>

			<section class="mt5 bgff user_info btm ">
				<section class="pd toubu_sdrt aa">
					<i class="f_i user_iconsd_icon"></i>
					<span class="fz14">个人信息</span>

					<span class="z9 fz12 fr mt2">收起 <i class="f_i donw_icn_d gd"></i></span>
				</section>

				<section class="btm  pd">
					<ul class="user_foujsdr pm5 pt10">
						<li class="mui-row">
							<p class="mui-col-xs-5 z3">
								生日
							</p>
							<p class="mui-col-xs-7 tr dian z6">
								{{user_info.birthday}}
							</p>

						</li>
						<li class="mui-row">
							<p class="mui-col-xs-5 z3">
								性别
							</p>
							<p class="mui-col-xs-7 tr dian z6">
								{{user_info.gender}}
							</p>

						</li>
						<li class="mui-row" v-if="user_info.user_level!='普通粉丝'">
							<p class="mui-col-xs-5 z3">
								成为{{user_info.user_level}}时间
							</p>
							<p class="mui-col-xs-7 tr dian z6" v-html="time_c(user_info.upgrade_time)">

							</p>

						</li>
						<li class="mui-row">
							<p class="mui-col-xs-5 z3">
								绑定手机
							</p>
							<p class="mui-col-xs-7 tr dian z6">
								{{user_info.mobile_phone}}
							</p>

						</li>
						<li class="mui-row">
							<p class="mui-col-xs-5 z3">
								收货地址
							</p>
							<p class="mui-col-xs-7 tr dian z6">
								{{user_info.addr_s}}
							</p>

						</li>

					</ul>

				</section>

			</section>

			<section class="mt5 bgff user_info btm ">
				<section class="pd toubu_sdrt">
					<i class="f_i user_iconsd_icon ab"></i>
					<span class="fz14">购买记录</span>

					<!--                <span class="z9 fz12 fr mt2">收起 <i class="f_i donw_icn_d gd "></i></span>-->
				</section>

				<section v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-immediate-check="false">

					<ul>

						<li class="pd pt10 pm10 btm mui-row pr" v-for="sd in order_list">

							<p class="cp_icon_sdf fl ">
								<img :src="sd.goods_thumb">
							</p>

							<section class="ov pl10 mui-row pr">
								<section class="mui-col-xs-9">
									<p class="dianer z3 sdf_jh_dertx">{{sd.goods_name}}</p>

									<p class="fz12 dian  w100">
										{{sd.goods_attr}}

									</p>

								</section>
								<section class="ov tr">
									<span class="fz16 red">￥<span v-html="price_guo(sd.goods_price)"></span>
									</span>
									<p class="mt10">x{{sd.goods_number}}</p>

								</section>

							</section>

						</li>
					</ul>
				</section>

				<section class="qc pt10 pm10 btm fz13 cen" v-if="loading">
					<section v-if="is_down">
						<mt-spinner color="#26a2ff" :size="20" class="f_b cz"></mt-spinner>
						<span class="ml10">加载中...</span>
					</section>
				</section>

				<section class="qc pt10 pm10 btm fz13 cen" v-if="!is_down&&order_list.length>10">

					<section>
						<span>没有更多数据了...</span>
					</section>

				</section>

			</section>

			<danselect :popupVisible="popupVisible" @close="popupVisible=false" @sex="getsex" :data_r="getlevel"></danselect>
		</section>
		<loadin v-else></loadin>
	</div>
</template>
<script>
	import danselect from "../components/danselect.vue"
	import loadin from "../components/loadin.vue"
	import {
		Toast
	} from 'mint-ui';
	export default {
		data() {
			return {
				popupVisible: false,
				user_id: 0,
				is_body: "",
				current_page: 1, //当前页码
				loading: false, //是否下拉 true禁止
				is_down: true,
				huiyuandj: ["金牌会员", "银牌会员", "铜牌会员", "普通会员"],
				user_info: "",
				order_list: [],
				getlevel: ""
			}
		},
		components: {
			danselect: danselect,
			loadin: loadin
		},
		methods: {
			getsex(data) {
				this.popupVisible = false
				let setlevel = {},
					th = this
				setlevel.token = this.token
				setlevel.level_id = data.level_id
				setlevel.level_name = data.level_name
				setlevel.user_id = this.user_id
				this.post("user/setlevel", setlevel, function() {
					th.user_info.user_level = data.level_name
					Toast({
						message: '变更级别成功！',
						iconClass: 'dx icon-gou fz32'
					});
				})

				console.log(data);
			},
			getlevel_f(iy) { //获取级别
				if(iy) {
					this.popupVisible = true
				}

				let th = this
				if(!this.getlevel) {
					let getle = {}
					getle.token = this.token
					this.post("user/getlevel", getle, function(data) {
						console.log(data);
						th.getlevel = data
					})
				}

			},
			getuser(ty_pe) {
				let customerInfo = {},
					th = this
				customerInfo.token = this.token
				customerInfo.user_id = this.user_id
				customerInfo.current_page = this.current_page
				this.post("user/customerInfo", customerInfo, function(data) {

					th.user_info = data
                    try{
                        				th.user_info.addr_s = data.address.province_name +
						"" + data.address.city_name + "" + data.address.district_name
                    }catch(e){
                        
                    }
	
                    
					th.is_body = true //显示内容

					data.order_list.data.map(a => {
						th.order_list.push(a)
					})
					if(data.order_list.data.length <= 0) {
						th.is_down = false
						return
					}
					th.loading = false
				})
			},
			loadMore() {

				this.loading = true;
				this.current_page++
					this.getuser(1)

			}
		},
		mounted() {
			this.Title("客户详情")
			this.user_id = this.$route.query.user_id

			this.getuser()

			$(".toubu_sdrt.aa").on("click", function() {
				$(this).parent().toggleClass("act")
			})
		},
	}
</script>
<style lang="scss" scoped>
	.user_toubu {
		position: sticky;
		left: 0;
		top: 0;
		z-index: 100
	}

	.user_toubu {
		height: 105px;
		background: #1D8AE7;
		.user_iconsd {
			width: 70px;
			height: 70px;
		}
		.hiu_sd {
			position: relative;
			bottom: 2px
		}
		.btmer {
			border-top: 1px solid #349AF0;
		}
		.pt2 {
			padding-top: 2px;
		}
		.biangeng {
			background: #42A6FF;
			font-size: 12px;
			position: absolute;
			right: 0px;
			top: 0px;
			line-height: 20px;
			padding: 0px 10px;
			border-radius: 20px;
		}
	}

	.user_info {
		.user_iconsd_icon {
			width: 21px;
			height: 21px;
			background-position: -163px -878px;
		}
		.donw_icn_d {
			width: 13px;
			height: 10px;
			background-position: -121px -995px;
		}
		.toubu_sdrt {
			line-height: 35px;
		}
		.user_foujsdr {
			line-height: 30px;
		}
		.user_iconsd_icon.ab {
			background-position: -163px -846px;
		}
	}

	.user_info.act ul {
		display: none
	}

	.user_info.act .donw_icn_d {
		transform: rotate(180deg);
		position: relative;
		bottom: 3px;
	}
</style>
