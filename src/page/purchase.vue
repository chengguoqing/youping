<!--充值-->
<template>
    <div class="bgff pr">
<!--
          <img src="https://mall.cangniaowl.comhttp://mall.cangniaowl.com/static/img/zhifu_bg.jpg" class="w100 pr">
        
             <p class="s_jh_deerrt" @click="sdf_jh_d">
    
        </p>
-->
        <section class="pr">
      <p class="fz18 cf cen ssdf_jh_dert">
                安茹会籍购买
            </p>
            
             <section class="sd_jhg_dert">
              	<form class="mui-input-group sdfg_jh_dcer">
    	    <div class="mui-input-row">
    	        <label class="">名      称</label>
    	        <p class="ov dsf_jh_det">
                    安茹银卡会员年费
                </p>
    	    </div>
                    <div class="mui-input-row">
    	        <label>购买方式</label>
    	        <p class="ov dsf_jh_det">
                    付费购买
                </p>
    	    </div>
                    <div class="mui-input-row">
    	        <label>购买年限</label>
    	        <p class="ov dsf_jh_det">
                    1年
                </p>
    	    </div>
                    <div class="mui-input-row">
    	        <label>应付金额</label>
    	        <p class="ov dsf_jh_det">
                   ￥168
                </p>
    	    </div>
    	</form> 
                 
                 
                  <p class="d_kh_btn z3 cen mt20 fz16" @click="sdf_jh_d">
    
                立即支付
            </p>
    </section>
            
            
            
                       <p class="pr sd_jh_dert fz16 mt30">
        开通安茹银牌会员 享会员权益
            <i class="f_a up_icon_e"></i>
    </p>
         
                     <section class="ssd_jh_dert mt40">
                    <img src="http://mall.cangniaowl.com/static/img/fen_sd.png" class="w100">
    
                </section>
            
            
    
        </section> 
        
        
        
  

        
        <p class="bgf_kjjh_dr"></p>
    </div>
        </template>
<script>
    export default {
        data() {
            return { 

            }
        },
        components: {

        },
        methods: {
            sdf_jh_d() {
                let checkout = {},
                    th = this
                checkout.token = this.token
                checkout.goods_id = 34071
                checkout.goods_number = 1
                checkout.step = 2
                this.post("shopping/checkout", checkout, function(data) {
                    let url_de = `https://api.cangniaowl.com/payment.html?token=${th.token}&order_id=${data.order_id}`

                    window.location.href = url_de
                })
            }
        },
        mounted() {
            this.Title("安茹官方旗舰店")
        },
    }

</script>
<style scoped>
    .s_jh_deerrt {
        height: 60px;
        position: absolute;
        width: 100%;
        top: 50%;
        z-index: 100
    }

    .bgf_kjjh_dr {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background-image: url('http://mall.cangniaowl.com/static/img/sd_sdrr_b.jpg') ;
        
        background-repeat: no-repeat;
        background-color: #fff;
        background-size: 100% ;
        z-index: 1
    }
    .ssdf_jh_dert{
      margin-top: 26%;
    }
    .sd_jhg_dert{
            box-shadow: 0 0px 10px rgba(0,0,0,.2);
    }
    .dsf_jh_det{
        color: #c91315;
        font-size: 14px;
        padding-left: 10px;
        line-height: 40px;
    }
    .sdfg_jh_dcer label{
        word-spacing: 24px;
        font-size: 14px;
    }
</style>
