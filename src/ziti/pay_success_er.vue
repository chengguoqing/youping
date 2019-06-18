<!--支付完成-->
<template>
	<div class="sd_kj_deertx">
		<section class="bgff pm20">
			<p class="cen pt50">
				<i class="dx icon-gou1 ls_er fz50"></i>
			</p>
			<p class="fz20 cen mt20 ls_er">
				支付成功
			</p>


			<section class="mt30 btm bbm pt10 pm5">
				<p class="fz12 df_er_g_er pd"> 
					订单编号：{{xq_sdd.order_sn}}<br>
					<br> 支付金额：
					<span class="red">￥{{xq_sdd.order_amount}}</span>
				</p>
			</section>


			<p class="mt15 cen red fz14 b">
				该商品需要到店铺自提<br>
请保存下方二维码，到店确认
			</p>

			<section class="qc_imgh mt5">
				<span class="pr f_b">
          {{$store.state.shop_id}}
            <img :src="xq_sdd.QRcode" class="qc_erwed" >
    </span>

				<p class=" cen fz12">
					长按图片保存
				</p>

			</section>
            <p class="fz13 z9 cen mt10">
        若忘记保存，可以到订单查看
        </p>
            
            
            	<p class="mt20 cen ">
				<mt-button type="primary" class="fz14" @click="go_order_form">查看订单</mt-button>
				<mt-button type="default" class="ml20 fz14" @click="go_sdfwer">返回首页</mt-button>
			</p>
            
            

		</section>
        
        
        <section class="mt40 pr ov">
            <span class="pr f_b fds_j_Deertx">
            <img :src="$store.state.shopinfo.wei_qr_code2" class="qc_erwed" >
           <img :src="$store.state.shopinfo.shop_logo" class="logo_dertc" v-if="sd_dddf.shop_id!=1162">
    </span>
        <img  src="https://mall.cangniaowl.com/static/img/zhi_sdf.png" class="w100 cz">
    </section>

	

	</div>
</template>
<script>
    export default {
        data() {
            return {
                xq_sdd: "",
                shopinfo_p: "",
                sd_dddf: ""
            }
        },
        components: {

        },
        methods: {
            go_sdfwer() {
                if (this.sd_dddf.is_pingou == 1) { //拼购
                    let sd_ddf = {}
                    sd_ddf.goods_id = this.sd_dddf.goods_id
                    sd_ddf.order_id = this.sd_dddf.order_id
                    this.hf('pinggou', sd_ddf)
                } else {
                    this.hf('')
                }

            },
            go_order_form() {
              if (this.sd_dddf.is_pingou == 1) { //拼购
                this.hf('order_form')
              } else {
                this.hf('order_form',{type:2,types:1})
              }
            }
        },
        mounted() {
            this.Title("苍鸟")
            this.xq_sdd = this.$route.query
            let th = this
            let checkOrder = {}
            checkOrder.token = this.token
            checkOrder.order_sn = this.xq_sdd.order_sn
            this.post("shopping/checkOrder", checkOrder, function(data) {
                th.sd_dddf = data
            })

        },
    }

</script>
<style scoped>
    .qc_imgh {
        width: 180px;
        background: #F7F7F7;
        padding: 4px;
        margin: auto;
        padding-bottom: 2px;
    }

    .qc_erwed {
        width: 100%;
        height: 180px;
    }

    .df_er_g_er {
        line-height: 2
    }

    .ls_er {
        color: #17B279
    }

    .logo_dertc {
        width: 30px;
        height: 30px;
        position: absolute;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 0px;
        margin: auto;
    }
    .sd_kj_deertx{
        position: relative;
        top: 80px;
        margin-top: -80px
    }
    .fds_j_Deertx{
        width: 6.5rem !important;
        height: 6rem !important;
        position: absolute;
        left: 10%;
        top: 9%
        
    }
    .fds_j_Deertx .qc_erwed{
        height: 100% !important;
    }
</style>
