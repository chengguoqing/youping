<!--充值-->
<template>
    <div class="bgff pr df_Deerrtt">

        <section class="pr">

            <img src="https://mall.cangniaowl.com/youpinmeijia/BrowserPreview_tmp_01.jpg" class="w100" v-if="ity==1">
             <img src="https://mall.cangniaowl.com/youpinmeijia/dsfdf_ert_a.jpg" class="w100" v-if="ity==2">
             <img src="https://mall.cangniaowl.com/youpinmeijia/dfdf_sd_a.jpg" class="w100" v-if="ity==3">
            
                      <img src="https://mall.cangniaowl.com/youpinmeijia/dsfdsf_a.jpg" class="w100" v-if="ity==4">
             <section class="sd_jhg_dert">
              	<form class="mui-input-group sdfg_jh_dcer" :class="'sd_dfdrt'+ity">
    	    <div class="mui-input-row">
    	        <label class="">名      称</label> 
    	        <p class="ov dsf_jh_det">
                   {{ity-1|name_e}}品牌999会员年费
                </p>
    	    </div>
                    <div class="mui-input-row">
    	        <label>购买方式</label>
    	        <p class="ov dsf_jh_det">
                    微信支付
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
                   ￥999
                </p>
    	    </div>
    	</form> 
                 
                 
                  <p class="d_kh_btn z3 cen mt20 fz16" @click="sdf_jh_d">
    
                立即支付
            </p>
    </section>
            
            
            
                       <p class="pr sd_jh_dert fz16 mt30">

           <p class="mt30">
     <img src="https://mall.cangniaowl.com/youpinmeijia/BrowserPreview_tmp_03.jpg" class="w100 cz" v-if="ity==1">
                <img src="https://mall.cangniaowl.com/youpinmeijia/dsfdf_ert_b.jpg" class="w100 cz" v-if="ity==2">
                <img src="https://mall.cangniaowl.com/youpinmeijia/dfdf_sd_b.jpg" class="w100 cz" v-if="ity==3">
               <img src="https://mall.cangniaowl.com/youpinmeijia/dsfdsf_b.jpg" class="w100" v-if="ity==4">
               
    </p>
            

        </section> 
        
        
        
  

        
        <p class="bgf_kjjh_dr">
           
        </p>
    </div>
        </template>
<script>
    export default {
        data() {
            return {
                ity: 0, //1 DTB品牌  2玛娜品牌 3影度品牌
                ping_sdf:["DTB", "MANA",'indult','Nine House'],
                goumoas:[38268,38259,38272,13]
            }
        },
        components: {

        },
        methods: {
            sdf_jh_d() {
                let checkout = {},
                    th = this
                checkout.token = this.token
                checkout.goods_id = this.goumoas[this.ity-1]
                checkout.goods_number = 1
                checkout.step = 2
                this.post("shopping/checkout", checkout, function(data) {
                    let url_de = `https://api.cangniaowl.com/payment.html?token=${th.token}&order_id=${data.order_id}`

                    window.location.href = url_de
                })
            } 
        },
        mounted() {
            this.ity = this.$route.query.ity
            window.scrollTo(0, 0)
            this.Title(this.ping_sdf[this.ity-1]+"品牌")
        },
        filters: { //过滤器   页面上调用{{dt.state|lei}}
            name_e(num) {
                var sd_Dff=["DTB", "MANA",'INDULT','Nine House']
                return sd_Dff[num]
            }
        }
 
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

        z-index: 1
    }

    .ssdf_jh_dert {
        margin-top: 26%;
    }

    .sd_jhg_dert {
        box-shadow: 0 0px 10px rgba(0, 0, 0, .2);
        margin-top: -100px;
        position: relative;
        z-index: 1000
    } 

    .dsf_jh_det {
        color: #004872;
        font-size: 14px;
        padding-left: 10px;
        line-height: 40px;
    }

    .sdfg_jh_dcer label {
        word-spacing: 24px;
        font-size: 14px;
    }

    .d_kh_btn {
        background: linear-gradient(to bottom, #F4DFC3, #E4AD68);
        color: #7e3500 !important;
        width: 150px;
        border-radius: 4px;
    }

    .df_Deerrtt {
        margin-top: -80px;
        position: relative;
        top: 80px;
    }
      .sd_dfdrt2 .dsf_jh_det{
        color: #193f28 !important
    }
    .sd_dfdrt3 .dsf_jh_det{
        color: #193f28 !important
    }
     .sd_dfdrt2 .dsf_jh_det{
        color: #000 !important
    }

</style>
