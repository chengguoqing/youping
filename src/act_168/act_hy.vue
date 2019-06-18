<template>
<div :class="'sd_dfgdrf'+ity">
<p class="sd_jh_dert"></p>


        <section class="pr mt40">
            <p class="sd_jkhj_dert"></p>
        <section class="sdf_df_bgf pd pt10 ">
             <p class="fz12 fd_jh_drt">&nbsp;</p>  
        <section class="cen pr">
                <section class="pr f_b">
                    <img :src="regular.header_image" class="user_icon yj">
  

                </section>
              <p class="huiyuandengji cen">
                           <span>{{regular.user_group_name}}</span>
                    </p>
            <p class="cf fz14 mt10 fg_jhert">{{regular.user_name}}</p>
            <p class="fz12 cf mt10 tr"> 
            </p>
        </section>
        </section>


    

    <p class="cen mt20">
        <i class="f_act fenxiang_we"  @click="sc_tu_rf"></i>
    </p>


             <section class="pd" >

<!--                 is_agent==1代理商-->
            
                <section class="sd_jdd_jh_drr yj4 pr pm10" v-if="isbuy.is_agent==0">
                        <p class="cen sdf_fdfr_er">
                        <i class="f_act ser_nk_e"></i>
                </p>

        

                <ul class="pd sdf_jh_deer mt10">
                    <li v-if="ity==1">
                         <img src="https://mall.cangniaowl.com/youpinmeijia/dfdsf_a.png" class="w100"   @click="sdf_dsfdf(regular.user_group_name) " v-if="isbuy.can_numer<=0">
                         <img src="https://mall.cangniaowl.com/youpinmeijia/dfdsf_a.png" class="w100" @click="xiadand(goumoas[ity-1])"  v-else>
                        
                    </li>
                     <li v-if="ity==2">
                         <img src="https://mall.cangniaowl.com/youpinmeijia/dfdsf_b.png" class="w100"   @click="sdf_dsfdf(regular.user_group_name) " v-if="isbuy.can_numer<=0">
                         <img src="https://mall.cangniaowl.com/youpinmeijia/dfdsf_b.png" class="w100" @click="xiadand(goumoas[ity-1])"  v-else>
                        
                    </li>
                        <li v-if="ity==3">
                         <img src="https://mall.cangniaowl.com/youpinmeijia/dfdsf_c.png" class="w100"   @click="sdf_dsfdf(regular.user_group_name) " v-if="isbuy.can_numer<=0">
                         <img src="https://mall.cangniaowl.com/youpinmeijia/dfdsf_c.png" class="w100" @click="xiadand(goumoas[ity-1])"  v-else>
                        
                    </li>
                        <li v-if="ity==4">
                         <img src="https://mall.cangniaowl.com/youpinmeijia/yohuiyan.jpg" class="w100"   @click="sdf_dsfdf(regular.user_group_name) " v-if="isbuy.can_numer<=0">
                         <img src="https://mall.cangniaowl.com/youpinmeijia/yohuiyan.jpg" class="w100" @click="xiadand(goumoas[ity-1])"  v-else>
                        
                    </li>
                </ul>


                </section>

                      <section class="sd_jdd_jh_drr yj4 pr pm10" v-if="isbuy.is_agent==1">
                        <p class="cen sdf_fdfr_er">
                        <i class="f_act ser_nk_e"></i>
                </p>

                <section class="sd_kjh_dert mt5">
                        会员免费领
                </section>

                <ul class="pd sdf_jh_deer mt10">
                    <li @click="tishis" v-if="ity==1">
                
                         <img src="https://mall.cangniaowl.com/youpinmeijia/dfdsf_a.png" class="w100">
                    </li>
                    <li @click="tishis" v-if="ity==2">
                         <img src="https://mall.cangniaowl.com/youpinmeijia/dfdsf_b.png" class="w100">

                    </li>
                          <li @click="tishis" v-if="ity==3">
                         <img src="https://mall.cangniaowl.com/youpinmeijia/dfdsf_b.png" class="w100">

                    </li>
                       <li @click="tishis" v-if="ity==4">
                         <img src="https://mall.cangniaowl.com/youpinmeijia/yohuiyan.jpg" class="w100">

                    </li>
                    
                </ul>


                </section>



            <section class="sd_jdd_jh_drr mt15 mui-row pt5 pm5 pr yj4" @click="haoyou_sf(friendslist2,0)">
                <section class="mui-col-xs-3 df_jh_deertt cen">
                            <p class="erhuiyuande">
                                会员好友
                            </p>
                    <p class="fz12">{{friendslist2.length}}</p>
            </section>

                 <section class="mui-col-xs-9  cen">
                        <section class="sd_h_deer"  v-if="isbuy.have_numer>0" @click.stop="is_haoy=true">
                        <img src="https://mall.cangniaowl.com/static/img/168/libao.png">
                            <p>x{{isbuy.have_numer}}</p>
                    </section>

                        <section class="sd_h_deer dian" v-for="(sd,idx) in friendslist" v-if="idx<3">
                        <img :src="sd.header_image">
                            <p>{{sd.user_name}}</p>
                    </section>


                        <section class="sd_h_deer" v-if="friendslist2.length<=0">
                        <img src="https://mall.cangniaowl.com/static/img/168/user_icon.png">
                            <p>暂无</p>
                    </section>




                </section>

                <i class="f_act right_dert"></i>

            </section>



                  <p class="cen mt20">
    </p>


        </section>




        <section class="pd mt20 pr" v-if="isbuy.if_buy_30510==1||isbuy.if_buy_30512==1">
            <section class="sd_jh_dederr pd pr">
                <p class="ssd_dee pr5" v-if="isbuy.if_buy_30510==1" @click="hf('activity_168',{act_id:'5a5c50541e64f271ed5d3969'})">
                    <img src="https://mall.cangniaowl.com/static/img/168/dsfsd_a.png" class="w100">
                </p>
                <p class="ssd_dee ab pl5" v-if="isbuy.if_buy_30512==1" @click="hf('activity_168',{act_id:'5a5c52491e64f23d795245df'})">
        <img src="https://mall.cangniaowl.com/static/img/168/dsfsd_b.png" class="w100">
    </p>
            </section>
            <img src="https://mall.cangniaowl.com/static/img/168/act_ert.png" class="w100 dsf_df_Drtrt">
        </section>


      <section class="pd" v-if="regular.if_buy_qualification_goods==0">
        <section class="pd pt10 pm10 bgff mt10 yj4 fz14 z6" >

                您尚未参与{{regular.regular_detail.activity_name}}活动,还不能领取{{regular.regular_detail.qualification_goods_name}}商品
                <p class=" z9 fz12 mt5">
                    活动时间：{{regular.regular_detail.date_start+"~"+regular.regular_detail.date_end}}
                </p>
                <p class="cen mt10">
                <button class="mui-btn-red s_li_dertr" @click="hf('act_168',{act_id:act_id,ity:ity})">立即参与</button>
            </p>

            </section>
          
               <section class="pd pt10 pm10 bgff mt10 yj4 sd_h_dert" v-html="regular_detail.activity_rule">


            </section>
          
          
  </section>
            
            
      
         <section class="pd" v-else>
                <section class="sd_jdd_jh_drr yj4 pr pm10">
                        <p class="cen sdf_fdfr_er">
                        <i class="f_act ser_nk_e ab"></i>
                </p>

<!--
            <section class="mt10 mui-row fz12 z3 cen pd">
                    <section class="mui-col-xs-4 fdsg_jhgh_dert">
                            邮费：{{regular.shipping_price}}元
                    </section>
                  <section class="mui-col-xs-4 fdsg_jhgh_dert">
                           已领取：{{regular.buy_welfare_goods_history_count}}次
                    </section>
                  <section class="mui-col-xs-4 fdsg_jhgh_dert">
                         {{regular.province_name+""+regular.city_name}}
                    </section>


            </section>

-->

                    <section class="pd">

                    
                        
                         <p class="z3 fz15 btm pt10">     尊敬的客户：</p>

                          <p class="fz12 z6 mt5" v-if="regular.regular_list_data">
                  恭喜小主！您已成功参与<span class="red">{{regular_detail.activity_name}}</span>活动，本领取期限为<span class="fz12 " v-html="time_c(regular.receive_time.start)"></span>
                    -

                    <span class="fz12 " v-html="time_c(regular.receive_time.end )"></span> 。请在有效期内及时领取！
                              <span v-if="regular.regular_already_expire==1" class="red">已过期</span>
                </p>

                        <section v-else>

                <p class="fz12 z6 mt5" v-if="isbuy.isactive==1">
                    恭喜小主！您已成功参与<span class="red">【398魔力会员8款面膜免费领取】</span>活动，本领取期限为2018-12-27-2019-12-27。请在有效期内及时领取！

                </p>
                        <p class="fz12 z6 mt5" v-else>
                尊敬的客户：您尚未参与<span class="red">【魔力会员·8款面膜全年免费领】</span>活动，还不能领取本活动的8款面膜商品


                </p>
                </section> 
                        
                        <section class="btm mt10 pt10">


                <section class="sd_ertsrx ab" >
                    <ul>




                   <li v-for="ry in regular.regular_list_data">
                            <p class="pr pl10">
                                <span class="yj sd_jkh_det"></span>
                                <i class="f_a time_icon fz12 cf">{{ry.show_time_message.month_message}}</i>

                            </p>


                               <section class=" df_piaios_ds mt10 pl10 " v-for="rty in ry.data_list" :class="rty.type==3?'ac':'ad'" @click="sder_er(rty.type,rty)">

                            <section class="pr  h100">
                                <section class="d_jjh_uzd"></section>
                             <img src="http://mall.cangniaowl.com/static/img/piao_b_a.png" class="piao_bgsd" v-if="rty.type==3">
                                 <img src="http://mall.cangniaowl.com/static/img/piao_b_c.png" class="piao_bgsd" v-else>
                                <section class="pr pl20 pt10 f_kjh_dert">
                                    <i class="f_a sdf_dd_a"></i>

                                    <span class="fz18 z6 cz sdf_jh_der">

                                       {{rty.month_level| mone_sd}}

    </span>
                                    <p class="red fz12">
                                   {{rty.type_message}}
                                    </p>


                                </section>
                                   <p class="fz12 cf sd_jerh_dert cf">
                                        {{rty.time_effective_start}}-{{rty.time_effective_end}}
                                    </p>
                        </section>

                        </section>

                            <p class="qc"></p>

                        </li>




                    </ul>
                </section>



            </section>

                    </section>

    </section>
    </section>


    </section>

    <xz_mianmo v-if="xz_mianmo_is" @close_sd="xz_mianmo_is=false" :df_sdf="df_sdf[ity-1]" :sd_jh_sd="sd_jh_sd"></xz_mianmo>


    <weihuoqu v-if="is_weijh" @close_e="is_weijh=false" @yaoqing="is_weijh=false;ycsd_d=true"></weihuoqu>

<!--

        <fenxiang_pup_er v-if="ycsd_d" :is_sd_fn="ycsd_d"  msg="长按图片保存或发送给朋友" @ycsd_d="ycsd_d=false"></fenxiang_pup_er>

    
-->
     <fenxiang_pup_er v-if="ycsd_d" :is_sd_fn="ycsd_d" :url="api_url+'/card/activity?token='+token+'&_id='+act_id" msg="长按图片保存或发送给朋友" @ycsd_d="ycsd_d=false"></fenxiang_pup_er>
    
    
    
        <err :msg="sd_dffgxsddff" v-if="is_tishi" @close="is_tishi=false"></err>
    <puphaoyou v-if="is_haoy" @close_e="is_haoy=false" :libao_list="isbuy.libao_list"></puphaoyou>
    
      <err msg="您尚未购买本会员套卡，不能参加礼包赠送活动" v-if="is_tishi_er" @close="d_jh_deer"></err>
    
</div>
</template>
<script>
    import {
        MessageBox
    } from 'mint-ui';
    import {
        Dialog
    } from 'vant';
    import weihuoqu from "../components/act168/weihuoqu"
    import fenxiang_pup_er from "../components/tuiguangfenxiang"
    import puphaoyou from "../components/act168/puphaoyou"
    import xz_mianmo from "../components/act168/xz_mianmo"
    import err from "../components/tishi/err"
    import {
        Notify
    } from 'vant';


    export default {
        data() {
            return {
                goumoas: [38271, 38266, 38274, 15],
                ity: "",
                is_tishi_er: false,
                is_tishi: false,
                sd_dffgxsddff: "您已是代理商，不能参与免费领取礼包活动",
                df_sdf: [
                    [{
                        name: "玻尿酸聚润水光面膜",
                        img: "https://mall.cangniaowl.com/youpinmeijia/dsfd_a.jpg",
                        cls: "",
                        goods_id: "38270",
                        goods_attr_id: "25b9a4a820d4548a2b2f964ce3cdf795",
                        goods_number: 1
                    }, {
                        name: "烟酰胺光感亮肤面膜",
                        img: "https://mall.cangniaowl.com/youpinmeijia/dsfd_b.jpg",
                        goods_id: "38270",
                        cls: "",
                        goods_attr_id: "92495647e0bc012be9ce5131a1bb4678",
                        goods_number: 1
                    }, {
                        name: "赋活修护面膜",
                        img: "https://mall.cangniaowl.com/youpinmeijia/dsfd_c.jpg",
                        goods_id: "38270",
                        cls: "",
                        goods_attr_id: "f007485f7e59eb962ded2bd9ff6ae85c",
                        goods_number: 1
                    }, {
                        name: "胜肽紧肤面膜",
                        img: "https://mall.cangniaowl.com/youpinmeijia/dsfd_d.jpg",
                        goods_id: "38270",
                        cls: "",
                        goods_attr_id: "9be5923d88a5a9a15f9fb2c2afdf9fb9",
                        goods_number: 1
                    }],   [{
                        name: "玻尿酸聚润水光面膜",
                        img: "https://mall.cangniaowl.com/youpinmeijia/dsfd_a.jpg",
                        cls: "",
                        goods_id: "38262",
                        goods_attr_id: "639337ddfb13a5062b7427d22910f49f",
                        goods_number: 1
                    }, {
                        name: "烟酰胺光感亮肤面膜",
                        img: "https://mall.cangniaowl.com/youpinmeijia/dsfd_b.jpg",
                        goods_id: "38262",
                        cls: "",
                        goods_attr_id: "92495647e0bc012be9ce5131a1bb4678",
                        goods_number: 1
                    }, {
                        name: "赋活修护面膜",
                        img: "https://mall.cangniaowl.com/youpinmeijia/dsfd_c.jpg",
                        goods_id: "38262",
                        cls: "",
                        goods_attr_id: "f007485f7e59eb962ded2bd9ff6ae85c",
                        goods_number: 1
                    }, {
                        name: "胜肽紧肤面膜",
                        img: "https://mall.cangniaowl.com/youpinmeijia/dsfd_d.jpg",
                        goods_id: "38262",
                        cls: "",
                        goods_attr_id: "9be5923d88a5a9a15f9fb2c2afdf9fb9",
                        goods_number: 1
                    }],[{
                        name: "玻尿酸聚润水光面膜",
                        img: "https://mall.cangniaowl.com/youpinmeijia/dsfd_a.jpg",
                        cls: "",
                        goods_id: "38273",
                        goods_attr_id: "a7d39855e69acf1cec7f7559fce86dad",
                        goods_number: 1
                    }, {
                        name: "烟酰胺光感亮肤面膜",
                        img: "https://mall.cangniaowl.com/youpinmeijia/dsfd_b.jpg",
                        goods_id: "38273",
                        cls: "",
                        goods_attr_id: "6758c2c958e6ef604521b8c0ddb8be39",
                        goods_number: 1
                    }, {
                        name: "赋活修护面膜",
                        img: "https://mall.cangniaowl.com/youpinmeijia/dsfd_c.jpg",
                        goods_id: "38273",
                        cls: "",
                        goods_attr_id: "41df4b228b883ef8959284be7daa7005",
                        goods_number: 1
                    }, {
                        name: "胜肽紧肤面膜",
                        img: "https://mall.cangniaowl.com/youpinmeijia/dsfd_d.jpg",
                        goods_id: "38273",
                        cls: "",
                        goods_attr_id: "02110281fe7014b65841847cb2ffc918",
                        goods_number: 1
                    }],[{
                        name: "玻尿酸聚润水光面膜",
                        img: "https://mall.cangniaowl.com/youpinmeijia/dsfd_a.jpg",
                        cls: "",
                        goods_id: "14",
                        goods_attr_id: "a7d39855e69acf1cec7f7559fce86dad",
                        goods_number: 1
                    }, {
                        name: "烟酰胺光感亮肤面膜",
                        img: "https://mall.cangniaowl.com/youpinmeijia/dsfd_b.jpg",
                        goods_id: "14",
                        cls: "",
                        goods_attr_id: "6758c2c958e6ef604521b8c0ddb8be39",
                        goods_number: 1
                    }, {
                        name: "赋活修护面膜",
                        img: "https://mall.cangniaowl.com/youpinmeijia/dsfd_c.jpg",
                        goods_id: "14",
                        cls: "",
                        goods_attr_id: "41df4b228b883ef8959284be7daa7005",
                        goods_number: 1
                    }, {
                        name: "胜肽紧肤面膜",
                        img: "https://mall.cangniaowl.com/youpinmeijia/dsfd_d.jpg",
                        goods_id: "14",
                        cls: "",
                        goods_attr_id: "02110281fe7014b65841847cb2ffc918",
                        goods_number: 1
                    }]
                ],

                xz_mianmo_is: false,
                is_haoy: false,
                is_weijh: false,
                ycsd_d: false,
                is_sdf: false,
                type: "",
                fn_url: "",
                act_id: "",
                regular: "",
                isbuy: "",
                regular_detail: "",
                friendslist: "",
                friendslist2: "",
                fanslist: "",
                sd_jh_sd: {},
                s_u_title: [{
                    cls: "",
                    id: 0,
                    name: "魔力会员"

                }, {
                    cls: "",
                    id: 1,
                    name: "原竹炭面膜1年领取"

                }, {
                    cls: "",
                    id: 2,
                    name: "原水漾面膜3年领取"

                }]
            }
        },
        components: {
            weihuoqu,
            fenxiang_pup_er,
            puphaoyou,
            xz_mianmo,
            err
        },
        methods: {
            sdf_dsfdf(sd_s) {
                if (sd_s == '魔力会员') {
                    this.sd_dffgxsddff = "您未推荐好友购买，不能参与领取礼包"
                    this.is_tishi = true
                } else {
                    this.is_tishi_er = true
                }

            },
            d_jh_deer() {
                this.is_tishi_er = false
                this.hf('purchase', {
                    ity: this.ity
                })
            },
            xiadand(goods_id) {
                let order_formqueren = {}
                order_formqueren.token = this.token
                order_formqueren.goods_number = 1
                order_formqueren.step = 1
                order_formqueren.goods_id = goods_id
                this.hf('order_formqueren', order_formqueren)

            },
            sc_tu_rf(id_d) {
                this.ycsd_d = true
            },
            sder_er(ty, d_Drtx) {
                if (ty == 1) {
                    MessageBox('提示', '该商品已过期');

                }
                if (ty == 2) {
                    MessageBox('提示', '该商品已经被领取过了');
                }
                if (ty == 3) {
                    this.xz_mianmo_is = true
                    this.sd_jh_sd.regular_check_time_start = d_Drtx.regular_check_time_start
                    this.sd_jh_sd.regular_check_time_end = d_Drtx.regular_check_time_end
                }
            },
            haoyou_sf(sdr, ty) {
                this.$store.state.fanslist = sdr
                this.hf('myhaoyou_er', {
                    type_e: ty
                })
            },
            tishis() {
                this.is_tishi = true
                //                Dialog.alert({
                //                    message: '您已是代理商，不能参与此次免费领取礼包活动！'
                //                });


            }
        },
        mounted() {



            this.Title("会员套卡", true)

            this.type = this.$route.query.type
            if (this.$route.query.act_id) {
                this.act_id = this.$route.query.act_id
            }


            let regular = {},
                th = this
            regular.token = this.token
            regular._id = this.$route.query.act_id
            regular.time_e = new Date().getTime()
            this.post("activity/regular", regular, function(data) {
                th.regular = data
                th.regular_detail = data.regular_detail

                th.fenxiang('会员套卡', 'https://api.cangniaowl.com/shop/230.html?router=act_hy&act_id=' + th.$route.query.act_id + '&VNK=fd82cc58&shareid=' + data.user_id + '#/act_hy?act_id=' + th.$route.query.act_id + '', 'https://mall.cangniaowl.com/static/img/jinzhun/anrufx.jpg', '全年8款面膜免费领')


            })

            this.post("huazhuang/isbuy", {
                token: this.token
            }, function(data) {
                th.isbuy = data
                th.friendslist = data.friendslist.data
                th.friendslist2 = data.friendslist2.data
                th.fanslist = data.fanslist.data
                //                th.$store.state.fanslist=data.fanslist.data
            })
            this.fn_url = "https://api.cangniaowl.com/v1/huazhuang/visitingCard?token=" + this.token
            this.ity = this.$route.query.ity
            window.scrollTo(0, 0)

        },
        computed: {
            getshopinfo() {
                return this.$store.state.shopinfo;
            }
        },
        watch: {
            getshopinfo(val) {
                let th = this
                //                var sd_us = `https://api.cangniaowl.com/shop/${val.shop_id}.html?act_id=${th.$route.query.act_id}&shareid=${val.user_id}&route=activity_168#/activity_168?act_id=${th.$route.query.act_id}`
                //                th.fenxiang(th.regular.regular_detail.qualification_goods_name, sd_us, val.shop_logo, th.regular.regular_detail.activity_name)
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
<style scoped>
    .dsf_df_Drtrt {
        opacity: 0;
    }

    .sd_jh_dederr {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;

    }

    .ssd_dee {
        width: 50%;
        height: 100%;
        float: left;
    }

    .ssd_dee.ab {}

    .sd_jh_dert {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: url(https://mall.cangniaowl.com/youpinmeijia/fdsf_a.jpg) no-repeat #BACFEC;
        background-size: 100% auto;


        /*
        background: url("https://mall.cangniaowl.com/static/img/168/hui_top.jpg") no-repeat #014A2D;
        background-size: 100% auto;
*/
    }

    .bakuan_ico {
        width: 135px;
        height: 17px;
        background-position: -195px -421px;
    }

    .df_jh_deret {
        width: 100%;
    }

    .df_jh_deret:after {
        content: ' ';
        position: absolute;
        left: 0px;
        top: 10px;
        height: 1px;
        width: 26%;
        left: 10px;
        background: #94A57E;
    }

    .df_jh_deret:before {
        content: ' ';
        position: absolute;
        right: 10px;
        top: 10px;
        height: 1px;
        width: 26%;
        background: #94A57E;
    }

    .fenxiang_we {
        width: 212px;
        height: 49px;
        background-position: -18px -612px
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

    .sd_h_deer {
        width: 3rem;
        line-height: 1.2;
        float: left;
        margin-left: 9px;
        padding-top: 2px;
    }

    .sd_h_deer img {
        width: 100%;
        height: 3rem;
        border-radius: 4px;
    }

    .sd_h_deer p {
        font-size: 12px;
    }

    .right_dert {
        width: 9px;
        height: 17px;
        background-position: -310px -46px;
        position: absolute;
        right: 10px;
        top: 22px;
    }

    .fdsg_jhgh_dert {
        background: #ECF4F1;
        line-height: 20px;
    }




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

        width: 51px !important;
        height: 51px !important;
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

    .sd_dfgdrf1 .fenxiang_we,
    .sd_dfgdrf4 .fenxiang_we {
        background-position: -10px -840px !important;
    }

    .sd_dfgdrf2 .fenxiang_we {
        background-position: -10px -1008px !important;
    }

    .ser_nk_e {
        width: 201px;
        height: 41px;
        background-position: -10px -932px;
    }

    .sd_dfgdrf2 .sd_jh_dert {
        background: url(https://mall.cangniaowl.com/youpinmeijia/fdsf_b.jpg) no-repeat #C40017;
        background-size: 100% auto;
    }

    .sd_dfgdrf3 .sd_jh_dert {
        background: url(https://mall.cangniaowl.com/youpinmeijia/fdsf_c.jpg) no-repeat #1A422A;
        background-size: 100% auto;
    }

    .sd_dfgdrf4 .sd_jh_dert {
        background: url(https://mall.cangniaowl.com/youpinmeijia/dfdsdf_a.jpg) no-repeat #86A9CF;
        background-size: 100% auto;
    }

</style>
