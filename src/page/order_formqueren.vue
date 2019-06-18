<!--订单确认-->
<template>
	<div class="dsd_jh_ert">
        
       
<!--        限购或库存不足弹出-->
        <pup_tishi :is_s="is_s" :type="type" :data_list="data_list" @sd_ert="is_s=false"></pup_tishi>

<!--        pick_up==1 自提-->
        <section v-if="checkout.pick_up!=1">
  
        <section v-if="checkout.checkAddress!=0||$store.state.shopinfo.shop_id!='1162'">
		<section class="pd pt10 pm10 bgff  mui-row pr" v-if="address" @click="hf('qrdizi',url_kh_dr)">
			<i class="dx icon-map fz22 fl mt5"></i>
			<section class="ov pl10 pr20">
				<section class="mui-row"> 
					<p class="dian mui-col-xs-8 z3">
						收货人：{{address.consignee}} 
					</p>
					<p class="dian mui-col-xs-4 z3 tr">
						{{address.mobile}}
					</p>
				</section> 
				<p class="mt5 fz12">
					   收货地址： {{address.province_name+address.city_name+address.district_name+address.address}}
				</p>
			</section> 

			<p class="hs_khsd"></p>
			<section class=" df_jh_ertx">
				<section class="cz_w h100">
					<i class="cz_a dx icon-right"></i>
				</section>
			</section>
		</section>
		<!--        没有地址-->
		<section class="pd pt10 pm10 bgff  mui-row pr df_jh_dertx cen" v-else>
			<a class="yj4 dfs_jh_ser mui-btn mt7" @click="hf('add_dizhi',url_kh_dr)">+新增收货地址</a>
			<p class="hs_khsd"></p>
		</section>
        </section>
        
</section>
        	<section class="pd pt10 pm10 bgff  mui-row pr" v-else>
                <section v-if="checkout.consignee||checkout.mobile_phone" >
                		<i class="f_p wertsd_jh_dert fl mt15"></i>
			<section class="ov pl10 pr20 dsf_jh_Deert fz13 z3 pr">
                <span>收 货 人：{{checkout.consignee}}</span><br>
                <span>电话号码：{{checkout.mobile_phone}}</span>
                <i class="f_p bianji_eer" @click="show_eeer=true"></i>
                
    </section>
               
                
		<p class="hs_khsd"></p>
                </section>
                
                <!--        没有收货地址改为联系人信息-->
		<section class="pd pt10 pm10 bgff  mui-row pr df_jh_dertx cen" v-else>
			<a class="yj4 dfs_jh_ser mui-btn mt7"  @click="show_eeer=true">+新增收货地址</a>
			<p class="hs_khsd"></p>
		</section>
                
                
                
    </section>
        
		<section class="mt7 bgff">
			<p class="pd d_jh_title">
				<!--                <i class="f_i df_jgh_sr"></i>-->
				<span class="fz15  ml5"> {{$store.state.shopinfo.company}} </span>
			</p>

			<ul>
				<li class="pd pt10 pm10 btm mui-row pr" v-for="sd in goods_list">

					<p class="cp_icon_sdf fl ">
						<img :src="sd.goods_thumb">
					</p>

					<section class="ov pl10 mui-row pr">

						<p class="dianer z3 sdf_jh_dertx">{{sd.goods_name}}</p>
						<p class="fz12 dian">
							{{sd.goods_attr}}
						</p>
						<p class="fz12 red ds_jh_rertxc">
							￥<span class="fz16" v-html="price_guo(sd.old_price||sd.shop_price)"> </span>

							<span class="fr z6">x{{sd.goods_number}}</span>

						</p>

					</section>

				</li>
			</ul>

		</section>

		<form class="mui-input-group fz14 mt7">

			<div class="mui-input-row">
				<label>配送方式：</label>
				<div class="ov z3 df_kj_dert tr pr10">
                    
                    <span v-if="url_kh_dr.express_type!=2">快递 <span>共<span class="red">￥{{checkout.shipping_fee|baoliu}}</span></span></span>
                    
                    <section v-else>
<!--                        pick_up-->
                    <section  plain class="sdfg_deert" @click="s_sdf(0) " :class="checkout.pick_up==1?'act':''" size="mini" >到店自提</section>
                        
                        <section  @click="s_sdf(1)"  plain class="sdfg_deert ml10" :class="checkout.pick_up==0?'act':''" size="mini">快递物流</section>
                    </section>
                    
					

				</div>
			</div>


<!--
            <div class="mui-input-row pr" @click="popupVerisible=true">
				<label class="sd_jh_dert">优惠券:
                    <span v-if="discount_amount_e!='0'">{{tishi_sd.use_condition}}</span> 
    
                    </label>
				<p class="ov z3 df_kj_dert tr pr20">
                    <span v-if="discount_amount_e!='0'">
    	省 <span><span class="red">￥<span v-html="price_guo(discount_amount_e)"></span> </span>元</span>
                    </span>
                    <span v-else>
                        不使用优惠券
                    </span>
				

				</p>
                <i class="dx icon-right fz14 d_jh_deett"></i>
			</div>
-->


            
            
          

            
            
            
            
			<div class="mui-input-row" v-if="checkout.pick_up==1">
				<label>提货地址：</label>
				<p class="ov z3 df_kj_dert tr pr10">
					{{checkout.pickup_address}}

				</p>
			</div>
            
            


			<div class="mui-input-row">
				<label>买家留言：</label>
				<input type="text" class="mui-input-clear fz14 df_h_ertxc" placeholder="选填：给商家留言（45字以内）" v-model="postscript">
			</div>
		</form> 
        
        
        <section class="mt10">
           
        <que_yhq :checkout="checkout" @get_sd="get_sd"></que_yhq>
        </section>

		<section class="mt7 bgff pd d_jh_ertxc">
			<p class="mui-row fz12">
				商品金额 <span class="red fr">￥{{checkout.goods_money|baoliu}}</span>
			</p>
            	<p class="mui-row fz12">
			
                    <span v-if="$route.query.story_goods==1">活动减免</span>
                    <span v-else>	级别折扣（会员/代理商）  </span>
                    <span class="red fr">-￥{{checkout.member_discount|baoliu}}</span>
			</p>
                	<p class="mui-row fz12">
				商品积分 <span class="red fr">-{{checkout.integral}}积分</span>
			</p>
            
            
<!--
			<p class="mui-row fz12">
				抵扣金额<span class="red fr">-
                {{discount_amount_e>0?discount_amount_e:0|baoliu}}
    
    </span>
			</p>
-->
            
            			<p class="mui-row fz12">
				优惠券金额<span class="red fr">-
                {{syje|baoliu}} 
    
    </span>
			</p>
			<p class="mui-row fz12" v-if="checkout.pick_up==0">
				运费金额 <span class="red fr">+￥
                  
                   <span v-if="url_kh_dr.pick_up==0">{{checkout.shipping_fee|baoliu}}</span>
                  <span v-else>{{checkout.shipping_fee|baoliu}}</span>
    </span>
                
			</p>

		</section>
		<section class="btm  fz14 z3 tr bgff pd d_jh_title">
			共{{goods_list.length}}件商品，小计：
            <span class="fz16 red">￥
<!--
                  <span v-if="url_kh_dr.pick_up==1">{{checkout.shipping_fee|baoliu}}</span>
                   <span >{{checkout.shipping_fee|baoliu}}</span>
-->
   
<span v-html="price_guo(jisuan(checkout,url_kh_dr.pick_up))" ></span>
    
    
    </span>
		</section>

		<section class="dsf_jh_drf btm bgff  mui-row btm">
			<section class="mui-col-xs-9 pd">

				<span class="fz12 z9 fr">
                        <span class="fz14 z6">合计金额:
                         
                            <span class="red fz16">￥
                            
                             <span class="b st" v-html="price_guo(jisuan(checkout,url_kh_dr.pick_up))" ></span>
                                </span>
				</span>
				</span>

			</section> 
			<!--                -->
			<section class="mui-col-xs-3 bgred cf fz14 cen" @click="tijiao_dd">
				提交订单
			</section>

		</section>

        
        <section v-if="is_youke">
         <yanzheng :pher_er="address.mobile" v-if="!checkout.mobile_phone" @tijiao="tijiao_dd"></yanzheng>
</section>

        <!--    卡券弹出层-->
<!--
    <mt-popup
  v-model="popupVerisible"
  position="bottom">
    <section class="pr pt10 ">
            <p class="z3 fz16 pd pr">选择优惠券</p>
        <section class="sd_kjh_deert btm mt10">


            <kaquan :sd_uius="sd_uius" :is_g="true"  :can_receive_coupon="can_receive_coupon" @coupon_id="coupon_id"></kaquan>


        </section>

        <p class="mt10 pt10 btm">
            <button class="mui-btn-red w100 fz16 pt10 pm10" @click="popupVerisible=false">确定</button>
        </p>
    </section>
</mt-popup>
-->



        <van-dialog
  v-model="show_eeer"
  show-cancel-button
  confirmButtonText="更新自提信息"
  class="sd_jh_deet"
  :beforeClose="beforeClose"
>
 
      <van-cell-group>
          <van-field
              v-model="url_kh_dr.consignee"
              clearable
              label="联系人："
              placeholder="请输入联系人"
          />
      <van-field
              v-model="url_kh_dr.mobile_phone"
              clearable
              label="电话号码："
              placeholder="请输入电话号码"
              type="tel"
          /> 
              </van-cell-group>
</van-dialog>
        
        
	</div>
</template>
<script>
    import {
        MessageBox
    } from 'mint-ui';
    import pup_tishi from "../components/pup_tishi.vue"
    import yanzheng from "../components/yanzheng.vue"
    import kaquan from "../components/kaquan.vue"
    import que_yhq from "../components/que_yhq"
    var wx = require('weixin-js-sdk');
    export default {
        data() {
            return { 
                lxr: {
                    name: "",
                    phone: ""
                },
                show_eeer: false,
                sd_uius: 0,
                popupVerisible: false,
                can_receive_coupon: "",
                tishi_sd: "",
                is_s: false,
                type: "",
                data_list: "",
                address: "",
                discount_amount_e: 0,
                goods_list: "",
                checkout: "",
                shopinfo_p: "",
                url_kh_dr: "",
                sd_id_sd: 0,
                is_youke: 0,
                coupon_id: "",
                syje: 0,
                postscript: "" //留言
            }
        },
        components: {
            pup_tishi: pup_tishi,
            yanzheng,
            kaquan,
            que_yhq
        },
        methods: {
            jisuan(data, type) {
                var jon_sd = data.no_shipping_fee_money;//计算出来的价格
                if(this.syje>0){//有优惠券
                        jon_sd=jon_sd-this.syje
                        jon_sd<=0?jon_sd=0:''
                    }
                if (type != 1) { //不是到店自提
                     jon_sd += data.shipping_fee
                }
                    
               
                return jon_sd
            },
            get_sd(data) {
                this.syje = data.jiner
                this.coupon_id = data.c_id.join(",")
            },
            s_sdf(ty) {
                if (ty == 0) {
                    this.checkout.pick_up = 1;
                    this.url_kh_dr.pick_up = 1
                } else if (ty == 1) {
                    this.checkout.pick_up = 0
                    this.url_kh_dr.pick_up = 0
                }
            },
            tijiao_dd() { //提交订单按钮触发
                this.url_kh_dr.step = 2
                this.url_kh_dr.postscript = this.postscript
                let th = this
                if (th.checkout.checkAddress != 0 && this.$store.state.shopinfo.shop_id != '1162') {
                    if (!this.url_kh_dr.address_id) {
                        MessageBox.confirm('请添加收货地址').then(action => {
                            if (action) {
                                th.hf('add_dizhi')
                            }
                        });
                        return
                    }
                } else {
                    this.url_kh_dr.address_id = 0
                }
                //                if (this.tishi_sd) {
                //                    this.url_kh_dr.coupon_id = this.sd_id_sd
                //                }
                this.url_kh_dr.coupon_id = this.coupon_id


                this.getdingd(function(data) {
                         var api_sde=api_url.split("/v1")[0]
                    if (data.pay_status > 0) {
                   
                        window.location.replace(api_sde+`/shop/${th.$store.state.shopinfo.shop_id}.html#/pay_success?order_sn=${data.order_sn}&order_amount=0`)
                        return
                    }

               
                    let url_de = api_sde+`/payment.html?token=${th.token}&order_id=${data.order_id}&system_name=`+system_name
                    if (th.$store.state.is_xcx) { //跳转小程序支付
                        wx.miniProgram.navigateTo({
                            url: `/pages/zhifu/index?token=${th.token}&order_id=${data.order_id}`
                        })

                    } else {
                        window.location.replace(url_de)
                    }






                })

            },
            getdingd(call) { //订单初始化
                let th = this
                this.post("shopping/checkout", this.url_kh_dr, function(data) {
                    th.address = data.address
                    if (th.$store.state.shopinfo.shop_id == 1162) {
                        th.is_youke = data.user_id

                    }

                    try {
                        th.url_kh_dr.address_id = th.address.address_id
                        if (th.url_kh_dr.consignee) {
                            th.address = th.url_kh_dr
                        }
                    } catch (e) {
                        $(".dsd_jh_ert").addClass("show")

                        setTimeout(function() {
                            th.$router.back(-1)
                        }, 4000);
                        if (data.error_type == 2) { //库存不足
                            th.type = data.error_type
                            th.data_list = data.goods_list
                            th.is_s = true
                            return
                        }

                        if (data.error_type == 1) { //限购
                            th.type = 1
                            th.data_list = []
                            th.data_list.push(data)
                            th.is_s = true
                            return
                        }
                    }
                    th.goods_list = data.goods_list
                    data.goods_money = data.goods_money + data.member_discount
                    th.checkout = data



                    if (localStorage.consignee) {
                        th.checkout.consignee = localStorage.consignee
                        th.checkout.mobile_phone = localStorage.mobile_phone
                        th.url_kh_dr.consignee = localStorage.consignee
                        th.url_kh_dr.mobile_phone = localStorage.mobile_phone
                    }


                    try {
                        call(data)
                    } catch (e) {

                    }

                    $(".dsd_jh_ert").addClass("show")
                })
            },
            coupon_id(data) {
                this.sd_id_sd = data.coupon_id

                this.discount_amount_e = data.discount_amount
            },
            beforeClose(action, done) {
                if (action === 'confirm') {
                    done(false);
                    if (!this.url_kh_dr.consignee) {
                        this.$notify('请输入联系人');
                        return
                    }
                    if (!this.url_kh_dr.mobile_phone) {
                        this.$notify('请输入电话号码');
                        return
                    }
                    if (!this.yanza.phone(this.url_kh_dr.mobile_phone)) {
                        this.$notify('电话号码格式错误');
                        return
                    }


                    this.checkout.consignee = this.url_kh_dr.consignee
                    this.checkout.mobile_phone = this.url_kh_dr.mobile_phone

                    localStorage.consignee = this.url_kh_dr.consignee
                    localStorage.mobile_phone = this.url_kh_dr.mobile_phone
                    done()
                } else {
                    done();
                }
            },

            confirm_eer(e) {

            }
        },
        computed: {
            getshopinfo() {
                return this.$store.state.shopinfo;
            }
        },
        watch: {
            getshopinfo(val) {
                let th = this

                if (val.user_id == 0) {
                    if (localStorage.address_id) {
                        th.url_kh_dr.address_id = localStorage.address_id
                    }
                }


            }
        },

        mounted() {

            this.Title("订单确认")
            this.url_kh_dr = this.$route.query
            this.getdingd()



        },
    }

</script>
<style>
    .sd_jh_deet .van-field__control {
        margin-bottom: 0 !important;
        border: 0px;
        height: 28px !important;
        text-indent: 0px;
    }

    .sd_jh_deet .van-field__label {
        max-width: 70px;
        line-height: 28px;
    }

</style>
<style scoped>
    .dsd_jh_ert {
        display: none
    }

    .df_jh_ertx {
        position: absolute;
        right: 6px;
        top: 0px;
        height: 100%;
    }

    .df_h_ertxc {
        text-indent: 0px;
        padding: 0px !important;
        position: relative;
        bottom: 1px
    }

    .df_kj_dert {
        line-height: 37px;
    }

    .df_jh_dertx {
        height: 80px;
        line-height: 80px;
    }

    .dfs_jh_ser {
        border: 1px dashed #0076ef;
        color: #0076ef;
        padding: 10px 15px;
    }

    .sd_jh_dert {
        width: 250px !important;
        font-size: 14px;
        background: #fff !important;
        color: #333;
        text-align: left
    }

    .d_jh_deett {
        position: absolute;
        right: 4px;
        top: 10px
    }

    @media screen and (max-width: 330px) {
        .mui-input-row label {
            padding-left: 10px;
            font-size: 12px;
        }
        .sd_jh_dert {
            width: 210px !important;

        }

    }

    .wertsd_jh_dert {
        width: 21px;
        height: 21px;
        background-position: -214px -383px;
    }

    .dsf_jh_Deert {
        line-height: 2
    }

    .dsf_jh_Deert span {
        word-spacing: 2.4px;
    }

    .bianji_eer {
        width: 24px;
        height: 23px;
        background-position: -253px -381px;
        position: absolute;
        right: 0px;
        top: 13px;
    }

    .sdfg_deert {
        color: #666;
        border: 1px solid #666;
        padding: 2px 6px;
        display: inline-block;
        width: auto;
        position: relative;
        line-height: 20px;
        font-size: 12px;
        border-radius: 2px;
    }

    .sdfg_deert.act {
        color: #F94F4F;
        border: 1px solid #F94F4F;
    }

</style>
