<!--搭配推荐-->
<template>
<div class="ss_tuiu_bg" v-if="exposure_er"> 
    <section class="cen df_jkjh_dert">
        <i class="f_p dsf_jh_dert"></i>
        <span class="fz16">搭配推荐</span>
           <i class="f_p dsf_jh_dert ab"></i>
    </section>
    

      
<section class="pr mt2 ">
    <van-swipe class="h100" :width="110" :show-indicators="false" :loop="false">
       
        <van-swipe-item v-for="sd in exposure_er" >
              <section class="tuijian_case" @click="tiaozhsdf(sd.shop_id,sd.goods_id,sd.ad_id,sd.interactive_id)" >
                <img :src="sd.goods_thumb" class="fem_dee">
                <p class="fz12 z3 cen df_jh_df dianer">
            {{sd.goods_name}}
                </p>
                <p class="cen red df_jh_deer">
                 ￥{{sd.shop_price}}
                </p>
        </section> 
            
    </van-swipe-item>
    </van-swipe>
</section>

    
    

          
    

       
    
   
    
    

</div>
</template>
<script>
    export default {
        props: {
            goods_id: ""
        },
        data() {
            return {

                exposure_er: "", //推荐搭配
            }
        },
        components: {

        },
        methods: {
            tiaozhsdf(shop_id, goods_id, ad_id, interactive_id) {
                let r_clicl = {}
                r_clicl.token = this.token
                r_clicl.ad_id = ad_id
                r_clicl.interactive_id = interactive_id
                r_clicl.goods_id = goods_id
                this.post("recommend/click", r_clicl, function(data) {
                    let url_ert = `https://api.cangniaowl.com/shop/${shop_id}.html?goods_id=${goods_id}&route=commodity_details&${data.ad_link}#/commodity_details?goods_id=${goods_id}&${data.ad_link}`

                    window.location.href = url_ert
                })


            },
        },
        mounted() {
            mui('.mui-scroll-wrapper').scroll({

            });
            let th = this
            //            推荐搭配
            this.post("recommend/exposure", {
                goods_id: this.goods_id,
                token: this.token
            }, function(data) {
                th.exposure_er = data
            })



        },
    } 

</script>
<style scoped>
    .ss_tuiu_bg {
        height: 195px;
        background: url(http://mall.cangniaowl.com/static/img/tuijian.jpg);
        background-size: cover
    }

    .dsf_jh_dert {
        width: 26px;
        height: 19px;
        background-position: -10px -74px;
    }

    .dsf_jh_dert.ab {
        height: 20px;
        background-position: -57px -76px;
    }

    .df_jkjh_dert {
        line-height: 32px;
    }

    .tuijian_row {
        white-space: nowrap;
    }

    .tuijian_case {
        width: 100px;
        display: inline-block;
        margin-left: 10px;
    }

    .tuijian_case .fem_dee {
        width: 100%;
        height: 100px;
        border-radius: 8px;
    }

    .df_jh_df {
        line-height: 1.3;
        color: #333;
        height: 30px;
    }

    .df_jh_deer {
        transform: scale(0.9)
    }

</style>
