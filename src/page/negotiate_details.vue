<template>
    <div class="sd_drffg pr" :class="sd.show_type==4||sd.show_type==6?'act':''">
        <p class="sd_jh_dfg" v-if="sd.show_type==4||sd.show_type==6">2</p>
        	<header class="mui-bar mui-bar-nav asd_uy_dftx">
				<a class=" mui-pull-left z3 dx icon-left mt2" @click="$router.back(-1)">

				</a>
				<h1 class="mui-title z3  cen ov">

 
            <section class="mui-row gd dsf_jgh_dertx">
                  <p class="mui-col-xs-4 ds_jh_etxc" v-for="(sr,idx) in sd_dser" :class="sr.cls" @click="jh_uty_s(sr.url_s,idx)">
                        <span class="z3">{{sr.name}} </span>
                    </p> 
            </section>  

              <section class="mui-row">
                  图文详情
            </section>


         </h1>

 <information :sd_eer="sd_eer"></information>



			</header>
        
        			<div class="mui-content pr" style="padding-top:45px">

                        		<section class="kjh_er_rtxc pr">
						<mt-swipe :auto="0" :speed="10" @change="handleChange" :showIndicators="false" :stopPropagation="true">
							<mt-swipe-item v-for="sd in lunbotu" :key="idx" class="banner_sdert">
								<img :src="sd.thumb_url" class="fm">
							</mt-swipe-item>
						</mt-swipe>
						<p class="pd sdf_jh_eettxc">
							<span>{{lunindex+'/'+lunbotu.length}}</span>
						</p>
                                    
                                    
                                    
                                    
                    <section class="sd_kanjiadr pr">
                        <img src="/static/img/cnkj.png" class="w100">
                        <section class="sd_nbgg_bgf  pd mui-row">
                    <section class="mui-col-xs-7">
                        <p class="cf fz30">
                            ￥<span class="fz30" v-html="price_guo(sd.bargain_goods_min_price)"></span>
                        </p>
                        <section class="df_jh_deert">
                            <span class="fz12 cf ">
                                <i class="f_a zuidi_e"></i>
                                <span class="yuanjia_e">原价：{{sd.shop_price}}</span>
                            </span>    
                        
                        </section>
                        
                        
                    </section>
                        <section class="mui-col-xs-5 cen " v-if="date_e!=0">
                            <p class="cf fz14">距结束仅剩</p>
                                <section class="fz14 cf mt2">
                                    <i class="f_a sd_jh_bg">{{is_drte_er.h}}</i>
                                    时
                                         <i class="f_a sd_jh_bg">{{is_drte_er.m}}</i>
                                    分
                                         <i class="f_a sd_jh_bg">{{is_drte_er.m_b}}</i>
                                    秒
                        </section>
                        </section>  
                            
                                   <section class="mui-col-xs-5 cen cf pt5 pl40" v-else>
                                       {{sd.count_bargain_user_nums}}
                                       <p class="cf fz12 ">人正在参与</p>
                                       
    </section>
                            
                            
                            
                    </section>
                        
                        
                      </section>
                                    
                                    
                                    
					</section>
                        
                        
                        
                        
		

<!--
<section class="kjh_er_rtxc pr">
                        <img src="http://images.cangniaowl.com/238/20180330/db689c11401bd1ae00f75efdfea0d5ec.jpg" class="fm">
                        
            </section>
-->

                        
                <section class="pd pt15 pm10 bgff">
    
                    <section class="wdf_sc_rrt cen fr pt5" @click="collection_fun">
                        <i class="dx dx icon-shoucang fz18 "  :class="shiy_s?'act':''"></i>
                        <p>收藏</p>
                    </section>
                    <section class="ov">
                            <p class="fz17 z3">{{sd.goods_name}}</p>
                    <p class="mt5">
                        <span class="bapf_dr_er" v-if="d_info.is_shipping==1">包邮</span>
<!--                        <span class="bapf_dr_er">仅剩321件</span>-->
                    </p>
                    </section>
                    <p class="qc"></p>
                </section>        
                        
            <section class="sd_jh_derrer mt10 pr">
                <img src="/static/img/kanjiazen.png" class="w100">
                <section class="use_nhg_ee pt10 cen">
                    <img :src="sd.header_image" class="yj user_icon_der">
                    <p class="fz16 z3">{{sd.user_name}}</p>
                </section>
            </section>
                        
            <section class="bgff pt20 pm20 cen ov pr">
<!--                未砍价-->
                <section v-if="sd.show_type==1">
                
                <i class="f_a dian_sed_se"></i>
                <span class="z6 fz14">自己先砍一刀，才能邀请好友帮忙砍价哦 </span>
                
                <i class="f_a dian_sed_se ab"></i>
                
                <p class="kans_dert mt10">
                    <a class="mui-btn w100" @click="is_sdrf=true">先砍一刀</a>
                </p>
               
                    </section>
                
<!--                已砍价-->
                <section class=""  v-if="sd.show_type>1">
                          <i class="f_a dian_sed_se"></i>
                <span class="z6 fz14">加油！还差<span class="red">{{sd.still_need_bargain_friend_nums}}</span>个好友助力，就能低价领走好物！ </span>
                
                <i class="f_a dian_sed_se ab"></i>
                    
                    <section class="df_jh_kand fz14">
                        已砍<span>{{sd.sum_bargain_price}}</span>元，还差<span class="red">{{sd.still_need_bargain_price}}</span>元
                        
                        <p class="jindu_der mt5">
                            <span class="gd" :style="{'width':sd.bargain_percent+'%'}"></span>
                        </p>
                        <section class="mt5 fz12 box">
                            <section class="box_a fz12 tl">
                                    低价：<span class="red">￥{{sd.bargain_goods_min_price}}</span>
                            </section>
                            
                                    <section class="box_a fz12 ">
                                    已砍至：<span class="red">￥{{sd.shop_current_price}}</span>
                            </section>
                     
                            
                                    <section class="box_a fz12 tr z9">
                                    原价：<span class="">￥{{sd.shop_price}}</span>
                            </section>
                    
                        </section>
                        
                        
                           <p class="kans_dert mt20" v-if="date_e==1&&sd.show_type==2">
                                <a class="mui-btn w100 ab" @click="jiage_sd=sd.shop_current_price;popupVisible=true">当前价格购买</a>
                    <a class="mui-btn w100" @click="is_sd_fn=true"> 继续找人帮砍</a>
                </p>
                        
                <p class="kans_dert mt20" v-if="date_e==1&&sd.show_type==3">
                                <a class="mui-btn w100 ab" @click="jiage_sd=sd.shop_current_price;popupVisible=true">当前价格购买</a>
                    <a class="mui-btn w100" @click="isd_lijizhifu=true"> 立即购买</a>
                </p>
                        
                        
                        
                                 <p class="kans_dert mt20" v-if="sd.show_type==5">
                                <a class="mui-btn w100 ab" @click="is_sdrf=true">帮TA砍一刀</a>
                    <a class="mui-btn w100"  @click="hf(new_xinks())"> 我也要参与</a>
                </p>
                        
                        
                         <p class="kans_dert mt20" v-if="sd.show_type==7">
                            <a class="mui-btn w100 ab"  @click="is_sd_fn=true"><i class="f_a sdf_sas_er ac"></i>已帮砍，找人帮TA砍</a>
                             
                    <a class="mui-btn w100" @click="hf(new_xinks())"><i class="f_a sdf_sas_er ab"></i>我也要参与</a>
                </p>
                        
                        
                        
                               
                        
                </section>
                    
                    
                    
                </section>
                
                 <p class="sd_jherrt_der">
                    <span class="dian_deert" v-for="sd in 100"></span>
                </p>
                
            </section>     
                        
                        
                        
                 <section class="mt10">
                    <p class="cen kh_tilert z3 fz16">
                     <i class="f_a kanjia_liu"></i>    砍价流程
                    </p>
                     <section class="bgff pd pt20 pm20 cen liucheng">
                    <img src="/static/img/liucheng.jpg">
                         
                <p class="sd_jherrt_der">
                    <span class="dian_deert" v-for="sd in 100"></span>
                </p>
                </section>
                     
                </section>  
                        
                        
                        
                        
                                      
                 <section class="mt10" v-if="date_e>0">
                    <p class="cen kh_tilert z3 fz16">
                     <i class="f_a kanjia_liu ad"></i>    好友砍价榜
                    </p> 
                     <section class="bgff pd   cen liucheng">
                    <ul>
                    <li class="pt10 pm10 bbm" v-for="sf in sd.bargain_history_log">
                        <img :src="sf.header_image" class="user_icondsr yj fl">
                        <section class="ov mui-row pl10">
                                <section class="mui-col-xs-7 tl">
                                    <p class="fz16 z3">{{sf.user_name}}</p>
                                    <p class="fz12">{{sf.user_comment}}</p>
                                </section>
                            <section class="mui-col-xs-5 tr">
                                   <p>砍掉 <span class="red">￥</span> 
                                    <span class="fz16 red" v-html="price_guo(sf.this_bargain_price)"></span></p>
                                <p>
                                <span class="sdf_jhj_d fz12">已砍至：¥{{sf.this_time_price}} </span>
                                </p>
                            </section>
                        </section>
                        <p class="qc"></p>
                </li>
                    </ul>
                         
                         
                         
                  
                <p class="sd_jherrt_der">
                    <span class="dian_deert" v-for="sd in 100"></span>
                </p>
                </section>
                     
                </section>  
                        
                        
                        
                        
                        
                    <section class="mt10">
                    <p class="cen kh_tilert z3 fz16">
                     <i class="f_a kanjia_liu ab"></i>    活动规则
                    </p>
                     <section class="bgff pd pt20 pm20  liucheng fz12 z6 tl">
               
                         1.每人首次分享可以帮自己砍价一次，可以邀请好友过来帮忙砍价，每个好友只能帮砍一次；<br>
2.每个好友帮砍金额都不同，完全拼人品；<br>
3.每个商品最多仅可下单3件；<br>
4.砍价发起后有效期为24小时，24小时内未成功下单则本次砍价失效；
                         
                         
                         
                                         <p class="sd_jherrt_der">
                    <span class="dian_deert" v-for="sd in 100"></span>
                </p>
                </section>
                     
                </section>           
                        
            
                        
                        
                      
                        
                        
                        
                                  <section class="mt10" id="pingjia_er">
                    <p class="cen kh_tilert z3 fz16">
                     <i class="f_a kanjia_liu ac"></i>    商品评价
                    </p>
                     <section class="bgff     liucheng ab">
                 
                         	<section >

						<pingjia :goods_id="$route.query.goods_id"></pingjia>

					

					</section>
                         
               
                </section>
                     
                </section>  
                        
                        
                        
                        
                        
                        
                        
                            <section class="mt10" id="xiangqing_er">
                    <p class="cen kh_tilert z3 fz16">
                     <i class="f_a kanjia_liu ac"></i>    商品说明
                    </p>
                     <section class="bgff    cen liucheng ab">
                         	<xiangqing class="mt15" :goods_desc="d_info.goods_desc"></xiangqing>
                         
                         
                 
<!--
                        <img src="http://images.cangniaowl.com/238/20180330/246890e70eeeac959775a556d44b7be2.jpg" class="w100"> 
                        <img src="http://images.cangniaowl.com/238/20180330/abdde138c1af9fb27903395c0da7de09.jpg"> 
-->
                         
               
                </section>
                     
                </section>  
                        
                        
                        
              
                        
    </div>
        
         
<!--         @click="is_sdrf=true"-->
             
            <button class="xiang_dert" v-if="sd.show_type==1" @click="is_sdrf=true">先砍一刀</button>
        
           <div class="xiang_dert mui-row cen" v-if="sd.show_type==2">
               <p class="mui-col-xs-6 cf fz16 sd_hg_Deertt" @click="is_sd_fn=true">找人帮砍</p>
     <p class="mui-col-xs-6 cf fz16" @click="jiage_sd=sd.shop_current_price;popupVisible=true">立即参与 </p>
            </div>
            <button class="xiang_dert" v-if="sd.show_type==3" @click="isd_lijizhifu=true">立即购买</button>
        
        
        <lijigoumaidcc :popupVisible="popupVisible" :jiage_sd="jiage_sd" @close="popupVisible=false" :purchase="purchase" :jiali="jiali" @caozuo="caozuo"></lijigoumaidcc>
        
        <pup_ceng :ty_de="sd.show_type" v-if="is_sdrf" :user_id="th_fmesd" @dsd_er="kanjis_er" @dsd_er_er="dsd_er_er"></pup_ceng>
        
        
        
        <fenxiangpup :is_sd_fn="is_sd_fn" @ycsd_d="is_sd_fn=false" :be_helped_friend_user_id="th_fmesd"></fenxiangpup>
       
        <lijizhifu v-if="isd_lijizhifu&&sd.show_type==3" @liji_sd="jiage_sd=sd.shop_current_price;popupVisible=true;isd_lijizhifu=false" :is_drte_san="is_drte_san" :bargain_goods_min_price="sd.bargain_goods_min_price" @close_e="isd_lijizhifu=false" :header_image="sd.header_image" :user_name="sd.user_name" >
    
    </lijizhifu> 
        
        
          <loadin v-if="is_load"> </loadin>   
    </div>
        </template>
<script>
    import information from "../components/information.vue"
    import pingjia from "../components/pingjia.vue"
    import lijigoumaidcc from "../components/lijigoumaidcc.vue"
    import pup_ceng from "../components/pup_ceng.vue"
    import fenxiangpup from "../components/fenxiangpup.vue"
    import lijizhifu from "../components/lijizhifu.vue"
    import xiangqing from "../components/xiangqing"
    import loadin from "../components/loadin.vue"
    import {
        Toast
    } from 'mint-ui';
    export default {
        data() {
            return {
                date_e: 0, //0:未砍页面 1:已砍页面 2砍价邀请 3.已帮砍页面
                sd_eer: "",
                is_sdrf: false,
                isd_lijizhifu: true,
                sd: "",
                is_load: true,
                lunindex: 1,
                user_id: 0,
                shiy_s: "", //是否收藏
                jiage_sd: "",
                lunbotu: [],
                th_fmesd: "",
                sd_dser: [{
                        name: "商品",
                        url_s: 0,
                        cls: "act"
                    }, {
                        name: "评价",
                        url_s: "pingjia_er",
                        cls: ""
                    }, {
                        name: "详情",
                        map_wz: 0,
                        url_s: "xiangqing_er",
                        cls: ""
                    }


                ],
                is_drte_er: { //礼包下面的倒计时
                    d: 0,
                    h: 0,
                    m: 0,
                    m_b: 0,
                    h_m: 0
                },
                is_drte_san: { //支付的倒计时
                    d: 0,
                    h: 0,
                    m: 0,
                    m_b: 0,
                    h_m: 0
                },
                popupVisible: false,
                purchase: "",
                jiali: 1,
                is_sd_fn: ""
            }
        },
        components: {
            information,
            pingjia,
            lijigoumaidcc,
            pup_ceng,
            fenxiangpup,
            lijizhifu,
            xiangqing,
            loadin
        },
        methods: {
            collection_fun() { //取消和收藏
                let is_delete = 0
                if (this.shiy_s == "act") {
                    this.shiy_s = ""
                    is_delete = 1
                } else {
                    this.shiy_s = "act"

                }
                let th = this,
                    collection = {}
                collection.token = this.token
                collection.is_delete = is_delete
                collection.goods_id = this.$route.query.goods_id
                this.post("product/collection", collection, function(data, dataer) {
                    Toast({
                        message: dataer.return_msg,
                        iconClass: 'dx icon-gou fz32'
                    });
                })
            },
            kan_yidao_we() { //先砍一刀

            },
            handleChange(idx) {
                this.lunindex = idx + 1
            },
            dsd_er_er() {
                this.is_sdrf = false
                this.is_sd_fn = true
                this.bangkan(1)
            },
            kanjis_er() { //先砍一刀弹出层的确定按钮触发
                this.is_sdrf = false
                if (this.sd.show_type == 5) {
                    this.sd.show_type = 7
                }
                if (this.sd.show_type == 1) {
                    this.sd.show_type = 2
                }

            },
            jh_uty_s(url, idx) { //商品 详情 评论切换

                this.sd_dser.map(function(a) {
                    a.cls = ""
                })
                this.sd_dser[idx].cls = "act"
                if (url == 0) {
                    window.scrollTo(0, 0);
                    return
                }
                let dinwe_z = document.querySelector(`#${url}`).offsetTop - 50
                window.scrollTo(0, dinwe_z);
            },
            bangkan(num) {
                this.date_e = num
                window.scrollTo(0, 0)
            }, 
            GetRTime(daye, call_back, ty) {
                var EndTime = new Date(daye);
                var NowTime = new Date();
                var t = EndTime.getTime() - NowTime.getTime();
                var d = 0;
                var h = 0;
                var m = 0;
                var s = 0;
                if (t >= 0) {
                    d = Math.floor(t / 1000 / 60 / 60 / 24);
                    if (ty) {
                        h = Math.floor(t / 1000 / 60 / 60 % 24);
                    } else {
                        h = Math.floor(t / 1000 / 60 / 60);
                    }

                    m = Math.floor(t / 1000 / 60 % 60);
                    s = Math.floor(t / 1000 % 60);
                }
                d < 10 ? d = (0 + '' + d) : d
                h < 10 ? h = (0 + '' + h) : h
                m < 10 ? m = (0 + '' + m) : m
                s < 10 ? s = (0 + '' + s) : s
                call_back(d, h, m, s)
            },

            new_xinks() {
                return `https://api.cangniaowl.com/shop/${this.$store.state.shopinfo.shop_id}.html?router=negotiate_details&goods_id=${this.$route.query.goods_id}#/negotiate_details?goods_id=${this.$route.query.goods_id}&ty_dr=0`


            },
            caozuo(data) { //sku的确定按钮触发
                let checkout = {},
                    th = this
                this.popupVisible = false

                if (data.jiali == 1) {
                    checkout.token = this.token
                    checkout.goods_id = data.goods_id
                    checkout.goods_number = data.goods_number
                    checkout.step = 1
                    console.log(data);
                    if (data.goods_attr_id) {
                        checkout.goods_attr_id = data.goods_attr_id
                    }
                    th.post("shopping/checkout", checkout, function(data) {
                        if (data.error_type == 1) { //限购

                            th.type = 1
                            th.data_list = []
                            th.data_list.push(data)
                            th.is_s = true

                            return
                        }


                        th.hf('order_formqueren', checkout)
                    })



                } else {
                    th.car_number += data.goods_number
                }

            },
        },
        mounted() {

            let goods_id = this.$route.query.goods_id, //获取商品ID号
                th = this




            this.post("product/info", { //获取详情信息
                goods_id: goods_id,
                token: this.token
            }, function(data) {
                th.d_info = data
                let dat_fo = {}
                dat_fo.goods_id = goods_id
                dat_fo.shop_price = data.shop_price
                dat_fo.market_price = data.market_price
                dat_fo.goods_thumb = data.img
                dat_fo.goods_thumb = data.goods_thumb
                dat_fo.properties = data.properties
                dat_fo.goods_number = data.goods_number
                dat_fo.sku_setup = data.sku_setup //是否多SKU，1是，0否
                dat_fo.max_price = data.max_price
                dat_fo.min_price = data.min_price
                th.purchase = dat_fo
                th.act_id = data.activity_id
                th.shop_id = data.shop_id

                th.user_id = data.user_id


                let be_helped_friend_user_id = data.user_id
                if (th.$route.query.be_helped_friend_user_id) {
                    be_helped_friend_user_id = th.$route.query.be_helped_friend_user_id
                }
                th.th_fmesd = be_helped_friend_user_id



                th.post("Activitybargain/goodsBargainInfo", { //获取详情信息
                    goods_id: goods_id,
                    token: th.token,
                    be_helped_friend_user_id: be_helped_friend_user_id
                }, function(data) {
                    th.d_info = data
                    let dat_fo = {}
                    th.sd = data
                    th.date_e = data.bargain_is_doing
                    th.is_load = false


                    th.GetRTime(data.bargain_max_time * 1000, function(d, a, b, c) {
                        th.is_drte_er.d = d
                        th.is_drte_er.h = a
                        th.is_drte_er.m = b
                        th.is_drte_er.m_b = c
                    })

                    setInterval(function() {
                        th.GetRTime(data.bargain_max_time * 1000, function(d, a, b, c) {
                            th.is_drte_er.d = d
                            th.is_drte_er.h = a
                            th.is_drte_er.m = b
                            th.is_drte_er.m_b = c
                        })

                        th.GetRTime(data.show_pay_left_time * 1000, function(d, a, b, c) {
                            th.is_drte_san.d = d
                            th.is_drte_san.h = a
                            th.is_drte_san.m = b
                            th.is_drte_san.m_b = c
                        })



                    }, 1000)

                })


                if (data.is_collection == 1) { //等于1已收藏
                    th.shiy_s = "act"
                }

                th.is_load = true
                data.goods_gallery.map(a => {
                    a.src = a.thumb_url
                    th.lunbotu.push(a)
                })
            })








            //            滚动监听
            window.addEventListener('scroll', e => {
                try {
                    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                    var pingjia = document.querySelector('#pingjia_er').offsetTop - 100,
                        xiangqing = document.querySelector('#xiangqing_er').offsetTop - 100

                    if (scrollTop < pingjia) {
                        this.sd_dser.map(function(a) {
                            a.cls = ""
                        })
                        this.sd_dser[0].cls = "act"
                        return
                    }
                    if (scrollTop >= pingjia) {
                        this.sd_dser.map(function(a) {
                            a.cls = ""
                        })
                        this.sd_dser[1].cls = "act"

                    }
                    if (scrollTop >= xiangqing) {
                        this.sd_dser.map(function(a) {
                            a.cls = ""
                        })
                        this.sd_dser[2].cls = "act"

                    }


                } catch (e) {

                }
            })


            window.scrollTo(0, 0);


            this.Title("砍价详情")
        },
    }

</script>
<style>
    .liucheng .mt15 {
        margin-top: 0px !important;
    }

</style>
<style scoped>
    .asd_uy_dftx {
        opacity: 0.8;
        z-index: 10000
    }

    .dsf_jgh_dertx {
        margin-bottom: 3px;
    }

    .ds_jh_etxc.act span {
        padding-bottom: 0px;
        color: #0076EF !important;
        padding-bottom: 12px;
        border-bottom: 1px solid #0076EF;
    }

    .kjh_er_rtxc {
        height: 23.5rem;
        position: relative;
        left: 0px;
        width: 100%;
    }

    .kjh_er_rtxc img.fm {
        width: 100%;
        height: 100%;
    }

    .sd_kanjiadr {
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 100%;
        z-index: 100;
        height: 7rem;
        min-height: 100px;
    }

    .sd_kanjiadr img {
        height: 100%;
        vertical-align: bottom
    }

    .sd_nbgg_bgf {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 100;
        padding-top: 3.7rem;
    }

    .zuidi_e {
        width: 32px;
        height: 17px;
        background-position: -242px -506px;
    }

    .df_jh_deert {
        position: relative;
        bottom: 3px;
    }

    .yuanjia_e {
        border: 1px solid #E1989E;
        border-left: 0px;
        padding-left: 5px;
        padding-right: 5px;
        position: relative;
        left: -5px;
    }

    .sd_jh_bg {
        width: 22px;
        height: 22px;
        background-position: -206px -501px;
        color: #b60412;
        font-size: 14px;
        line-height: 22px;
        text-align: center;
        font-style: normal
    }

    .wdf_sc_rrt {
        width: 62px;
        text-align: center;
    }

    .bapf_dr_er {
        color: #fff;
        font-size: 14px;
        background: #FF5762;
        padding: 2px 10px;
        border-radius: 20px;
        margin-right: 5px;
    }

    .sd_jh_derrer {

        z-index: 1000
    }

    .sd_jh_derrer img.w100 {
        min-height: 100px;
        vertical-align: bottom
    }

    .use_nhg_ee {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 100;
        box-shadow: 0 4px 20px rgba(187, 4, 19, .1);

    }

    .user_icon_der {
        width: 60px !important;
        height: 60px !important;
        border: 1px solid #FFABAB
    }

    .dian_sed_se {
        width: 20px;
        height: 14px;
        background-position: -300px -508px;
    }

    .dian_sed_se.ab {
        background-position: -334px -507px;
    }

    .kans_dert {
        width: 270px;
        margin: auto;
    }

    .kans_dert a.mui-btn {
        background: linear-gradient(to top, #CC1A1C, #FE7C83);
        color: #fff;
        border-radius: 20px;
    }

    .kans_dert a.mui-btn.ab {
        background: #fff !important;
        color: #b60412;
        border: 1px solid #b60412;
        margin-bottom: 10px;
    }

    .sd_jherrt_der {
        position: absolute;
        left: 0px;
        width: 100%;
        bottom: 0px;
        overflow: hidden;
        height: 8px;
        line-height: 1;
    }

    .dian_deert {
        display: inline-block;
        width: 7px;
        height: 7px;
        background: #EFEFF4;
        border-radius: 50%;
        margin-right: 4px;
    }

    .kanjia_liu {
        width: 17px;
        height: 17px;
        background-position: -209px -469px;
    }

    .kanjia_liu.ab {
        background-position: -236px -469px;
    }

    .kanjia_liu.ac {
        background-position: -268px -469px;
    }

    .kh_tilert {
        line-height: 40px;
        background: #E5E5E5
    }

    .liucheng img {
        width: 294px;
    }

    .liucheng {
        line-height: 1.5;
        position: relative;
    }

    .liucheng.ab img {
        width: 100%;
        vertical-align: bottom
    }

    .xiang_dert {
        position: fixed;
        left: 0px;
        bottom: 0px;
        line-height: 50px;
        background: #B60411;
        z-index: 100;
        width: 100%;
        padding: 0px;
        color: #fff;
        font-size: 16px;
        border: 0px;
        border-radius: 0px;
    }

    .df_jh_kand {
        width: 300px;
        margin: auto;
        margin-top: 15px;
    }

    .jindu_der {
        height: 8px;
        background: #B7B7B7;
        border-radius: 8px;
        overflow: hidden
    }

    .jindu_der span {
        display: block;

        height: 100%;
        border-radius: 8px;
        background: #FF5762
    }

    .kanjia_liu.ad {
        background-position: -298px -468px;
    }

    .user_icondsr {
        width: 45px !important;
        height: 45px !important;
    }

    .sdf_jhj_d {
        color: #F44336!important;
        border: 1px solid #F44336!important;
        padding: 2px 6px;
        border-radius: 4px;
    }

    .sd_hg_Deertt {
        background: #F3989F
    }

    .sdf_sas_er {
        width: 15px;
        height: 17px;
        margin-right: 5px;
        background-position: -16px -546px;
    }

    .sdf_sas_er.ab {
        width: 14px;
        height: 12px;
        background-position: -48px -551px;
    }

    .sdf_sas_er.ac {
        width: 17px;
        height: 17px;
        background-position: -81px -546px;
    }





    .banner_sdert {
        text-align: center;
        line-height: 23.5rem;
    }

    .banner_sdert img[lazy=loading] {
        width: 40px !important;
        height: 40px !important;
    }

    .asd_uy_dftx {
        opacity: 0.8;
        z-index: 10000
    }

    .d_jh_ewrerttx {
        background: #EFEFF4
    }



    .sdf_jh_eettxc {
        position: absolute;
        left: 0px;
        bottom: 5rem;
        width: 100%;
        text-align: right
    }

    .sdf_jh_eettxc span {
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
        padding: 2px 8px;
    }

    .sd_jh_dfg {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 9999;
        background: rgba(0, 0, 0, 0.2)
    }


    .sd_drffg.act .jindu_der span,
    .sd_drffg.act .kans_dert a.mui-btn,
    .sd_drffg.act .xiang_dert {
        background: #999
    }

    .sd_drffg.act .kans_dert a.mui-btn.ab {
        color: #999;
        border: 1px solid #999;
    }

    @media screen and (max-width: 330px) {
        .sd_nbgg_bgf {
            padding-top: 4.5rem;
        }
    }

</style>
