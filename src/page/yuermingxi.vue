<!--余额明细-->
<template>
	<div class="sd_jhg_dr">

		<section class="pd" v-if="balancedetail_data.length>0">
			<ul class="wulist_s mt10" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
				<li class="pd yj4 bgff pt10 pm10 mb10 sd_kjh_lisd" v-for="cz in balancedetail_data" :class="cz.mod!='used'?'':'act'">
					<i class="f_i df_jh_eer fl mt2 ab"></i>
					<section class="ov pl10 dsf_jh_dser">
						<p class="z3 fz15">
                            <span v-if='cz.mod!="used"'>
                                {{cz.mod|sd_dert}}
                            </span>
                            <span v-else>
                                使用
                             </span>
							<span class="lser fr" v-if="cz.mod!='used'">+{{cz.user_money}}</span>
							<span class=" fr" v-else>-{{cz.user_money}}</span>
						</p>

						<p class="qc fz12 z9">
							{{cz.add_time|time_s}}
						</p>
					</section>

					<p class="qc"></p>

				</li>
			</ul>

			<section class="qc pt10 pm10 btm fz13 cen" >
				<section>
					<mt-spinner color="#26a2ff" :size="20" class="f_b cz" v-if="meitou"></mt-spinner>
					<span class="ml10" v-if="meitou">加载中...</span>
					<span class="ml10" v-if="!meitou&&balancedetail_data.length>10">我是有底线的</span>
				</section>
			</section>

		</section>
		<kongbai v-else :kb="kb"></kongbai>

	</div>
</template>
<script>
	import kongbai from "../components/kongbai.vue"
	export default {
		data() {
			return {
				current_page: 1, //当前页码
				loading: false,
				meitou: true,
				balancedetail_data: [],
				kb: {
					icom: "dsf_hss_sd",
					msg: "没有更多数据了",
					btn_name: "返回余额首页",
					btn_name_er: "返回个人中心",
					type: 1,
					btn_url: "myyue",
					btn_urler: "user"
				}
			}
		},
		components: {
			kongbai: kongbai
		},
		methods: {
			loadMore() {
				let th = this
				this.loading = true;
				this.current_page++
					this.getList(function(data) {
						if(data.length < 10) {
							th.meitou = false
							return
						}
						console.log(data.length);
						th.loading = false
					})

			},
			getList(call_b) {
				let balancedetail = {},
					th = this
				balancedetail.token = this.token
				balancedetail.current_page = this.current_page
				this.post('user/balancedetail', balancedetail, function(data) {
					$(".sd_jhg_dr").addClass("show")
					data.data.map(a => {
						th.balancedetail_data.push(a)
					})
					try {
						call_b(data.data)
					} catch(e) {

					}

				})
			}
		},
		mounted() {
			this.getList()
			this.Title("余额明细")
		},
		filters: { //过滤器   页面上调用{{dt.state|lei}}
			time_s(t) {
				let time = new Date()
				time.setTime(t * 1000)
				let Year = time.getFullYear(),
					Month = time.getMonth() + 1,
					Data = time.getDate()
				return Year + "-" + Month + "-" + Data
			},
            sd_dert(t){
                var sd_Drert=""
                if(t=='give'){
                    sd_Drert="充赠"
                }else  if(t=='refund'){
                     sd_Drert="订单退款"
                }else{
                    sd_Drert="充值"
                }
                return sd_Drert
            }
		}
	}
</script>
<style scoped>
	.df_jh_eer {
		width: 35px;
		height: 35px;
		background-position: -237px -284px;
	}

	.sd_jhg_dr {
		display: none
	}

	.dsf_jh_dser {
		line-height: 1.4
	}

	.sd_kjh_lisd.act .df_jh_eer {
		background-position: -296px -284px;
	}
</style>
