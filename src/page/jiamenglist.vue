<!--加盟商列表-->
<template>
<div >

    
<section class="xiaotop_ose cen pr">
			<img src="http://thirdwx.qlogo.cn/mmopen/OnvqvIApxzmOmmG1ObFMb45Lh0SSoTt13Lfe3hLicbNSFEjkTJiceDLxLpMdCfq3NtCxSNl31wYpOgltfrUkcMTTSoq7KXK7ad/132" class="yj user_iconsd  ">
			<p class="cf fz16 mt5">

				tesxs
			</p>
			<p class="cf fz12  df_jgh_erx ">
				(ID 577366)
			</p>
            <section class="mui-row dsf_drrtxc mt20">
                <section class="mui-col-xs-6  fz12 cf pr20 brm">
                        <p class="cf fz12">加盟商累计佣金</p>
                    <p class="cf fz12">2336.66</p>
                </section>
                  <section class="mui-col-xs-6  fz12 cf cen pl20">
                         <p class="cf fz12">今日佣金</p>
                    <p class="cf fz12">2336.66</p>
                </section>
            </section>
 
			<bolang></bolang>
		</section>
    
    
    
    
    <div class="sdf_jh_drt">

		<section class="pd mt10">
			<ul class="wulist_s " v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
				<li class="pd  bgff pt10 pm10  sd_kjh_lisd mb10 yj4" v-for="cz in chongz" :class="cz.type==1?'act':''">
					<i class="f_i df_jh_eer fl mt2"></i>
					<section class="ov pl10 dsf_jh_dser">
						<p class="z3 fz15">
							{{cz.note}}
							<span class="z3 fr">{{cz.integral}}</span>
						</p>

						<p class="qc fz12 z9">
							<span class="fr">{{cz.add_time|time_s}} </span>
						</p>
					</section>

					<p class="qc"></p>

				</li>
			</ul>
		</section>
		<kongbai :kb="kb" v-if="chongz.length<=0"></kongbai>

	</div>
    
    
    
    

</div>
</template>
 
<script>
        import bolang from "../components/bolang"
	import kongbai from "../components/kongbai.vue"
	export default {
		data() {
			return {
				chongz: "",
				status: "",
				meitou: true,
				loading: false,
				chongz: [],
				kb: {
					icom: "dsf_hss_sd",
					msg: "暂无数据",
					btn_name: "",
					type: 3,
					
				}
			}
		},
		components: {
			kongbai: kongbai,
            bolang
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
			this.Title("积分消费记录")
			this.chongz = this.chongz_b
			this.status = this.$route.query.type
			if(this.$route.query.type == 1) {
				this.Title("积分获取记录")
				this.chongz = this.chongz_c
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

    
     .xiaotop_ose {
        background: #0076EF;
        padding-top: 30px;
        padding-bottom: 10px;
    }
    
    
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
