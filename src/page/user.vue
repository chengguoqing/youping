<template>
<div >
    <section class="user_top_e pd">
            <section class="pt20">
                <i class="f_p shezhi_d" @click="hf('gerenshezi')"></i>
            </section>
            <section class="pd">
                    <section class="yj4 bgff jh_jh_drt cen pr">
                           <i class="dx icon-erweima gf_jhh_eert" @click="ershow=true"></i>
                        
                        
                            <img :src="user_info.header_image" class="user_icon_e yj"> 
                        <section class="sd_jh_deertrt">
                        <p class="fz12 z3 b">{{user_info.user_name||'&nbsp;'}}</p>
                        
                        <p class="fz12 sdf_jh_deetr">
                    ID:{{user_info.user_id}}  <span class="ml5">个人资料完善度：{{user_info.integrity}}%</span>
                        </p>
                        <p>
                        <i class="f_p huangjin_e cz"></i>
                            <span class="fz12 sdf_jh_deetr f_b z3">{{user_info.user_group_name}}</span>
                        </p>  
                        </section>
                        <section class="box sdf_jhgh_eet mt10 pm10">
                            <section class="box_a red fz16"  @click="kj_jhd_er('silver_wallet')" v-if="user_info.yinsheng==1">
                            <span v-if="!user_info.user_money">0</span><span v-else>{{user_info.yinsheng_money|baoliu}}</span>
                                
                                <p class="z6 fz12 yty_derrtt">银盛钱包</p>
                            </section>
                               <section class="box_a red fz16" @click="kj_jhd_er('myyue?user_money='+user_info.user_money)">
                             <span v-if="!user_info.user_money">0</span>
                           <span v-else> {{user_info.user_money|baoliu}}</span>
                                <p class="z6 fz12 yty_derrtt">余额</p>
                            </section>
                            
                            
                             <section class="box_a red fz16" @click="kj_jhd_er('myqianbao')">
                             <span v-if="!user_info.total_commissions">0</span>
                           <span v-else> {{user_info.total_commissions|baoliu}}</span>
                                <p class="z6 fz12 yty_derrtt">钱包</p>
                            </section>
                             <section class="box_a red fz16"  @click="kj_jhd_er('myjifen?pay_points='+user_info.pay_points)">
                               <span v-if="!user_info.pay_points">0</span> <span v-else> {{user_info.pay_points}}</span>
                                <p class="z6 fz12 yty_derrtt">积分</p>
                            </section>
                             <section class="box_a red fz16" @click="kj_jhd_er('yhq')">
                             {{!user_info.coupon_count?0:user_info.coupon_count}}
                                <p class="z6 fz12 yty_derrtt">卡券</p>
                            </section>
                        </section>
                        
                        
                    </section>
            </section>
    </section>

    
    
    		
    
    
    <section class="pd mt30">
    
    
    	<section class=" bgff mt10 yj4">
				<p class="df_toyute_s pd">
				<i class="f_p wodij_der ab"></i>
					<span class="fz12 z3">我的订单</span>

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
        
        
        
        <section class=" bgff mt10" v-if="user_info.shopkeeper_id==1" >
				<p class="df_toyute_s pd">
					<i class="f_p sdf_jhhj_dert"></i>
					<span class="fz14 z3">我的销售</span>
				</p>
                    
                    		<section class="mui-row btm  pd">
					<section class="mui-col-xs-6 pt10 pm10 brm" @click="hf('dingdan')">
						<i class="dx icon-right fz12 rihg_erertx mr10 z9"></i>
						<i class="f_cnp df_jhg_rer fl ca"></i>
						<section class="ov pl10 sdf_jh_drt">
							<p class="fz12 pt10">订单信息</p>
						</section>
					</section>

                    	<section class="mui-col-xs-6 pt10 pm10 pl10 pr z9" @click="saoma_s">

						<i class="dx icon-right fz12 rihg_erertx "></i>
						<i class="f_cnp df_jhg_rer fl cb"></i>
						<section class="ov pl10 sdf_jh_drt">
							<p class="fz12 pt10">扫码核单</p>

						</section>
					</section>

				</section>
                    
                    
                    
    </section>
        
        
        
            	<section class=" bgff mt10 yj4" v-if='system_name!="ninehouse"'>
				<p class="df_toyute_s pd">
					<i class="f_p wodij_der "></i>
					<span class="fz12 z3">我的服务</span>

					
				</p>
    <section class="btm bgff pt10 s_jh_omd mui-row cen">
              <section class="mui-col-xs-4"  v-if="user_info.share_user_commission>0" @click="hf('fenxiangzhezx',{type:1})">
                    <p class="sd_derrt">
                        <i class="f_p erdf_jh_drt "></i>
                    </p>
                  <p class="yty_derrtt fz12">分享者中心</p>
    
                </section> 
         <section class="mui-col-xs-4"  v-else @click="tishi('分享者')">
                    <p class="sd_derrt">
                        <i class="f_p erdf_jh_drt act"></i>
                    </p>
                  <p class="yty_derrtt fz12">分享者中心</p>
    
                </section> 
        
         <section class="mui-col-xs-4"  v-if="user_info.agent_user_commission>0" @click="hf('fenxiangzhezx',{type:2})" >
                    <p class="sd_derrt">
                        <i class="f_p erdf_jh_drt ab "></i>
                    </p>
                  <p class="yty_derrtt fz12">服务商中心</p>
    
                </section> 
             <section class="mui-col-xs-4"  v-else @click="tishi('服务商')">
                    <p class="sd_derrt">
                        <i class="f_p erdf_jh_drt ab act"></i>
                    </p>
                  <p class="yty_derrtt fz12">服务商中心</p> 
    
                </section> 
        
<!--
         <section class="mui-col-xs-3" @click="is_lekj=true">
        
                    <p class="sd_derrt">
                        <i class="f_p erdf_jh_drt ac"></i>
               
                  <p class="yty_derrtt fz12">客服 </p>

                </section>  
-->

 
                 <section class="mui-col-xs-4" @click="hf('jiameng')"  v-if="user_info.shopkeeper_id>0">
                    <p class="sd_derrt">
                        <i class="f_p erdf_jh_drt ad act"></i>
                    </p> 
                  <p class="yty_derrtt fz12">加盟商中心 </p>
    
                </section> 
        
        
          <section class="mui-col-xs-4"  v-else @click="tishi('加盟商')">
                    <p class="sd_derrt">
                        <i class="f_p erdf_jh_drt ad "></i>
                    </p> 
                  <p class="yty_derrtt fz12">加盟商中心 </p>
    
                </section> 

        
        
         
    </section>
                    
    </section>
        
            <section class="mt10">
      <huiyuanka :taoka="user_info.taoka"></huiyuanka>
    </section>
        	<section class=" bgff mt10 yj4">
				<p class="df_toyute_s pd ">
					<i class="f_p wodij_der ac"></i>
					<span class="fz12 z3">我的分享</span>

					
				</p>
    <section class="btm bgff pt10 s_jh_omd mui-row cen">
<!--        @click="kj_jhd_er('myhaoyou?friends_count='+user_info.friends_count)"-->
            <section class="mui-col-xs-6"   @click="kj_jhd_er('myhaoyou?friends_count='+user_info.friends_count)">
                    <section class="sd_jkh_deerx ov">
                            <p class="dd_rendert">
                            <i class="f_p "></i>
                            </p>
                        <p class="bgff sdf_jerh_deet fz12">
    好友
                </p>
                    </section>
                
            </section>
        
        
         
        <section class="mui-col-xs-6">
                    <section class="sd_jkh_deerx ov ab" @click="sc_tu_rf">
                            <p class="dd_rendert">
                            <i class="f_p "></i>
                            </p>
                        <p class="bgff sdf_jerh_deet fz12">
    推广名片
                </p>
                    </section>
                
            </section>
    </section>
                
                
                
                <p class="pd pt5 pm5 fz12 btm pr mt5">
					我的推荐人：{{user_info.referee}}
					<span class="fr">


                <span class="bgred cf dgf_jgh_ertx fz12 " @click="xian_s=true"><i class="dx icon-erweima fz14"></i>分享</span>
					</span>
				</p>

                
                
    </section>
        
        
        <fenxiangpup v-if="ycsd_d" :is_sd_fn="ycsd_d" :url="fn_url" msg="长按图片发送给朋友" @ycsd_d="ycsd_d=false"></fenxiangpup>
        	<erweima :xian_s='xian_s' @sd_jher="xian_s=''"></erweima>
    </section>
   <dibu :kjh_s="4"></dibu>
    <kefu v-if="is_lekj" @cliser="is_lekj=false"></kefu>
    
    
    
    
<!--
         <van-dialog
      v-model="ershow"
       :showConfirmButton="false"
    >
-->
    
    <section class="sd_drertxrt" v-if="ershow">
        <section class="sd_Df_drtxc pr">
            <p class="cf dsf_jh_derter">
                到店核销码
            </p>
               
            <section class="pd">
                <section class="wrwe_ma">
                    <img :src="user_info.tihuoma" class="w100 h100">
                </section>
                <p class="z3 fz12 cen mt5">
                    请将本码出示给门店店员
                </p>
                <p class="z9 fz12 cen sdf_jh_eet">
                    本核销码用于到店自提商品、到店领取各类奖品、<br>
享受各种套餐中线下服务时的身份认证
                    </p>
                <section class="mt20">
            <p class="fz12 z3">使用方式：</p>
                    <p class="fz12 z6">
        1. 将本码出示给门店工作人员；<br>
2. 工作人员扫码后会直接获得您的到店自提订单列表、可领取的奖品列表或待使用的店内服务；<br>
3. 工作人员核销订单/奖品并将商品同时交付给您，或核销掉一次服务内容
        </p>
        </section>
               </section> 
                
         
    
          
            <section class="dsfrttxert">
                <button class="mn_sdd_Dert" @click="hf('hexiao',{pickup_code:user_info.openid,type:2})">我的待核销项目</button>
            </section>  
            
                 <i class="dx icon-close close_dert" @click="ershow=false"></i>
               </section>   
        
    
               </section>
         
<!--                <i class="dx icon-close close_dert" @click="ershow=false"></i>-->
          
      
<!--    </van-dialog>-->
    
    
</div>
</template>
<script>
    var wx = require('weixin-js-sdk');
    import erweima from "../components/erweima"
    import dibu from "../components/dibu.vue"
    import fenxiangpup from "../components/fenxiangpup"
    import kefu from "../components/meiye/kefu"
    import huiyuanka from "../components/user/huiyuanka"
    import {
        MessageBox
    } from 'mint-ui';
    import {
        Toast
    } from 'mint-ui';
    export default {
        data() {
            return {
                ershow: false,
                jindu: 0,
                ycsd_d: false,
                fn_url: "",
                xian_s: "", //true显示二维码弹出层
                user_info: "",
                user_info_w: '',
                pher_er: "",
                is_sdfer: false,
                sd_errt_er: "",
                is_huodong: true,
                is_lekj: false,
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
            erweima,
            fenxiangpup,
            dibu,
            kefu,
            huiyuanka
        },
        methods: {
            saoma_s() {
                let th = this
                wx.scanQRCode({
                    needResult: 1,
                    success: function(res) {
                        var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                        let pickupcodecheck = {}
                        pickupcodecheck.token = th.token
                        pickupcodecheck.pickup_code = result
                        th.post("user/saoma", pickupcodecheck, function(data) {

                            if (data.type == 1) {
                                th.post('user/pickupcodecheck', pickupcodecheck, function(data) {
                                    let is_verification = data.is_verification,
                                        order_id = data.order_id,
                                        orderlist = {}
                                    orderlist.token = th.token
                                    orderlist.order_id = order_id
                                    orderlist.pick_status = 1
                                    orderlist.current_page = 1
                                    th.post("user/orderlist", orderlist, function(daty) {
                                        let sd_df = daty.data[0] || {}
                                        if (!daty.data[0]) {
                                            th.$notify('无权限核单！');
                                            return
                                        }
                                        sd_df.dx_type = 1
                                        sd_df.pick_status = 3
                                        sd_df.result = result
                                        sd_df.is_verification = is_verification
                                        sd_df.pickup_code = result
                                        th.hf('order_form_xq', {
                                            orderlist_data: sd_df
                                        })
                                    })
                                })
                            }
                            if (data.type == 2) { //新的到店领取，到店服务
                                th.hf('hexiao', {
                                    pickup_code: result
                                })


                            }
                        })



                    }
                });
            },

            tishi(text) {
                Toast({
                    message: "本页仅" + text + "您尚不是" + text,
                    position: 'bottom',
                    duration: 5000
                });
            },
            hjg_sdr(idx, id, type) {
                if (idx < 4) {
                    this.kj_jhd_er(`order_form?type=${id}&types=${type}`)
                } else if (idx == 4) {
                    this.kj_jhd_er('shouhoulist')
                }

            },
            kj_jhd_er(url) {
                this.hf(url)

            },
            tijiao_dd() {
                this.hf(this.sd_errt_er)
            },
            sc_tu_rf(id_d) {
                if (system_name == "ninehouse") {
                    this.ycsd_d = true
                    return
                }

                if (this.$store.state.shopinfo.user_group_id > 0) {
                    this.ycsd_d = true
                } else {
                    MessageBox(' ', '不符合生成推广名片仅限会员，请联系管理员');
                    //                    MessageBox(' ', '推广名片仅限会员可以生成，您目前尚不是会员，无法生成推广名片');
                }
            }
        },
        mounted() {

        },
        filters: { //过滤器   页面上调用{{dt.state|lei}}
            baoliu(num) {
                return parseFloat(num).toFixed(2)
            }
        },
        activated() {
            this.Title("个人中心")

            let th = this
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
                th.fn_url = data.weicard + "?v=" + new Date().getTime()

                if (th.$route.query.typee == 2) {
                    th.sc_tu_rf()
                }



            })
            this.carnumber(function(num) {
                $(".jh_dfd_derrt").text(num)
            })
        }
    }

</script>
<style scoped>
    .user_top_e {
        height: 175px;
        background: linear-gradient(to right, #5195E8, #7A7BEE);
    }

    .shezhi_d {
        width: 20px;
        height: 21px;
        background-position: -172px -125px;
    }

    .jh_jh_drt {
        min-height: 100px;
        margin-top: 15px;
        box-shadow: 0 2px 2px rgba(0, 0, 0, .2);
    }

    .user_icon_e {
        width: 60px;
        height: 60px;
        background: #fff;
        border: 2px solid #fff;
        background: #C8D4FF;
        margin-top: -30px;

    }

    .sdf_jh_deetr {
        transform: scale(0.85);
        margin-top: 5px;

    }

    .huangjin_e {
        width: 14px;
        height: 11px;
        background-position: -138px -225px;
        position: relative;
        top: -1px;
    }

    .sd_jh_deertrt {
        line-height: 1.1
    }

    .yty_derrtt {
        transform: scale(0.85);
    }

    .sdf_jhgh_eet {
        line-height: 1.3
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

    .ding_s.ba {
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


    .SDf_jh_drtd {
        width: 70px;
        height: 70px;
    }

    .sdf_jh_dert {
        position: absolute;
        right: 0px;
        top: 25px;
    }

    .df_df_Drrtt {
        color: #FA9370;
        font-size: 26px;
        position: relative;
        top: 2px;
    }

    .df_df_Drrtt.ab {
        font-size: 23px;
    }

    .wodij_der {
        width: 17px;
        height: 17px;
        background-position: -207px -132px;
    }

    .erdf_jh_drt {
        width: 21px;
        height: 22px;
        background-position: -245px -127px
    }

    .erdf_jh_drt.ab {
        background-position: -287px -124px;
    }

    .erdf_jh_drt.ac {
        background-position: -321px -127px;
    }

    .erdf_jh_drt.act {
        background-position: -277px -182px
    }

    .erdf_jh_drt.act.ab {
        background-position: -319px -179px
    }

    .erdf_jh_drt.ad {
        width: 22px;
        height: 17px;
        background-position: -281px -222px;
    }

    .erdf_jh_drt.ad.act {
        background-position: -244px -222px
    }

    .sd_derrt {
        height: 25px;
        line-height: 25px;
    }

    .sd_jkh_deerx {
        width: 82px;
        height: 107px;
        margin: auto;
        box-shadow: 0 0px 4px rgba(0, 0, 0, .2);
        border-radius: 8px;
        background: linear-gradient(to right, #B5DAFB, #A8CCFD);
    }

    .sd_jkh_deerx.ab {
        background: linear-gradient(to right, #FEC3DD, #FEA5AF);
    }

    .dd_rendert {
        height: 83px;
        line-height: 83px;
    }

    .dd_rendert i.f_p {
        width: 44px;
        height: 38px;
        background-position: -138px -165px;
    }

    .sd_jkh_deerx.ab .dd_rendert i.f_p {
        width: 40px;
        background-position: -215px -165px;
    }

    .sdf_jerh_deet {
        height: 24px;
        line-height: 24px;
    }


    .wodij_der.ab {
        background-position: -175px -221px
    }




    .wodij_der.ac {
        background-position: -209px -221px
    }


    .gf_jhh_eert {
        position: absolute;
        right: 10px;
        top: 16px;
        font-size: 30px;
        background: #fff;
        padding: 8px 2px 4px 2px;
        border-radius: 4px;
        z-index: 999
    }






    .dsf_jh_derter {
        background: #478AFF;
        font-size: 20px;
        height: 100px;
        text-align: center;
        padding-top: 30px;
        border-bottom-right-radius: 200px 15px;
        border-bottom-left-radius: 200px 15px;
    }

    .wrwe_ma {
        width: 120px;
        height: 120px;
        border: 1px solid #F2DCB8;
        margin: auto;
        padding: 5px;
        margin-top: -35px;

    }

    .sdf_jh_eet {
        line-height: 1.5
    }

    .dsfrttxert {
        padding: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-top: 20px;
    }

    .mn_sdd_Dert {
        width: 100%;
        color: #694206;
        font-size: 14px;
        height: 40px;
        background: linear-gradient(to bottom, #F2DCB6, #EECC95);
        border: 0px;
    }

    .close_dert {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 22px;
        color: #fff;
    }

    .sd_drertxrt {
        position: fixed;
        left: 0px;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        background: rgba(0, 0, 0, 0.5);
    }

    .sd_Df_drtxc {
        background: #fff;
        width: 300px;
        margin: auto;
        margin-top: 20%
    }



    .df_jhg_rer.ca {
        background-position: -58px -369px
    }

    .df_jhg_rer.cb {
        background-position: -120px -369px
    }

    .gf_jhh_eert {
        position: absolute;
        right: 10px;
        font-size: 30px;
        background: #fff;
        padding: 8px 2px 4px 2px;
        border-radius: 4px;
        z-index: 999
    }

</style>
