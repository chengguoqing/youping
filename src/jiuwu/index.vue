<template>
<div >
   
        <section class="pr dfg_rrert bgff pr">
<!--            {{body_sdf.decorate_banner.date_e}}-->
                   <swiper :options="swiperOptioner" class="SDf_dfreyy"  ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="sd in body_sdf.decorate_banner.date_e" class="w100 h100" >
        <img :src="sd.img" class="w100 h100  " @tap="hf(sd.url)">
    </swiper-slide>
            
           
  </swiper> 
            
             <section class="sd_jh_derrtt">
                      <span v-for="(sd,idx) in body_sdf.decorate_banner.date_e" class="sd_jkj_ceet" :class="idx_Sd==idx?'act':''"></span>
        </section>
            
<!--
            <van-swipe :autoplay="3000" class="h100">
                <van-swipe-item v-for="sd in body_sdf.decorate_banner.date_e" class="h100">
                    <img :src="sd.img" class="w100 h100 cz" @tap="hf(sd.url)">
                </van-swipe-item>
            </van-swipe>
-->
        </section>
    
    <section class="pd pt10 pm10 bgff btm">
        <section class="mui-row">
                <img :src="$store.state.shopinfo.shop_logo" class="logo_icon fl">
            <section class="ov pl5">
                <p class="fz14 z3">
                       {{$store.state.shopinfo.shop_name}}
                </p>
                <p class="fz12 z3 mt2">
                营业时间：<span class="d_jh_dert">{{$store.state.shopinfo.business_day}}</span>
                </p>
            </section>
        </section>
        
        <section class="mui-row mt15">
            <section class="pr fr">
                <span class="heng_dser"></span>
                <van-button type="primary" class="dahsder" @click="daohang()">导航</van-button>
            </section>
            <section class="ov pr5">
               <span class="fl mapo_seerr">
         <i class="f_j map_iconse"></i>
                </span>
                
                <p class="fz12 z3 ov sdf_jhh_der">
        <span>{{$store.state.shopinfo.address}}</span>
            </p>
    
            </section>
        </section>
        
        
        
        
         <section class="mui-row mt10">
            <section class="pr fr">
                <span class="heng_dser"></span>
                <a type="primary" class="dahsder" :href="'tel:'+$store.state.shopinfo.tel">拨号</a>
            </section>
            <section class="ov pr5">
               <span class="fl mapo_seerr">
         <i class="f_j map_iconse ab"></i>
                </span>
                
                <p class="fz12 z3 ov sdf_jhh_der mt2">
        <span>{{$store.state.shopinfo.tel}}</span>
            </p>
    
            </section>
        </section>
        
        
        
        
    </section>
    
    <section class="mt10 bgff pt20 pm10 ov">
            
        <section class="truanh_sdd cen">
            <p class="henxian"></p>
            <span>团队信息</span>
        </section> 

        <tuandui :date_d="$store.state.shopinfo.employee_list"></tuandui>
        
        

        
    </section>
    
        
</div>
</template>
<script>
    var wx = require('weixin-js-sdk');
    import tuandui from "@/components/jiuwu/tuandui"


    import 'swiper/dist/css/swiper.css'
    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper'



    export default {
        props: {
            body_sdf: ""
        },
        data() {
            return {
                idx_Sd:0,
                swiperOptioner:{
                   
                    loop: true,
                    onSlideChangeEnd: (swiper) => {
                        this.idx_Sd=swiper.realIndex
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        dynamicBullets: true
                    }
                }

            }
        },
        components: {
            tuandui,
            swiper,
            swiperSlide
        },
        methods: {
            sd_dertx(e) {
              
            },
            daohang(latitude, longitude) {
                let th = this
                wx.openLocation({
                    latitude: parseFloat(th.$store.state.shopinfo.latitude),
                    longitude: parseFloat(th.$store.state.shopinfo.longitude),
                    name: th.$store.state.shopinfo.shop_name,
                    address: th.$store.state.shopinfo.address,
                    scale: 15,
                    infoUrl: 'http://weixin.qq.com'
                });
            }
        },
        mounted() {




        },
    }

</script>
<style lang="scss">
    .dfg_rrert {
        .van-swipe__indicator {
            width: 25px;
            height: 3px;
            border-radius: 4px;
            opacity: 0.2;
            background: #000
        }
        .van-swipe__indicator--active {
            opacity: 1;
            background: #2E7FA3 !important;
        }
    }

</style>
<style scoped>
    .sd_jh_Deertx {
        height: 155px;
    }

    .dfg_rrert {
        height: 23.5rem
    }

    .logo_icon {
        width: 45px;
        height: 45px;
        border: 1px solid #e0e0e0;
        border-radius: 2px;
    }

    .d_jh_dert {
        background: #9A9A9A;
        color: #fff;
        border-radius: 20px;
        padding: 1px 8px 0px 8px;
        display: inline-block;
        transform: scale(0.85);
        margin-left: -5px;
    }

    .dahsder {
        width: 56px;
        height: 30px;
        padding: 0px;
        line-height: 30px;
        background: #4582C4;
        display: inline-block;
        color: #fff;
        border-radius: 4px;
        font-size: 14px;
        text-align: center;
        border: 1px solid #4582C4
    }

    .heng_dser {
        width: 2px;
        height: 18px;
        position: relative;
        top: 5px;
        background: #4582C4;
        display: inline-block;
        margin-right: 5px;
    }

    .map_iconse {
        width: 14px;
        height: 18px;
        background-position: -15px -41px;
    }

    .map_iconse.ab {
        width: 18px;
        height: 18px;
        background-position: -48px -41px;
    }

    .mapo_seerr {
        width: 25px;
    }

    .sdf_jhh_der {
        line-height: 1.5
    }

    .truanh_sdd {
        color: #4282c4;
        width: 150px;
        margin: auto;

    }

    .truanh_sdd span {
        background: #fff;
        padding: 10px;
        position: relative;
        top: -10px;
    }

    .henxian {
        border-top: 2px solid #4282c4
    }
    
   .sd_jh_derrtt{
        position: absolute;
        left: 0px;
        width: 100%;
        bottom: 5px;
        height: 20px;
        text-align: center;
        z-index: 1000
    }
    .sd_jkj_ceet{
        display: inline-block;
        width: 20px;
        height: 3px;
        border-radius: 4px;
        background: #B4B4B4;
        margin-left: 4px;
        margin-right: 4px;
    }
    .sd_jkj_ceet.act{
        background: #F23537
    }
</style>
