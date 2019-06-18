<!--我的好友-->
<template>
	<div class="sd_jhg_dr">
		<section class="xiaotop_ose cen pr">
			<img :src="user_info.header_image" class="yj user_iconsd  ">
			<p class="cf fz16 mt5">

				{{user_info.user_name}}
			</p>
			<p class="cf fz12 mt5 df_jgh_erx mt10">
				商户ID：{{user_info.user_id}}<br>
			</p>
<!--
            <section class="mui-row dsf_drrtxc">
                <section class="mui-col-xs-6 tr fz12 cf pr20">
                         直推粉丝：{{i_sdftr.fans_1}}人 
                </section>
                  <section class="mui-col-xs-6  fz12 cf tl pl20">
                         二级：{{i_sdftr.fans_2}}人
                </section>
            </section>
-->
 
			<bolang></bolang>
		</section>
        

        
        <section class="pd pt10 pm10">

            <section class="bgff yj4 sdf_jh_deertt ov mb10 " :class="cz.cls" v-for="cz in $store.state.fanslist" >
                <section class="pd pt10 pm5 pr" @click="hf('nykehu_xq',{user_id:cz.user_id})">
                    <img :src="cz.header_image" class="yj sdf_user_e cz fl">
                    <section class="ov pl10">
                        <section>
                              <i class="f_m vip_haoier ab" v-if="type_e==1" ></i>
                            <span class="fz13">  {{cz.user_name}}</span>
                            <span class="fz12 z9">(ID:{{cz.user_id}})</span>
                        </section>
                        <section class="mui-row">
                            <section class="mui-col-xs-6 z9 fz12">
                            {{cz.reg_time|time_s}}
                            </section>
                             <section class="mui-col-xs-6 z9 fz12 cen">
                                <span class="sd_jhh_sdf aa act" v-if="cz.subscribe=='已关注'"><span>已关注</span></span>
                                  <span class="sd_jhh_sdf aa " v-else><span>未关注</span></span>
                                 
                                  <span class="sd_jhh_sdf ml5 ab act" v-if="cz.order_count>0"><span>已消费</span></span>
                                 <span class="sd_jhh_sdf ml5 ab " v-else><span>未消费</span></span>
                            </section>
                        </section>
                    </section>   
                    <i class="f_m right_icon"></i>
                    <p class="qc"></p>   
                    </section>
                
                <section class="pd om10 df_jh_dceerrt pt10 pm5">
                        <section class="pr pt10 pm10 bgff yj4  mb10 sdf_jh_deertt pd" v-for="cz in cz.sub_list"  @click="hf('nykehu_xq',{user_id:cz.user_id})">
                             <img :src="cz.header_image" class="yj sdf_user_e cz fl">
                    <section class="ov pl10">
                        <section>
                              <i class="f_m vip_haoier" v-if="cz.user_group_name=='VIP会员'"></i>
                              <i class="f_m vip_haoier ab" v-else></i>
                            <span class="fz13">  {{cz.user_name}}</span>
                            <span class="fz12 z9">(ID:{{cz.user_id}})</span>
                        </section>
                        <section class="mui-row">
                            <section class="mui-col-xs-6 z9 fz12">
                            {{cz.reg_time|time_s}}
                            </section>
                             <section class="mui-col-xs-6 z9 fz12 cen">
                                <span class="sd_jhh_sdf aa act" v-if="cz.subscribe=='已关注'"><span>已关注</span></span>
                                  <span class="sd_jhh_sdf aa " v-else><span>未关注</span></span>
                                 
                                  <span class="sd_jhh_sdf ml5 ab act" v-if="cz.order_count>0"><span>已消费</span></span>
                                 <span class="sd_jhh_sdf ml5 ab " v-else><span>未消费</span></span>
                            </section>
                        </section>
                    </section> 
                            
                    <i class="f_m right_icon"></i>
                    <p class="qc"></p>   
                        </section>
                </section>
                
<!--
                    <section class="mui-row fz12 cf dsf_jh_der cen" @click="sdf_df(cz)">
                            <section class="mui-col-xs-4">
    总推广：{{cz.total_person}}人
                        </section>
                              <section class="mui-col-xs-4">
会员：{{cz.member_person}}人
                        </section>
                        
                              <section class="mui-col-xs-4">
  粉丝：{{cz.fans_person}}人 <i class="f_m down_iconsf"></i>
                        </section>
                
                    </section>
-->
                    
                    
                
    
            </section>
            
    
    </section>



<!--
        <section v-if="is_dsf">
		<section class="pd d_jh_dertxc" v-if="chongz.length>0">
			<ul class="wulist_s mt10" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
				<li class="pd yj4 bgff pt10 pm10 mb10 sd_kjh_lisd" v-for="cz in chongz">

					<img :src="cz.header_image" class="yj df_jh_eer fl mt2">
					<section class="ov pl10 dsf_jh_dser">
						<p class="z3 fz15">
							

							{{cz.user_name}} <span class="z9 fz12">(ID:{{cz.user_id}})</span>
							<span class=" fr" :class="cz.order_count>0?'lser':'red'">
            {{cz.order_count>0?"已消费":"未消费"}}
        </span>
						</p>

						<p class="qc fz12 z9">
							{{cz.reg_time|time_s}}
						</p>
					</section>

					<p class="qc"></p>

				</li>
			</ul>
		</section>
		<kongbai v-else :kb="kb"></kongbai>
</section>
-->

	</div>
</template>
<script>
    import bolang from "../components/bolang.vue"
    import kongbai from "../components/kongbai.vue"
    export default {
        data() {
            return {
                is_dsf: "",
                type_e:"",
                i_sdftr:"",
                user_info: "",
                friends_count: "",
                meitou: true,
                loading: true,
                page: 1,
                chongz: [],
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
            kongbai: kongbai
        },
        methods: {
            sdf_df(sd) {
                if (sd.fans_person > 0 || sd.member_person > 0) {
                  
                    if (sd.cls) {
                        sd.cls = ""
                    } else {
                        sd.cls = 'act'
                    }
                }

            },
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
                cashinfo.per_page = 1000
                this.post("user/friends", cashinfo, function(data) {
                    $(".sd_jhg_dr").addClass("show")
                 
                    th.is_dsf = true
                    data.data.map(a => {
                        a.cls = ""
                        th.chongz.push(a)
                    })
                    try {
                        call_b(data.data)
                    } catch (e) {

                    }
                       th.i_sdftr=data
                })
            }
        },
        mounted() {
            window.scrollTo(0,0)
            this.user_info = JSON.parse(localStorage.user)
            this.friends_count = this.$route.query.friends_count
            let th = this


            this.get_data(function(data) {
                if (data.length >= 15) {
                    th.loading = false
                }
            })

            //            this.loading=false
           this.type_e= this.$route.query.type_e
            this.Title("我的好友")

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
    .dsf_drrtxc {
        position: relative;
        top: 15px;
    }

    .df_jh_eer {
        width: 35px;
        height: 35px;
    }

    .xiaotop_ose {
        background: #0076EF;
        padding-top: 30px;
        padding-bottom: 40px;
    }

    .df_jgh_erx {
        line-height: 1.5
    }

    .dsf_jh_sdf {
        width: 49px;
        height: 16px;
        background-position: -175px -722px;
    }

    .dsf_jh_sdf.ab {
        width: 30px;
        height: 16px;
        background-position: -170px -750px;
    }

    .d_jh_dertxc {
        min-height: 400px;
    }

    .sdf_jh_deertt {
        box-shadow: 0px 0px 4px rgba(0, 0, 0, .2);
    }

    .sdf_user_e {
        width: 44px;
        height: 44px;
    }

    .vip_haoier {
        width: 50px;
        height: 16px;
        background-position: -18px -50px
    }

    .vip_haoier.ab {
        background-position: -199px -50px;
    }

    .sd_jhh_sdf {
        background: #CCCCCC;
        color: #fff;
        font-size: 12px;
        display: inline-block;
        width: 43px;
        height: 12px;
        line-height: 12px;
        text-align: center;
        border-radius: 10px;
    }

    .sd_jhh_sdf span {
        display: inline-block;
        transform: scale(0.75)
    }

    .sd_jhh_sdf.act.aa {
        background: #009900
    }

    .sd_jhh_sdf.act.ab {
        background: #FF9900
    }

    .dsf_jh_der {
        background: #62A9F1;
        line-height: 27px;
        width: 100% !important;
        height: auto !important;
    }

    .down_iconsf {
        width: 13px;
        height: 7px;
        background-position: -131px -57px;
    }

    .right_icon {
        width: 9px;
        height: 15px;
        background-position: -101px -50px;
        position: absolute;
        right: 10px;
        top: 25px;

    }

    .df_jh_dceerrt {
        background: #F3F3F3;
        min-height: 50px;
        display: none
    }

    .sdf_jh_deertt.act .df_jh_dceerrt {
        display: block;
    }

    .sdf_jh_deertt.act .down_iconsf {
        background-position: -159px -57px;
    }

</style>
