<!--我的客户-->
<template>
	<div id="sdf_jh_sdd">
        <section v-if="is_khdr">
		<section class="box cen bgff top_nav_e">
			<p class="box_a fz16 z3 pt10 pm10 " :class="ts.cls" v-for="(ts,idx) in tap_nas" @click="tap_nsame(idx)">
				<span>{{ts.name}}</span>
			</p>
		</section>

		<section v-if="type==1">

			<section class="pd">

				<section class="shng_jhg_s bgff mt10 yj4 " :class="ct.cls" v-for="(ct,idx) in customer_list">

					<section class="shang_jh_sd pr10" @click="dlsss_s(idx)">
						<span class="san_names fz14">
                                {{ct.name}}
                            </span>

						<span class="fr red fz12">
                        {{ct.list.length}} 人
                            <i class="f_i down_sdfs ml5  gd"></i>
                        </span>

					</section>

					<ul class="wulist_s ">
						<li class="pd yj4 bgff pt10 pm10 btm sd_kjh_lisd" v-for="cz in ct.list" @click="hf('nykehu_xq',{user_id:cz.user_id})">

							<img :src="cz.header_image" class=" df_jh_eer fl mt2">
							<section class="ov pl10 dsf_jh_dser">
								<p class="z3 fz15">
									<i class="f_i dsf_jh_sdf" :class="cz.dnegji"></i> {{cz.user_name}} <span class="z9 fz12">(ID:{{cz.user_id}})</span>
									<span class=" fr">
            <i class="f_i fs_jdeh_sd cen" >
                <span class="s_sangdai"> {{ct.name}}</span>
									</i>
									</span>
								</p>
								<section class="s_jh_ukhsdf">

									<section class="fz12 z9 box ">
										<section class="box_a">

											<i class="f_i daili_icon mr5"></i> 代理：{{cz.agent_num}}
										</section>
										<section class="box_a">

											<i class="f_i daili_icon mr5 aa"></i> 会员：{{cz.member_num}}
										</section>
										<section class="box_a">

											<i class="f_i daili_icon mr5 ab"></i> 粉丝：{{cz.fans_num}}
										</section>
									</section>

									<p class="qc fz12 z9">
										{{cz.time}}
									</p>
								</section>
							</section>

							<p class="qc"></p>

						</li>
					</ul>

				</section>

			</section>

		</section>

        <section v-if="type==2||type==3">
		<section v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-immediate-check="false">

			<section v-if="type==2">

				<section class="pd" v-if="true">

					<ul class="wulist_s show bgff yj4 mt10">
						<li class="pd yj4 bgff pt10 pm10 btm sd_kjh_lisd" v-for="cz in customer_list" @click="hf('nykehu_xq',{user_id:cz.user_id})">

							<img :src="cz.header_image" class=" df_jh_eer fl mt2">
							<section class="ov pl10 dsf_jh_dser z3 fz15 mui-row">
								<section class="mui-col-xs-9 ">

									<p class="z3 fz14  dian sjh_ddr_errtx fl">
										{{cz.user_name}}
									</p>
									<span class="z9 fz12 fl">(ID:{{cz.user_id}})</span>
								</section>
								<span class=" mui-col-xs-3 tr">
            <i class="f_i fs_jdeh_sd cen" >
                <span class="s_sangdai">{{cz.user_group_name}}</span>
								</i>
								</span>

								<p class="qc fz12 z9 pl5" v-html="time_c(cz.reg_time)">

								</p>

							</section>

							<p class="qc"></p>

						</li>
					</ul>

				</section>

			</section>

			<section v-if="type==3">

				<section class="pd" v-if="true">

					<ul class="wulist_s show bgff yj4 mt10">
						<li class="pd yj4 bgff pt10 pm10 btm sd_kjh_lisd" v-for="cz in customer_list" @click="hf('nykehu_xq',{user_id:cz.user_id})">

							<img :src="cz.header_image" class=" df_jh_eer fl mt2">
							<section class="ov pl10 dsf_jh_dser z3 fz15 mui-row">
								<section class="mui-col-xs-9 ">

									<p class="z3 fz14  dian sjh_ddr_errtx fl">
										{{cz.user_name}}
									</p>
									<span class="z9 fz12 fl">(ID:{{cz.user_id}})</span>
								</section>
								<span class=" mui-col-xs-3 tr">
            <i class="f_i fs_jdeh_sd cen" >
                <span class="s_sangdai">粉丝</span>
								</i>
								</span>

								<p class="qc fz12 z9 pl5" v-html="time_c(cz.reg_time)">

								</p>

							</section>

							<p class="qc"></p>

						</li>
					</ul>

				</section>

			</section>

		</section>
            </section>

		<section class="qc pt10 pm10 btm fz13 cen" v-if="loading">
			<section v-if="is_down">
				<mt-spinner color="#26a2ff" :size="20" class="f_b cz"></mt-spinner>
				<span class="ml10">加载中...</span>
			</section>
		</section>

		<section class="qc pt10 pm10 btm fz13 cen" v-if="!is_down&&customer_list.length>10&&!loading">

			<section>
				<span>没有更多数据了...</span>
			</section>

		</section>

		<kongbai :kb="kb" v-if="customer_list.length<=0"></kongbai>
        </section>

		<loadin v-if="is_load"></loadin>
	</div>
</template>
<script>
    import bolang from "../components/bolang.vue"
    import kongbai from "../components/kongbai.vue"
    import loadin from "../components/loadin.vue"
    export default {
        data() {
            return {
                is_khdr:"",
                selected: "3",
                sd_hher: 1,
                is_load: true,
                current_page: 1, //当前页码
                type: 1, //1代理商、2会员、3粉丝
                loading: false, //是否下拉 true禁止
                is_down: true,
                tap_nas: [{
                    name: "代理商",
                    cls: "act",
                    type: 1
                }, {
                    name: "会员",
                    cls: "",
                    type: 2
                }, {
                    name: "粉丝",
                    cls: "",
                    type: 3
                }], //头部的导航切换
                customer_list: [],
                chongz: [{
                    name: "卖女孩的小火柴",
                    idnum: '235464',
                    isxf: "",
                    dnegji: "",
                    time: "2018-01-27",

                }, {
                    name: "卖女孩的小火柴",
                    idnum: '235464',
                    isxf: "ab",
                    dnegji: "",
                    time: "2018-01-27",

                }, {
                    name: "卖女孩的小火柴",
                    idnum: '235464',
                    isxf: "ac",
                    dnegji: "",
                    time: "2018-01-27",

                }],
                kb: {
                    icom: "dsf_hss_sd",
                    msg: "没有更多数据了",
                    btn_name: "返回个人中心",
                    btn_url: "user"
                }
            }
        },
        components: {
            bolang: bolang,
            kongbai: kongbai,
            loadin: loadin
        },
        methods: {
            customer() { //获取列表数据
                let customer = {},
                    th = this
                customer.token = this.token
                customer.current_page = this.current_page
                customer.type = this.type
                this.post("user/customer", customer, function(data) { //获取我的客户信息
                    th.is_khdr=true
                    let sd_jhd = ""
                    try {
                        sd_jhd = data.data
                    } catch (e) {

                    }
                    if (th.type == 1) {
                        sd_jhd = data
                    }
                    th.is_load = false
                    th.loading = false
                    if (!sd_jhd) {
                        th.sd_hher = 0
                        return
                    }
                    th.sd_hher = sd_jhd.length



                    sd_jhd.map(a => {
                        if (th.type == 1) {
                            a.cls = ""
                        }
                        th.customer_list.push(a)
                    })
                })

            },
            tap_nsame(idx) { //头部切换
                this.tap_nas.map(a => {
                    a.cls = ""
                })
                this.tap_nas[idx].cls = "act" //选中颜色
                this.type = this.tap_nas[idx].type
                this.customer_list = []
                this.is_load = true
                this.loading = false;
                this.current_page = 1
                this.sd_hher = 1
                this.customer()

            },
            dlsss_s(idx) { //搜索展开按钮触发
                if (this.customer_list[idx].cls) {
                    this.customer_list[idx].cls = ""
                } else {
                    this.customer_list[idx].cls = "act"
                }

            },
            loadMore() {
                if (this.sd_hher > 0) {
                    this.loading = true;
                    this.current_page++
                        this.customer()
                }


            },

        },
        mounted() {
            window.scrollTo(0, 0);
            this.Title("我的客户")
            this.customer()
        },

    }

</script>
<style lang="scss">
    #sdf_jh_sdd {
        .top_nav_e {
            position: sticky;
            left: 0px;
            top: 0px;
            z-index: 999;
            .act {
                span {
                    color: #F44336 !important;
                    padding-bottom: 12px;
                    border-bottom: 1px solid #F44336 !important;
                }
            }
        }
        .xiaoy_tapsd .mint-tab-item-label {
            color: #666 !important;
            padding-top: 10px;
            padding-bottom: 7px;
        }
        .mint-tab-item-label {
            display: inline-block;
            font-size: 16px;
        }
        .xiaoy_tapsd .mint-tab-item.is-selected .mint-tab-item-label {
            color: #f75842 !important;
            border-bottom: 1px solid #f75842;
        }
        .xiaoy_tapsd.ab .mint-tab-item {
            padding: 0px;
        }
        .shang_jh_sd {
            padding-top: 10px;
            padding-bottom: 10px;
            .san_names {
                border-left: 2px solid #F75845;
                padding-left: 10px;
            }
            .down_sdfs {
                width: 12px;
                height: 8px;
                background-position: -96px -996px;
            }
        }
        .sd_kjh_lisd {
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0);
            .s_sangdai {
                font-size: 12px;
                color: #fff;
                font-style: normal;
                display: inline-block;
                transform: scale(0.8);
                position: relative;
                bottom: 4px;
            }
            .daili_icon {
                width: 11px;
                height: 13px;
                background-position: -8px -991px;
            }
            .daili_icon.aa {
                width: 13px;
                height: 12px;
                background-position: -29px -990px;
            }
            .daili_icon.ab {
                width: 13px;
                height: 14px;
                background-position: -59px -990px;
            }
            .s_jh_ukhsdf {
                line-height: 1.5
            }
        }
        .wulist_s {
            display: none
        }
        .wulist_s.show {
            display: block !important
        }
        .shng_jhg_s.act .wulist_s {
            display: block;
        }
        .shng_jhg_s.act .down_sdfs {
            transform: rotate(180deg);
            position: relative;
            top: -3px;
        }
    }

</style>
<style scoped>
    .xiaotop_ose {
        background: #0076EF;
        padding-top: 30px;
        padding-bottom: 40px;
    }

    .xiaoy_tapsd {
        position: sticky !important;
        top: 0px;
        z-index: 100;
    }

    .xiaoy_tapsd .mint-navbar {
        background: #fff !important;
    }

    .xiaoy_tapsd .mint-tab-item.is-selected {
        background: #fff !important;
    }

    .df_jh_eer {
        width: 38px;
        height: 38px;
    }

    .fs_jdeh_sd {
        width: 53px;
        height: 16px;
        background-position: -168px -780px;
    }

    .fs_jdeh_sd.ab {
        background-position: -168px -810px;
    }

    .fs_jdeh_sd.ac {
        background-position: -168px -842px;
    }

    .sjh_ddr_errtx {
        max-width: 150px;
    }

</style>
