<!--订单详情-->
<template>
	<div>
		<p class="dsf_jgh_ewerx">
<!--            拼团订单详情-待分享-->
            <img src="/static/img/pingduandd.jpg" v-if="type_se==5">
<!--            拼团订单详情-待收货-->
            <img src="/static/img/pingduandd_b.jpg" v-if="type_se==6">
            
			<img src="http://mall.cangniaowl.com/static/img/daifukuang.jpg" v-if="type_se==0">
			<img src="http://mall.cangniaowl.com/static/img/yifuk.jpg" v-if="type_se==1">

			<img src="http://mall.cangniaowl.com/static/img/daishouhuo.jpg" v-if="type_se==2">
			<img src="http://mall.cangniaowl.com/static/img/daipingjia.jpg" v-if="type_se==3">
			<img src="http://mall.cangniaowl.com/static/img/jyqx.jpg" v-if="type_se==4">
            		
		</p>
        	<section class="pd pt10 pm5  bgff  mui-row pr"  v-if="type_se==6">
			<i class="dx icon-wuliu fz22 fl mt2 red"></i>
			<section class="ov pl10 ">
				
					<p class="dian mui-col-xs-12 ls">
						广州市】您的订单到达【科学城分拣中心】，预计派
					</p> 
                <p class="fz12 z9">
    2018-03-19 14:08:56
            </p>

    </section>
    </section>
        

		<section class="pd pt10 pm10 bgff mt7 mui-row pr">
			<i class="dx icon-map fz22 fl mt5 red"></i>
			<section class="ov pl10 pr20">
				<section class="mui-row">
					<p class="dian mui-col-xs-8 z3">
						收货人：{{orderlist_data.consignee}}
					</p> 
					<p class="dian mui-col-xs-4 z3 tr">
						{{orderlist_data.mobile}}
					</p>
				</section>
				<p class="mt5 fz12">
					收货地址：{{orderlist_data.province_name+orderlist_data.city_name+orderlist_data.district_name+orderlist_data.address}}
				</p>

			</section>
			<p class="hs_khsd"></p>

		</section>
        
        	<section class="pd pt10 pm10 bgff mt7 mui-row pr"  v-if="type_se==5||type_se==6">
			<i class="dx icon-wode1 fz22 fl mt2 red"></i>
			<section class="ov pl10 pr20">
				<section class="mui-row">
					<p class="dian mui-col-xs-12 z3">
						待分享，还差1人，剩余 22:16:43
					</p> 
					
				</section>
				<div class="  fz12 mui-row">
					      <section class=" fg_jh_fr tl pr5 mui-col-xs-9">
                           <section class="wenhao_icon ac">
                    <img src="/static/img/act_top.jpg" class="yj  cz"> 
                    <i class="f_p pingzhu_e"></i>
                </section>
                
                <section class="wenhao_icon ac" v-if="type_se==5">
                    <img src="/static/img/wenhao.png" class="yj  cz"> 
    
                </section>
                
        </section>
            <section class="ov">
                <button class="mui-btn-red df_jh_deeet">邀请好友</button>
            </section>        
                    
    </div>

			</section>
			

		</section>
        
        
        

		<section class="mt7 bgff">
			<p class="pd d_jh_title">
				<!--                <i class="f_i df_jgh_sr"></i>-->
				<span class="fz15  ml5">{{$store.state.shopinfo.company}}</span>
			</p>

			<ul>
				<li class="pd pt10 pm10 btm mui-row pr" v-for="sd in orderlist_data.goods_list" @click="hf('commodity_details',{goods_id:sd.goods_id})">

					<p class="cp_icon_sdf fl ">
						<img :src="sd.goods_thumb">
					</p>

					<section class="ov pl10 mui-row pr">

						<p class="dianer z3 sdf_jh_dertx">{{sd.goods_name}}</p>
						<!--
                            <p class="fz12 dian">
颜色：红色  容量：50ml
                </p>
-->
						<p class="fz12 red ds_jh_rertxc">
							￥<span class="fz16" v-html='price_guo(sd.goods_price)'></span>
							<span class="fr z6">x{{sd.goods_number}}</span>

						</p>

					</section>

				</li>
			</ul>

		</section>

		<ul class="mui-table-view mt7 fz14">
			<li class="mui-table-view-cell">
				配送方式： <span class="fr"> 快递 共<span class="red">￥{{orderlist_data.shipping_fee}}</span></span>
			</li>
			<li class="mui-table-view-cell">
				买家留言：{{orderlist_data.postscript}}
			</li>
		</ul>

		<section class="mt7 bgff pd d_jh_ertxc">
			<p class="mui-row fz12">
				商品金额： <span class="red fr">￥{{orderlist_data.goods_amount}}</span>
			</p>
			<p class="mui-row fz12">
				抵扣金额： <span class="red fr">-￥{{orderlist_data.discount}}</span>
			</p>
			<p class="mui-row fz12">
				运费金额： <span class="red fr">￥{{orderlist_data.shipping_fee}}</span>
			</p>

		</section>
		<section class="btm  fz14 z3 tr bgff pd d_jh_title">
			共{{let_sd}}件商品，小计：<span class="fz16 red">￥{{orderlist_data.order_amount}}</span>
		</section>

		<section class="mt7 bgff ">
			<p class="d_jh_title pd mui-col-xs-6 cen brm">
				<i class="dx icon-kefu ls fz18 cz"></i>
<!--                <span class="ls  ml5" >联系卖家</span>-->
			<span class="ls  ml5"  @click="kefu(shop_id,goods_id)">联系卖家</span>
			</p>

			<section class="btm bgff pd d_jh_ertxc pr">
				<a class="mui-btn fuzas_sd fz12 z9" v-clipboard:copy="orderlist_data.order_sn" v-clipboard:success="onCopy">复制</a>
				<p class="mui-row fz12">
					订单编号：{{orderlist_data.order_sn}}
				</p>
				<p class="mui-row fz12">
					创建时间： <span v-html="time_d(orderlist_data.add_time)"></span>
				</p>

				<p class="mui-row fz12" v-if="orderlist_data.pay_time">
					付款时间：<span v-html="time_d(orderlist_data.pay_time)"></span>
				</p>
				<p class="mui-row fz12" v-if="orderlist_data.shipping_time">
					发货时间：<span v-html="time_d(orderlist_data.shipping_time)"></span>
				</p>
				<p class="mui-row fz12" v-if="orderlist_data.confirm_time">
					确认时间：<span v-html="time_d(orderlist_data.confirm_time)"></span>
				</p>

			</section>

		</section>

		<section class="bgff doibu_sdrt tr pd btm">

			<span v-if="type_se==0">
            <a class="mui-btn cz" @click="querensh('cancel')">取消订单</a>
               <a class="mui-btn cz ml5 ab" @click="fukuang() ">付款</a>
                </span>

			<span v-if="type_se==1">
            <a class="mui-btn cz"   @click="hf('tuihuanhuo',{type:1})">申请退款</a>
               <a class="mui-btn cz ml5 ab">提醒发货</a>
                </span>

			<span v-if="type_se==2||type_se==6">
            
                  <a class="mui-btn cz"  @click="hf('wuliuxq',{orderlist_data:orderlist_data.goods_list[0].goods_thumb,order_id:orderlist_data.order_id,type:0})" >查看物流</a>
                
                
               <a class="mui-btn cz ml5 ab" @click="querensh('confirm')">确认收货</a>
                </span>

			<span v-if="type_se==3">
            <a class="mui-btn cz"  @click="hf('tuihuanhuo',{type:1})">申请退/换货</a>
               <a class="mui-btn cz ml5 ab" @click="hf('pingjia')" v-if="orderlist_data.is_comment<=0">评价</a>
                    <a class="mui-btn cz ml5 ab" @click="hf('see_evaluation',{order_id:orderlist_data.order_id})" v-else>查看评价</a>
                </span>

            
            
			<span v-if="type_se==5">
            <a class="mui-btn cz"   @click="hf('tuihuanhuo',{type:1})">申请退款</a>
               <a class="mui-btn cz ml5 ab">去分享</a>
                </span>
            
            
            
		</section>
<!--
     <advertising :position_id="5" class="mt10"></advertising>
             <showcase :position_id="5" class="mt10"></showcase>
        
-->
	</div>
</template>
<script>
    import {
        MessageBox
    } from 'mint-ui';
    import {
        Toast
    } from 'mint-ui';
    import Clipboard from 'clipboard';
    import advertising from "../components/advertising.vue"
    import showcase from "../components/showcase.vue"

    export default {
        data() {
            return {
                orderlist_data: "",
                let_sd: "",
                type_se: 0,
                shopinfo_p: "",
                shop_id: 0,
                goods_id: 0
            }
        },
        components: {
            advertising: advertising,
            showcase
        },
        methods: {
            queren() {
                MessageBox.confirm('确定取消吗？').then(action => {
                    if (action) {

                    }
                });
            },
            querensh(tyw_d) { //确认收货
                let orderupdate = {},
                    th = this
                orderupdate.token = this.token
                orderupdate.order_id = this.orderlist_data.order_id
                orderupdate.type = tyw_d
                this.post("user/orderupdate", orderupdate, function(data) {
                    Toast('操作成功');
                    th.hf('order_form')
                })
            },
            dinghdn(t) {
                let th = this
                switch (t) { //0待付款  1待发货  2待收货 3交易成功 4交易取消
                    case 1:
                        return th.type_se = 1
                        break;
                    case 2:
                        return th.type_se = 2
                        break;
                    case 3:
                    case 11:
                        return th.type_se = 4
                        break;
                    case 6:
                        return th.type_se = 0
                        break;
                    case 5:
                    case 9:
                    case 10:
                        return th.type_se = 4
                        break;
                    case 11:
                        return th.type_se = 4
                        break;

                    case 8:

                    case 12:
                    case 13:
                        return th.type_se = 3
                        break;
                }
            },
            onCopy() {
                Toast({
                    message: '复制成功！',
                    iconClass: 'dx icon-gou fz32'
                });
            },
            fukuang() {
                let g_list = this.orderlist_data
                let dats_e = {}
                dats_e.order_id = g_list.order_id
                dats_e.order_sn = g_list.order_sn
                dats_e.goods_money = g_list.heji
                let orderpay = {},
                    th = this
                orderpay.token = this.token
                orderpay.order_id = g_list.order_id

                this.post("user/orderpay", orderpay, function(data) {
                    dats_e.user_money = data.user_money
                    dats_e.total_money = g_list.heji
                    dats_e.wxpay = data.wxpay
                    let url_de = `https://api.cangniaowl.com/payment.html?token=${th.token}&order_id=${g_list.order_id}`
                    window.location.href = url_de
                })
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

                th.shopinfo_p =val
                th.shop_id = val.shop_id
          
            }
        },
        mounted() {
            this.Title("订单详情")
            this.orderlist_data = this.$route.query.orderlist_data
            try {
                this.goods_id = this.orderlist_data.goods_list[0].goods_id
            } catch (e) {
                this.hf('order_form')
            }


            try {
                this.let_sd = this.orderlist_data.goods_list.length
            } catch (e) {
                this.hf('order_form')
            }

         
            this.dinghdn(this.orderlist_data.status)
            window.scrollTo(0, 0)
            let clipboard = new Clipboard('.copyBtn');
        },
        beforeRouteLeave(to, from, next) {

            // 设置下一个路由的 meta
            console.log(to.path);
            if (to.path == "/commodity_details") {
                to.meta.keepAlive = false
            }

            next();
        }
    }

</script>
<style scoped>
    .dsf_jgh_ewerx {
        min-height: 100px;
        height: 7rem
    }

    .dsf_jgh_ewerx img {
        width: 100%;
        height: 100%;
    }

    .fuzas_sd {
        position: absolute;
        right: 10px;
    }

    .doibu_sdrt {
        position: fixed;
        width: 100%;
        line-height: 50px;
        bottom: 0px;
        left: 0px;
        z-index: 99
    }

    .doibu_sdrt a.ab {
        color: #0076ef;
        border: 1px solid #0076ef
    }
    .df_jh_deeet{
        padding-top: 4px;
        padding-bottom: 2px;
        margin-top: 10px;
    }

</style>
