<!--收入记录-->
<template>
	<div class="sd_jhg_dr">

		<section v-if="chongz.length>0">
			<ul class="wulist_s " v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
				<li class="pd  bgff pt10 pm10  sd_kjh_lisd" v-for="cz in chongz" :class="cz.status==2?'act':''">
					<i class="f_i df_jh_eer fl mt2"></i>
					<section class="ov pl10 dsf_jh_dser">
						<p class="z3 fz15">
							{{cz.goods_name}} 
                            <span class="fz12">
                             <span class="ye" v-if="cz.status==0">(待可提)</span>
                              <span class="ls" v-if="cz.status==1">(可提)</span>
                              <span class="red" v-if="cz.status==2">(已退还)</span>
                                </span>
							<span class="z3 fr">{{cz.status==2?'-':'+'}} {{cz.commission_price}}</span>
						</p>

						<p class="qc fz12 z9">
							{{cz.order_sn}} <span class="fr">{{cz.add_time|time_s}} </span>
						</p>
					</section>

					<p class="qc"></p>
				</li>
			</ul>

			<section class="qc pt10 pm10 btm fz13 cen" v-if="chongz.length>=15">
				<section>
					<mt-spinner color="#26a2ff" :size="20" class="f_b cz" v-if="meitou"></mt-spinner>
					<span class="ml10" v-if="meitou">加载中...</span>
					<span class="ml10" v-else>我是有底线的</span>
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
				page: 1,
				chongz: [],
				meitou: true,
				loading: false,
				kb: {
					icom: "dsf_hss_sd",
					msg: "没有更多数据了",
					btn_name: "返回我的钱包",
					btn_name_er: "返回个人中心",
					type: 1,
					btn_url: "myqianbao",
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
				this.page++
					this.get_data(function(data) {
						if(data.length < 15) {
							th.meitou = false
							return
						}
						th.loading = false
					})

			},
			get_data(call_b) {
				let cashinfo = {},
					th = this
				cashinfo.token = this.token
				cashinfo.current_page = this.page
				cashinfo.per_page = 15
				this.post("user/cashinfo", cashinfo, function(data) {
					$(".sd_jhg_dr").addClass("show")
					data.data.map(a => {
						th.chongz.push(a)
					})
					try {
						call_b(data.data)
					} catch(e) {

					}
				})
			}
		},
		mounted() {
			this.Title("收入记录")
			this.get_data()

		},
		filters: { //过滤器   页面上调用{{dt.state|lei}}
			time_s(t) {
				let time = new Date()
				time.setTime(t * 1000)
				let Year = time.getFullYear(),
					Month = time.getMonth() + 1,
					Data = time.getDate()
				return Year + "-" + Month + "-" + Data
			}
		}
	}
</script>
<style scoped>
	.sd_jhg_dr {
		display: none
	}

	.df_jh_eer {
		width: 35px;
		height: 35px;
		background-position: -278px -423px;
	}

	.dsf_jh_dser {
		line-height: 1.4
	}

	.sd_kjh_lisd.act .df_jh_eer {
		background-position: -320px -423px;
	}

	.wulist_s li {
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0);
		border-bottom: 1px solid #F0F0F0
	}
</style>
