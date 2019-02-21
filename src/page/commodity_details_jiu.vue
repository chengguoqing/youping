<!--商品详情-->
<template>
  <transition name="slide-fade">
	<div class="sd_h_er_retx"  v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-immediate-check="false" infinite-scroll-distance="1500">
		<section v-if="is_load"   class="pr">
             
            
            
			<header class="mui-bar mui-bar-nav asd_uy_dftx">
				<a class=" mui-pull-left z3 dx icon-left mt2" @click="$router.back(-1)">

				</a>
				<h1 class="mui-title z3  cen ov">

 
            <section class="mui-row gd dsf_jgh_dertx" :style="{marginTop:tite_gun}">
                  <p class="mui-col-xs-4 ds_jh_etxc" v-for="(sr,idx) in sd_dser" :class="sr.cls" @click="jh_uty_s(sr.url_s,idx)">
                        <span class="z3">{{sr.name}} </span>
                    </p>
            </section>  

              <section class="mui-row">
                  图文详情
            </section>


         </h1>

 <information :sd_eer="sd_eer"></information>
<!--
				<a class=" mui-pull-right z3 dx icon-gengduoyingyong mt2 fz20 z6" @click="gengduo?gengduo=false:gengduo=true">

				</a> 
-->


			</header>
             
                       <section class="feng_deer" @click="get_sdf">
            <img src="https://mall.cangniaowl.com/static/img/crowd.png">
            <p class="fz12">分享</p>
        </section>

			<section v-if="d_info.is_delete==0">
				<div class="mui-content pr" style="padding-top:45px">
 
					<!--            轮播图-->
					<section class="kjh_er_rtxc pr">
						<mt-swipe :auto="0" :speed="10" @change="handleChange" :showIndicators="false" :stopPropagation="true">
							<mt-swipe-item v-for="(lu,idx) in lunbotu" :key="idx" class="banner_sdert">
								<img :src="lu.src">
							</mt-swipe-item>
						</mt-swipe>
						<p class="pd sdf_jh_eettxc">
							<span>{{lunindex+'/'+lunbotu.length}}</span>
						</p>
					</section>
					<section class="pr d_jh_ewrerttx">

						<section class="pd pt10 bgff  dsf_jh_drtxc">
							<section class="z3 fz16 pr title_top">
								{{d_info.goods_name}}
								<p class="collect_icon cen blm" @click="collection_fun">
									<i class="dx icon-shoucang fz18" :class="shiy_s"></i>
									<br>
									<span class="fz12 z9">收藏</span>
								</p>

							</section>

							<p class="qc"></p> 

							<p class="fz14 red mt5">
                                <span class="sdf_jhh_der">
                                    ￥ <span class="fz22" v-html="price_guo(d_info.shop_price)"></span>
                                </span>
                                
                               
                                <span v-if="d_info.price_title&&d_info.member_price!=d_info.shop_price">
                                <span class="yj4 sd_jhd_df fz12">
                            {{d_info.price_title}}
                            </span>￥<span class="fz14" v-html="price_guo(d_info.member_price)"></span>
                                
                                </span>
                                
								<del class="z9 ml10 fz12" v-if="d_info.market_price!='0.00'">￥{{d_info.market_price}}</del>
							</p>
							<p class="z9">

							</p>

							<section class="mui-row mt10 pm10">
								<p class="mui-col-xs-4 z6 fz12 z9">
									快递
									<span v-if="d_info.is_shipping==1">{{d_info.shipping_price}}</span>
									<span v-else>包邮</span>

								</p> 
								<p class="mui-col-xs-4 cen z6 fz12 z9">
									总销{{d_info.sales_number||0}}笔
								</p>
								<p class="mui-col-xs-4 tr z6 fz12 z9">
									{{$store.state.shopinfo.province_name +" "+$store.state.shopinfo.city_name}}
								</p>
							</section>

						</section>

                        <section class="mt10 bgff pd sd_kh_ert pr" @click="popupVerisible=true" v-if="d_info.three_coupon.length>0||d_info.available_coupon.length>0">
                            <img src="http://mall.cangniaowl.com/static/img/quan_ma.png" class=" quan_ma">
                            <span class="fz12 z6 ml5 cz linghqun">领券</span>

                            <span class="f_b s_hg_sd fz12 dian cz ml5" v-for="sd in d_info.three_coupon">{{sd}}</span>
            <i class="dx icon-right fz14 d_jh_deett"></i>
                        </section>

						<section class="reminder_success pd" v-if="d_info.is_7day==1">
							<!--
            <span class="fz12 z6">
            <i class="f_i gx_success"></i>
            苍鸟总部发货
    </span>

                        <span class="fz12 z6 ml10">
            <i class="f_i gx_success"></i>
            货到付款
    </span>
-->

							<span class="fz12 z6 ml10">
                            <i class="f_i gx_success"></i>
                                7天无理由退换货
                </span>
						</section>

						<section class="tioui_sd pl10 mui-row pt10 btm mt10">
							<section class="mui-col-xs-10">
								<section class="df_jgh_drtx fl">
									<img :src="$store.state.shopinfo.shop_logo" class="br" @click="hf('dianpuxinxi')">

								</section>
								<section class="ov">
									<p class="fz12 mb5 z6">
										{{$store.state.shopinfo.shop_name}}
<!--                                        <i class="dx icon-right fz12"></i>-->
									</p>
									<renzheng></renzheng>

								</section>

							</section>

							<section class="mui-col-xs-2 mui-row tr  h100 cz_w">

								<i class="dx icon-erweima cz_a z6 fz22" @click="xian_s=true"></i>

							</section>

						</section>

						<section class="pd pt15 bgff mui-row">

							<section class="mui-col-xs-6 cz_w h100">
								<section class="cz_a d_ih_ertxcr brm">
									<p class="z3 fz15">{{$store.state.shopinfo.on_goods_count}}</p>
									<p class="fz12">全部商品</p>
								</section>

							</section>

<!--
							<section class="mui-col-xs-4 cz_w h100 brm">
								<section class="cz_a d_ih_ertxcr">
									<p class="z3 fz15">

                                         <span v-if="shopinfo_p.attention_num>10000">
       {{(shopinfo_p.attention_num/10000).toFixed(1)}}<span class="fz12">万+</span>
                                        </span>
                                        <span v-else>
                              {{$store.state.shopinfo.attention_num}}
                                                </span>


    </p>
									<p class="fz12">粉丝数</p>
								</section>

							</section>
-->

							<section class="mui-col-xs-6 cz_w h100 ">
								<section class="cz_a d_ih_ertxcr ab">
									<p class="z3 fz12 z6">商品评价:<span class="red d_jkjhd_sdd f_b">{{$store.state.shopinfo.goods_rank_avg}}</span></p>
									<p class="z3 fz12 z6">服务评价:<span class="red d_jkjhd_sdd f_b">{{$store.state.shopinfo.services_rank_avg}}</span></p>
									<p class="z3 fz12 z6">物流评价:<span class="red d_jkjhd_sdd f_b">{{$store.state.shopinfo.deliver_rank_avg}}</span></p>
								</section>

							</section>

						</section>

						<section class="pd pt10 bgff mui-row pm10">
							<p class="mui-col-xs-6 dsf_kjhj_we" @click="hf('fenlei')">
								<a class="mui-btn z6"><i class="dx icon-gengduoyingyong z6 cz"></i> 查看分类</a>
							</p>

							<p class="mui-col-xs-6 dsf_kjhj_we" @click="hf('')">
								<a class="mui-btn z6"><i class="dx icon-dianpu z6 cz"></i> 进店逛逛</a>
							</p>
						</section>

					</section>

					<!--        推荐搭配-->
				


        <section class="neighbor_good mt10" v-if="exposure_er">
                <p class="dsf_jgh_e fz12 ab" >
                <span> 推荐搭配</span>
            </p>

            <section class="mt15 neighbor_sclice">
                <section class="neighbor_sclice_bei">

                    <section class="commodity_case"  v-for="sd in exposure_er" @click="tiaozhsdf(sd.shop_id,sd.goods_id,sd.ad_id,sd.interactive_id)">
                        <p class="commdity_img">
                            <img :src="sd.goods_thumb">
                        </p>
                        <section class="bgff commdity_msg">
                            <p class="dianer fz12 z3">{{sd.goods_name}}</p>
                            <p class="red fz12 mt2">
                                ￥{{sd.shop_price}}
                            </p>
                        </section>

                    </section>
 

                    <p class="qc"></p>

                </section>
            </section>

        </section>



			    		<p class="dsf_jgh_e fz12 ab">
						<span><i class="f_i appraise_icon"></i> 评价</span>
					</p>

					<section id="pingjia"> 

						<pingjia v-if="true" :goods_id="$route.query.goods_id"></pingjia>

						<kongbai :kb="kb" v-else></kongbai>

						<!--        商品过期或者不存在-->
						<kongbai :kb="kb_ab" v-else @ziding="$router.back(-1)"></kongbai>

					</section>
                    
                    
					<section id="xiangqing">
						<p class="dsf_jgh_e fz12 ab"> 
							<span><i class="f_i appraise_icon ab"></i> 详情</span>
						</p>

						<xiangqing class="mt15" :goods_desc="d_info.goods_desc"></xiangqing>

					</section>
 









                    <section v-if="sd_jhh_eert">

<!--
					<advertising :position_id="7" class="mt10" :goods_id="$route.query.goods_id"></advertising>
                    <showcase  :position_id="7" :goods_id="$route.query.goods_id"></showcase>
-->
                    </section>
                    
					<p class="dsf_jgh_e fz12 ab mt20">
						<span> 已经到底了</span>
					</p>

					<p class="cen mt30">
						<img src="http://mall.cangniaowl.com/static/img/copy_bottom_bg.png" class="copy_bottom_bg">
					</p>
					<p class="z6 cen fz12">
						苍鸟公众号自媒体电商<br> Copyright2017 All Rights Reserved
					</p>

				</div> 

				<erweima :xian_s='xian_s' @sd_jher="xian_s=''"></erweima>

				<!--        底部-->
				<section class="df_jetth_er btm df_jh_certr cen">
                    
                    <section class="dfd_jdfdf_a pt3" v-if="d_info.has_source==0">
						<p class="sd_jh_dretx " @click="hf('')">
							<i class="dx icon-dianpu z3 fz18 cz " :class="shiy_s"></i>
						</p>
						<p class="z3 fz12 mt2">进店</p>
					</section>
                      <section class="dfd_jdfdf_a pt3" v-if="d_info.has_source==1">
						<p class="sd_jh_dretx " @click="hf('https://api.cangniaowl.com/shop/311.html?from_shop='+$store.state.shopinfo.shop_id)">
							<i class="f_a logo_der cz ab " :class="shiy_s"></i>
						</p>
						<p class="z3 fz12 mt2">苍鸟首页</p>
					</section>
<!--
                    	<section class=" dfd_jdfdf_a pt3"  @click="collection_fun">
						<p class="sd_jh_dretx ">
							<i class="dx icon-shoucang fz18 " :class="shiy_s"></i>
						</p>
                        <p class="z3 fz12 mt2">收藏</p>
					</section>
-->
                    



					<section class=" dfd_jdfdf_a pt3"  @click="kefu(shop_id,$route.query.goods_id)">
						<p class="sd_jh_dretx ">
							<i class="dx icon-kefu z3 fz18 cz"></i>
						</p>
                        <p class="z3 fz12 mt2">客服</p>
					</section>


					

					<section class=" dfd_jdfdf_a pt3" @click="hf('gwc')">
						<p class="sd_jh_dretx pr">

							<i class="dx icon-daohanggouwuche z3 fz22 cz pr">
                 <span class="bgred fz12 cf jh_dfd_derrt" v-if="car_number>0">{{car_number>99?'99+':car_number}}</span>
                </i>
						</p> 
						<p class="z3 fz12 mt2">购物车</p>
					</section>

					<section class=" dfd_jdfdf_b " v-if="d_info.goods_number>0&&d_info.is_on_sale==1">
						<a class="mui-btn-yellow dsf_jh_ert" @click="hf('activity_168',{act_id:act_id})" v-if="act_id">参与活动</a>
                        <a class="mui-btn-yellow dsf_jh_ert" @click="popupVisible=true;jiali=0" v-else="act_id">加入购物车</a>
					</section>
                    
					<section class=" dfd_jdfdf_b " v-if="d_info.goods_number>0&&d_info.is_on_sale==1">
						<a class="mui-btn-red dsf_jh_ert" @click="popupVisible=true;jiali=1">立即购买</a>
					</section>

					<section class=" dfd_jdfdf_c " v-if="d_info.goods_number<=0&&d_info.is_on_sale==1">
						<a class="xiajiassrx dsf_jh_ert">商品已售罄</a>
					</section>

					<section class=" dfd_jdfdf_c " v-if="d_info.is_on_sale==0">
						<a class="xiajiassrx dsf_jh_ert">商品已下架</a>
					</section>
 
                    <p class="qc"></p>
				</section>
 
				<lijigoumaidcc :popupVisible="popupVisible" @close="popupVisible=false" :purchase="purchase" :jiali="jiali" @caozuo="caozuo"></lijigoumaidcc>
                
                
			</section>

			<section v-else class="pt50 ">
				<kongbai :kb="kb_ab" @ziding="$router.back(-1)"></kongbai>
			</section>

			<section class="gengduo_ser" v-if="gengduo">
				<gengduo></gengduo>
			</section>
                 
            
         
		</section>
		<loadin v-else></loadin>

        <!--        限购或库存不足弹出-->
        <pup_tishi :is_s="is_s" :type="type" :data_list="data_list" @sd_ert="is_s=false" :xsd_sd="'详情'"></pup_tishi>
 
<!--    卡券弹出层-->
    <mt-popup
  v-model="popupVerisible"
  position="bottom">
    <section class="pr pt10 pm10">
            <p class="z3 fz16 cen pr">优惠券 <i class="dx icon-close1  s_jh_derttx" @click="popupVerisible=false"></i></p>
        <section class="sd_kjh_deert btm mt10 ">
              <kaquan :sd_uius="sd_uius" :is_lqing="true" :lihg_e="'可领取优惠券'" :can_receive_coupon="d_info.can_receive_coupon" :yhuiquna="'没有可领取的优惠券'"></kaquan>

            <kaquan :sd_uius="sd_uius" :lihg_e="'已领取优惠券'" :can_receive_coupon="d_info.available_coupon" v-if="d_info.available_coupon.length>0"></kaquan>

        </section>
    </section> 
</mt-popup>
 

      
   

        <section class="sd_jh_deer" :class="is_sd_fn?'show':''">
            <section class="sdf_jh_dff cen">
    <img   v-lazy="url_img" class="w100">
        <div class="sdf_jh_deer">
            <p class="cf pt20 fz12">长按图片发送给朋友</p>
        <span class="close_sd yj" @click="is_sd_fn=false">
        <i class="dx icon-close1"></i>
    </span>
    </div>
        </section>
        </section>
        
    </div>
    </transition>
</template>
<script>
    import erweima from "../components/erweima.vue"
    import renzheng from "../components/renzheng.vue"
    import xiangqing from "../components/xiangqing.vue"
    import pingjia from "../components/pingjia.vue"
    import kongbai from "../components/kongbai.vue"
    import lijigoumaidcc from "../components/lijigoumaidcc.vue"
    import gengduo from "../components/gengduo.vue"
    import loadin from "../components/loadin.vue"
    import pup_tishi from "../components/pup_tishi.vue"
    import advertising from "../components/advertising.vue"
    import kaquan from "../components/kaquan.vue"

    import showcase from "../components/showcase.vue"
    import information from "../components/information.vue"
    import {
        Toast
    } from 'mint-ui';
    export default {
        data() {
            return {
                is_sd_fn: false,
                sd_uius: 0,
                popupVerisible: false,
                is_s: false,
                act_id: "",
                type: "",
                data_list: "",
                is_load: "",
                gengduo: false,
                shiy_s: "",
                d_info: "",
                loading: true,
                madisd: 1, //0可以下拉加载
                sd_jhsr: 2,
                tuwen_sd: false, //是否显示图文
                tite_gun: 0,
                jiali: 0, //0加入购物车  1理解购买
                purchase: "", //立即购买弹出层的数据
                shopinfo_p: "",
                exposure: "", //广告
                shop_id: 0,
                sd_eer: "",
                is_chus_num: 0,
                sd_jhh_eert: false,
                exposure_er: "", //邻家好店
                url_img: "",
                sd_dser: [{
                        name: "商品",
                        url_s: 0,
                        cls: "act"
                    }, {
                        name: "评价",
                        url_s: "pingjia",
                        cls: ""
                    }, {
                        name: "详情",
                        map_wz: 0,
                        url_s: "xiangqing",
                        cls: ""
                    }


                ],
                lunbotu: [],
                lunindex: 1, //轮播图的页码
                xian_s: false, //是否弹出二维码
                kb: { //评论空白
                    icom: "dsf_jh_san",
                    msg: "暂无评价",
                    btn_name: "返回商品详情页",
                    btn_url: "-1"
                },
                kb_ab: { //空白
                    icom: "dsf_jh_si",
                    msg: "商品过期或者不存在",
                    btn_name: "返回上一页",
                    btn_url: "-1"
                },
                popupVisible: false

            }
        },
        components: {
            renzheng: renzheng,
            erweima: erweima,
            xiangqing: xiangqing,
            pingjia: pingjia,
            kongbai: kongbai,
            lijigoumaidcc: lijigoumaidcc,
            gengduo: gengduo,
            loadin: loadin,
            pup_tishi: pup_tishi,
            advertising: advertising,
            kaquan,

            showcase,
            information
        },
        methods: {
            handleChange(idx) {
                this.lunindex = idx + 1
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
            collection_fun() { //取消和收藏
                let is_delete = 0 //添加
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
            loadMore() {
                this.is_chus_num++

                    let th = this
                th.loading = true

                setTimeout(function() {
                    th.loading = false

                }, 2000);

                if (this.is_chus_num > 1) {
                    this.sd_jhh_eert = true

                }

            },
            tiaozhsdf(shop_id, goods_id, ad_id, interactive_id) {
                let r_clicl = {}
                r_clicl.token = this.token
                r_clicl.ad_id = ad_id
                r_clicl.interactive_id = interactive_id
                r_clicl.goods_id = goods_id
                this.post("recommend/click", r_clicl, function(data) {
                    let url_ert = `https://api.cangniaowl.com/shop/${shop_id}.html?goods_id=${goods_id}&route=commodity_details&${data.ad_link}#/commodity_details?goods_id=${goods_id}&${data.ad_link}`

                    window.location.href = url_ert
                })


            },
            get_sdf() {

                this.is_sd_fn = true

                this.url_img = `https://api.cangniaowl.com/v1/product/goodsShareImage?goods_id=${this.$route.query.goods_id}&token=${this.token}`

            },
            get_data(val) {

            }

        },
        computed: {
            getshopinfo() {
                return this.$store.state.shopinfo;
            }
        },
        watch: {
            getshopinfo(val) {

                this.get_data(val)




            }
        },
        created() {
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





                if (data.is_collection == 1) { //等于1已收藏
                    th.shiy_s = "act"
                }

                th.is_load = true
                data.goods_gallery.map(a => {
                    a.src = a.thumb_url
                    th.lunbotu.push(a)
                })
            })

     
            this.post("recommend/exposure", {
                goods_id: goods_id,
                token: this.token
            },function(data){
               th.exposure_er=data
            })

            this.carnumber()



            //            滚动监听
            window.addEventListener('scroll', e => {
                try {
                    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                    var pingjia = document.querySelector('#pingjia').offsetTop - 100,
                        xiangqing = document.querySelector('#xiangqing').offsetTop - 100

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
            this.Title("商品详情") 

        },
        beforeRouteLeave(to, from, next) {
            // 设置下一个路由的 meta
            if (to.path == "/assessment_details") {
                //                to.meta.keepAlive = false
            }

            from.meta.keepAlive = true
            next();
        }

    }

</script>
<style lang="scss">
    .sd_h_er_retx img[lazy=loading] {
        width: 100px !important;
        height: 100px;
        position: absolute;
        left: 0px;
        top: 0px;
        bottom: 0px;
        right: 0px;
        margin: auto
    }

</style>
<style scoped>
    .slide-fade-enter-active {
        transition: all .3s ease;
        transform: translate3d(0%, 0, 0)
    }

    .slide-fade-leave-active {
        transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        position: fixed;
        left: 0px;
        top: 0px;
        z-index: 10000;
    }

    .slide-fade-enter,
    .slide-fade-leave-to {
        transform: translate3d(50%, 0, 0);
        opacity: 0;
    }



    .sd_h_er_retx {}

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

    .kjh_er_rtxc img {
        width: 100%;
        height: 100%;
    }

    .sdf_jh_eettxc {
        position: absolute;
        left: 0px;
        bottom: 10px;
        width: 100%;
        text-align: right
    }

    .sdf_jh_eettxc span {
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
        padding: 2px 8px;
    }

    .df_jgh_drtx {
        margin-top: 0px;
    }

    .d_ih_ertxcr {
        line-height: 1.9
    }

    .d_ih_ertxcr.ab {
        line-height: 1.4
    }

    .dsf_kjhj_we {
        text-align: center;
    }

    .dsf_kjhj_we a {
        width: 130px;
        padding: 4px 0px 1px 0px;
        border: 1px solid #FFB03F;
        border-radius: 20px;
        color: #FFB03F;
    }

    .dsf_kjhj_we a .dx {
        color: #FFB03F;
    }

    .dsf_kjhj_we:nth-child(2) a {
        background: #FFB03F;
        color: #fff
    }

    .dsf_kjhj_we:nth-child(2) a .dx {

        color: #fff
    }

    .df_jetth_er {
        position: fixed;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 50px;
        background: rgba(255, 255, 255, 0.8);
        z-index: 1000;
        box-shadow: -2px 0px 10px rgba(0, 0, 0, .1);
    }

    .sd_jh_dretx {
        min-width: 60px;
        height: 26px;
        line-height: 26px;
    }

    .df_jetth_er .box_a {
        line-height: 1.2
    }

    .dsf_jh_ert {
        display: block;
        line-height: 50px;
        font-size: 14px;
        width: 100%;
        height: 100%;
    }

    .df_hh_ertc {
        display: inline-block;
        transform: rotate(180deg)
    }

    .dsf_jgh_dertx {
        margin-bottom: 3px;
    }

    .xiajiassrx {
        background: #797979;
        color: #fff
    }

    .gengduo_ser {
        position: fixed;
        left: 0px;
        top: 45px;
        width: 100%;
        z-index: 1000
    }

    .d_jkjhd_sdd {
        width: 40px;
        text-align: left;
        padding-left: 5px;
    }

    .title_top {
        padding-right: 62px;
    }

    .collect_icon {
        position: absolute;
        right: 0px;
        top: 0px;
        width: 50px;
        height: 44px;
        padding-left: 10px;
    }

    .collect_icon i {
        position: relative;
        left: 2px
    }

    .ticket {
        border-top: 1px solid #F23232;
        border-bottom: 1px solid #F23232;
        color: #F23232;
        display: inline-block;
        font-size: 12px;
        padding: 0px 10px 0px 20px;
        overflow: hidden;
        position: relative;
        line-height: 19px;
        margin-left: 10px;
    }

    .ticket .text_p {
        position: relative;
        top: 1.2px;
    }

    .ticket:after {
        content: " ";
        position: absolute;
        left: 0px;
        top: 0px;
        height: 100%;
        border-left: 1px solid #F23232;
    }

    .ticket:before {
        content: " ";
        position: absolute;
        right: 0px;
        top: 0px;
        height: 100%;
        border-left: 1px solid #F23232;
    }

    .tick_dian {
        border: 1px solid #F23232;
        width: 12px;
        height: 12px;
        position: absolute;
        left: -6px;
        top: 3.5px;
        background: #fff;
        border-radius: 50%;
        z-index: 10
    }

    .tick_dian:nth-child(2) {
        left: inherit;
        right: -7px;
    }

    .dashed_p {
        border-left: 1px dashed #F23232;
        position: absolute;
        left: 12px;
        height: 100%;
        top: 0px;
    }

    .sd_h_er_rtx {
        padding-top: 7px;
        padding-bottom: 7px;
    }

    .voucher_name {
        position: relative;
        top: 2px;
    }

    .dian_icon {
        width: 22px;
        height: 6px;
        background-position: -41px -967px;
        position: absolute;
        right: 15px;
        top: 15px;
    }

    .reminder_success {
        background: #F6F7F9;
        line-height: 35px;
    }

    .gx_success {
        width: 16px;
        height: 16px;
        background-position: -12px -960px;
        margin-right: 2px;
    }

    .neighbor_good,
    .neighbor_good .dsf_jgh_e span {
        background: #F6F7F9 !important
    }

    .neighbor_sclice {
        height: 160px;
        overflow: hidden
    }

    .neighbor_sclice_bei {
        height: 180px;
        overflow: auto;
        white-space: nowrap;
    }

    .commodity_case {
        width: 98px;
        display: inline-block;
        margin-right: 2px;
    }

    .commdity_img {
        width: 98px;
        height: 98px;
    }

    .commdity_img img {
        width: 100%;
        height: 100%;
    }

    .commdity_msg {
        line-height: 1.2;
        padding: 3px;
    }

    .commdity_msg .dianer {
        height: 28px;
    }

    .appraise_icon {
        width: 17px;
        height: 18px;
        background-position: -74px -958px;
    }

    appraise_icon.ab {
        width: 12px;
        height: 10px;
        background-position: -148px -964px
    }

    .quan_ma {
        width: 16px;
        position: relative;
        top: 4px;
    }

    .s_hg_sd {
        background: #F94F4F;
        color: #fff;
        border-radius: 4px;
        padding: 5px;
        max-width: 90px;
        line-height: 1;
        display: inline-block;
        transform: scale(0.9)
    }

    .d_jh_deett {
        position: absolute;
        right: 10px;
        top: 3px
    }

    .linghqun {
        position: relative;
        top: 1px
    }

    .sd_kh_ert {
        line-height: 40px;
    }

    .dfd_jdfdf_a {
        width: 15%;
        float: left
    }

    .dfd_jdfdf_b {
        float: left;
        width: 27.5%;
    }

    .dfd_jdfdf_c {
        float: left;
        width: 55%;
    }

    .sd_jhd_df {
        border: 1px solid #F44336!important;
        padding: 2px 4px 0px 4px;
        position: relative;
        bottom: 2px;
        display: inline-block;
        transform: scale(0.8);
    }

    .sdf_jhh_der {
        border-right: 1px solid #F5F5F5;
        padding-right: 8px;
        line-height: 30px;
        margin-right: 2px;
    }

    .sd_jh_deer {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        display: none;

        z-index: 1000
    }

    .sdf_jh_dff {
        width: 294px;
        height: 486px;
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 40px;
        margin: auto;
    }

    .sdf_jh_deer {
        position: absolute;
        left: 0px;
        bottom: -30px;
        width: 100%;
        text-align: center;
    }

    .close_sd {
        border: 1px solid #fff;
        color: #fff;
        display: inline-block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        position: relative;
        top: 10px;

    }

    .feng_deer {
        position: absolute;
        right: 10px;
        top: 60px;
        z-index: 1000;
        line-height: 1.2
    }

    .feng_deer img {
        width: 25px;
        height: 25px;
    }


    @media screen and (max-width: 340px) {
        .sd_jh_dretx {
            min-width: 50px;
        }

    }

    @media screen and (max-width: 380px) {
        .sdf_jh_dff {
            width: 274px;
            height: 446px;

        }
    }

    @media screen and (min-width: 380px) {
        .sdf_jh_dff {
            width: 310px;
            height: 502px;

        }
    }

</style>
