<!--拼团去分享-->
<template>
<div >

    <section class="pr bgff cen pt20">
        <img src="/static/img/zhongbiao.png" class="sd_kh_zhdf">
        <section class="sd_kjh_deert_er">
        <daojishi></daojishi>
            </section>
       
        
    </section>
    <section class="bgff pr pd">
     <p class="pt10 cen z3 fz14">
        还差<span class="red">2</span>人拼单成功，点击右上角分享给好友
        </p>
        <p class="mt5 pm10">
            <button class="mui-btn-red fz16 w100" @click="is_pup_dd=true">邀请好友拼单</button>
        </p>
        
        </section>
    
    <section class="bgff mt10 pt15">
    
         <section class="cen ">
                <section class="wenhao_icon ab">
                    <img src="/static/img/act_top.jpg" class="yj  cz"> 
                    <i class="f_p pingzhu_e"></i>
                </section>
                <img src="/static/img/wenhao.png" class="wenhao_icon cz">
                
            </section>
        
       <section class="btm mt15 pt5 pm5 pd dian fz12">
        <span class="fz15">商品名称</span>
           <span class="ml5">商品名称商品名称商品名称商品名称商品名称商品名称商品...></span>
        </section>
        
            <section class="btm  pt5 pm5 pd dian fz12">
        <span class="fz15">拼团须知</span>
           <span class="fr mt2 ">好友拼单 人满发货 人不满退款</span>
        </section>
        
    
    </section>
    
<!--    分享弹出层-->
    <section class="sd_jh_pup_e" v-if="is_pup_dd" @click="is_pup_dd=false"></section>
    <img src="/static/img/fenxiang_png.png" class="fenxing_eer" v-if="is_pup_dd">
<!--    分享弹出层-成功-->
     <section class="sd_jh_pup_e" v-if="is_pup_dd_er" @click="is_pup_dd_er=false"></section>
    

   <i class="dx icon-close1 cf closertde"  @click="is_pup_dd_er=false" v-if="is_pup_dd_er" ></i>
       
    <img src="/static/img/fengxiang_success.png" class="fenxing_eer ab" v-if="is_pup_dd_er" @click="is_pup_dd_er=false">
 
     
</div>
</template>
<script>
    import daojishi from "../components/daojishi"
    export default {
        data() {
            return {
                is_pup_dd: "",
                is_pup_dd_er:true
            }
        },
        components: {
            daojishi
        },
        methods: {

        },
        mounted() {
            this.Title("苍鸟商城")
        },
    }

</script>
<style scoped>
    .sd_kh_zhdf {
        width: 195px
    }

    .sd_kjh_deert_er {
        position: absolute;
        width: 100%;
        left: 0px;
        bottom: -5px;
    }

    .sd_jh_pup_e {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        z-index: 100
    }

    .fenxing_eer {
        width: 265px;
        position: fixed;
        left: 0px;
        right: 0px;
        margin: auto;
        z-index: 101;
        top: 0px;
    }
    .fenxing_eer.ab{
        width: 301px;
        margin-top: 100px;
     
    }
    .df_jh_deer{
        z-index: 1000;
        top: 100px;
    }
    .closertde{
        font-size: 20px;
     
        position: absolute;
        right: 15%;
        top: 100px;
        z-index: 1001
    }
</style>
