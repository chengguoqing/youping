<template>
<div >
  <p class="bg_jh_der" :style="{'background-color':'rgba('+df_dfd_d+',1)'}"></p>
<img :src="img_sdfe" class="sd_jh_ertdert" ref="fdgfder">
<canvas ref="myCanvas" class="dsfdsf_derer"></canvas>
        <section class="pr mt40">
<!--;-->

        <section class="sdf_df_bgf pd pt10 ">
<!--        <p class="fz12 fd_jh_drt">NO.000000</p>-->
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
<!--                <span class="sd_jher_dert">有效期：20191026</span>-->
            </p>
        </section>
        </section>



          <section class="pd pr mt10 cen df_jh_deret">
<!--            <i class="f_act bakuan_ico"></i>-->
<span class="bakuan_ico">面膜免费随心领</span>
    </section>

    <p class="cen mt20">
<!--       <i class="f_act fenxiang_we"  @click="hf('fengxiang')"></i>-->
        <i class="f_act fenxiang_we"  @click="sc_tu_rf"></i>
    </p>


             <section class="pd" >
            
                <section class="sd_jdd_jh_drr yj4 pr pm10">
                        <p class="cen sdf_fdfr_er">
                        <i class="f_act ser_nk_e"></i>
                </p>
                <section class="sjh_drrtx pd mt10">
                  <section class="pr sdf_Df_Dret">
                      <img :src="regular_detail.gift_img" class="w100 cz">
                      <img  v-if="regular.gift_bag_click==1" src="https://mall.cangniaowl.com/static/img/lijilingqu.png" class="lijigoi_der" @click="xiadand(regular.gift_bag_goods_id)">
                               
                <img  v-if="regular.gift_bag_click==0" src="https://mall.cangniaowl.com/static/img/lijilingquhs.png" class="lijigoi_der" >
                                         
                  
                    </section>
                </section>    
                    
               


                </section>

            <section class="sd_jdd_jh_drr mt15 mui-row pt5 pm5 pr yj4" @click="haoyou_sf(friendslist,0)">
                <section class="mui-col-xs-3 df_jh_deertt cen">
                            <p class="erhuiyuande">
                                会员好友
                            </p>
                    <p class="fz12">{{friendslist.length}}</p>
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


                        <section class="sd_h_deer" v-if="friendslist.length<=0">
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

                您尚未参与{{regular_detail.activity_name}}活动,还不能领取{{regular_detail.qualification_goods_name}}商品
                <p class=" z9 fz12 mt5">
                    活动时间：{{regular_detail.date_start+"~"+regular_detail.date_end}}
                </p>
                <p class="cen mt10">
                <button class="mui-btn-red s_li_dertr" @click="hf('taoka168',{_id:act_id})">立即参与</button>
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
    <list_mianmo  v-if="list_mianmo_is" @close_sd="list_mianmo_is=false" :df_sdf="goods_properties" :sd_jh_sd="sd_jh_sd" :lis_sdfeer="lis_sdfeer" :goods_id="regular.sku_goods_id"></list_mianmo>


    <weihuoqu v-if="is_weijh" @close_e="is_weijh=false" @yaoqing="is_weijh=false;ycsd_d=true"></weihuoqu>


        <fenxiang_pup_er v-show="ycsd_d" :is_sd_fn="ycsd_d"  msg="长按图片保存或发送给朋友" @ycsd_d="ycsd_d=false"></fenxiang_pup_er>

        <err :msg="sd_dffgxsddff" v-if="is_tishi" @close="is_tishi=false"></err>
    <puphaoyou v-if="is_haoy" @close_e="is_haoy=false" :libao_list="isbuy.libao_list"></puphaoyou>
    
      <err msg="您暂未是安茹魔力会员，不能参与活动免费领取8款面膜~期待您的加入，悦享全年优惠" v-if="is_tishi_er" @close="d_jh_deer"></err>
     <loadin v-if="jiazai_d"></loadin>
</div>
</template>
<script>
    import {
        MessageBox
    } from 'mint-ui';
    import {
        Dialog
    } from 'vant';
    import weihuoqu from "@/components/act168/weihuoqu"
    import fenxiang_pup_er from "../components/a_168"
    import puphaoyou from "@/components/act168/puphaoyou"
    import list_mianmo from "@/components/act168/list_mianmo"
    import err from "@/components/tishi/err"
    import loadin from "@/components/loadin"
    import {
        Notify
    } from 'vant';
    export default {
        data() {
            return {
                df_dfd_d: "",
                is_tishi_er: false,
                is_tishi: false,
                jiazai_d: true,
                sd_dffgxsddff: "您已是代理商，不能参与免费领取礼包活动",
                goods_properties: [],
                lis_sdfeer: "",
                df_sdf: [{
                    name: "竹炭净肤滋养面膜5片/盒",
                    img: "https://mall.cangniaowl.com/static/img/168/dsfds_a_x.jpg",
                    cls: "",
                    goods_id: "36125",
                    goods_attr_id: "c7010fe1cd5dcbfefdf34a7690e4e57e",
                    goods_number: 1
                }, {
                    name: "水漾植物面膜5片/盒",
                    img: "https://mall.cangniaowl.com/static/img/168/dsfds_b.jpg",
                    goods_id: "36125",
                    cls: "",
                    goods_attr_id: "c525b3c321e18995136893e81b4c06c5",
                    goods_number: 1
                }, {
                    name: "维他命C面膜5片/盒",
                    img: "https://mall.cangniaowl.com/static/img/168/dsfds_c.jpg",
                    goods_id: "36125",
                    cls: "",
                    goods_attr_id: "c65ffb97f494e3e02050e787e300f6c6",
                    goods_number: 1
                }, {
                    name: "蜗牛原液面膜5片/盒",
                    img: "https://mall.cangniaowl.com/static/img/168/dsfds_d.jpg",
                    goods_id: "36125",
                    cls: "",
                    goods_attr_id: "a2ed31252981bfaebe918e3b78ccb77a",
                    goods_number: 1
                }, {
                    name: "多重修复面膜5片/盒",
                    img: "https://mall.cangniaowl.com/static/img/168/dsfds_e.jpg",
                    goods_id: "36125",
                    cls: "",
                    goods_attr_id: "4f1722684915aa3a7afdc2eb94f33c08",
                    goods_number: 1
                }, {
                    name: "虾红素嫩肤面膜5片/盒",
                    img: "https://mall.cangniaowl.com/static/img/168/dsfds_f.jpg",
                    goods_id: "36125",
                    cls: "",
                    goods_attr_id: "4b394f8c92a3c45aed8b29dfef4707df",
                    goods_number: 1
                }, {
                    name: "玻尿酸面膜5片/盒",
                    img: "https://mall.cangniaowl.com/static/img/168/dsfds_g.jpg",
                    goods_id: "36125",
                    cls: "",
                    goods_attr_id: "f99eeaa1acf3fa1b6d663984815a2be0",
                    goods_number: 1
                }, {
                    name: "修护冰膜5片/盒",
                    img: "https://mall.cangniaowl.com/static/img/168/dsfds_h.jpg",
                    goods_id: "36125",
                    cls: "",
                    goods_attr_id: "74e002ccf64e1b725bad5b9ed5a31652",
                    goods_number: 1
                }],

                list_mianmo_is: false,
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
                img_sdfe: "",
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
            list_mianmo,
            err,
            loadin
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
                this.hf('purchase')
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
                    if (this.goods_properties.length <= 0) {
                        this.xiadand(this.regular.regular_detail.welfare_goods_id)
                        return
                    }
                    this.list_mianmo_is = true
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


            },
            getImageColor(canvas, img) {
                canvas.width = img.width;
                canvas.height = img.height;
                var context = canvas.getContext("2d");
                context.drawImage(img, 0, 0, canvas.width, canvas.height);
                // 获取像素数据
                var data = context.getImageData(0, 0, img.width, img.height).data
                var r = 1,
                    g = 1,
                    b = 1;
                // 取所有像素的平均值
                for (var row = 0; row < img.height; row++) {
                    for (var col = 0; col < img.width; col++) {
                        // console.log(data[((img.width * row) + col) * 4])
                        if (row == 0) {
                            r = data[((img.width * row) + col)];
                            g = data[((img.width * row) + col) + 1];
                            b = data[((img.width * row) + col) + 2];
                        } else {
                            r = data[((img.width * row) + col) * 4];
                            g = data[((img.width * row) + col) * 4 + 1];
                            b = data[((img.width * row) + col) * 4 + 2];
                        }
                    }
                }
                this.df_dfd_d = r + "," + g + "," + b

            },
        },
        mounted() {



            //            this.Title("安茹魔力会员", true)

            this.type = this.$route.query.type
            if (this.$route.query.act_id) {
                this.act_id = this.$route.query.act_id
            }
                if (this.$route.query._id) {
                this.act_id = this.$route.query._id
            }



            let regular = {},
                th = this
            regular.token = this.token
            regular._id = this.$route.query._id
            regular.time_e = new Date().getTime()
            this.post("activity/regular", regular, function(data) {
                    th.friendslist = data.friendslist.data
                th.regular = data
                th.regular_detail = data.regular_detail
                try {
                    th.goods_properties = data.goods_properties[0].values
                    th.lis_sdfeer = data.goods_properties[0]
                } catch (e) {

                }
                var canvas = th.$refs.myCanvas
                var img = th.$refs.fdgfder
                var sd_ddf = th.$refs.fdgfder
              
                
                th.img_sdfe = th.regular.welfare_first_image

                
                
                  th.post("images/base64",{token:th.token,img:th.regular.welfare_first_image},function(data){
                   th.img_sdfe=data.img_base64
                       sd_ddf.onload = a => {
                    try {
                        th.getImageColor(canvas, img)
                    } catch (e) {

                    }

                    th.jiazai_d = false
                }

                })
                
                
               
            })

            this.post("huazhuang/isbuy", {
                token: this.token
            }, function(data) {
                th.isbuy = data
            
             
                th.friendslist2 = data.friendslist2.data
                th.fanslist = data.fanslist.data
                //                th.$store.state.fanslist=data.fanslist.data
            })

            this.fn_url = "https://api.cangniaowl.com/v1/huazhuang/visitingCard?token=" + this.token

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


    }

    .sd_jh_ertdert {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        z-index: 1
    }

    .bakuan_ico {
        width: 135px;
        height: 17px;
        background-position: -195px -421px;
        font-size: 14px;
        color: #E4AB6A
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

    .sjh_drrtx {
        min-height: 75px;

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


    .dsfdsf_derer {
        position: fixed;
        left: -600px;
        top: -600px
    }

    .sdf_Df_Dret {
        padding-right: 15%
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
