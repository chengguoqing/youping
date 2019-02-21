<template>
    <div >
        <img src="https://mall.cangniaowl.com/static/img/kanjia_list.jpg" class="w100">
        
        <section class="d_jh_dert">
     
            
            
              <ul class="pd df_jh_deer pt10">
<!--                  acb act-->
                        <li class="bgff " :class="sd.bargain_is_doing==1?'acb':''" v-for="sd in bargainGoodsList">
                <div class="fl pr">
                    <img :src="sd.goods_thumb" class="fenghm_sd cz br">
                   <p class="sd_jh_Dertt">
                <i class="f_a d_df_drrty"></i>
                </p> 
                    
                       <div class="fz12 cf ertdf_jh_dert">
                        <daoshiji :dapshid="sd.bargain_left_time"></daoshiji>  
<!--
                           {{sd.is_drte_er.h}}时{{sd.is_drte_er.m}}分{{sd.is_drte_er.m_b}}
                           
                           秒
-->
    </div>
                </div>
                <div class="ov cen pt10 pl10">
                    <section class="dsf_jh_ceer"> 
     <img :src="sd.shop_logo" class="sd_jh_deet cz">
                        <section class="d_jh_deert">
                    <p class=" fz14 z3 mt2 dian">
               {{sd.goods_name}}
                </p>
                        <p class="z9 fz12 ">原价¥{{sd.shop_price}} </p>
                            </section>
                    
            <div class=" fz12   mui-row tl mt5">
              <section class="mui-col-xs-8 sdf_jh_ceert">
                <p class="z9 fz12">可砍至</p>
                  <p class="red fz18">
                        ￥{{sd.bargain_goods_min_price}}
                    </p>
            </section>
                <section class="mui-col-xs-4">
                    <a class="mui-btn fz12 cf sd_jjh_deert" @click="hf('negotiate_details',{goods_id:sd.goods_id,ty_dr:0})" v-if="sd.bargain_is_doing==0">
                      立即砍价
                    </a>
                         <a class="mui-btn fz12 cf sd_jjh_deert" @click="hf('negotiate_details',{goods_id:sd.goods_id,ty_dr:1})" v-else>
                   继续砍价
                    </a>
                    
                    
                    
              </section>
                
                
                
            </div>        
                    </section>
                </div>
                
                 <p class="qc"></p>
                
                
               
            </li>
                  
        </ul>
            
            <section class="pd">
         <section class="fz12 cf sd_jhrerty">
               <span> 更多活动，敬请期待</span>
            </section>
            </section>
       
            
            
             
            
        </section>
        <kan_dibu :kjh_s="0"></kan_dibu>
    </div>
        </template>
<script>
    import kan_dibu from "../components/kan_dibu.vue"
    import daoshiji from "../components/daoshiji"
    import Vue from 'vue'
    export default {
        data() {
            return {
                page_e: 1,
                bargainGoodsList: ""
            }
        },
        components: {
            kan_dibu,
            daoshiji
        },
        methods: {

        },
        mounted() {
            this.Title("砍价列表")


            let bargainGoodsList = {},
                th = this
            bargainGoodsList.token = this.token
            bargainGoodsList.page = this.page_e
            this.post("Activitybargain/bargainGoodsList", bargainGoodsList, function(data) {
                th.bargainGoodsList = data
            })



        },
    }

</script>
<style scoped>
    img {
        vertical-align: bottom
    }

    .d_jh_dert {
        min-height: 300px;
        background: url('https://mall.cangniaowl.com/static/img/kanjia_list_b.jpg');
        background-size: 100% 100%;
        padding-bottom: 100px;
    }

    .fenghm_sd {
        width: 123px;
        height: 123px;
    }

    .ertdf_jh_dert {
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 100%;
        background: rgba(217, 44, 55, 0.6);
        text-align: center;
        display: none
    }

    .sd_jh_deet {
        width: 31px;
        height: 31px;
    }

    .d_jh_deert {
        line-height: 1.3;
        margin-top: 5px;
    }

    .sdf_jh_ceert {
        line-height: 1.3
    }

    .sd_jjh_deert {
        background: linear-gradient(to top, #CA1517, #F26C73);
        padding: 4px 10px;
        margin-top: 7px;

    }

    .df_jh_deer li {
        margin-bottom: 5px;
    }

    .sd_jh_Dertt {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        text-align: center;
        line-height: 123px;
        display: none
    }

    .df_jh_deer li.acb .ertdf_jh_dert {
        display: block
    }

    .df_jh_deer li.act .sd_jh_Dertt {
        display: block
    }

    .df_jh_deer li.act .ertdf_jh_dert {
        display: none
    }

    .df_jh_deer li.act .sd_jjh_deert {
        background: #B3B7BA
    }

    .d_df_drrty {
        width: 110px;
        height: 112px;
        background-position: -7px -332px;
    }

    .sd_jhrerty {
        border-top: 1px solid #D47C80;
        text-align: center;
        margin-top: 20px;
    }

    .sd_jhrerty span {
        position: relative;
        bottom: 10px;
        background: #C9232B;
        padding-left: 5px;
        padding-right: 5px;
    }

    @import "../css/kanjia.css"

</style>
