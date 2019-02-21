<!--个人中中心-->
<template>
	<div>
   
	<div class="sd_hg_eer pr" v-if="user_info_w">
    
			<section class="pd pt5 pm5 bgff pr">
				<section class="dsf_jgh_ert mui-row">
					<img src="http://mall.cangniaowl.com/static/img/head_bg.png" class="heng_bgfs">
					<section class="pr h100 mui-row ">
						<i class="f_i xiaos_sf" @click="hf('xiaoxicenter')"></i>
						<section class=" f_j_eretxc cz_w  pt20 cen fl">
							<img :src="user_info.header_image" class="user_iconsd yj ">
 
						</section>
						<section class="ov pl10 mt20 shg_jh_iue">
							<p class="cf">{{user_info.user_name||'&nbsp;'}}</p>
							<p class="cf fz12 ">
								ID:{{user_info.user_id}} 
							</p>
							<p>
								<span class="f_i hiu_sd" >
            
                                    <span :class="user_info.user_group_name.length>=5?'act':''">{{user_info.user_group_name}}</span>
								</span>

								<span class="cf fr mr10 fz12 mt2" @click="hf('gerenshezi')">账户设置 <i class="dx icon-right fz12"></i></span>
							</p>

							<section class="mt10 sdf_dhf_er ">
								<p class="ye fz12">个人资料完善度 </p>
								<p class="df_jh_ert">
									<span class="jd_tiaos  pr" :style="{width:user_info.integrity+'%'}">
                        <span class="f_i fd_jh_ert" :class="user_info.integrity>70?'acp':''">
                            <span>   {{user_info.integrity}}% </span>
									</span>
									</span>
								</p>
								<p class="ye fz12 pm10">
									0%
									<span class="fr">100%</span>
								</p>

							</section>

						</section>
					</section>

				</section>
			</section>

			<section class="mt10 bgff pt10 s_jh_omd  cen box">
				<section class="box_a" @click="kj_jhd_er('wodesc')">
					<p class="s_kjh_der">
						<i class="f_i sdkj_s"></i>
					</p>
					<p class="mt2 fz12">
						收藏
					</p> 
				</section> 

                	<section class="mui-col-xs-4" @click="kj_jhd_er('xinxiang')" v-if="user_info.share_user_commission<=0&&user_info.agent_user_commission<=0">
					<p class="s_kjh_der">
						<span class="pr">
<!--                        <span class=" dsf_jh_er bgred cf">1</span>-->
						<i class="f_i sdkj_s ab"></i>
						</span>

					</p>
					<p class="mt2 fz12">
						信箱
					</p>
				</section>

                
                
				<section class="box_a" @click="hf('fenxiangzhezx',{type:1})" v-if="user_info.share_user_commission>0">
					<p class="s_kjh_der">
						<span class="pr">
<!--                        <span class=" dsf_jh_er bgred cf">1</span>-->
						<i class="dx icon-hongbao df_df_Drrtt"></i>
						</span>

					</p>
					<p class="mt2 fz12">
						分享者中心
					</p>
				</section>
                
                
                	<section class="box_a" @click="hf('fenxiangzhezx',{type:2})"  v-if="user_info.agent_user_commission>0">
					<p class="s_kjh_der">
						<span class="pr">
<!--                        <span class=" dsf_jh_er bgred cf">1</span>-->
						<i class="dx icon-huabanfuben df_df_Drrtt ab"></i>
						</span>

					</p>
					<p class="mt2 fz12">
						服务商中心
					</p>
				</section>
                
                

				<section class="box_a" @click="kj_jhd_er('footprint')">
					<p class="s_kjh_der">
						<i class="f_i sdkj_s ac"></i>
					</p>
					<p class="mt2 fz12">
						足迹
					</p>
				</section>

			</section>

			<section class=" bgff mt10">
				<p class="df_toyute_s pd">
					<i class="f_i ding_s"></i>
					<span class="fz14 z3">我的账户</span> 
				</p>
				<section class="btm mui-row cen s_jh_omd">
					<section class="mui-col-xs-3 pt10 " @click="kj_jhd_er('myyue?user_money='+user_info.user_money)">
						<p class="red fz16">

                            <span v-if="!user_info.user_money">0</span><span v-else>{{user_info.user_money|baoliu}}</span></p>
						<p class="fz12 z3">
							余额
						</p>

					</section>

					<section class="mui-col-xs-3 pt10 " @click="kj_jhd_er('myqianbao')">
						<p class="red fz16">
                            <span v-if="!user_info.total_commissions">0</span>
                           <span v-else> {{user_info.total_commissions|baoliu}}</span>

    </p>

						<p class="fz12 z3">
							钱包
						</p>

					</section>

					<section class="mui-col-xs-3 pt10 " @click="kj_jhd_er('myjifen?pay_points='+user_info.pay_points)">
						<p class="red fz16"><span v-if="!user_info.pay_points">0</span> <span v-else> {{user_info.pay_points}}</span></p>
						<p class="fz12 z3">
							积分
						</p>

					</section>

					<section class="mui-col-xs-3 pt10 " @click="kj_jhd_er('yhq')">
						<p class="red fz16">{{!user_info.coupon_count?0:user_info.coupon_count}}</p>
						<p class="fz12 z3">
							卡券
						</p>

					</section>

				</section>
 
			</section> 

			<section class=" bgff mt10">
				<p class="df_toyute_s pd">
					<i class="f_i ding_s ab"></i>
					<span class="fz14 z3">我的订单</span>

					<span class="fz12 fr" @click="hf('order_form')">所有订单<i class="dx icon-right fz12 z9"></i></span>
				</p>

				<section class="btm bgff pt10 s_jh_omd mui-row cen">
					<section class="sd_ds_srtx" v-for="(md,idx) in mydingd" @click="hjg_sdr(idx,md.id,md.type)">

						<p class="s_kjh_der">
							<span class="pr">
                                <span class=" dsf_jh_er bgred cf" :class="md.liul?'show':''" v-if="md.liul>0"> {{md.liul}}</span>

							<i class="f_i myding_s" :class="md.icon"></i>
							</span>
						</p>
						<p class="mt2 fz12 z3">
							{{md.name}}
						</p>
					</section>

				</section>
			</section>
        

<!--
        	<section class=" bgff mt10">
				<p class="df_toyute_s pd">
					<i class="f_i ding_s ba"></i>
					<span class="fz14 z3">我的活动</span>

				</p>
                <section class="btm  mui-row  pt10 pm10" v-if="is_huodong">
                <section class="mui-col-xs-6 brm pd" @click="is_huodong=false">
                    <img src="/static/img/csjgh_a.jpg" class="SDf_jh_drtd fl">
                    <section class="ov cen pt15">
                        <p class="fz24 red">9</p>
                        <p class="fz12 dian">进行中的砍价</p>
                    </section>
                    <p class="qc"></p>
                </section>
                    
                     <section class="mui-col-xs-6   pd" @click="is_huodong=false">
                    <img src="/static/img/csjgh_b.jpg" class="SDf_jh_drtd fl">
                    <section class="ov cen pt15">
                        <p class="fz24 red">9</p>
                        <p class="fz12 dian">进行中的拼团</p>
                    </section>
                    <p class="qc"></p>
                </section>
                    
                    
            </section>
                
                 <section class="btm  mui-row  pd pt10 pm10" v-else>
         
                    <img src="/static/img/csjgh_a.jpg" class="SDf_jh_drtd fl">
                    <section class="ov pl15 pt10 fz14 z6 z6 pr">
                      待付款: <span class="red">6</span>
                        <span class="ml10"> 待收货: <span class="red">6</span></span>
                        
                        <p class="mt10 z6">
                            待分享: <span class="red">6</span>
                            <span class="ml10"> 
                                待收货: 
                                <span class="red">6</span>
                            </span>
                        </p>
                        <p class="fz12 sdf_jh_dert">查看所有砍价订单 <i class="dx icon-right fz12 z9"></i> </p>
                    </section>
                    <p class="qc"></p>
             
                    
                     
                    
                    
            </section>
                
                
                
    </section>
        
-->
        


			<section class=" bgff mt10">
				<p class="df_toyute_s pd">
					<i class="f_i ding_s ac"></i>
					<span class="fz14 z3">我的分享 <i class="dx icon-right fz12 fr z9"></i></span>
				</p>
				<section class="mui-row btm  pd">
					<section class="mui-col-xs-6 pt10 pm10 brm" @click="kj_jhd_er('myhaoyou?friends_count='+user_info.friends_count)">

						<i class="f_i df_jhg_rer fl"></i>
						<section class="ov pl10 sdf_jh_drt">
							<i class="dx icon-right fz12 rihg_erertx z9 mr10"></i>
							<p class="fz12 pt10">好友</p>
<!--							<p class="z3 fz14 ">{{user_info.friends_count}}</p>-->
						</section>
					</section>

					<section class="mui-col-xs-6 pt10 pm10 pl10 pr">
						<i class="dx icon-right fz12 rihg_erertx z9"></i>
						<i class="f_i df_jhg_rer fl ab"></i>
						<section class="ov pl10 sdf_jh_drt">
							<p class="fz12 pt10" @click="hf('generalize',{type:1})">推广名片</p>
						</section>
					</section>

				</section>
				<p class="pd pt5 pm5 fz12 btm pr">
					我的推荐人：{{user_info.referee}}
					<span class="fr">


                <span class="bgred cf dgf_jgh_ertx fz12 " @click="xian_s=true"><i class="dx icon-erweima fz14"></i>分享</span>
					</span>
				</p>

			</section>

			<section class=" bgff mt10">
				<p class="df_toyute_s pd">
					<i class="f_i ding_s ad"></i>
					<span class="fz14 z3 ">客户中心 <i class="dx icon-right fz12 fr z9"></i></span>
				</p>
				<section class="mui-row btm  pd">
					<section class="mui-col-xs-6 pt10 pm10 brm" @click="kj_jhd_er('nykehu')">
						<i class="dx icon-right fz12 rihg_erertx mr10 z9"></i>
						<i class="f_i df_jhg_rer fl ac"></i>
						<section class="ov pl10 sdf_jh_drt">
							<p class="fz12 pt10">客户总计</p>
<!--							<p class="z3 fz14 ">{{user_info.customer_count}}</p>-->
						</section>
					</section>

					<section class="mui-col-xs-6 pt10 pm10 pl10 pr z9" @click="kj_jhd_er('order_form?kehu=1')">
						<i class="dx icon-right fz12 rihg_erertx"></i>
						<i class="f_i df_jhg_rer fl ad"></i>
						<section class="ov pl10 sdf_jh_drt">
							<p class="fz12 pt10">今日订单</p>
<!--							<p class="z3 fz14 ">{{user_info.customer_order_today}}</p>-->
						</section>
					</section>

				</section>

			</section>

			<erweima :xian_s='xian_s' @sd_jher="xian_s=''"></erweima>
<!--
<advertising :position_id="9" class="mt10"></advertising>
                <showcase :position_id="9" class="mt10"></showcase>
-->
		</div>

	<loadin v-else></loadin>
		<dibu :kjh_s="4"></dibu>
        
  <yanzheng v-if="is_sdfer"  @tijiao="tijiao_dd" @yc_sd="is_sdfer=false" :is_sdf="true" :is_sdfer="is_sdfer"></yanzheng>
	</div>
</template>
<script>
    import dibu from "../components/dibu.vue"
    import erweima from "../components/erweima.vue"
    import loadin from "../components/loadin.vue"
    import advertising from "../components/advertising.vue"
     import showcase from "../components/showcase.vue"
        import yanzheng from "../components/yanzheng.vue"
    
    export default {
        data() {
            return { 
                jindu: 0,
                xian_s: "", //true显示二维码弹出层
                user_info: "",
                user_info_w: '',
                pher_er:"",
                is_sdfer:false,
                sd_errt_er:"",
                is_huodong:true, 
                mydingd: [{
                        id: 1,
                        type: 6,
                        name: "待付款",
                        icon: "",
                        liul: 0
                    },
                    {
                        id: 2,
                        type: 1,
                        name: "待发货",
                        icon: "ab",
                        liul: 0
                    },
                    {
                        id: 3,
                        type: 2,
                        name: "待收货",
                        icon: "ac",
                        liul: 0
                    },
                    {
                        id: 4,
                        type: 11,
                        name: "待评价",
                        icon: "ad",
                        liul: 0
                    },
                    {
                        id: 0,
                        name: "退款/售后",
                        icon: "ae",
                        liul: 0
                    }
                ]
            }
        },
        components: {
            dibu: dibu,
            erweima: erweima,
            loadin: loadin,
            showcase,
            advertising: advertising,
            yanzheng
        },
        methods: {

            hjg_sdr(idx, id, type) {
                if (idx < 4) {
                    this.kj_jhd_er(`order_form?type=${id}&types=${type}`)
                } else if (idx == 4) {
                    this.kj_jhd_er('shouhoulist')
                }

            },
            kj_jhd_er(url){
                this.hf(url)
                  
            },
            tijiao_dd(){
                this.hf(this.sd_errt_er)
            }

        },
        mounted() {
            let th = this
            window.scrollTo(0, 0);
            setTimeout(a => {
                this.jindu = 60

            }, 50)
            setTimeout(function() {
                th.Title("个人中心")
            }, 1000);




        },
        filters: { //过滤器   页面上调用{{dt.state|lei}}
            baoliu(num) {
                return parseFloat(num).toFixed(2)
            }
        },
        activated() { 
              this.Title("个人中心")
            let th=this 
            this.post("user/index", {
                token: this.token
            }, function(data) {
                th.user_info = data
                th.setuser_info(data)
                th.mydingd[0].liul = data.order_daifukuan
                th.mydingd[1].liul = data.order_daifahuo
                th.mydingd[2].liul = data.order_daishouhuo
                th.mydingd[3].liul = data.order_daipingjia
                th.mydingd[4].liul = data.order_shouhou
                th.user_info_w = "op_show"
            })
            this.carnumber(function(num) {
                $(".jh_dfd_derrt").text(num)
            })
        }
    }

</script>
<style scoped>
    .sdf_DSEEER{
        background: #F2F2F2;
        position: fixed;
        left: 0px;
        top: 0px;
        z-index: 1;
        width: 100%;
    }
    .sd_hg_eer{
         background: #F2F2F2; 
    }
    .s_jh_omd {
        padding-bottom: 5px;
    }

    .df_jh_ert {
        height: 3px;
        background: #342E27;
        border-radius: 10px;
        position: relative;
    }

    .jd_tiaos {
        position: absolute;
        left: 0px;
        top: 0px;
        height: 100%;
        transition: all linear 2s;
        -moz-transition: all linear 2s;
        -webkit-transition: all linear 2s;
        -o-transition: all linear 2s;
        background: linear-gradient(to right, #DD6725, #ECB882);
    }

    .fd_jh_ert {
        width: 32px;
        height: 23px;
        background-position: -299px -28px;
        color: #fff;
        position: absolute;
        font-size: 12px;
        right: -16px;
        top: 3px;
        text-align: center;
    }

    .fd_jh_ert span {
        display: inline-block;
        transform: scale(0.9)
    }

    .s_kjh_der {
        height: 27px;
        line-height: 27px;
    }

    .sdkj_s {
        width: 25px;
        height: 26px;
        background-position: -152px -18px;
    }

    .sdkj_s.ab {
        width: 26px;
        height: 24px;
        background-position: -207px -22px
    }

    .sdkj_s.ac {
        width: 23px;
        height: 28px;
        background-position: -260px -19px;
    }

    .dsf_jh_er {
        position: absolute;
        left: 15px;
        top: -10px;
        padding: 1px 7px;
        display: none;
        /*
        min-width: 18px;
        height: 18px;
*/
        font-size: 12px;
        line-height: 18px;
        text-align: center;
        transform: scale(0.8);
        border-radius: 10px;
    }

    .df_toyute_s {
        line-height: 35px;
    }

    .ding_s {
        width: 22px;
        height: 22px;
        background-position: -15px -54px;
        position: relative;
        bottom: 1px;
        margin-right: 2px;
    }

    .ding_s.ab {
        background-position: -47px -53px;
    }
    .ding_s.ba{
        background-position: -193px -579px;
    }

    .sd_ds_srtx {
        width: 20%;
        float: left;
    }

    .myding_s {
        width: 24px;
        height: 24px;
        background-position: -11px -97px;
    }

    .myding_s.ab {
        width: 24px;
        height: 24px;
        background-position: -62px -97px;
    }

    .myding_s.ac {
        width: 26px;
        height: 25px;
        background-position: -110px -96px;
    }

    .myding_s.ad {
        width: 26px;
        height: 23px;
        background-position: -158px -96px;
    }

    .myding_s.ae {
        width: 25px;
        height: 24px;
        background-position: -207px -95px;
    }

    .pm8 {
        padding-bottom: 8px
    }

    .ding_s.ac {
        width: 22px;
        height: 22px;
        background-position: -75px -52px;
    }

    .df_jhg_rer {
        width: 36px;
        height: 35px;
        background-position: -254px -81px;
    }

    .sdf_jh_drt {
        line-height: 1.4
    }

    .df_jhg_rer.ab {
        background-position: -301px -84px;
    }

    .rihg_erertx {
        position: absolute;
        right: 0px;
        top: 16px;
    }

    .dgf_jgh_ertx {
        border-radius: 20px;
        padding: 3px 10px;
    }

    .dgf_jgh_ertx .dx {
        margin-right: 4px;
    }

    .ding_s.ad {
        background-position: -105px -53px;
    }

    .df_jhg_rer.ac {
        background-position: -146px -51px
    }

    .df_jhg_rer.ad {
        background-position: -199px -50px;
    }

    .op_show {
        opacity: 1
    }

    .fd_jh_ert.acp {
        transform: rotate(180deg);
        top: -28px;
    }

    .fd_jh_ert.acp span {
        transform: rotate(180deg) scale(0.8);
    }

    .shg_jh_iue {
        padding-left: 0px;
    }
    
    
    .SDf_jh_drtd{
        width: 70px;
        height: 70px;
    }
    .sdf_jh_dert{
        position: absolute;
        right: 0px;
        top: 25px;
    }
    .df_df_Drrtt{
        color: #FA9370;
        font-size: 26px;
        position: relative;
        top: 2px;
    }
    .df_df_Drrtt.ab{
        font-size: 23px;
    }

</style>
