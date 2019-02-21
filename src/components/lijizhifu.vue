<!--立即支付弹出窗-->
<template>
    <div >
         <p class="bg_pup_er" @click="$emit('close_e')"></p>
        <section class="ksd_jh_der">
            <section class="sd_drf_drtt">
                <div class="cen df_jh_deertt">
                    <img :src="header_image" class="yj user_icosd_e">
                    <p class="red fz16">{{user_name}}</p>
                    <p class="cf fz16  df_kj_dert">
                        恭喜你！已成功砍到最低价¥{{bargain_goods_min_price}}！<br>
                        请在1小时内完成支付哦！
                    </p>
                    
                    <section class="fz14 cf  mt50">
<!--
                                 <i class="f_a sd_jh_bg">{{is_drte_san.h}}</i>
                                    时
-->
                                         <i class="f_a sd_jh_bg">{{is_drte_san.m}}</i>
                                    分
                                         <i class="f_a sd_jh_bg">{{is_drte_san.m_b}}</i>
                                    秒
                        </section>
                    
                </div>

            </section>
            
            <section class="mt20 cen">
                <a class="mui-btn w100 f_h_deety ab" @click="$emit('liji_sd')">立即支付</a>
            </section>
        </section>
    </div>
</template>
<script>
    export default {
        props: {
            is_drte_san: "",
            bargain_goods_min_price:"",
            header_image:"",
            user_name:""
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
    .bg_pup_er {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 10000
    }

    .ksd_jh_der {
        width: 350px;
        min-height: 200px;
        margin: auto;
        position: fixed;
        left: 0px;
        z-index: 10001;
        right: 0px;
        top: 20%;
    }

    .sd_drf_drtt {
        height: 245px;
        width: 100%;
        background: url(/static/img/lijizhi_s.png);
        background-size: 100% 100%;
    }

    .user_icosd_e {
        width: 65px;
        height: 65px;
        border: 2px solid #fff;
        margin-top: -30px;
    }

    .df_kj_dert {
        line-height: 1.5;
        margin-top: 40px;
    }

    .sd_jh_bg {
        width: 22px;
        height: 22px;
        background-position: -206px -501px;
        color: #b60412;
        font-size: 14px;
        line-height: 22px;
        text-align: center;
        font-style: normal
    }



    .f_h_deety {
        border: 0px;
        line-height: 40px;
        padding: 0px;
        font-size: 16px;
        color: #b72724;
        background: linear-gradient(to top, #CAAB7B, #F7EAD4);
    }

    .f_h_deety.ab {
        width: 100px;
    }


    @media screen and (max-width: 350px) {
        .ksd_jh_der {
            width: 100%;
        }
    }

</style>
