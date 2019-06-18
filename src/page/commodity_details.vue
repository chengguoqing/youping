<template>
<div class="Dsf_deeert" :class="active==0?'act':'avm'">
    
     <span class="triyrrtyer pd pt5" v-if="active==0&&s_opee>-0.1">
        <i class="f_p df_Dfrft"  @click="$router.back(-1)"></i>
               <i class="f_p df_Dfrft ab pr" @click="hf('message_list')">
                   
          <span class="yj bgred cf sd_jh_er_er fz12" :class="$store.state.url_er>0||$store.state.url_er=='9+'?'show':''">{{$store.state.url_er}}</span>
                    
                   
            </i>
    </span>
    
    
    
    <span class="triyrrtyer_ab pd pt5" :class="active==0?'':'act'">
        <i class="dx icon-left"  @click="$router.back(-1)"></i>
               <i class="dx icon-xiaoxi fz22 z6 ab pr" @click="hf('message_list')">
         <span class="yj bgred cf sd_jh_er_er fz12 ab" :class="$store.state.url_er>0||$store.state.url_er=='9+'?'show':''">{{$store.state.url_er}}</span>
    
    </i> 
    </span>
     
    
     
    
<van-tabs v-model="active" swipeable @change="gundong_w">
  <van-tab title="商品" >
   
<!--
       v-waterfall-lower="loadMore"
        waterfall-disabled="disabled"
        waterfall-offset="-100"
-->
       
      <div class="mui-scroll-wrapper dfs_jh_deeert" id="pullrefresh">
        <div class="mui-scroll">
            
      <section class=""   id="rong_er_gr">
<!--      轮播图-->
     <section class="pr dfg_rrert">
         <mt-swipe :auto="0" :speed="10" @change="handleChange" :showIndicators="false" :stopPropagation="true">
							<mt-swipe-item v-for="(lu,idx) in lunbotu" :key="idx" class="banner_sdert">
								<img :src="lu.thumb_url">
							</mt-swipe-item>
						</mt-swipe>
						<p class="pd sdf_jh_eettxc">
							<span>{{lunindex+'/'+lunbotu.length}}</span>
						</p>
         
         
         
<!--
         <van-swipe :autoplay="3000" class="h100" @change="lunbo_sd" :show-indicators="false">
             <van-swipe-item v-for="sd in d_info.goods_gallery" class="h100">
                 <img :src="sd.thumb_url" class="w100 h100">
             </van-swipe-item>
         </van-swipe>
         
         	<p class="pd sdf_jh_eettxc">
							<span>{{dq_lunbo+"/"+luboleng}}  </span>
						</p>
-->
     </section> 
  <section class="dd_jh_ddrrt">
      <section class="pd pt10 pm10 bgff btm">
    
          <span class="df_kh_deer fl">
          <span class="red fz14" v-if="d_info.type==5&&d_info.shop_price>0">
             ￥ <span class="fz20" v-html="price_guo(d_info.shop_price)"  v-if="is_jh_sd"></span>
               <span class="fz20" v-html="price_guo(0)"  v-else></span>
            </span>
                  <span class="red fz14" v-if="d_info.type!=5">
             ￥ <span class="fz20" v-html="price_guo(d_info.shop_price)"  v-if="is_jh_sd"></span>
               <span class="fz20" v-html="price_guo(0)"  v-else></span>
            </span>
             
              <span class="red  fz12" v-if="d_info.type==5&&d_info.integral>0">
                 <span v-if="d_info.type==5&&d_info.shop_price>0">+</span>  <span class="fz20">{{d_info.integral}}</span>
                  <span class="fz12">积分
                </span>
            </span>
            <span v-if="d_info.price_title&&d_info.member_price!=d_info.shop_price">
                                <span class="yj4 sd_jhd_df fz12" >
                            {{d_info.price_title}}
                            </span>￥<span class="fz14" v-html="price_guo(d_info.member_price)" ></span>
                                
                </span>
              
              
                
                                
<del class="z9 ml10 fz12" v-if="d_info.market_price!='0.00'">￥{{d_info.market_price}}</del>
          </span>
          
        <section class="fr">
            
            <section class="icon_dsdrbox fz12 mr20 mt10" v-if="d_info.type==2">
               {{d_info.team_num}}人拼团
            </section>
            <section class="icon_dsdrbox" @click="collection_fun">
                <p class="icon_topeer">
                    <i class="f_p aixing_er cz "  :class="shiy_s?'act':''"></i>
                </p>
                <p class="fz12">收藏</p>
            </section>
            
             <section class="icon_dsdrbox ab" @click="get_sdf">
                <p class="icon_topeer">
                    <i class="f_p aixing_er ab cz"></i>
                </p>
                <p class="fz12">分享</p>
            </section>
            
            
            
        </section>
          <p class="qc"></p>
          <p class="fz16 z3">	{{d_info.goods_name}}</p>
         
      
            
        </section>
      
          <van-row class="pd fz12 df_kjj_Deet">
                 <van-col span="8" class="z6" >
            <span  v-if="d_info.express_type==1||d_info.express_type==2">  到店自提 / </span>
                     快递:
                       <span v-if="d_info.is_shipping==0||d_info.shipping_price==0">包邮</span>
                  
                  <span v-else >
                        ￥{{d_info.shipping_price}}
    
                    </span>
    
            </van-col>
            
              <van-col span="8" class="cen z6">总销{{d_info.sales_number||0}}笔</van-col>
              <van-col span="8" class="tr z6" v-if="$store.state.shopinfo.province_name">
                  {{$store.state.shopinfo.province_name +" "+$store.state.shopinfo.city_name}}
            </van-col>
          </van-row>
          
          
          
      <section class="pd df_jhj_tl z9 bgff fz13 pr" @click="popupVerisible=true"  v-if="three_coupon>0||available_coupon>0"><span class="cz">领 券</span> 
    
        <span class="quanh_dsdff fz12" v-for="sd in d_info.three_coupon"><i class="f_p jkhg_ererrt"></i>{{sd}}<i class="f_p jkhg_ererrt ab"></i></span>
       
          
          <i class="f_p gengduo_icon"></i>
    </section>
   
      
            <section class="pd df_jhj_tl z9 bgff fz13 pr btm" @click="$store.state.is_dizs=true" v-if="d_info.express_type==0">
                <span class="cz fl">送 至</span> 
    
        <p class="dian ov pr20 pl10 fz12">
            <i class="f_p map_iconsdr cz"></i> 
            
          <span v-if="shdz_de">  {{shdz_de}}</span>
      <span v-else class="z6" > 添加地址</span>
            <span class="dibg_deert" v-if="!shdz_de" @click.stop="hf('add_dizhi')"></span>
    
    </p>
          <i class="f_p gengduo_icon"></i>
    </section>
      
          <section class="pd df_jhj_tl z9 bgff fz13 pr btm" v-if="d_info.express_type==1">
                <span class="cz fl">提货地址</span> 
    
        <p class="dian ov pr20 pl10 fz12">
            <i class="f_p map_iconsdr cz"></i> 
            
          <span >  {{d_info.pickup_address }}</span>
    
       
    
    </p>
          <i class="f_p gengduo_icon"></i>
    </section>
      
      
          <section class="pd df_jhj_tl z9 bgff fz13 pr btm" v-if="d_info.express_type==2" @click="$store.state.is_dizs=true" > 
                <span class="cz fl">地址</span> 
    
        <p class="dian ov pr20 pl10 fz12">
            <i class="f_p map_iconsdr cz"></i> 
            
                <span v-if="shdz_de">  {{shdz_de}}</span>
                <span v-else class="z6" > {{d_info.pickup_address }}</span>
    
       
    
    </p>
          <i class="f_p gengduo_icon"></i>
    </section>
      
      
      
      
      
    </section>
          
     
          
      <section class="mt10"> 
          <tabeitj :goods_id="$route.query.goods_id"></tabeitj>
          
        </section>
          
          <pingduan v-if="d_info.type==2" :pingduan="d_info.team_order_list" @show_e="is_liy_ge=true" @close_e="is_liy_ge=false" @pingtuancall="pingtuancall" @yaoqing="yaoqing" :biaoti="d_info.goods_name"></pingduan>
          
          

					<section id="pingjia"> 

						<pingjia :goods_id="$route.query.goods_id" @pingjia="active=1"></pingjia>

					
 
					</section>
          
          <section class="mt10">
            <scxinxi></scxinxi>
        </section>
          
          <section class="mt10">
    <weinituijian :goods_id="$route.query.goods_id"></weinituijian>
    </section>
          
          
   
          <p class="bgff cen pt10 pm10 mt10">
              <img src="http://mall.cangniaowl.com/static/img/xq_gif.gif" class="xq_gif cz">     上拉查看图文详情
        </p>
                 <p class="sdfert_jh_eet"></p>
          	
          
      </section>
    
    </div>
    </div> 
      
</van-tab> 
  <van-tab title="评价">
    <assessment_details_zujian></assessment_details_zujian>
    </van-tab>
  <van-tab title="详情">
     
       <van-pull-refresh v-model="isLoading" @refresh="onRefresh" pulling-text='下拉回到"商品详情"' loosing-text='释放回到"商品详情"'>
        
            <xiangqing  :goods_desc="d_info.goods_desc"></xiangqing>
              <advertising :position_id="7" class="mt10" :goods_id="$route.query.goods_id"></advertising>
            	
 <section v-if="$store.state.shopinfo.shop_id!=1243&&$store.state.shopinfo.shop_id!=1233&&$store.state.shopinfo.shop_id!=1235">
         <p class="cen mt30" if="$store.state.shopinfo.shop_id!=1243&&$store.state.shopinfo.shop_id!=1233&&$store.state.shopinfo.shop_id!=1235">
      <img src="https://mall.cangniaowl.com/static_story/img/cn_dibu_er.png" class="cn_dibu">
    </p>
     
     
     
    </section>
    </van-pull-refresh>
 
      
      
    </van-tab>
</van-tabs> 
 
    
<!--    送至地址-->
    <szdz :address="address" @cs_eer="cs_eer" :d_info="d_info" ></szdz>
   
    <!--    卡券弹出层-->
    <mt-popup
  v-model="popupVerisible"
  position="bottom">
    <section class="pr pt10 pm10">
            <p class="z3 fz16 cen pr">优惠券 <i class="dx icon-close1  s_jh_derttx" @click="popupVerisible=false"></i></p>
        <section class="sd_kjh_deert btm mt10 ">
              <kaquan :sd_uius="sd_uius" :is_lqing="true" :lihg_e="'可领取优惠券'" :can_receive_coupon="d_info.can_receive_coupon" :yhuiquna="'没有可领取的优惠券'"></kaquan>

            <kaquan :sd_uius="sd_uius" :lihg_e="'已领取优惠券'" :can_receive_coupon="d_info.available_coupon" v-if="yi_er_er>0"></kaquan>

        </section>
    </section> 
</mt-popup>
    
    
<!--    sku--> 
    	<lijigoumaidcc :popupVisible="popupVisible" @close="popupVisible=false" :purchase="purchase" :jiali="jiali" @caozuo="caozuo" :pinbduand="pinbduand" ></lijigoumaidcc>
    
<!--    :jiage_sd="jiage_sd"-->
    
<!--分享的图片--> 
     
      <section class="sd_jh_deer sd_h_er_retx" :class="is_sd_fn?'show':''">
          <p class="guaertn_drt" @click="is_sd_fn=false"></p>
            <section class="sdf_jh_dff cen pr">
    <img   v-lazy="url_img" class="w100">
        <div class="sdf_jh_deer">
            <p class="cf pt20 fz12">长按图片发送给朋友</p>
        <span class="close_sd yj" @click="is_sd_fn=false">
        <i class="dx icon-close1"></i>
    </span>
    </div>
        </section>
        </section>
    
    
    
<van-goods-action class="fg_jh_btn" v-if="is_jh_sd&&d_info.type!=2">
<van-goods-action-mini-btn icon="dx  dx icon-dianpu z9" text="进店"   v-if="d_info.has_source==0"  @click="hf('')"/>
    
    <van-goods-action-mini-btn     v-if="d_info.has_source==1" @click="hf('https://api.cangniaowl.com/shop/311.html?from_shop='+$store.state.shopinfo.shop_id)">
        	<p class="sd_jh_dretx " >
							<i class="f_a logo_der cz ab " :class="shiy_s"></i>
						</p>
						<p class="z3 fz12 mt2">苍鸟首页</p> 
    </van-goods-action-mini-btn>
    
    
  <van-goods-action-mini-btn icon="dx dx icon-kefu2 fz20 z9" text="客服"   @click="kefu(shop_id,$route.query.goods_id)"/>

  <van-goods-action-mini-btn icon="dx dx icon-gouwuche1 z9" text="购物车"  @click="hf('gwc')" :info="$store.state.carnumber"  class="sd_deeert" :class="$store.state.carnumber==0?'act':''"  v-if="d_info.express_type!=1&&d_info.express_type!=2&&$route.query.cj_m!=1"/>

  <section class="f_b w100" v-if="d_info.goods_number>0&&d_info.is_on_sale==1&&d_info.express_type!=1&&d_info.express_type!=2&&$route.query.cj_m!=1">
      <van-goods-action-big-btn class="fz14"  @click="csjkher(act_id)">
          {{act_id?'参与活动':'加入购物车'}}    
    </van-goods-action-big-btn>
    </section>
  <section class="f_b  w100">
        <van-goods-action-big-btn text="立即购买"   class="fz14" primary @click="popupVisible=true;jiali=1"  v-if="d_info.goods_number>0&&d_info.is_on_sale==1"/>
      </section>
<!--
      <section class="f_b w100" v-else>
          popupVisible=true;jiali=1
        <van-goods-action-big-btn text="立即购买"   class="fz14" primary @click="$store.state.is_dizs=true" v-if="d_info.goods_number>0&&d_info.is_on_sale==1"/>
      </section>
-->

    

 <section class="f_b w100" v-if="d_info.goods_number<=0&&d_info.is_on_sale==1">
      <van-goods-action-big-btn text="商品已售罄"   class="fz14 xiajiassrx" primary  ></van-goods-action-big-btn>
    </section>
     <section class="f_b w100" v-if="d_info.is_on_sale==0">
          <van-goods-action-big-btn text="商品已下架"   class="fz14 xiajiassrx" primary   ></van-goods-action-big-btn>
    </section>
</van-goods-action>
    
    
    <van-goods-action class="fg_jh_btn" v-if="d_info.type==2">
<van-goods-action-mini-btn icon="dx  dx icon-dianpu z9" text="进店"   v-if="d_info.has_source==0"  @click="hf('')"/>
    
    <van-goods-action-mini-btn     v-if="d_info.has_source==1" @click="hf('https://api.cangniaowl.com/shop/311.html?from_shop='+$store.state.shopinfo.shop_id)">
        	<p class="sd_jh_dretx " >
							<i class="f_a logo_der cz ab " :class="shiy_s"></i>
						</p>
						<p class="z3 fz12 mt2">苍鸟首页</p> 
    </van-goods-action-mini-btn>
    
    
  <van-goods-action-mini-btn icon="dx dx icon-kefu2 fz20 z9" text="客服"   @click="kefu(shop_id,$route.query.goods_id)"/>

  <van-goods-action-mini-btn icon="dx dx icon-gouwuche1 z9" text="购物车"  @click="hf('gwc')" :info="$store.state.carnumber"  class="sd_deeert" :class="$store.state.carnumber==0?'act':''"/>

       <van-goods-action-big-btn  class="fz14 sd_kjh_kljder" @click="popupVisible=true;jiali=1;pinbduand=0;jiage_sd=d_info.alone_shop_price" >
           
                <span class="fz16">￥{{d_info.alone_shop_price }}</span> <br>
                单独购买
        
    </van-goods-action-big-btn>
        
        
               <van-goods-action-big-btn  class="fz14 sd_kjh_kljder ab" @click="popupVisible=true;jiali=1;pinbduand=1;team_sign=''" >
       
                <span class="fz16">￥{{d_info.shop_price}}</span> <br>
                发起拼单
      
    </van-goods-action-big-btn>
        
        


</van-goods-action>
    
    
    		<loadin v-if="is_load"></loadin> 
    <pingdan_listpup :pingduan="d_info.team_order_list" v-if="is_liy_ge" @close_e="is_liy_ge=false" @pingtuancall="pingtuancall" @yaoqing="yaoqing" :biaoti="d_info.goods_name"></pingdan_listpup>
    
    <pingduan_pup v-if="is_pingduan" @close_e="is_pingduan=false" :pingduan_date="pingduan_date" @canyu="canyu"></pingduan_pup>
    <fen_xq_pup v-if="isfen_dfg" :renshu="renshu" @close_e="isfen_dfg=false"></fen_xq_pup>
</div>
</template>
<script>
    import xiangqing from "../components/xiangqing"
    import assessment_details_zujian from "../components/assessment_details_zujian"
    import tabeitj from "../components/xq/tabeitj"
    import pingjia from "../components/pingjia.vue"
    import scxinxi from "../components/xq/scxinxi.vue"
    import weinituijian from "../components/xq/weinituijian.vue"
    import szdz from "../components/xq/szdz.vue"
    import pingduan from "../components/xq/pingduan.vue"
    import pingdan_listpup from "../components/xq/pingdan_listpup"
    import pingduan_pup from "../components/xq/pingduan_pup"
    import fen_xq_pup from "../components/xq/fen_xq_pup"
    import kaquan from "../components/kaquan.vue"
    import lijigoumaidcc from "../components/lijigoumaidcc.vue"
    import advertising from "../components/advertising.vue"
    import loadin from "../components/loadin.vue"
    import {
        MessageBox
    } from 'mint-ui';
    import {
        Toast
    } from 'mint-ui';
    export default {
        data() {
            return {
                active: 0,
                is_load: true,
                isLoading: false,
                d_info: "",
                shop_id: "",
                act_id: "",
                chushi_s: 0,
                disabled: true,
                s_opee: "",
                yi_er_er: "",
                sd_uius: "",
                is_jh_sd: false,
                purchase: "", //立即购买弹出层的数据
                popupVisible: false, //是否显示sku
                jiali: 0, //0加入购物车  1理解购买
                popupVerisible: false, //是否显示优惠券
                dq_lunbo: 1, //当前轮播图的位置
                luboleng: 1, //轮播图的张数
                three_coupon: "",
                available_coupon: "",
                is_sd_fn: "",
                url_img: "",
                address: "",
                shdz_de: "",
                shdz_de_id: "",
                lunbotu: "",
                lunindex: 1,
                shiy_s: "", //是否收藏
                pinbduand: "-1", //0单独购买 1 发起拼单
                is_liy_ge: false,
                is_pingduan: false,
                pingduan_date: "", //拼团的弹窗数据
                isfen_dfg: false,
                renshu: "",
                team_sign: ""
            }
        },
        components: {
            xiangqing,
            assessment_details_zujian,
            pingjia,
            tabeitj,
            scxinxi,
            weinituijian,
            szdz,
            kaquan,
            lijigoumaidcc,
            advertising,
            loadin,
            pingduan,
            pingdan_listpup,
            pingduan_pup,
            fen_xq_pup
        },
        methods: {
            huitiao() {
                this.popupVisible = true
                this.jiali = 1
            },
            yaoqing(e) { //拼团邀请好友
                this.isfen_dfg = true
                this.renshu = e.team_num
                console.log(e);
            },
            pingtuancall(e) { //点击拼团按钮触发
                console.log(e);
                this.pingduan_date = e
                this.is_pingduan = true
                this.team_sign = e.team_sign

            },
            canyu() { //拼团的 参与拼单按钮触发
                this.is_pingduan = false
                this.popupVisible = true;
                this.jiali = 1;
                this.pinbduand = 1
            },
            handleChange(idx) {
                this.lunindex = idx + 1
            },
            cs_eer(data) {
                this.shdz_de = data.name
                this.shdz_de_id = data.id //获取地址id
//                if (this.d_info.express_type == 2) {
//                    this.popupVisible = true
//                    this.jiali = 1
//                }
            },
            lunbo_sd(idx) { //轮播滚到完执行
                this.dq_lunbo = idx + 1
            },
            loadMore() {
                if (this.active == 0) {
                    this.disabled = true
                    this.active = 2
                }

            },
            get_sdf() {
                this.is_sd_fn = true
                this.url_img = `https://api.cangniaowl.com/v1/product/goodsShareImage?goods_id=${this.$route.query.goods_id}&token=${this.token}`

            },
            gundong_w(e) {
                let th = this
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
                    if (this.d_info.type == 5) {
                        checkout.integral_pay_way = data.integral_pay_way
                    }

                    if (data.goods_attr_id) {
                        checkout.goods_attr_id = data.goods_attr_id
                    }

                    if (th.pinbduand && th.d_info.type == 2) {
                        checkout.is_team_price = this.pinbduand
                        checkout.team_sign = th.team_sign
                    }
                    if (this.$route.query.cj_m == 1) { //抽奖活动
                        checkout.story_goods = this.$route.query.story_goods
                    }
                    if(this.d_info.express_type==1||this.d_info.express_type==2){
                          checkout.pick_up = 1
                          checkout.express_type=this.d_info.express_type
                    }
                  
                    
                    
                    
                    th.post("shopping/checkout", checkout, function(data) {
                        if (data.error_type == 1) { //限购

                            th.type = 1
                            th.data_list = []
                            th.data_list.push(data)
                            th.is_s = true
                            MessageBox('提示', data.message);
                            return
                        }

                        checkout.address_id = th.shdz_de_id
                        th.hf('order_formqueren', checkout)
                    })



                } else {
                    th.car_number += data.goods_number
                }

            },
            csjkher(sdf) {
                if (sdf) {
                    this.hf('activity_168', {
                        act_id: this.act_id
                    })
                } else {
                    this.popupVisible = true
                    this.jiali = 0
                }
            },
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
            onRefresh() {
                let th = this
                setTimeout(function() {
                    th.isLoading = false
                }, 1000);
                this.active = 0

            }
        },
        created() {
            window.scrollTo(0, 0);

            let goods_id = this.$route.query.goods_id, //获取商品ID号
                th = this
            this.post("product/info", { //获取详情信息
                goods_id: goods_id,
                token: this.token
            }, function(data) {


                th.d_info = data
                th.lunbotu = th.d_info.goods_gallery
                th.yi_er_er = data.available_coupon.length
                th.luboleng = data.goods_gallery.length
                window.scrollTo(0, 0);
                th.disabled = false
                th.act_id = data.activity_id
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

                th.jiage_sd = data.shop_price
                if (data.type == 5) {
                    dat_fo.type = data.type
                    data.sku_integral.map(a => {
                        a.cls = ""
                    })
                    dat_fo.sku_integral = data.sku_integral
                }
                if (data.type == 2) {
                    dat_fo.alone_shop_price = data.alone_shop_price
                }
                th.purchase = dat_fo
                th.is_jh_sd = true
                th.Title("商品详情-" + th.d_info.goods_name, true)
                th.is_load = false




                var sd_ert = `https://api.cangniaowl.com/shop/${data.shop_id}.html?router=commodity_details&goods_id=${goods_id}&shareid=${data.user_id}#/commodity_details?goods_id=${goods_id}`


                let shopinfo = {}
                shopinfo.token = token
                th.ge_t("home/shopinfo", shopinfo, function(datae) {
                    if (th.d_info.type == 2) {
                        data.goods_name = datae.data.user_name + '邀请你一起拼团' + data.goods_name
                    }
                    th.fenxiang(data.goods_name, sd_ert, data.goods_thumb, data.goods_brief)
                    setTimeout(function() {
                        th.fenxiang(data.goods_name, sd_ert, data.goods_thumb, data.goods_brief)
                    }, 1000);

                })





                th.shop_id = data.shop_id
                if (data.is_collection == 1) { //等于1已收藏
                    th.shiy_s = "act"
                }


                th.three_coupon = th.d_info.three_coupon.length
                th.available_coupon = th.d_info.available_coupon.length
                document.querySelector('#pullrefresh').addEventListener('scroll', function(e) {
                    var scrollTop = -e.detail.y,
                        s_opee = 1 - scrollTop / 200,
                        maxScrollY = -e.detail.maxScrollY
                    th.s_opee = s_opee
                    try {
                        if (scrollTop >= maxScrollY + 60) {
                            th.active = 2
                        }
                        document.querySelector(".van-tabs__wrap.van-hairline--top-bottom").style.opacity = scrollTop / 200
                        document.querySelector(".triyrrtyer_ab").style.opacity = scrollTop / 200
                        document.querySelector(".triyrrtyer").style.opacity = s_opee
                        if (s_opee <= 0) {
                            document.querySelector(".triyrrtyer").style.display = "none"
                        } else {
                            document.querySelector(".triyrrtyer").style.display = "block"
                        }
                    } catch (e) {

                    }


                })

            })

            let address = {}
            address.token = this.token
            this.post('user/address', address, function(data) {
                try {
                    th.address = data
                    th.shdz_de = data[0].province_name + "" + data[0].city_name + "" + data[0].district_name + "" + data[0].address
                    th.shdz_de_id = data[0].address_id

                    data.map(a => {
                        a.cls = ""
                    })
                } catch (e) {
                    console.log('数组是空的！');
                }
            })





        },
    }

</script>
<style lang="scss">
    .sd_h_er_retx img[lazy=loading] {
        width: 100px !important;
        height: 100px;
        position: fixed;
        left: 0px;
        top: 0px;
        bottom: 0px;
        right: 0px;
        margin: auto
    }

    .sd_deeert.act .van-info {
        display: none
    }

</style>
<style>
    .dsf_juh_er {
        border: 0px !important;
    }

    .dsf_juh_er input {
        border-top: 0px !important;
        position: relative;

    }

    .Dsf_deeert .van-tabs__wrap.van-hairline--top-bottom {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        z-index: 1000;
        padding-left: 65px;
        padding-right: 60px;
        background: #fff;


    }

    .Dsf_deeert.act .van-tabs__wrap.van-hairline--top-bottom {
        opacity: 0
    }

    .Dsf_deeert.avm .van-tabs__wrap.van-hairline--top-bottom {
        opacity: 1 !important
    }

</style>
<style scoped>
    .sd_kjh_kljder {
        line-height: 1.3;
        background: #FE8282;
        border: 1px solid #FE8282
    }

    .sd_kjh_kljder.ab {
        background: #F95151;
        border: 1px solid #F95151
    }

    [v-cloak] {
        display: none;
    }

    .dd_jh_ddrrt {
        min-height: 150px;
    }

    .banner_sdert img {
        width: 100%;
        height: 100%;
    }

    .sd_derert {
        line-height: 40px;

    }

    .gund_eert {
        /*        padding-top: 45px;*/
    }

    .dfg_rrert {
        height: 23.5rem;
        position: relative;
        left: 0px;
        width: 100%;
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

    .icon_topeer {
        height: 23px;
        line-height: 23px;
        margin-bottom: 2px;
    }

    .aixing_er {
        width: 21px;
        height: 20px;
        background-position: -170px -43px;
    }

    .icon_dsdrbox {
        float: left;
        text-align: center;
    }

    .icon_dsdrbox.ab {
        margin-left: 15px;
    }

    .aixing_er.ab {
        width: 22px;
        height: 23px;
        background-position: -210px -40px;
    }

    .aixing_er.act {
        background-position: -241px -82px
    }

    .df_kh_deer {
        margin-top: 8px;
    }

    .df_kjj_Deet {
        background: #FFF4F4;
        line-height: 30px;
    }

    .df_jhj_tl {
        line-height: 33px;
    }

    .quanh_dsdff {
        background: #F95151;
        color: #fff;
        padding: 0px 4px;
        line-height: 16px;
        display: inline-block;
        position: relative;
        padding-top: 1px;
        margin-left: 10px;
    }

    .jkhg_ererrt {

        width: 5px;
        height: 18px;
        position: absolute;
        left: -3px;
        top: 0px;
        background-position: -280px -44px;

    }

    .jkhg_ererrt.ab {
        width: 7px;
        height: 19px;
        left: inherit;
        background-position: -295px -44px;
        right: -5px;
        top: -1px;
    }

    .gengduo_icon {
        width: 18px;
        height: 6px;
        background-position: -254px -57px;
        position: absolute;
        right: 10px;
        top: 15px;
    }

    .map_iconsdr {
        width: 13px;
        height: 15px;
        background-position: -314px -48px;
    }

    .triyrrtyer {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        z-index: 100000
    }

    .triyrrtyer_ab {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        z-index: 9999;
        opacity: 0
    }

    .triyrrtyer_ab.act {
        opacity: 1!important
    }

    .df_Dfrft {
        width: 35px;
        height: 35px;
        background-position: -134px -66px
    }

    .df_Dfrft.ab {
        background-position: -187px -66px;
        float: right;
    }

    .dfs_jh_deeert {
        /*        margin-top: -50px;*/
        position: fixed;
        height: 100%;
        padding-bottom: 50px
    }

    .triyrrtyer_ab i.dx {
        padding: 10px;
        position: absolute;
        left: 10px;
        top: 3px;

    }

    .triyrrtyer_ab i.dx.ab {
        left: auto;
        right: 6px !important;
        top: 4px;
    }

    .xq_gif {
        width: 14px;
    }

    .xiajiassrx {
        background: #797979;
        color: #fff
    }










    .sd_jh_deer {
        /*        background: rgba(0, 0, 0, 0.5);*/
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        display: none;

        z-index: 10000
    }

    .guaertn_drt {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
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

    .dibg_deert {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: red;
        z-index: 100;
        opacity: 0
    }

    .logo_der {
        display: inline-block;
        transform: scale(0.9);
        margin-top: -10px
    }


    .sd_jh_er_er {
        width: 16px;
        height: 16px;
        text-align: center;
        line-height: 16px;
        position: absolute;
        right: -5px;
        top: 3px;
        font-style: normal;
        display: none;
        transform: scale(0.9)
    }

    .sd_jh_er_er.ab {
        right: 5px;
    }

    .sdfert_jh_eet {
        height: 90px;
    }

</style>
