<!--兑换记录-->
<template>
	<div class="sd_jh_drtcc">

		<section>
			<ul class="wulist_s " v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
				<li class="pd  bgff pt10 pm10  sd_kjh_lisd " v-for="cz in chongz" :class="cz.status==0?'acb':''||cz.status==-1?'act':''" @click="hf('tixianxq',cz)">
					<i class="f_i df_jh_eer fl mt2"></i>
					<section class="ov pl10 dsf_jh_dser">
						<p class="z3 fz15">
							{{cz.status|shenghe}}
							<span class="  fr">-{{cz.wallet_money}}</span>

						</p>

						<p class="qc fz12 z9">
							{{cz.wallet_order_sn}} <span class="fr">{{cz.add_time|time_s}} </span>
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
		<kongbai v-if="chongz.length<=0" :kb="kb"></kongbai>

	</div>
</template>
<script>
    import kongbai from "../components/kongbai.vue"
    export default {
        data() {
            return {
                meitou: true,
                loading: false,
                chongz: [],
                page: 0,
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
                        if (data.length < 15) {
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
                var sd_err = "user/withdrawalsinfo"
                if (this.$route.query.type == 2) {
                    sd_err = "user/yinshengwithdrawlist"

                }

                this.post(sd_err, cashinfo, function(data) {
                    $(".sd_jh_drtcc").addClass("show")
                    data.data.map(a => {
                        th.chongz.push(a)
                    })
                    try {
                        call_b(data.data)
                    } catch (e) {

                    }
                })
            }

        },
        mounted() {
            if (this.$route.query.type == 2) { 
                this.kb.btn_url = "silver_wallet"
                console.log(this.kb);
            }


            this.Title("兑换记录")
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
            shenghe(t) {
                if (t == -1) {
                    t = 3
                }
                return ["等待审核", '审核通过', '兑换成功', '兑换失败'][t]
            }
        }
    }

</script>
<style scoped>
    .df_jh_eer {
        width: 35px;
        height: 35px;
        background-position: -271px -548px;
    }

    .sd_jh_drtcc {
        display: none
    }

    .dsf_jh_dser {
        line-height: 1.4
    }

    .sd_kjh_lisd.act .df_jh_eer {
        background-position: -269px -472px;
    }

    .sd_kjh_lisd.acb .df_jh_eer {
        background-position: -316px -472px;
    }

    .wulist_s li {
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0);
        border-bottom: 1px solid #F0F0F0
    }

</style>
