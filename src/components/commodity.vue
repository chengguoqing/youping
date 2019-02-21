<!--商品-->
<template>
    
          <div class="sdfg_jjh_dert  " :style="{'margin-top':date_e.margin_top+'px'}">
                <p class="sdf_jkjh_der" v-if="date_e.title">
            <span>{{date_e.title}}</span>
        </p> 
              
        
              

 

              <section >

                      <div class="sd_jh_eder mb5" :class="date_e.jige" v-for="sd in date_e.date_e"  @click="hf('commodity_details',{goods_id:sd.goods_id})">
                         
            <div class="sd_jH_case bgff">
                <div class="product_e">
                    <img :src="sd.goods_thumb" >
                </div>
                <div class="biaotidrr  pl5 dian">
                   <span class="cz"> {{sd.goods_name}}</span>
                </div>
                <div class="biaotidrr pl5  pr5 btm_e ">
                      <span class="cz"> 
                <span class="red">￥{{sd.shop_price}}</span>
                    <span class="fr s_jh_dert">总销量{{sd.sales_goods_number}}件</span>
                    </span>
                
                </div>
                
            </div> 
         </div>
                  </section>
         <div class="qc"></div>
      
    </div>
        </template>
<script>
    export default {
        props: {
            date_e:""
        },
        data() {
            return {

            }
        },
        components: {

        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>
    .sd_jh_eder.aa{
        width: 100%;
        padding-right: 0px;
    }
    .sd_jh_eder.aa .product_e{
        height: 20rem
    }
    
       .sd_jh_eder.ac{
        width: 33%;
        padding-right: 5px;
    }
    .sd_jh_eder.ac:nth-child(3n){
        padding-right: 0px;
    }
    .sd_jh_eder.ac .s_jh_dert{
        display: none
    }
    .sd_jh_eder.ac .product_e{
        height: 6.7rem
    }
    
           .sd_jh_eder.ad{
        width: 25%;
        padding-right: 5px;
    }
        .sd_jh_eder.ad:nth-child(4n){
        padding-right: 0px;
    }
    .sd_jh_eder.ad .s_jh_dert{
        display: none
    }
    .sd_jh_eder.ad .product_e{
        height: 4.9rem
    }
    

</style>
