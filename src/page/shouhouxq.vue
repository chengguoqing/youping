<!--售后详情-->
<template>
	<div>

		<section class=" dsf_kh_dserx cz_w w100">

			<section class="cz_a">
				<p class="cf fz18">{{saledetail.current_title}}</p>
<!--
				<p class="cf fz12 mt10">
					还剩下4天23时58分
				</p>
-->
			</section>
			<bolang></bolang> 

		</section>

		<p class="pd fz14 bgff d_jh_title z3">
			{{saledetail.current_title}}
		</p>
		<section class="df_h_ertcc">
			<section class=" pt20 pm10 mui-row  pr">
                <section v-html="saledetail.progress_bar" class="cen"></section>
<!--
				<p class="s_jh_dert " :class="'a'+jindu">
					<span class="gd"></span>
				</p>
				<section class="sdf_jh_er cen box_a  pr" :class="zt.cls" v-for="zt in zhangt">
					<i class="f_i df_jh_ser" :class="zt.cls"></i>
					<p class="z6 mt5 fz12 dsf_jh_ertx ">
						{{zt.name}}
					</p>
					<p class="fz12 dsf_jh_dettx " v-if="zt.time ">
						2017-6-28 15:00:00
					</p>
				</section>
-->

			</section>
		</section>
	   <div class="pd  z3 pt5 fz13 pm5 bgff mui-row">
			<div v-html="saledetail.user_text" class="mui-col-xs-9 sdf_sset fz12"></div>
           <p class="mui-col-xs-3 tr ">  <a class="mui-btn" @click="hf('schedule_act',{after_service_key:saledetail.after_service_key})">进度详情</a></p>

			</div>
		<section class="bgff btm mt10" v-if="saledetail.shop_text_content" id="huisd_sdf">
                <p class="z3 fz14 pt5 pm5 pd">审核说明</p>
            <section class="pd pt10 btm z3  pm10 fz14 sd_jh_dert ">
                <p >
                {{saledetail.shop_text_title}}
            </p>
             <div v-html="saledetail.shop_text_content" class="fz12 z9 mt5 dsf_edertx"></div>
            </section>


			<section class=" pt5 pd pm5 pd">


<!--
				<section class="fz12 z6 skj_ertsrt">
					<i class="yj f_b dianIsret fl cz mt5"></i>
					<p class="ov fz12 pl10 z6">

					</p>

				</section>
-->

<!--
				<section class="fz12  skj_ertsrt">
					<i class="yj f_b dianIsret fl cz mt5"></i>
					<p class="ov fz12 pl10 z6">
						如果商家拒绝，您可以修改退款申请后再次发起，商家会重新处 理
					</p>

				</section>
-->

				<p class="tr pm10" v-if="!is_wulhz">
					<a class="mui-btn" @click="cexiaosq" v-if="saledetail.revokeapply_button==1">撤销申请</a>
			        <a class="mui-btn ml10" v-if="saledetail.logistics_button==1" @click="huizhi">物流回执</a>
                    <a class="mui-btn ml10" v-if="saledetail.getgoods_button==1" @click="queren">确认收货</a>
                       <a class="mui-btn ml10" v-if="saledetail.logisticsview_button==1" @click="hf('wuliuxq',{orderlist_data:saledetail.goods_list[0].goods_thumb,order_id:saledetail.order_id,type:1})">查看物流</a>

				</p>




			</section>

                     <section v-if="is_wulhz">
                        <p class="btm pt10 pm10  z3 pd">
                        填写物流回执
                        </p>
                        <p class="pd fz14 df_jh_dertx btm">
                        物流公司
                        </p>
                        <section class="pd shujh_sde">
                            <i class="f_a sdjhg_sd"></i>
                            <input type="text" placeholder="请输入物流公司名称" v-model="shipping_name">
                        </section>
                              <p class="pd fz14 df_jh_dertx btm">
                        物流单号
                        </p>
                              <section class="pd shujh_sde">
                            <i class="f_a sdjhg_sd ab"></i>
                            <input type="text" placeholder="请输入物流公司单号" v-model="express_sn">
                        </section>

                        <section class="btm pt20 pm20 cen">
                            <button class="qrti_btn" @click="wuliuhz">确认提交</button>
                    </section>


                </section>


		</section>

		<section class="bgff mt7">
			<p class="pd pt5 pm5 fz12 z3 mui-row">
				<span class="fl">
       售后编号：<span class="z6">{{saledetail.after_service_key}}</span>
				</span>

				<span class="fr z3 d_jh_ertxcdrt">申请时间：<span class="z6" v-html="time_c(saledetail.add_time)"></span></span>

			</p>

			<ul>
				<li class="pd pt10 pm10 btm mui-row pr" v-for="sd in saledetail.goods_list">

					<p class="cp_icon_sdf fl ">
						<img :src="sd.goods_thumb">
					</p>

					<section class="ov pl10 mui-row pr">
						<section class="mui-col-xs-9">
							<p class="dianer z3 sdf_jh_dertx">{{sd.goods_name}}
							</p>
							<p class="fz12 dian">
								{{sd.goods_attr}}
							</p>
<!--
							<p class="">
								<span class="bgred yj4 cf df_sdfrt fz12">七天退换</span>

							</p>
-->

						</section>
						<section class="ov tr">
							<span class="fz14">￥{{sd.goods_price}}</span>
							<p class="fz12 dsf_hg_dser">
								x{{sd.goods_number}}
							</p>
						</section>

					</section>

				</li>
			</ul>

			<p class="btm pd pt10" v-if="saledetail.do_type==1">
				退款金额：<span class="red fz16">￥{{saledetail.refund_price}}</span>
			</p>
			<p class="pd mt5 pm20">
				退款原因：{{saledetail.content}}
			</p>

		</section>

        
        	<section class="bgff doibu_sdrt tr pd btm" v-if="saledetail.getgoods_button==1">

			<span>
                <a class="mui-btn cz ls" @click="queren">确认收货</a>
                </span>
                
    </section>
        
	</div>
</template>
<script>
    import bolang from "../components/bolang.vue"
    import {
        Toast
    } from 'mint-ui';
    export default {
        data() {
            return {
                is_wulhz: false, //是否显示物流回执窗口
                jindu: 2, //进度
                saledetail: "",
                shipping_name: "", //物流公司名称
                express_sn: "", //物流编号
                after_service_key: ""

            }
        },
        components: {
            bolang: bolang
        },
        methods: {
            cexiaosq() { //撤销申请
                let revokeapply = {},
                    th = this
                revokeapply.token = th.token
                revokeapply.order_id = th.saledetail.order_id
                this.post("customer/revokeapply", revokeapply, function(data) {
                    th.$router.back(-1)
                })
            },
            huizhi() { //物流回执按钮触发
                this.is_wulhz = true
                let huisd_sdf = $("#huisd_sdf").offset().top
                this.gundong(huisd_sdf)
            },
            wuliuhz() { //确认物流回执按钮触发
                if (!this.shipping_name) {
                    Toast('请输入物流公司名称');
                    return
                }
                if (!this.express_sn) {
                    Toast('请输入物流编号');
                    return
                }
                let logisticsreceipt = {},
                    th = this
                logisticsreceipt.token = this.token
                logisticsreceipt.shipping_name = this.shipping_name
                logisticsreceipt.express_sn = this.express_sn
                logisticsreceipt.after_service_key = this.after_service_key
                this.post("customer/logisticsreceipt", logisticsreceipt, function(data) {
                    location.reload();
                })

            },
            queren() { //确认收货按钮触发

                let getgoods = {}
                getgoods.token = this.token
                getgoods.order_id = this.saledetail.order_id
                this.post("customer/getgoods", getgoods, function(data) {
                    location.reload();
                })
            },
          
        },
        mounted() {
            this.Title("售后详情")
            let saledetail = {},
                th = this
            saledetail.token = this.token
            saledetail.after_service_key = this.$route.query.after_service_key
            this.after_service_key = this.$route.query.after_service_key
            this.post("customer/saledetail", saledetail, function(data) {
                th.saledetail = data
            })

        },
    }

</script>
<style>
    .dsf_edertx p,
    .sdf_sset p {
        font-size: 12px !important;
    }


    .withdraw-schedule .check-pending-content .schedule-img .schedule-status-icon {
        display: inline-block;
        width: 20px;
        height: 20px;
    }

    .withdraw-schedule .check-pending-content .schedule-img .line {
        display: inline-block;
        width: 25%;
        height: 100%;
        position: relative;
    }

    .withdraw-schedule .check-pending-content .schedule-img .line span {
        display: inline-block;
        width: 100%;
        height: 2px;
        background: #d8d8d8;
        position: absolute;
        top: -10px;
        left: 0;
        transform: translateY(-50%);
    }

    withdraw-deposi-record.css:83 .success-line span {
        background: #34d680 !important;
    }


    .schedle-text {
        display: flex;
        font-size: 12px;
        color: #999;
    }


    .withdraw-schedule .check-pending-content .schedle-text .schedle-text-item {
        flex: 1;
        line-height: 1.3;
        margin-top: 10px;
    }

    withdraw-deposi-record.css:95 .success-text {
        color: #34d680;
    }

    .after-sale-schedule {
        display: flex;
        /*        padding: 15px 10px;*/
        height: 100%;
    }

    .schedule-text {
        margin-bottom: 0px !important;
    }

    .schedule-text,
    .schedule-date {
        font-size: 12px;
    }

    .after-sale-schedule .schedule-item {
        flex: 1;
        color: #666;
        font-size: 9px;
        text-align: center;
        position: relative;
    }

    .after-sale-schedule .schedule-text {
        margin-bottom: 5px;
    }

    .schedule-success p {
        color: #34d680;
    }

    .after-sale-schedule .schedule-date {
        margin-bottom: 0;
    }

    .schedule-success p {
        color: #34d680;
    }

    .after-sale-schedule .schedule-item::after {
        content: '';
        display: inline-block;
        border-top: 2px solid #d8d8d8;
        width: 60%;
        height: 1px;
        position: absolute;
        top: 10px;
        left: 70%;
    }

    .after-sale-schedule .schedule-success::after {
        content: '';
        display: inline-block;
        border-top: 2px solid #34d680;
        width: 60%;
        height: 1px;
        position: absolute;
        top: 10px;
        left: 70%;
    }

    .schedule-item:last-child::after {
        display: none
    }

    /*成功或失败的图标、文字样式*/

    /*图标*/

    .success-icon {
        background: url("http://mall.cangniaowl.com/static/img/check-success.png") no-repeat;
        -webkit-background-size: 100%;
        background-size: 100%;
    }

    .schedule-item.schedule-success .schedule-img {
        background: url(http://mall.cangniaowl.com/static/img/check-success.png) no-repeat;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
    }

    .after-sale-schedule .schedule-img {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(http://mall.cangniaowl.com/static/img/check-wait.png) no-repeat;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
    }


    .wait-icon {
        background: url("http://mall.cangniaowl.com/static/img/check-wait.png") no-repeat;
        -webkit-background-size: 100%;
        background-size: 100%;
    }

    .error-icon {
        background: url("http://mall.cangniaowl.com/static/img/check-error.png") no-repeat;
        -webkit-background-size: 100%;
        background-size: 100%;
    }

    .success-line span {
        background: #34d680 !important;
    }

    .error-line span {
        background: #fe7955 !important;
    }

    /*文字*/

    .schedle-text {
        display: flex;
        font-size: 12px;
        color: #999;
    }

    .success-text {
        color: #34d680;
    }

    .error-text {
        color: #fe7955;
    }

    /*成功或失败的图标、文字样式*/

    /*withdraw-details*/

    .withdraw-details {

        margin-bottom: 10px;

        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        background: #fff;
        font-size: 14px;
        color: #333;
    }

    .withdraw-details .reality-grant {

        padding: 0 10px;
        height: 40px;
        line-height: 40px;
        margin-bottom: 1px;
        border-bottom: 1px solid #eee;
    }

    .withdraw-details .reality-grant .apply-price {
        font-size: 30px;
        /*font-weight: bold;*/
    }

    .withdraw-details .apply-for {
        padding: 10px;
        overflow: hidden;
    }

    .withdraw-details .apply-for .fr {
        color: #999;
    }

    .withdraw-details .apply-for div {
        overflow: hidden;
    }

    .apply-money,
    .apply-time {
        margin-bottom: 10px;
    }

    /*remark*/

    .remark {
        height: 45px;
        line-height: 45px;
        padding-left: 10px;
        background: #fff;
        font-size: 14px;
    }

    .sdjhg_sd {
        width: 31px;
        height: 32px;
        position: absolute;
        left: 10px;
        top: 9px;
        z-index: 100;
        background-position: -17px -78px;
    }

    .sdjhg_sd.ab {
        background-position: -64px -78px;
    }

    .logistics {
        /*
        width: 50%;
        float: left;
*/
        margin-top: 5px;
    }

    .logistics i {
        left: 0px;
        top: 0px;
        margin-right: 10px;
        position: relative !important;
    }

</style>
<style scoped>
    .dsf_kh_dserx {
        position: relative;
        height: 8rem;
        background: #0076EF
    }

    /*
    .sdf_jh_er{
        width: 20%;
        float: left;
    }
*/

    .sdf_jh_er {
        padding-left: 3px;
        padding-right: 3px
    }

    .df_jh_ser {
        width: 24px;
        height: 24px;
        background-position: -280px -159px;
        background-color: #EFEFF4
    }

    .df_jh_ser.act {
        background-position: -244px -158px;
    }

    .dsf_jh_dettx {
        line-height: 1.1;
        margin-top: 2px;
        transform: scale(0.9)
    }

    .dsf_jh_ertx {
        white-space: nowrap;
    }

    .df_h_ertcc {
        overflow: auto;
    }

    .df_h_ertcc .box {
        min-width: 350px;
        max-width: 400px;
        margin: auto;
    }

    .s_jh_dert {
        position: absolute;
        left: 0px;
        right: 0px;
        height: 4px;
        width: 80%;
        margin: auto;
        background: #D8D8D8;
        top: 29px;
    }

    .s_jh_dert span {
        position: absolute;
        left: 0px;
        top: 0px;
        height: 100%;
        background: #37D680
    }

    .s_jh_dert.a2 span {
        width: 23%;
    }

    .s_jh_dert.a3 span {
        width: 48%;
    }

    .s_jh_dert.a4 span {
        width: 80%;
    }

    .s_jh_dert.a5 span {
        width: 100%;
    }

    .sdf_jh_er.act p {
        color: #37D680;
    }

    .dianIsret {
        width: 8px;
        height: 8px;
        background: #E6E6E6;
    }

    .skj_ertsrt {
        margin-top: 5px;
    }

    .sd_jh_dert {
        background: #FAFAFA;
        min-height: 100px;
    }

    .df_jh_dertx {
        background: #FAFAFA;
        line-height: 35px;
    }

    .shujh_sde {
        position: relative;
        padding-top: 4px;
        padding-bottom: 4px;
    }

    .shujh_sde input {
        border: 0px;
        font-size: 14px;
        text-indent: 30px;
        margin-bottom: 0px;
    }



    .qrti_btn {
        background: #0067EF;
        color: #fff
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

    @media screen and (max-width: 340px) {
        .d_jh_ertxcdrt {
            display: none
        }
    }

</style>
