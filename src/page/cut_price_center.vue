<template>
    <div >
         <section class="pr">
            <img src="/static/img/user_top.jpg" class="w100">
             <section class="sd_jh_er_dr">
                <p class="cen mt40">
                    <img :src="user_info.header_image" class="yj user_iconsr">
                </p>
                 <p class="cf fz14 cen mt5">
                   {{user_info.user_name}}
                </p>
            </section>
        </section>
        
        <section class="pd sd_jh_dertt bgff">
            <section class="bgff yj4 pt20 pm20 mui-row cen df_kj_eerty">
                    <section class="mui-col-xs-4">
                        <i class="f_a sd_jhj_dr"></i>
                        <p class="z3 fz14 mt5">
                            砍价订单 
                        </p>
                    </section>
                
                
                
                <section class="mui-col-xs-4" @click="hf('bargain_record')">
                        <i class="f_a sd_jhj_dr ab"></i>
                        <p class="z3 fz14 mt5">
                            砍价记录
                        </p>
                    </section>
                
                
                <section class="mui-col-xs-4">
                        <i class="f_a sd_jhj_dr ac"></i>
                        <p class="z3 fz14 mt5" @click="hf('$store.state.url_er')">
                            在线客服
                        </p>
                    </section>
                
                
            </section>
            
            <ul class="dsf_jh_deert bgff">
                <li class="pt10 pm10 fz16" @click="hf('')">
                    进入商城 <i class="dx icon-right fz14 fr"></i>
                </li>
                <li class="pt10 pm10 fz16 btm" @click="hf('user')">
                    个人中心 <i class="dx icon-right fz14 fr"></i>
                </li>
            </ul>
    
        </section>
        
        <section class="pd pt20 pm20">
    
            <img src="/static/img/lingqu_q.png"  class="w100">
        </section>
        
           <kan_dibu :kjh_s="2"></kan_dibu>
    </div>
        </template>
<script>
    import kan_dibu from "../components/kan_dibu.vue"
    export default {
        data() {
            return {
                user_info:""
            }
        },
        components: {
            kan_dibu
        },
        methods: {

        },
        mounted() {
            this.Title("我的")
            this.user_info = JSON.parse(localStorage.user)
        },
    }

</script>
<style scoped>
    img {
        vertical-align: bottom
    }

    .sd_jh_er_dr {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 1000
    }

    .user_iconsr {
        width: 60px;
        height: 60px;
        border: 2px solid #fff;
        overflow: hidden;

    }

    .sd_jh_dertt {

        position: relative;
        z-index: 1000
    }

    .sd_jhj_dr {
        width: 30px;
        height: 30px;
        background-position: -18px -493px;
    }

    .sd_jhj_dr.ab {
        background-position: -69px -493px
    }

    .sd_jhj_dr.ac {
        width: 34px;
        background-position: -127px -492px
    }

    .df_kj_eerty {
        position: relative;
        top: -50px;
        box-shadow: 0 0px 10px rgba(228, 61, 61, .2);
    }

    .df_kj_eerty .mui-col-xs-4 {
        border-right: 1px dashed #CDCDCD
    }

    .df_kj_eerty .mui-col-xs-4:last-child {
        border: 0
    }

    .dsf_jh_deert {
        margin-top: -20px;
    }

</style>
