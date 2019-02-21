<template>
<!--ab-->

<li class="bgff yj4    mb10 fsadfsd_sdff pr" :class="is_index==1?'ab':''">
    <p class="sd_jh_dere" v-if="is_index==1" ></p>
                <p class="fenghm_sd pr fl" @click="hf('negotiate_details',{goods_id:de_mo_lis.goods_id})">
                    <img :src="de_mo_lis.goods_thumb" class=" cz br fm">
                    <span class="sd_jh_deert">
                        <i class="f_p gupoqi_e"></i>
                    </span>
                </p>
                <div class="ov  tl pl5">
                    <p class="fz14 pt5 z3">
                        {{de_mo_lis.goods_name}}</p>
                    <p class="fz14 df_def_frw">
                        已砍<span class="red">{{de_mo_lis.sum_bargain_price}}</span>元，还剩
                        <span class="red" v-html="price_guo((de_mo_lis.shop_price-de_mo_lis.bargain_goods_min_price)-de_mo_lis.sum_bargain_price)"></span>元
                    </p>
                </div>
               <p class="qc"></p>
    
    <section class="btm mt5 pt5 fz12 red tr">
            还剩
        <daoshiji :dapshid="de_mo_lis.bargain_left_time" sd_ddf="1"></daoshiji>

    结束
        <van-button type="danger" class="sd_jh_dert cz"  @click="hf('negotiate_details',{goods_id:de_mo_lis.goods_id})">继续砍价</van-button>
    </section>
            </li>
    
    
    

</template>
<script>
    import daoshiji from "./daoshiji"
    export default {
        props: {
            is_index: "",
            de_mo_lis: ""
        },
        data() {
            return {
                someValue: 20,
            }
        },
        components: {
            daoshiji
        },
        methods: {
            toWord(val) {

                return "￥" + val
            }
        },
        mounted() {

        },
    }

</script>
<style>
    .fsadfsd_sdff.ab path {
        stroke: #7D7D7E !important
    }

    .fsadfsd_sdff.ab .knob-control__text-display {
        fill: #7D7D7E !important
    }

      .fsadfsd_sdff.ab .red{
        color: #999 !important
    }
    .fsadfsd_sdff.ab .sd_jhg_der, .fsadfsd_sdff.ab .van-button--danger{
        background: #999 !important
    }
</style>
<style scoped>
    .du_jh_deert {
        border: 1px solid #EF5151;
        border-radius: 4px;
        font-size: 12px;
        color: #999;
        display: inline-block;
        padding: 0px 4px 0px 0px;
        position: relative;
        padding-left: 44px;
        overflow: hidden;
        transform: scale(0.8);
        margin-left: -3px;

    }

    .dsf_jh_ceer {
        width: 145px
    }

    .du_jh_deert span.zuiti {
        background: #EF5151;
        color: #fff;
        font-size: 12px;
        position: absolute;
        left: 0px;
        top: 0px;
        padding-left: 3px;
        padding-top: 2px;
        padding-right: 3px;
    }



    .sd_j_deeret li {
        padding: 5px;
    }




    .sd_jhg_deert {
        width: 70px !important;
        margin: auto;
        margin-top: -5px;
    }

    .dfs_jh_deert {
        transform: scale(0.8);
        margin-top: -2px;
    }

    .zx_kanjia {
        background: #E15652;
        color: #fff;
        padding: 3px 10px;
        transform: scale(0.8);
        margin-top: -5px;

    }

    .df_dertt {
        position: relative;
        top: 2px;
    }

    .fenghm_sd {
        width: 100px;
        height: 100px;
    }

    .fenghm_sd img.fm {
        width: 100%;
        height: 100%
    }

    .df_jh_dert {
        margin-top: 30px;
    }

    .ytuanjias_e {
        display: inline-block;
        transform: scale(0.9);
        margin-left: -5px;
    }

    .fg_drrtyy {
        border-left: 1px solid #E7E7E7
    }

    .sd_jh_deert {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 100;
        display: none
    }

    .gupoqi_e {
        width: 111px;
        height: 111px;
        background-position: -10px -180px;
        transform: scale(0.85);
        position: relative;
        top: -5px;
        left: -5px;
    }

    .fsadfsd_sdff.ab span.zuiti {
        background: #7D7D7E
    }

    .fsadfsd_sdff.ab .du_jh_deert {
        border: 1px solid #7D7D7E
    }

    .fsadfsd_sdff.ab .red_e {
        color: #7D7D7E
    }

    .fsadfsd_sdff.ab .df_jh_dert span,
    .fsadfsd_sdff.ab .zx_kanjia {
        background: #7D7D7E
    }

    .df_df_frw {}

    .df_def_frw {
        margin-top: 50px;
    }

    .sd_jhg_der {
        border-radius: 4px;
        background: #F95151;
        color: #fff;
        padding: 5px 6px;
    }

    .sd_jh_dert {
        height: 25px;
        line-height: 25px;
        margin-left: 10px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .sd_jh_dere{
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.2);
        z-index: 100
    }
  

    @media screen and (max-width: 330px) {
        .fg_drrtyy {
            display: none
        }

    }

</style>
