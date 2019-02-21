<!--为你推荐-->
<template>
<div class="bgff" v-if="sd_jh_dete">

         <section class="cen df_jkjh_dert pt10">
        <i class="f_p dsf_jh_dert"></i>
        <span class="fz16">为你推荐</span>
           <i class="f_p dsf_jh_dert ab"></i>
    </section>
    <section class="pr dfg_rrert">
        <van-swipe :autoplay="3000" class="h100">
            <van-swipe-item  class="h100">
                <section v-for="sd in sd_jh_dete">
                  <section class="mui-row df_jh_der pt5 pm5">
        <section class="mui-col-xs-4 sd_kjhj_der" v-for="(sf,idx) in sd.goods_data" @click="tiaozahs(sf.goods_id,sd.shop_id) " v-if="idx<3">
            <img :src="sf.goods_thumb" class="br ">
            <p class="z9 fz12 df_jh_deer dianer">{{sf.goods_name}}</p>
            <p class="z3 fz12 pl5">
                ¥ {{sf.shop_price}} 
            </p>
        </section>
        
    </section>
                
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
                sd_jh_dete: '',
            }
        },
        components: {

        },
        methods: {
            tiaozahs(goods_id, shop_id) {
                this.shopinfo_p = this.$store.state.shopinfo
                let th = this
                if (this.is_ga_d) {
                    let s_click = {}
                    s_click.token = this.token
                    s_click.ad_id = this.ad_id
                    s_click.interactive_id = this.interactive_id
                    s_click.goods_id = goods_id
                    this.post('shopwindow/click', s_click, function(data) {

                        th.hf(th.shopinfo_p.server_url + "/shop/" + th.shop_id + ".html?goods_id=" + goods_id + "&" + data.ad_link + "#/commodity_details?goods_id=" + goods_id + "&" + data.ad_link)

                        //                 location.reload()
                    })
                    return
                }

                //                判断是否本店
                if (shop_id == this.shopinfo_p.shop_id) {
                    this.hf('commodity_details', {
                        goods_id: goods_id
                    })
                } else {
                    let clickSource = {}
                    clickSource.token = this.token
                    clickSource.goods_id = goods_id
                    this.post("product/clickSource", clickSource, function(data) {
                        th.hf(th.shopinfo_p.server_url + "/shop/" + shop_id + ".html?goods_id=" + goods_id + "&cnsearchid=" + data.cnsearchid + "#/commodity_details?goods_id=" + goods_id + "&cnsearchid=" + data.cnsearchid)
                    })

                }

            }
        },
        mounted() {
            let th = this
            let exposure = {}
            exposure.token = this.token
            exposure.position_id = 1,
                exposure.goods_id = this.goods_id



            th.post("shopwindow/exposure", exposure, function(data) {
                th.sd_jh_dete = data



            })


        },
    }

</script>
<style scoped>
    .sd_kjhj_der {
        padding-left: 2px;
        padding-right: 2px;
    }

    .sd_kjhj_der img {
        width: 100%;
        height: 7.8rem
    }

    .df_jh_deer {
        line-height: 1.3;
        height: 26px;
        transform: scale(0.9)
    }

    .df_jh_der {
        padding-left: 2px;
        padding-right: 2px;
    }

</style>
