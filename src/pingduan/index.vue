<!--拼团首页-->
<template>
    <div >
        <p class="bgf_ddeer"></p>
        <section class="pr">
         <img src="/static/img/pingduan.jpg" class="w100 kx sdf_hjh_der">
            
            
            
            
              <ul class="pd df_jh_deer pt10">
                        <li class="bgff  pr" v-for="sd in 5">
                            <img src="/static/img/guangxian.png" class="erdf_jh_der"> 
                <div class="fl pr">
                    <img src="/static/img/dfs_sdf.jpg" class="fenghm_sd cz">
          
                    
                  
                </div>
                <div class="ov cen pt10 pd sdf_jh_cer">
                    <section class="dsf_jh_ceer">
     <img src="http://img.cangniaowl.com/anru/jiesao_logo.jpg" class="sd_jh_deet cz">
         <p class="tl z3 fg_tit_er mt5 dianer">
            玻尿酸胶原补水霜精华补水原液水原液/30g
        </p>
            
        <p class="z3 fz12 tl mt5">
            促销价:<span v-html="price_guo(99)"  class="fz18 red"></span>
            <span class="ml10 z9">已拼5000件</span>
        </p>  
        <p class="tl fz12 mt5 pm5 sdf_hhg_dert">
            <span class="qpd_btn">去拼单></span>
        </p>
                    
                
                    </section>
                </div>
                
                 <p class="qc"></p>
                
                
               
            </li>
              
          
        </ul>
            
            
            
            </section>
    </div>
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
    .sdf_hjh_der{
        position: relative;
        top: -1px;
    }
    .bgf_ddeer {
        background-image: url("/static/img/df_cdf_q.jpg");
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background-position: 0px 180px;
        background-size: 100% auto;
        z-index: 1;
    }


    .fenghm_sd {
        width: 8.8rem;
        height: 8.8rem;
        min-height: 110px;
    }

    .ertdf_jh_dert {
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 100%;
        background: rgba(217, 44, 55, 0.6);
        text-align: center;
        display: none
    }

    .sd_jh_deet {
        width: 31px;
        height: 31px;
    }

    .d_jh_deert {
        line-height: 1.3;
        margin-top: 5px;
    }

    .sdf_jh_ceert {
        line-height: 1.3
    }

    .sd_jjh_deert {
        background: linear-gradient(to top, #CA1517, #F26C73);
        padding: 4px 10px;
        margin-top: 7px;

    }

    .df_jh_deer li {
        margin-bottom: 8px;
        border: 3px solid #D21A6C;
        border-radius: 4px;
    }

    .fg_tit_er {
        line-height: 1.3;
        height: 36px;
        font-size: 14px !important;
    }

    .qpd_btn {
        background: #BC430E;
        color: #fff;
        border-radius: 10px;
        padding: 3px 10px;
    }
    .erdf_jh_der{
        position: absolute;
        left: 0px;
        z-index: 100;
        width: 160px;
        top: -4px;
    }

    
        @media screen and (max-width: 340px) {
        .fg_tit_er {
            height: 18px !important;
            white-space: normal !important;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical
        }
        p.z3.fz12.tl.mt5{
            margin-top: 0px !important;
        }
        .sdf_jh_cer{
            padding-top: 5px !important;
        }
            .sdf_hhg_dert{
                margin-top: 2px !important;
            }
    }
</style>
<style>


</style>
