<!--收入记录-->
<template>
	<div class="sdf_jh_drt">

		<section class="pd mt10">
			<ul class="wulist_s " v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
				<li class="pd  bgff pt10 pm10  sd_kjh_lisd mb10 yj4" v-for="cz in chongz" :class="cz.type==1?'act':''">
					<i class="f_i df_jh_eer fl mt2"></i>
					<section class="ov pl10 dsf_jh_dser">
						<p class="z3 fz13">
						{{cz.note}}
							<span class="z3 fr">{{cz.integral}}</span>
						</p>

						<p class="qc fz12 z9 mt5">
							<span class="">{{cz.add_time|time_s}} </span>
						</p>
					</section>

					<p class="qc"></p>

				</li>
			</ul>
		</section>
		<kongbai :kb="kb" v-if="chongz.length<=0"></kongbai>

	</div>
</template>
<script>
	import kongbai from "../components/kongbai.vue"
	export default {
		data() {
			return {
				status: "",
				meitou: true,
				loading: false,
				chongz: [],
                page:0,
				kb: {
					icom: "dsf_hss_sd",
					msg: "没有更多数据了",
					btn_name: "返回积分首页",
					btn_name_er: "返回个人中心",
					type: 1,
					btn_url: "myjifen",
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
						console.log(data.length);
						th.loading = false
					})

			},
			get_data(call_b) {
				let cashinfo = {},
					th = this
				cashinfo.token = this.token
				cashinfo.current_page = this.page
				cashinfo.per_page = 15
				cashinfo.status = this.status
				this.post("user/integral", cashinfo, function(data) {
					$(".sdf_jh_drt").addClass("show")
                    console.log(data.data);
					data.data.map(a => {
                          console.log(a);
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
			this.Title("积分消费记录")
			this.status = this.$route.query.type
			if(this.$route.query.type == 1) {
				this.Title("积分获取记录")
			
			}

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
		}
	}
</script>
<style scoped>
	.df_jh_eer {
		width: 35px;
		height: 35px;
		background-position: -191px -659px;
	}

	.dsf_jh_dser {
		line-height: 1.4
	}

	.sd_kjh_lisd.act .df_jh_eer {
		background-position: -248px -660px;
	}

	.sdf_jh_drt {
		display: none
	}
</style>
