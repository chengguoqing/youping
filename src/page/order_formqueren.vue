<!--订单确认-->
<template>
	<div class="dsd_jh_ert">
<!--        限购或库存不足弹出-->
        <pup_tishi :is_s="is_s" :type="type" :data_list="data_list" @sd_ert="is_s=false"></pup_tishi>

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
							￥<span class="fz16" v-html="price_guo(sd.shop_price)"> </span>

							<span class="fr z6">x{{sd.goods_number}}</span>

						</p>

					</section>

				</li>
			</ul>

		</section>

		<form class="mui-input-group fz14 mt7">

			<div class="mui-input-row">
				<label>配送方式：</label>
				<p class="ov z3 df_kj_dert tr pr10">
					快递 <span>共<span class="red">￥{{checkout.shipping_fee|baoliu}}</span></span>

				</p>
			</div>

            <div class="mui-input-row pr" @click="popupVerisible=true" v-if="tishi_sd">
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



			<div class="mui-input-row">
				<label>买家留言：</label>
				<input type="text" class="mui-input-clear fz14 df_h_ertxc" placeholder="选填：给商家留言（45字以内）" v-model="postscript">
			</div>
		</form> 

		<section class="mt7 bgff pd d_jh_ertxc">
			<p class="mui-row fz12">
				商品金额 <span class="red fr">￥{{checkout.goods_money|baoliu}}</span>
			</p>
            	<p class="mui-row fz12">
				级别折扣（会员/代理商） <span class="red fr">-￥{{checkout.member_discount|baoliu}}</span>
			</p>
			<p class="mui-row fz12">
				抵扣金额<span class="red fr">-
                {{discount_amount_e>0?discount_amount_e:0|baoliu}}
<!--
                {{(discount_amount_e-checkout.discount>checkout.discount?checkout.goods_money:discount_amount_e-checkout.discount)|baoliu}}
    
-->
    
    </span>
			</p>
			<p class="mui-row fz12">
				运费金额 <span class="red fr">+￥{{checkout.shipping_fee|baoliu}}</span>
			</p>

		</section>
		<section class="btm  fz14 z3 tr bgff pd d_jh_title">
			共{{goods_list.length}}件商品，小计：
            <span class="fz16 red">￥<span v-html="price_guo((checkout.total_money-discount_amount_e<=0?0:checkout.total_money-discount_amount_e))"></span></span>
		</section>

		<section class="dsf_jh_drf btm bgff  mui-row btm">
			<section class="mui-col-xs-9 pd">

				<span class="fz12 z9 fr">
                        <span class="fz14 z6">合计金额:
                            <span class="red fz16">￥<span class="b st"v-html="price_guo((checkout.total_money-discount_amount_e<=0?0:checkout.total_money-discount_amount_e))"></span></span>
				</span>
				</span>

			</section>
			<!--                -->
			<section class="mui-col-xs-3 bgred cf fz14 cen" @click="tijiao_dd">
				提交订单
			</section>

		</section>

        
<!--
        <section v-if="is_youke">
         <yanzheng :pher_er="address.mobile" v-if="!checkout.mobile_phone" @tijiao="tijiao_dd"></yanzheng>
</section>
-->

        <!--    卡券弹出层-->
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



	</div>
</template>
<script>
    import {
        MessageBox
    } from 'mint-ui';
    import pup_tishi from "../components/pup_tishi.vue"
    import yanzheng from "../components/yanzheng.vue"
    import kaquan from "../components/kaquan.vue"
    export default {
        data() {
            return {
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
                postscript: "" //留言
            }
        },
        components: {
            pup_tishi: pup_tishi,
            yanzheng,
            kaquan
        },
        methods: {
            tijiao_dd() { //提交订单按钮触发
                this.url_kh_dr.step = 2
                this.url_kh_dr.postscript = this.postscript
                let th = this
                if (!this.url_kh_dr.address_id) {
                    MessageBox.confirm('请添加收货地址').then(action => {
                        if (action) {
                            th.hf('add_dizhi')
                        }
                    });
                    return
                }
                if (this.tishi_sd) {
                    this.url_kh_dr.coupon_id = this.sd_id_sd


                }
                this.getdingd(function(data) {

                    let url_de = `https://api.cangniaowl.com/payment.html?token=${th.token}&order_id=${data.order_id}`

                    window.location.href = url_de


                })

            },
            getdingd(call) { //订单初始化
                let th = this
                this.post("shopping/checkout", this.url_kh_dr, function(data) {
                    th.address = data.address

                    th.is_youke = data.user_id
                    try {
                        th.can_receive_coupon = data.can_select_coupon
                        th.tishi_sd = th.can_receive_coupon[0]
                        th.sd_id_sd = th.can_receive_coupon[0].coupon_id
                        th.discount_amount_e = th.tishi_sd.discount_amount
                    } catch (e) {

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

</style>
