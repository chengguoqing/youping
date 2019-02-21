<template>
    <div >
        <section class="bgff pd pt10 pm10">
            <img src="http://images.cangniaowl.com/230/20180620/c14661510ddf3aeb50c711eb735257c0.jpg?imageView2/1/w/700/h/700/interlace/0/q/80" class="br fl fengm_cser cz">
            
            <section class="ov pl10">
                <p class="dianer z3  f_dr_rrtyd">
                    商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称
                </p>
                <section class="mt20">
                    <p class="fz12 z3">
                    2人拼团 <span class="z9 ml10">已拼2000件</span>
                    </p>
                    <p class="mt5">
                    <span class="red fz14 ">
                        ￥<span class="fz20" v-html="price_guo(358)"></span>
                    </span>
                    </p>
    
                </section>
            </section>
        
            <p class="qc"></p>
        </section>   
        <section class="pd pt5 pm5 fz12 z9">
            <i class="f_p gouxuih_s"></i>
            <span>正品保证</span>
            
                  <i class="f_p gouxuih_s ml20"></i>
            <span>48小时发货</span>
            
                  <i class="f_p gouxuih_s ml20"></i>
            <span>7天无理由退换货</span>
            
        </section>
        <section class="bgff pd pt10 pm10">
            
             
         <daojishi></daojishi>
            <section class="cen pt10">
                <section class="wenhao_icon ab">
                    <img src="/static/img/act_top.jpg" class="yj  cz"> 
                    <i class="f_p pingzhu_e"></i>
                </section>
                <img src="/static/img/wenhao.png" class="wenhao_icon cz">
                <p class="mt15 z3 cen">邀请者微信昵称 邀请你一起来拼单！</p>
                <p class="mt10">
            <button class="mui-btn-red w100 fz16 pt10 pm10">参与ta的拼单</button>
                    </p>
            </section>
        </section>
        
        
        <section class="mt10 bgff btm pd">
            <p class="fz14 z3 pt5 pm5">
                参与其他人的拼单
                <span class="fr">查看更多></span>
            </p>
            <ul class="btm">
        <li class="mui-row pt10 pm10 bbm" v-for="sd in 5">
            <section class="mui-col-xs-6">
                <img src="/static/img/act_top.jpg" class="yj user_icodr cz">
                <span class="fz16">用户昵称</span>
            </section>
             <section class="mui-col-xs-6 dsf_deetr">
                 <button class="mui-btn-red fz16 fr">去拼单</button>
                 <section class="ov pr10 tr dfs_kj_deer">
                        <p class="fz15 z3">还差<span class="red">1</span>人拼成</p>
                     <p class="fz12">剩余：23:45:12</p>
                </section>
            </section>
        </li> 
    </ul>
        </section>
    
        
    </div>
        </template>
<script>
    import daojishi from "../components/daojishi"
    export default {
        data() {
            return {

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
    .fengm_cser {
        width: 111px;
        height: 111px;
    }

    .f_dr_rrtyd {
        line-height: 1.3;
        font-size: 15px;
        height: 40px;
    }

    .gouxuih_s {
        width: 16px;
        height: 15px;
        background-position: -14px -47px;
    }

    .df_kjjh_det {
        width: 310px;
        height: 84px;
        margin: auto;
        position: relative;
        background: url('/static/img/time_border.png');
        background-size: 100% 100%
    }
    .time_kjh_n{
        width: 226px; 
        height: 50px;
        margin: auto;
        position: relative;
        left: -3px;
        top: 10px;
        padding-top: 5px;
    }
    .time_bg_dr{
        width: 24px;
        height: 35px;
        background-position: -44px -27px;
        margin: 0px;
        color: #fff;
        font-style:normal;
        line-height: 35px;
        font-size: 20px;
    }
    .time_bg_dr.ab{
        margin-left: -6px;
    }

    .time_kjh_n .mui-col-xs-3{
        position: relative;
    }
    .time_kjh_n .mui-col-xs-3:after{
        content: "：";
        position: absolute;
        right: -8px;
        top: 14px;
    }
    .sdIyt_eertr{
        position: absolute;
        right: 7px;
        bottom: -18px;
        font-size: 12px;
        transform: scale(0.8) 
    }
    .df_jh_dert{
        position: absolute;
        letter-spacing: 10px;
        color: #fff;
        margin-left: 7px;
        font-size: 20px;
        line-height: 35px;
    }
   
    .user_icodr{
        width: 42px;
        height: 42px;
    }
    .dfs_kj_deer{
        line-height: 1.4
    }
    .dsf_deetr{
        padding-top: 3px;
    }
</style>
