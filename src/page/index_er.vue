<!--新装修 主页-->
<template>
	<div >
           <loadin v-if="is_sdf"></loadin>
   
         <jiuwu :body_sdf="body_sdf" v-if="body_sdf.is_top==2"></jiuwu>
        
        
        
        	<header class="mui-bar mui-bar-nav asd_uy_dftx" v-if="body_sdf.is_top==1">

			<h1 class="mui-title z3 pl5 df_jh_ertxc" @click="hf('shousuo')">
            <i class="dx icon-sousuo"></i>
            <input type="search" class="yj20 fz12" placeholder="品牌直购，源头服务">
        </h1>  
 
<!--
			<a class="mui-pull-right pt5" @click="hf('fenlei')">
				<i class="dx icon-caidan z6 fz22 "></i> 
			</a>
-->

        <information :sd_eer="sd_eer"></information>
		</header>
        
        
		<section v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-immediate-check="false" infinite-scroll-distance="1500">
			<section >

				<div class="mui-content pm100">
             
                    		<section class="lunbo_s" v-if="body_sdf.is_top==1">

						<mt-swipe :auto="4000"> 
							<mt-swipe-item v-for="(bann,idx) in body_sdf.banner" :key="idx">
								
                                <div class="Sdf_jh_eert" :style="{'background-image': 'url('+bann.img+')'}"></div>
							</mt-swipe-item>

						</mt-swipe> 

					</section>
                    
                    
                    <section v-if="body_sdf.is_top==1">
                    	<section class="tioui_sd pl10 mui-row" >
						<section class="mui-col-xs-8">
							<section class="df_jgh_drtx fl">
								<img :src="$store.state.shopinfo.shop_logo">

							</section>
							<section class="ov"> 
<!--								<renzheng ></renzheng>-->

							</section>

						</section>

						<section class="mui-col-xs-4 mui-row cen blm h100 pr">
							<section class="mui-col-xs-6 cz_w h100">
								<section class="cz_a d_ih_ertxcr">
									<p class="z3 fz16 ziti">
                                 
                                        <span >
                              {{$store.state.shopinfo.on_goods_count}}
                                                </span>

                        </p>
									<p class="fz12">商品</p>
								</section>

							</section>

							<section class="mui-col-xs-6 h100 blm cz_w">
								<i class="dx icon-erweima cz_a z6 fz18" @click="xian_s=true"></i>
							</section>
						</section>
						<p class="fz12 dian  dsf_jh_dertx">
							{{$store.state.shopinfo.shop_name}}
<!--							<i class="dx icon-right fz12"></i>-->
						</p>

					</section>

                    	<p class="qc"></p>
					<section class="btm mui-row bgff cen pt5  ds_jh_ser ">

						<section class="mui-col-xs-3 pr" v-for="(jd,idx) in jgh_sd" :class="jd.cls" @click="sd_hsr(idx)">
							<p class="df_jh_df ">
								<i class="dx  " :class="[jd.icon,jd.size]"></i>
							</p>
							<span class="fz12 d_jh_dretxc">{{jd.name}}</span>
							<span class="dsf_jh_drtx"></span>
						</section>

					</section>
                    </section>
                    
                    
                    
					<section class="index_e_jd " :class="dianpou==0?'show':''">

						<div id="sd_jh_drttx" class="show">
                    <div v-for="(sd,idx) in content" >

            <div class="sd_jh_der_er" :class="sd.cls" v-if="sd.type==1" >
                <lunbo_r :date_e="sd" ></lunbo_r>
                <span class="df_kjj_dert" @click="sd_hgs(idx)">
    <i class="dx icon-close1"></i>
    </span>
             </div>

        <div class="sd_jh_der_er"  :class="sd.cls"   v-if="sd.type==2"  >
                <img_g :date_e="sd.date"></img_g>
                     <span class="df_kjj_dert" @click="sd_hgs(idx)">
    <i class="dx icon-close1"></i>
    </span>
 
        </div>
     <div class="sd_jh_der_er"   :class="sd.cls"  v-if="sd.type==3"  >
                <commodity :date_e="sd.date"></commodity>
                  <span class="df_kjj_dert" @click="sd_hgs(idx)">
    <i class="dx icon-close1"></i>
    </span>

    </div>

      <div class="sd_jh_der_er"  :class="sd.cls"   v-if="sd.type==4"  >
                <commodity_zu  :date_e="sd.date"></commodity_zu>

                   <span class="df_kjj_dert" @click="sd_hgs(idx)">
                       <i class="dx icon-close1"></i>
                    </span>

    </div>

 



     <div class="sd_jh_der_er"  :class="sd.cls"   v-if="sd.type==5"  >

                <img_g_zu :date_e="sd"></img_g_zu>
                                   <div class="df_kjj_dert">
                    <p @click="sd_jhhg_df(idx,1)" class="cf pt5" v-if="idx>0"> <i class="dx icon-up"  ></i></p>
                        <p @click="sd_jhhg_df(idx,2)" class="cf pt5" v-if="idx!=(content.length-1)"> <i class="dx icon-down"  ></i></p>
    <p @click="sd_hgs(idx)" class="cf pt5"> <i class="dx icon-close1"  ></i></p>
    </div>

        </div>
                        
                        
                        
                   <div class="sd_jh_der_er"  :class="sd.cls"   v-if="sd.type==6" >
                                 <shiping :date_e="sd.date"></shiping>
                                 
                                 
                                 
    </div>
                        
                        


            </div>




    </div>

<!--
						<p class="cen mt100 loiaui_sd_sdf show">
							<img src="http://mall.cangniaowl.com/static/img/load.svg" class="load_gif">
						</p>
-->
					</section>

					<section class="index_e_jd show" v-if="dianpou>=1">
						<cplist_l :keyword="''" :dingbu="dingbu" :ty_pe="f_type" :we_ert="1"></cplist_l>
					</section>

					<p class="qc"></p>

                    <section v-if="sd_jhh_eert">

					<advertising :position_id="1" class="mt10"></advertising>

                    <showcase  :position_id="1"></showcase>
                    </section>



				
<!--
                    <section  v-if="$store.state.shopinfo.shop_id!=2">
					<p class="cen mt20">
						<img src="http://mall.cangniaowl.com/static_youpin/img/dibu_e.png" class="copy_bottom_bg">
					</p>

					<p class="z6 cen fz12">
					 Copyright2018 All Rights Reserved
					</p>
                    <p class="fz12 z9 cen">
                        本商城由苍鸟网络提供技术支持
                    </p>
                        </section>
-->
                    <section class="cen mt30">
                        <img src="https://mall.cangniaowl.com/static/img/cangniao_bq.png" style="width:145px"> 
                </section>
				</div>
				<erweima :xian_s='xian_s' @sd_jher="xian_s=''"></erweima>

			</section>
<!--	<loadin v-if="is_sdf"></loadin>-->

		</section>
<!--		<dibu :kjh_s="0" v-if="is_top==0"></dibu>-->
    <dibu :kjh_s="0"></dibu>
	</div>
</template>
<script>
    var wx = require('weixin-js-sdk');

    import advertising from "../components/advertising.vue"
    import dibu from "../components/dibu.vue"
    import erweima from "../components/erweima.vue"
    import renzheng from "../components/renzheng.vue"
    import loadin from "../components/loadin.vue"
    import cplist_l from "../components/cplist_l.vue"
    import showcase from "../components/showcase.vue"
    import information from "../components/information.vue"
    import lunbo_i from '../components/lunbo_i'
    import img_g from '../components/img_g'
    import img_g_zu from '../components/img_g_zu'
    import commodity from '../components/commodity'
    import commodity_zu from '../components/commodity_zu'
    import lunbo_r from '../components/lunbo_r'
    import shiping from '@/components/shiping'
    import jiuwu from "@/jiuwu/index"
    var sd_hgh_e = ""
    export default {
        data() {
            return {
                is_top: 1,
                is_loadin: "",
                xian_s: "", //true显示二维码弹出层
                body_sdf: "",
                shopinfo_p: "",
                dianpou: 0,
                content: "",
                banner: "",
                is_sdf: true,
                dingbu: "", //为1就不显示头部切换
                f_type: 0, //分类的type
                loading: false, //判断是否滚到倒底部
                exposure: "", //广告
                sd_eer: "",
                sd_jhh_eert: false,
                is_chus_num: 0,
                jgh_sd: [{
                        "name": "店铺首页",
                        icon: "icon-zhuye",
                        size: "fz14",
                        cls: "act"
                    },
                    {
                        "name": "全部商品",
                        icon: "icon-shangpin",
                        size: "fz16",
                        cls: ""
                    },
                    {
                        "name": "店铺上新",
                        icon: "icon-new",
                        size: "fz16",
                        cls: ""
                    },
                    {
                        "name": "店铺促销",
                        icon: "icon-weibiaoti-",
                        size: "fz16",
                        cls: ""
                    }
                ]
            }
        },
        components: {
            dibu: dibu,
            erweima: erweima,
            renzheng: renzheng,
            loadin: loadin,
            cplist_l: cplist_l,
            advertising: advertising,
            showcase,
            information,
            lunbo_i,
            img_g,
            commodity,
            commodity_zu,
            lunbo_r,
            img_g_zu,
            shiping,
            jiuwu
        },
        methods: {
            sd_hsr(idx) {
                this.jgh_sd.map(function(a) {
                    a.cls = ""
                })
                this.jgh_sd[idx].cls = "act"
                this.dianpou = idx

                this.dingbu = ""
                this.f_type = 0
                if (idx >= 1) {
                    window.scrollTo(0, 0);
                }
                if (idx >= 2) {

                    this.dingbu = 1
                    this.f_type = idx - 1
                }
                if (idx == 0) {
                    let th = this

                    $("#sd_jh_drttx").addClass("show")
                    $(".loiaui_sd_sdf").removeClass("show")
                } else {
                    $("#sd_jh_drttx").removeClass("show")
                }

            },

            loadMore() {
                this.is_chus_num++

                    let th = this
                th.loading = true

                setTimeout(function() {
                    th.loading = false

                }, 2000);


                if (this.is_chus_num == 2) {
                    this.sd_jhh_eert = true

                }

            },
            dinajis(date) { //点击计费
                let click = {}
                click.shop_id = this.shopinfo_p.shop_id
                click.token = this.token
                click.ad_id = date.ad_id
                click.interactive_id = date.interactive_id
                this.post("ad/click", click, function(data) {

                    window.location.href = data.ad_link
                })
            },
            sd_einsd() {

            },
            sd_hgr(sd) {
                console.log(sd);
            }

        },
        mounted() {
            let index_h = {},
                th = this
            index_h.token = this.token
       
            this.post("home/index", {
                token: this.token,
                template_id: template_id
            }, function(data) {
               th.is_sdf = false
                th.content = data.decorate_content
                th.banner = data.decorate_banner
                th.body_sdf=data
                console.log(    th.body_sdf);
                th.is_top = data.is_top
                if (data.is_first != 1) { // 1为默认首页
                    th.Title(data.decorate_name, 1)
                } else {
                    setTimeout(function() {
                        th.Title(th.$store.state.shopinfo.shop_name, 1)
                    }, 50);

                }
            })

        },
        created: function() {
            sd_hgh_e = this
  
        },
        activated() { 
                  
             this.Title(this.$store.state.shopinfo.shop_name, 1)
            if (this.$store.state.shopinfo.shop_id == 1235) {
                this.hf('user')
            }

        },
        beforeRouteLeave(to, from, next) {
            // 设置下一个路由的 meta

            if (to.path == "/commodity_details") {
                to.meta.keepAlive = false
            }
            next();
        }
    }



    window.jump_term = function(url) {
        sd_hgh_e.hf(url)
        alert(sd_hgh_e)
    }

</script>
<style>
    .Fixed_left_top,
    .googleUI-footer-info,
    .Fixed_left_bottom_menu {
        display: none
    }

    .sfsdf_sddf {
        display: none
    }

    .sfsdf_sddf.act {
        display: block
    }

</style>
<style scoped>
    .asd_uy_dftx {
        position: relative
    }
    .df_jgh_drtx img {
        z-index: 100;
        flex: 0 0 60px;
        width: 100%;
        width: 60px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .df_jh_df {
        height: 20px;
        line-height: 20px;
        position: relative;
        top: 2px;
    }

    .ds_jh_ser {
        position: sticky!important;
        top: -1px;
        left: 0px;
        z-index: 1000;
    }

    .ds_jh_ser .mui-col-xs-3.act i.dx,
    .ds_jh_ser .mui-col-xs-3.act {
        color: #F44336
    }

    .ds_jh_ser .mui-col-xs-3.act {
        border-bottom: 2px solid #F44336 !important;
    }

    .df_jh_ex {
        position: relative;
        left: -1px
    }

    .d_ih_ertxcr {
        line-height: 1.4
    }

    .dsf_jh_drtx {
        border-right: 1px solid #F5F5F5;
        position: absolute;
        height: 30px;
        right: 0px;
        top: 5px;
    }

    .d_jh_dretxc {
        position: relative;
        bottom: 2px;
    }

    .df_kjj_dert {
        display: none
    }

</style>
<style>
    .sdf_jkjh_der span {
        background: #EFEFF4 !important
    }

    .lunbo_s {
        height: 9.2rem;
    }

    .lunbo_s img {
        width: 100%;
        height: 100%;
    }

    .lunbo_s .dsf_jjh_deer {
        height: 9.2rem !important;
    }

    #sd_jh_drttx {
        display: none
    }
      .Sdf_jh_eert {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%;


    }


</style>
