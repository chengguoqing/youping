<!--倒计时-->
<template>


   <section class="df_kjjh_det">
                    <section class="time_kjh_n mui-row">
                <section class="mui-col-xs-3 cen ">
                    <span class="df_jh_dert">00</span>
                    <i class="f_p time_bg_dr kx"></i>
                      <i class="f_p time_bg_dr kx ab"></i> 
                   <span class="sdIyt_eertr">天</span>
                </section>
                        
                         <section class="mui-col-xs-3 cen ">
                                <span class="df_jh_dert">00</span>
                    <i class="f_p time_bg_dr kx"></i>
                      <i class="f_p time_bg_dr kx ab"></i>
                             <span class="sdIyt_eertr">时</span>
                </section>
                         <section class="mui-col-xs-3 cen ">
                                <span class="df_jh_dert">53</span>
                    <i class="f_p time_bg_dr kx"></i>
                      <i class="f_p time_bg_dr kx ab"></i>
                             <span class="sdIyt_eertr">分</span>
                </section>
                        
                         <section class="mui-col-xs-3 cen ">
                                <span class="df_jh_dert">43</span>
                    <i class="f_p time_bg_dr kx"></i>
                      <i class="f_p time_bg_dr kx ab"></i>
                             <span class="sdIyt_eertr">秒</span>
                </section>
                        
                        
                        
                </section>
                        
                </section>

</template>
<script>
    export default {
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
