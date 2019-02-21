<!--活动168-->
<template>
	<div >
        <section class="user_er_top">
            <img src="http://mall.cangniaowl.com/static/img/act_top.jpg" class="d_jh_bg">
            <section class="pr cen">
                <img :src="regular.header_image" class="user_iconsr yj">
                <section class=" ">
                    <p class="fz16 cf">{{regular.user_name}} </p>
                    <p class=" fz12 cf">ID:{{regular.user_id}} </p>
                    <p class="mt5"> <span class="jinpai_dsr yj4 cz ml10">{{regular.user_group_name}}</span></p>
                </section>
                <p class="qc"></p>
            </section>
        </section>

        <section class="pd pt20 pm10">
<!--            -->
            <section class="pt10 pm10 bgff fz16 cen yj4" @click="sc_tu_rf(regular.user_group_id)">
                <i class="f_a er_weic_e cz mr10"></i>
                生成推广名片
            </section>

            <section class="pd pt10 pm10 bgff mt10 yj4 fz14 z6" v-if="regular.if_buy_qualification_goods==0">

                您尚未参与{{regular.regular_detail.activity_name}}活动,还不能领取{{regular.regular_detail.qualification_goods_name}}商品
                <p class=" z9 fz12 mt5">
                    活动时间：{{regular.regular_detail.date_start+"~"+regular.regular_detail.date_end}}
                </p>
                <p class="cen mt10">
                <button class="mui-btn-red s_li_dertr" @click="hf('commodity_details',{goods_id:regular_detail.qualification_goods_id,act_id:act_id})">立即参与</button>
            </p>

            </section>




            <section class="pd pt10 pm10 bgff mt10 yj4 sd_h_dert" v-html="regular_detail.activity_rule">


            </section>


                 <section class="pd pt10 pm10 bgff mt10 yj4" v-if="regular.if_buy_qualification_goods==1">

                     <section class="z3 fz12 pm5 box">
                       <p class="box_a z3 fz12">  <span class="syuci_sdr ab">邮费：{{regular.shipping_price}}元</span></p>
                            <p class="box_a z3 cen fz12">已领取：{{regular.buy_welfare_goods_history_count}}次

    </p>
                            <p class="box_a z3 tr fz12">{{regular.province_name+""+regular.city_name}}
    </p>
    </section>


                <p class="z3 fz15 btm pt10">     尊敬的客户：</p>


                <p class="fz12 z6 mt5">
                  恭喜！您已经成功参与<span class="red">{{regular_detail.activity_name}}</span>活动，您的领取期限
为    <span class="fz12 " v-html="time_c(regular.receive_time.start)"></span>
                    -

                    <span class="fz12 " v-html="time_c(regular.receive_time.end )"></span> 。在活动期内请及时领取您的福
利商品，逾期不候。<span v-if="regular.regular_already_expire==1" class="red">已过期</span>
                </p>

                <section class="btm mt10 pt10">

<!--
                <section class="sd_ertsrx"  v-if="type==1">
                    <ul>
                        <li v-for="ry in regular.regular_list_data[0].data_list">
                            <p class="pr">
                                <span class="yj sd_jkh_det"></span>
                                <i class="f_a time_icon fz12 cf">2017年6月</i>

                            </p>

                            <section class=" df_piaios_ds mt10" v-for="sd in 2">

                        <img src="http://mall.cangniaowl.com/static/img/piaoquan_a.png" class="piao_bgsd">
                                <section class="pr pl30 pt15">
                    <i class="f_a libao_srt"></i> <span class="fz24 z6 cz">
                                       {{ry}}下半月

                </span>
                                <span class="yj4 fz12 weki_bsr ">未开始</span>
                <p class="fz12 z9 mt5">
    活动即将开始，敬请期待！
    </p>
        <p class="fz12 z9 mt5">
    有效期：6月16日-6月30日
    </p>
 
                    </section>
                                <span class="sd_jh_dertt fz22">暂未开始</span>
                        </section>

                        </li>


                    </ul>
                </section>

-->

                <section class="sd_ertsrx ab" >
                    <ul>
                   <li v-for="ry in regular.regular_list_data">
                            <p class="pr pl10">
                                <span class="yj sd_jkh_det"></span>
                                <i class="f_a time_icon fz12 cf">{{ry.show_time_message.month_message}}</i>

                            </p>


                               <section class=" df_piaios_ds mt10 pl10 " v-for="rty in ry.data_list" :class="rty.type==3?'ac':'ad'" @click="sder_er(rty.type)">

                            <section class="pr  h100">
                                <section class="d_jjh_uzd"></section>
                             <img src="http://mall.cangniaowl.com/static/img/piao_b_a.png" class="piao_bgsd" v-if="rty.type==3">
                                 <img src="http://mall.cangniaowl.com/static/img/piao_b_c.png" class="piao_bgsd" v-else>
                                <section class="pr pl20 pt10 f_kjh_dert">
                                    <i class="f_a sdf_dd_a"></i>

                                    <span class="fz18 z6 cz sdf_jh_der">

                                       {{rty.month_level| mone_sd}}

    </span>
<!--                                   <span class="yj4 fz12 weki_bsr ap">进行中</span> -->
                                    <p class="red fz12">
                                   {{rty.type_message}}
                                    </p>


                                </section>
                                   <p class="fz12 cf sd_jerh_dert cf">
                                        {{rty.time_effective_start}}-{{rty.time_effective_end}}
                                    </p>
                        </section>

                        </section>

<!--
                               <section class=" df_piaios_ds mt10 pl10" >

                            <section class="pr  h100">
                             <img src="http://mall.cangniaowl.com/static/img/piao_b_b.png" class="piao_bgsd">
                                <section class="pr pl20 pt10 f_kjh_dert">
                                    <i class="f_a sdf_dd_a"></i>

                                    <span class="fz18 z6 cz sdf_jh_der">下半月</span>
                                   <span class="yj4 fz12 weki_bsr ap">未开始</span>
                                    <p class="red fz12">
                                    活动即将开始
                                    </p>


                                </section>
                                   <p class="fz12 cf sd_jerh_dert cf">
                                        6月16日-6月30日
                                    </p>
                        </section>

                        </section>
-->

                            <p class="qc"></p>

                        </li>




                    </ul>
                </section>



            </section>


            </section>




        </section>
     <fenxiangpup v-if="ycsd_d" :is_sd_fn="ycsd_d" :url="fn_url" msg="长按图片发送给朋友" @ycsd_d="ycsd_d=false"></fenxiangpup>
	</div>
</template>
<script>
     import fenxiangpup from "../components/fenxiangpup"
    import {
        MessageBox
    } from 'mint-ui';
    export default {
        data() {
            return {
                  ycsd_d:false,
                type: "",
                act_id: "",
                fn_url:"",
                regular: "",
                regular_detail: ""
            }
        },
        components: {
            fenxiangpup
        },
        methods: {
            sder_er(ty) { 
                if (ty == 1) {
                    MessageBox('提示', '该商品已过期');

                }
                if (ty == 2) {
                    MessageBox('提示', '该商品已经被领取过了');
                }
                if (ty == 3) {
                    MessageBox.confirm('是否领取商品').then(action => {
                        if (action) {
                            let order_formqueren = {}
                            order_formqueren.token = this.token
                            order_formqueren.goods_number = 1
                            order_formqueren.step = 1
                            order_formqueren.goods_id = this.regular_detail.welfare_goods_id
                            this.hf('order_formqueren', order_formqueren)
                        }
                    });
                }
            },
            sc_tu_rf(id_d) {
                if (id_d > 0) {
                   this.ycsd_d=true
                } else {
                    MessageBox(' ', '推广名片仅限会员可以生成，您目前尚不是会员，无法生成推广名片');
                }
            }
        },
        mounted() {
            this.type = this.$route.query.type
            if (this.$route.query.act_id) {
                this.act_id = this.$route.query.act_id
            }


            let regular = {},
                th = this
            regular.token = this.token
            regular._id = this.act_id
            this.post("activity/regular", regular, function(data) {
                th.regular = data
                th.regular_detail = data.regular_detail
            })
             
             this.post("user/index", {token:this.token}, function(data) {
                th.fn_url= data.weicard+"?v="+new Date().getTime()
             })
            
            

            this.Title("周期购")
        },
        computed: {
            getshopinfo() {
                return this.$store.state.shopinfo;
            }
        },
        watch: {
            getshopinfo(val) {
                var sd_us = `https://api.cangniaowl.com/shop/${val.shop_id}.html?act_id=${th.$route.query.act_id}&shareid=${val.user_id}&route=activity_168#/activity_168?act_id=${th.$route.query.act_id}`
                th.fenxiang(th.regular.regular_detail.qualification_goods_name, sd_us, val.shop_logo, th.regular.regular_detail.activity_name)
            }
        },
        filters: { //过滤器   页面上调用{{dt.state|lei}}
            mone_sd(num) {
                let sd_er = ""
                if (num == 1) {
                    sd_er = "上半月"
                } 
                if (num == 2) {
                    sd_er = "中半月"
                }
                if (num == 3) {
                    sd_er = "下半月"
                }
                console.log(num);
                return sd_er
            }
        }
    }

</script>
<style>
    .sd_h_dert p {
        font-size: 12px;
    }

    .sd_h_dert p:nth-child(1) {
        color: #333;
        font-size: 14px;
    }

</style>
<style scoped>
    .user_er_top {
        height: 150px;
        position: relative;
        padding-top: 15px
    }

    .d_jh_bg {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 1
    }

    .user_iconsr {

        width: 51px;
        height: 51px;
    }

    .jinpai_dsr {
        background: #ECAC23;
        color: #fff;
        font-size: 12px;
        padding: 2px 4px;
    }

    .er_weic_e {
        width: 29px;
        height: 29px;
        background-position: -116px -25px;
    }

    .sd_ertsrx {
        border-left: 1px solid #EFEFEF;
        padding-left: 10px;
        padding-right: 5px;
    }

    .sd_ertsrx.ab {
        padding-left: 0px;
        padding-right: 0px;
    }

    .sd_ertsrx.ab .df_piaios_ds {
        width: 50%;
        height: 5.2rem;
        min-height: 85px;
        float: left;
    }

    .time_icon {
        width: 83px;
        height: 20px;
        text-align: center;
        font-style: normal;
        background-position: -7px -34px;
    }

    .sd_jkh_det {
        width: 6px;
        height: 6px;
        background: #22C384;
        position: absolute;
        left: -4px;
        top: 9px;
    }

    .df_piaios_ds {
        height: 6.2rem;
        min-height: 95px;
        position: relative
    }

    .piao_bgsd {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 1
    }

    .libao_srt {
        width: 24px;
        height: 24px;
        background-position: -172px -30px;
    }

    .weki_bsr {
        color: #F25151;
        border: 1px solid #F25151;
        padding: 0px 4px;
        margin-left: 15px;
        display: inline-block;
        transform: scale(0.9);

    }

    .sd_jh_dertt {
        position: absolute;
        right: 25px;
        top: 24%;
        line-height: 1.2;
        width: 50px;
        z-index: 100;
        color: #999;
    }

    .sd_ertsrx li {
        margin-top: 10px;
    }

    .sd_ertsrx li.ab {}

    .df_piaios_ds.ab .z9,
    .df_piaios_ds.ab .z6,
    .df_piaios_ds.ab .weki_bsr,
    .df_piaios_ds.ac .z6,
    .df_piaios_ds.ac .z9,
    .df_piaios_ds.ac .red {
        color: #fff !important;
    }

    .df_piaios_ds.aa .red {
        color: #666 !important
    }

    .df_piaios_ds.aa .cf {
        color: #666 !important
    }

    .df_piaios_ds.ab .weki_bsr {
        border: 1px solid #fff !important;
    }

    .df_piaios_ds.ab .libao_srt {
        background-position: -213px -30px;
    }

    .df_piaios_ds.ab .sd_jh_dertt {
        color: #333;
    }

    .df_piaios_ds.ad .weki_bsr {
        background: #23C384;
        border: 1px solid #23C384;
    }

    .df_piaios_ds.ad .sdf_dd_a {
        background-position: -329px -37px;
    }

    .df_piaios_ds.ad .red,
    .df_piaios_ds.ad .cf {
        color: #999 !important
    }

    .syuci_sdr {
        border-left: 2px solid #F85F5F;
        line-height: 1;
        display: inline-block;
        padding-left: 10px;
    }

    .syuci_sdr.ab {
        border-left: 2px solid #23C384;
    }

    .sdf_dd_a {
        width: 17px;
        height: 18px;
        background-position: -262px -37px;
    }

    .weki_bsr.ap {
        margin-left: 0px !important;
        background: #FD6C6C;
        color: #fff;
    }

    .sd_jerh_dert {
        position: absolute;
        left: 0px;
        bottom: 5px;
        z-index: 100;
        width: 100%;
        padding-left: 20px;
    }

    .df_piaios_ds.ac .weki_bsr {
        background: #fff;
        color: #FD6C6C;
    }

    .df_piaios_ds.ac .sdf_dd_a {
        background-position: -297px -37px;
    }

    .df_piaios_ds.ae .weki_bsr {
        background: #CCCCCC;
        border: 1px solid #CCCCCC;
    }

    .s_li_dertr {
        padding-top: 3px;
        padding-bottom: 3px;
    }

    .d_jjh_uzd {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 999
    }

    .sdf_jh_der {
        float: inherit !important
    }

    @media screen and (max-width: 330px) {
        .sdf_jh_der {
            font-size: 14px !important;
        }

        .sd_ertsrx.ab .df_piaios_ds {
            width: 60%;
            height: 5.2rem;
            min-height: 85px;
            float: left;
        }

    }

</style>
