
<template>
    <div >
        <section v-if="is_jias" class="pr">
         <section class="pr bgff">
             <p class="sdf_jh_deerer">开通安茹银牌会员</p>
            <img src="http://mall.cangniaowl.com/static/img/indes_bg.jpg" class="w100 kx">
             
             <section class="df_jh_deetrt cen pt30">
                    <img :src="isbuy.header_image" class="yj user_icone">
                 <p class="df_jh_der">
                     <span class="cf fz12 fdf_hh_deer yj4">
                    <i class="f_a dnegji_v cz"></i><span>银牌会员</span>
                         </span>
                </p>
                 <p class="cf fz16  mt10">
                {{isbuy.user_name}}      
    </p>
                 
                 <p class="fz12 tr z3 pr10 mt15">
    NO：{{isbuy.user_id}}
            </p>
                 
            </section>
        </section>
        <section class=" sdf_jh_deer">
    
            <p class="d_kh_btn z3 cen mt10" @click="is_fen_ddf=true">
            <i class="f_a user_ihy_e cz"></i>
                推广名片
            </p>
        </section>
        
            <section class="pd mt10">
                <img src="http://mall.cangniaowl.com/static/img/hefa_sddq.png" class="w100">
        </section>
            
            
        
        <section class="pd pt10 pm10  mt10">
        <section class="dsf_jh_deerer pd bgff">
                <p class="cen gf_ddf_dertg">
            <i class="f_a sd_jh_tier">
        <span>领取区</span>
    </i>
            </p>
            
            <div class=" ">
                <section class="cen sdf_jjh_deer z3 fz16 mt40" v-if="sd_Dertt<=0">
                    暂无可免费领取的面膜
                </section>
    

   
                

            <ul class="df_jh_Deert mt20">

                     <li v-for="sd in isbuy.goodslist" :class="sd.is_active==1?'act':''" v-if="sd.is_active==1">
                     
                <p class="Df_jhj_der fl">
            <img class="cz" :src="sd.goods_images">
                </p>
                    
                <section class="ov  cen   ">
                    <section class="cz_w sdf_jhh_der w100">
                    <section class="cz_a w100">
                            <p class="sdf_jeerh_der dian" @click="ling_s(sd)">领取{{sd.goods_name}}</p>
                           <p class="fz12 fd_jjh_sdd z3" v-if="sd.is_active==1">领取有效期：{{sd.start_date}} 至 {{sd.end_date}}</p>
    </section>
                        </section>
          
                </section>
                    
                    <p class="qc"></p>
                </li>
                
                    
            </ul>

            
                
                
            </div>
            
        </section>
                
    
    </section>
        
        
            
                 <section class="pd pt10 pm10  mt10">
        <section class="dsf_jh_deerer pd bgff">
                <p class="cen gf_ddf_dertg">
            <i class="f_a sd_jh_tier">
        <span>指定区</span>
    </i>
            </p>
            
            <div class=" mt10" v-if="(3-sd_Dertt)>0">
                
           <p class="fz16 cen z3">指定您想领取的面膜权限</p>
                
                
                  <section class="pl10 mui-row pt10 cen">
                        <section class="mui-col-xs-4 pr10 df_jh_deertt" v-for="sd in isbuy.goodslist" @click="lingqu(sd,sd.is_active)" v-if="sd.is_active!=1">
                            
                            <section class="sdf_jh_drr br pr">
         
                        <img :src="sd.goods_images" class="yj4 sderr_jh_der">
              <p class="DSf_jhh_de" v-if="sd.is_active==1">已获得领取资格</p>
                                
                                <section class="sd_hhg_erer" :class="sd.cls">
                        <span class="gouxun_sd">
                        <i class="dx icon-gou"></i>
                    </span>
                    </section>
            </section>
                            <p class="fz12  cen  dian dsfwe_deert cf">{{sd.goods_name}}</p>
        </section>
                </section>
                
                <p class="cen z3 fz16 mt20">
            “您已获得 {{3-sd_Dertt}}款面膜领取权限，现已指定{{sd_Dertt}}  款”
                </p>
                
                
                
                
                
    </div>
       
       <section class="cen sdf_jjh_deer z3 fz16 mt40"  v-else>
                    已有3款面膜领取权限，暂无其他产品领取权限！
                </section>
        
    </section>
                     
    </section>
            
            
        
                    <section class="pd pt10 pm10  mt10">
        <section class="dsf_jh_deerer pd bgff">
                <p class="cen gf_ddf_dertg">
            <i class="f_a sd_jh_tier">
        <span>我的会员好友</span>
    </i>
            </p>
            
            <div class=" mt10">
             
                
                <section  class="cen pt10">
                
                 <section class="sd_jh_derr_er " v-for="sd in friendslist" >
            <section>
                <img :src="sd.header_image" class="yj4 sderr_jh_der">
                <p class="fz12 z3">
                {{sd.user_name}}
                </p>
            </section>
        </section>
                <p class="qc"></p>
                
                </section>
                
                
                     <p class="d_kh_btn z3 cen mt10"  @click="is_fen_ddf=true"    :class="friendslist.length<=0?'mt40':''" > 
            <i class="f_a user_ihy_e cz"></i>
                推荐好友成为会员
            </p>
                
    </div>
    </section>
    </section>
            
            
            
            
        

        
        <section class="dsf_wwerrjh_de" v-if="is_pup">
    
                <section class="sdf_kjh_eder bgff yj4 pr">
                    <i class="dx icon-close1  closeertde" @click="is_pup=false"></i>
                    <section class="pd">
                        <p class="cen fz16  pt10 pm10 z3 df_jh_dsde">确认领取本款面膜权限</p>
                    </section>
                    <section class="pl10 mui-row pt20">
                        <section class="mui-col-xs-4 pr10">
                                &nbsp;
                        </section>
                        <section class="mui-col-xs-4 pr10">
                            
                            <section class="sdf_jh_drr br pr">
         
                        <img :src="sd_d_dert.goods_images" class="yj4 sderr_jh_der">
       
                                
                       
            </section>
                            <p class="fz12 z3 cen mt5 dian">{{sd_d_dert.goods_name}}</p>
        </section>
                        
                                 <section class="mui-col-xs-4 pr10">
                                &nbsp;
                        </section>
                </section>
                    <section class="pd ">
                        <section class="sdf_jkhj_sdr">
    <p class="fz12 z3 sdf_drtyy">本领取资格一经确定不可更改，请谨慎选择后点击确定</p>
                            
                            
                             <p class="d_kh_btn z3 cen mt10" @click="quer_eert(2)">
         
                确 定
            </p>
                            
                            
                            </section>
    
    </section>
                    
            </section>
            
        </section>
            
            
            
            
            
        <section class="dsf_wwerrjh_de" v-if="is_dsdfrr">
    
                <section class="sdf_kjh_eder bgff yj4 pr ab">
                    <i class="dx icon-close1  closeertde" @click="is_dsdfrr=false"></i>
                    <section class="pd">
                        <p class="cen fz16  pt10 pm10 z3 df_jh_dsde">暂无可用面膜领取资格</p>
                    </section>
             
                    <section class="pd cen">
                        
                        <p class="z3 mt20">累计获得2款面膜领取资格，均已指定</p>
                        <p class="fz18 z3 mt10 pm10">
    推荐更多好友成会员以获得更多资格
                    </p>
                        <section class="sdf_jkhj_sdr">

                            
                            
                             <p class="d_kh_btn z3 cen mt10" @click="is_dsdfrr=false">
         
             我知道了
            </p>
                            
                            
                            </section>
    
    </section>
                    
            </section>
            
        </section>
            
            
            
        
        </section>
        
        <loadin v-else></loadin>
        
        
        
             <section class="sd_jh_deer " :class="is_fen_ddf?'show':''">
            <section class="sdf_jh_dff cen">
    <img   v-lazy="'https://api.cangniaowl.com/v1/huazhuang/visitingCard?token='+token" class="w100">
        <div class="sdf_jh_deerert">
            <p class="cf pt20 fz12">长按图片发送给朋友</p>
        <span class="close_sd yj" >
        <i class="dx icon-close1" @click="is_fen_ddf=false"></i>
    </span>
    </div>
        </section>
        </section>
        
        
        
        <p class="bg_dr_rrty"></p>
    </div>

        </template>
<script>
    import loadin from "../components/loadin.vue"
    import {
        Toast
    } from 'mint-ui';
    export default {
        data() {
            return {
                is_fen_ddf:"",
                is_jias: false,
                is_pup: false,
                isbuy: "",
                is_dsdfrr: false,
                friendslist: "",
                zz_goods_id: "",
                sd_Dertt: 0,
                sd_d_dert: ""
            }
        },
        components: {
            loadin
        },
        methods: {
            ling_s(sd) {
                if (sd.is_active == 1) {
                    this.hf('activity_168', {
                        act_id: sd._id
                    })
                }
            },
            get_date() {
                let isbuy = {},
                    th = this
                isbuy.token = this.token
                this.post("huazhuang/isbuy", isbuy, function(data) {
                    if (data.isactive == 0) {
                        th.hf('not_member', {
                            text_e: data.user_name
                        })
                    } else {
                        th.is_jias = true
                    }

                    data.goodslist.map(a => {
                        a.cls = ""
                        if (a.is_active == 1) {
                            th.sd_Dertt++

                        }

                    })
                    th.isbuy = data
                    th.friendslist = data.friendslist.data
                })
            },
            quer_eert(id_er, acllb) {
                this.is_pup = false

                if (!this.sd_d_dert.goods_id) {
                    return
                }
                let selectgoods = {},
                    th = this
                selectgoods.token = this.token
                selectgoods.goods_id = this.sd_d_dert.goods_id
                if (id_er) {
                    selectgoods.step = 2
                }

                this.post("huazhuang/selectgoods", selectgoods, function(data) {
                    try {
                        acllb(data)
                    } catch (e) {

                    }
                     if(data=='500'){
                       
                        return
                    }
                    
                    Toast('操作成功!');
                    th.is_pup = false
                    th.get_date()
                })

            },
            lingqu(id, ytu) { //领取
                let th = this
                th.sd_d_dert = id
                this.quer_eert('', function(data) {
                    if(data=='500'){
                       th.is_dsdfrr=true
                        return
                    }
                    
                    th.is_pup = true
                })

            }
        },
        mounted() {
            this.Title("会员等级—安茹官方旗舰店")
            this.get_date()

        },
    }

</script>
<style>
.sd_jh_deer img[lazy=loading] {
    width: 100px !important;
    height: 100px;
    position: absolute;
    left: 0px;
    top: 0px;
    bottom: 0px;
    right: 0px;
    margin: auto
}
</style>
<style scoped>
    .sdf_jh_deerer {
        color: #D8AA67;
        position: absolute;
        left: 0px;
        width: 100%;
        font-size: 18px;
        text-align: center;
        top: 23px;
    }

    .df_jh_deetrt {
        height: 180px;
        width: 310px;
        position: absolute;
        left: 0px;
        right: 0px;
        z-index: 10;
        top: 50%;
        margin: auto;
        background: url('http://mall.cangniaowl.com/static/img/kapain.png');
        background-size: 100% 100%;

    }

    .user_icone {
        width: 66px;
        height: 66px;
    }

    .dnegji_v {
        width: 13px;
        height: 13px;
        background-position: -19px -219px
    }

    .df_jh_der {
        margin-top: -15px
    }

    .fdf_hh_deer {
        background: #5B5B5B;
        padding: 2px 4px;
    }

    .fdf_hh_deer span {
        display: inline-block;
        transform: scale(0.9)
    }

    .sdf_jh_deer {
        padding-top: 80px;
        padding-bottom: 15px;
    }

    .user_ihy_e {
        width: 19px;
        height: 19px;
        background-position: -51px -211px;
        margin-right: 2px;
    }

    .d_kh_btn {
        width: 238px;
        height: 35px;
        border: 0px;
        margin: auto;
        line-height: 35px;
        color: #fff !important;
        border-radius: 20px;
        background: linear-gradient(to top, #C81113, #F7727A);
    }




    .sd_jh_Deet {
        border: 1px solid #AE0809;
        height: 50px;
        padding-left: 5px;
        padding-top: 7px;
    }

    .uyt_sd_a {
        width: 31px;
        height: 31px;
        background-position: -98px -199px;
    }

    .dsf_jh_dert {
        line-height: 1.4
    }

    .dsf_jh_derert {
        line-height: 1.5;
        margin-bottom: 5px;
    }

    .dsf_jh_deerer {
        border: 2px solid #AE0809;
        min-height: 150px;
        margin-top: 40px;
        border-radius: 4px;
        padding-bottom: 20px;
        box-shadow: 0 0px 8px rgba(0, 0, 0, .2);
    }

    .sd_jh_tier {
        width: 250px;
        height: 51px;
        background-position: -7px -257px;
        font-style: normal;
        line-height: 41px;
        text-align: center;
        font-size: 16px;
        color: #2f2f2f
    }

    .gf_ddf_dertg {
        margin-top: -25px;

    }

    .gf_ddf_dertg span {
        color: #b50412 !important;
    }

    .fg_h_deert {
        line-height: 1.1;
        padding-top: 5px;
        margin-top: -17px;
    }

    .dsf_jhj_derr {
        display: inline-block;
        transform: scale(0.8)
    }

    .Df_jhj_der {
        width: 90px;
        text-align: center;
        border-right: 1px dashed #C9C9C9
    }

    .Df_jhj_der img {
        width: 56px;
        height: 56px;
    }

    .sdf_jhh_der {
        height: 56px;
    }

    .df_jh_Deert li {
        background: #EEEEEE;
        padding-top: 7px;
        padding-bottom: 7px;
        margin-top: 10px;
    }

    /*
    .df_jh_Deert li.act {
        background: #E4C285;
    }

    .df_jh_Deert li.act .Df_jhj_der {
        border-right: 1px dashed #fff
    }
*/

    .sdf_jeerh_der {
        background: #CCCCCC;
        color: #2f2f2f;
        width: 150px;
        height: 26px;
        border-radius: 20px;
        line-height: 26px;
        display: inline-block;
    }

    .df_jh_Deert li.act .sdf_jeerh_der {
        background: #5C5C5C;
        color: #fff;

        background: linear-gradient(to bottom, #F67077, #CA1516);
    }

    .dsfwe_deert {
        background: linear-gradient(to bottom, #ED686F, #CB1619);
    }

    .fd_jjh_sdd {
        transform: scale(0.9);
        position: relative;
        top: 3px;
        margin-top: 0px;
    }

    .sd_jh_derr_er {
        width: 20%;
        display: inline-block;
        padding-right: 10px;
    }

    .sderr_jh_der {
        width: 60px;
        height: 60px;
    }

    .dsf_wwerrjh_de {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 100
    }

    .sdf_kjh_eder {
        width: 310px;
        height: 275px;
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        margin: auto
    }

    .sdf_kjh_eder.ab {
        height: 210px;
    }

    .df_jh_dsde {
        border-bottom: 1px solid #AE0809
    }

    .sdf_jh_drr {
        height: 6.1rem;
    }

    .sdf_jh_drr img {
        width: 100%;
        border-radius: 0px;
        height: 100%;

    }

    .DSf_jhh_de {
        position: absolute;
        left: 0px;
        bottom: 0px;
        background: #B9B9B9;
        font-size: 12px;
        width: 100%;
        line-height: 20px;
        color: #fff;
        text-align: center;
    }

    .sdf_jkhj_sdr {
        border-top: 1px solid #AE0809;
        margin-top: 10px;
        padding-top: 10px;

    }

    .sdf_drtyy {
        display: inline-block;
        transform: scale(0.8)
    }

    .sd_hhg_erer {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1000;
        display: none
    }

    .sd_hhg_erer.act {
        display: block
    }

    .gouxun_sd {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid #fff;
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        margin: auto;
        color: #fff;
        text-align: center;
        line-height: 40px;

    }

    .gouxun_sd i {
        font-size: 20px;
    }

    .bg_dr_rrty {
        background: url(http://mall.cangniaowl.com/static/img/bg_dert.jpg);
        background-size: 100% auto;
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
    }

    .closeertde {
        position: absolute;
        right: 10px;
        top: 10px;
        color: #D83337
    }

    .df_jh_deertt {
        display: inline-block !important;
        float: inherit
    }
    
    
    
     .sd_jh_deer{
        background: rgba(0,0,0,0.5);
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        display: none;
        
        z-index: 1000
    }
    .sdf_jh_dff{
        width: 300px;
        height: 500px;
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 50px;
        margin: auto;
    }
    .sdf_jh_dff img{
        height: 100%;
    }
    .sdf_jh_deerert{
        position: absolute;
        left: 0px;
        bottom: -80px;
        width: 100%;
        text-align: center;
    }
    .close_sd{
        border: 1px solid #fff;
        color: #fff;
        display: inline-block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        position: relative;
        top: 10px;
            
    }
    .feng_deer{
        position: absolute;
        right: 10px;
        top: 60px;
        z-index: 1000;
        line-height: 1.2
    }
    .feng_deer img{
        width: 25px;
        height: 25px;
    }

</style>
