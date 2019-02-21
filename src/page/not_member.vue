<!--我不是会员-->
<template>
    <div class="pr hg_dd_der_ert">
       
        <p class=" lk_sddr fz20 cen">
    开通安茹会员 享专属特权
        </p>
        
        <section class="sd_jhg_dert">
            <section class="fz12 z3 fg_kjh_dfetr cen">
    尊敬的{{text_e}}<br>
您尚未成为安茹官方旗舰店会员 无法享受专属特权
            </section>
            <section class="btm">
                
                <p class="z3 fz12 df_ddfer_e cen">
                    <span class="bgff">开通安茹银牌会员 享专属特权</span>
                </p>
                <section class="ssd_jh_dert">
                    <img src="http://mall.cangniaowl.com/static/img/fen_sd.png" class="w100">
    
                </section>
                
                
                       <div class="d_kh_btn z3 cen fz13 fg_h_deert" @click="hf('purchase')">
            立即开通<br>
            <p class="fz12 cf dsf_jhj_derr">安茹银牌会员特惠  ￥168/年</p>
            </div>
                
                
        
            </section>
            
            
        </section>
        

        
    </div>
        </template>
<script>
    export default {
        data() {
            return {
                text_e:""
            }
        },
        components: {

        },
        methods: {
            sdf_jh_d(){
                this.hf('purchase')
            }
        },
        mounted() {
            this.Title("安茹官方旗舰店")
            
            this.text_e=this.$route.query.text_e
        },
    }

</script>
<style scoped> 
    .s_jh_deerrt{
        height: 60px;
        position: absolute;
        width: 100%;
        bottom: 5%;
    }
    .hg_dd_der_ert{
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: url('http://mall.cangniaowl.com/static/img/sd_sdrr_a.jpg') no-repeat ;
        background-size: 100% ;
    }
    .lk_sddr{
        color: #DEBB59;
        margin-top: 15%;
    }
   

</style>
