<template>
<div >
    <p class="bg_drtxed"></p>
    <img src="https://mall.cangniaowl.com/static/img/new168/bg_df_de.jpg" class="w100  sdf_ng_der">
    <section class="sd_jh_ddtop">
        <section class="pd fdg_jh_dedt">
            <img :src="sd.first_image" class="w100 dfg_kj_ert cz">
        </section>
        <p class="cen mt40">
            <img src="https://mall.cangniaowl.com/static/img/new168/fenxiang_de.png" class="fenxiu_dert" @click="sc_tu_rf">
        </p>
        
        
           <section class="pd dfd_kjj_dcrt mt10" >
            
                <section class="sd_jdd_jh_drr yj4 pr pm10">
                        <p class="cen sdf_fdfr_er">
                        <i class="f_act_dcert ser_nk_e"></i>
                </p>
                      <section class="sjh_drrtx pd mt10">
                  <section class="pr fdg_derrtt ">
                      <img :src="sd.gift_image" class="w100 cz">
                      <img  v-if="sd.gift_bag_click==1" src="https://mall.cangniaowl.com/static/img/lijilingqu.png" class="lijigoi_der" @click="xiadand(sd.gift_bag_goods_id)">
                               
                <img  v-if="sd.gift_bag_click==0" src="https://mall.cangniaowl.com/static/img/lijilingquhs.png" class="lijigoi_der" @click="sd_xdf_d=true">
                                         
                      
                    </section>
                </section>   
               


                </section>



                  <p class="cen mt20">
    </p>


        </section>
        
        
        
        
             <section class="pd  mt40" >
            
                <section class="sd_jdd_jh_drr yj4 pr pm10">
                        <p class="cen sdf_fdfr_er">
                        <i class="f_act_dcert ser_nk_e ba"></i>
                </p>
                <section @click="sdf_jh_der">
                <section class="sf_df_Dertx mt10" v-for="(sd,idx) in sd.friends_list">
                    <img :src="sd.header_image" class="yj h_Df_Drttx cz" >
                </section>
                    
                <section class="sf_df_Dertx mt10" v-for="sd in sd.follow_nums_give_gift">
                    <img src="https://mall.cangniaowl.com/static/img/new168/user_icond.png" class="yj h_Df_Drttx cz" >
                </section>
                    </section>
<!--                    <kongbai :kb="kb" v-if="friendslist.length<=0"></kongbai>-->
                    
                    <p class="qc cen pt10 fdgdf_cdert" >
                        礼邀好友，多邀多享
                    </p>
                    
            </section>
    </section>
        
        
        <p class="cen mt30" >
      <img src="https://mall.cangniaowl.com/static_story/img/cn_dibu_er.png" class="cn_dibu">
    </p>
    </section>
    <fenxiang_pup_er v-if="ycsd_d" :url="$store.state.shopinfo.wei_qr_code"  msg="长按图片保存或发送给朋友" @ycsd_d="ycsd_d=false"></fenxiang_pup_er>

    <pup_img url="https://mall.cangniaowl.com/static/img/new168/lingqu_zge.png" heightrf_d="300" v-if="sd_xdf_d" @ycsd_d="sd_xdf_d=false"></pup_img>
</div>
</template>
<script>
    import fenxiang_pup_er from "../components/fenxiang_pup_er"
    import pup_img from "../components/pup_img"
    import kongbai from "../components/kongbai"
    export default {
        data() { 
            return {
                sd_xdf_d: false,
                ycsd_d: false,
                regular_detail: "",
                regular: "",
                isbuy: "",
                friendslist: "",
                friendslist2: "",
                fanslist: "",
                kb: {
                    icom: "dsf_hss_sd",
                    msg: "暂无数据",
                    type: 3
                },
                jige_df: 0,
                sd: ""
            }
        },
        components: {
            fenxiang_pup_er,
            kongbai,
            pup_img
        },
        methods: {
            sc_tu_rf(id_d) {
                this.ycsd_d = true
            },
            xiadand(goods_id) {

                let order_formqueren = {}
                order_formqueren.token = this.token
                order_formqueren.goods_number = 1
                order_formqueren.step = 1
                order_formqueren.goods_id = goods_id
                this.hf('order_formqueren', order_formqueren)

            },
            sdf_jh_der() {
                if (this.jige_df > 0) {
                    this.sd_xdf_d = true
                }

            },
            async get_df() {
                var regular = {}
                regular.id = this.$route.query._id
                regular.time_e = new Date().getTime()
                this.sd= await this.post_new("activity/giftgive",regular)
                this.sd.follow_nums_give_gift=   this.sd.follow_nums_give_gift-this.sd.friends_list.length
            }

        },
        mounted() {
           this.get_df()




        },
    }

</script>
<style>
    .sd_jdd_jh_drr .mt100 {
        margin-top: 0
    }

</style>
<style scoped>
    .bg_drtxed {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: #fff
    }

    .sdf_ng_der {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 100
    }

    .sd_jh_ddtop {
        position: relative;
        z-index: 101
    }

    .fdg_jh_dedt {
        padding-top: 40px;
    }

    .dfg_kj_ert {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
        border-radius: 4px;
    }

    .fenxiu_dert {
        width: 190px;
    }

    .dfd_kjj_dcrt {
        border-top: 10px solid #F6F6F6
    }









    .sd_jdd_jh_drr {
        border: 1px solid #FCE5B7;
        background: #fff;
        margin-top: 50px;
    }

    .sdf_fdfr_er {
        margin-top: -28px;
    }

    .ser_nk_e {
        width: 240px;
        height: 48px;
        background-position: -18px -537px;
    }

    .ser_nk_e.ab {
        background-position: -11px -681px;
    }

    .ser_nk_e.ba {
        background-position: -10px -846px;
    }

    .sd_kjh_dert {
        color: #217643;
        font-size: 15px;
        text-align: center;
        position: relative;
        width: 290px;
        margin: auto;
    }

    .sd_kjh_dert:after {
        content: ' ';
        position: absolute;
        left: 0px;
        top: 10px;
        height: 1px;
        width: 33%;
        background: #217643;
    }

    .sd_kjh_dert:before {
        content: ' ';
        position: absolute;
        right: 0px;
        top: 10px;
        height: 1px;
        width: 33%;
        background: #217643;
    }

    .sdf_jh_deer li {
        margin-top: 5px;
    }

    .erhuiyuande {
        color: #26854b;
        text-align: center;
        font-size: 13px;
        position: relative;
        margin-bottom: 8px;

    }

    .erhuiyuande:after {
        width: 20px;
        height: 1px;
        position: absolute;
        content: ' ';
        left: 0px;
        right: 0px;
        top: 20px;
        margin: auto;
        background: #EBC596;
    }

    .df_jh_deertt {
        border-right: 1px dashed #26854b;
        padding-top: 12px;
        padding-bottom: 5px;
    }


    .lijigoi_der {
        position: absolute;
        height: 100%;
        right: 0px;
        top: 0px
    }

    .lijigoi_der.ab {
        right: inherit;
        left: 0px;
        width: 50px;
        height: 50px;
    }

    .sf_df_Dertx {
        width: 20%;
        float: left;
        text-align: center
    }

    .sf_df_Dertx img {
        width: 50px;
        height: 50px;
    }

    .fdgdf_cdert {
        color: #a54a00
    }
    .fdg_derrtt{
        padding-right: 15%
    }
</style>
