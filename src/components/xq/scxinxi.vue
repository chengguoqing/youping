<!--商城信息-->
<template>
<div class="bgff pl10 pt10 pm10">
    <section class="">
        <img :src="$store.state.shopinfo.shop_logo" class="br dianpu_logo cz fl" @click="hf('')">
        <section class="ov pl10">
                <p class="fz14 z3 tou_deert" @click="hf('')">{{$store.state.shopinfo.shop_name}} 
                    
             <renzheng></renzheng>
    
    </p>
            <section class="mui-row cen mt2">
                
                <section class="mui-col-xs-3 brm red fz14 ds_Kjh_rower">
          {{sd_dd}}
                    <p class="fz12 zj_dertt">综合评分</p>
                </section>
                        <section class="mui-col-xs-3 brm red fz14 ds_Kjh_rower" @click="hf('?quanbu_s=1')">
              {{$store.state.shopinfo.on_goods_count}}
                    <p class="fz12 zj_dertt">全部商品</p>
                </section>
                
                       <section class="mui-col-xs-6 ">
                        <button class="mui-btn-red jinbsd_eer" @click="hf('')"><i class="dx icon-dianpu"></i><span> 进店逛逛</span></button>
                </section>
        
            </section>
            
        </section>
        
        <p class="qc"></p>
        
        <section class="mui-row df_deeert mt10" v-if="false">
            <section class="mui-col-xs-3 sdf_jkhhg_er" v-for="sd in 4">
                <img src="http://images.cangniaowl.com/images/237/20180906/1f2c8f32d9d1049b1fb891f68e4d2e49.jpg?imageView2/1/w/700/h/700/interlace/0/q/100" class="br">
                <p class="red fz12 cen">￥98.00</p>
            </section>
    
        </section>
        
        
    </section>

</div>
</template>
<script>
    import renzheng from "../renzheng.vue"
    export default {
        data() {
            return {
                sd_dd: 0
            }
        },
        components: {
            renzheng
        },
        methods: {

        },
        computed: {
            getUserIcons() {
                return ((this.$store.state.shopinfo.goods_rank_avg + this.$store.state.shopinfo.services_rank_avg + this.$store.state.shopinfo.deliver_rank_avg) / 3).toFixed(2)
            }
        },
        mounted() {
            this.sd_dd = ((this.$store.state.shopinfo.goods_rank_avg + this.$store.state.shopinfo.services_rank_avg + this.$store.state.shopinfo.deliver_rank_avg) / 3).toFixed(2)
        },
        watch: {  
            getUserIcons(val) {    
              this.sd_dd=val;
            }
        }
    }

</script>
<style scoped>
    .dianpu_logo {
        width: 52px;
        height: 52px;
    }

    .sdf_j_a {
        width: 16px;
    }

    .zj_dertt {
        transform: scale(0.8)
    }

    .ds_Kjh_rower {
        line-height: 1.2
    }

    .jinbsd_eer {
        font-size: 13px;
        border-radius: 20px;
        padding: 1px 12px;
        ;
    }

    .tou_deert {
        position: relative;
        top: -2px
    }

    .sdf_jkhhg_er {
        padding-right: 5px;
    }

    .sdf_jkhhg_er img {
        width: 100%;
        height: 5.3rem
    }

    .df_deeert {
        padding-right: 3px;
    }

</style>
