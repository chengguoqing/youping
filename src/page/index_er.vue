<!--主页-->
<template>
	<div class="index_sddrtxc">
		<header class="mui-bar mui-bar-nav asd_uy_dftx">
			<a class=" mui-pull-left z3 df_jh_ex">
				<img src="http://mall.cangniaowl.com/static/img/headF.png" class="headF_icon cz">
			</a>
			<h1 class="mui-title z3 pl5 df_jh_ertxc" @click="hf('shousuo')">
            <i class="dx icon-sousuo"></i>
            <input type="search" class="yj20 fz12" placeholder="品牌直购，源头服务，更多商品请搜索苍鸟">
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

					<section class="lunbo_s">

					     <lunbo_i :date_e="banner" ></lunbo_i>
					</section>

					<section class="tioui_sd pl10 mui-row">
						<section class="mui-col-xs-8">
							<section class="df_jgh_drtx fl">
                            
								<img :src="shopinfo_p.shop_logo" @click="hf('dianpuxinxi')">

							</section>
							<section class="ov">
								<renzheng :shopinfo_p="shopinfo_p"></renzheng>

							</section>

						</section>

						<section class="mui-col-xs-4 mui-row cen blm h100 pr">
							<section class="mui-col-xs-6 cz_w h100">
								<section class="cz_a d_ih_ertxcr">
									<p class="z3 fz16 ziti">
                                 
                                        <span >
                              {{shopinfo_p.on_goods_count}}
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
							{{shopinfo_p.shop_name}}
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

					<section class="index_e_jd " :class="dianpou==0?'show':''">
                      
						<div id="sd_jh_drttx" class="show">
                    <div v-for="(sd,idx) in content" >
                              
            <div class="sd_jh_der_er" :class="sd.cls" v-if="sd.type==1" @click="sd_hgr(sd)">
                <lunbo_r :date_e="sd" ></lunbo_r>
                <span class="df_kjj_dert" @click="sd_hgs(idx)">
    <i class="dx icon-close1"></i>
    </span>
             </div>
                              
        <div class="sd_jh_der_er"  :class="sd.cls"   v-if="sd.type==2"  @click="sd_hgr(sd)">
                <img_g :date_e="sd.date"></img_g> 
                     <span class="df_kjj_dert" @click="sd_hgs(idx)">
    <i class="dx icon-close1"></i>
    </span>
            
        </div>
     <div class="sd_jh_der_er"   :class="sd.cls"  v-if="sd.type==3"  @click="sd_hgr(sd)">
                <commodity :date_e="sd.date"></commodity>  
                  <span class="df_kjj_dert" @click="sd_hgs(idx)">
    <i class="dx icon-close1"></i>
    </span> 
         
    </div>

      <div class="sd_jh_der_er"  :class="sd.cls"   v-if="sd.type==4"  @click="sd_hgr(sd)">
                <commodity_zu  :date_e="sd.date"></commodity_zu>  
          
                   <span class="df_kjj_dert" @click="sd_hgs(idx)">
                       <i class="dx icon-close1"></i>
                    </span>
          
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

<!--
					<advertising :position_id="1" class="mt10"></advertising>
                    
                    <showcase  :position_id="1"></showcase>
-->
                    </section>
                    
                    
                    
					<p class="cen mt20">
						<img src="http://mall.cangniaowl.com/static/img/copy_bottom_bg.png" class="copy_bottom_bg">
					</p>

					<p class="z6 cen fz12">
						苍鸟公众号自媒体电商<br> Copyright2017 All Rights Reserved
					</p>
				</div>
				<erweima :xian_s='xian_s' @sd_jher="xian_s=''"></erweima>

			</section>
<!--	<loadin v-if="is_sdf"></loadin>-->

		</section>
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
    import commodity from '../components/commodity'
    import commodity_zu from '../components/commodity_zu'
        import lunbo_r from '../components/lunbo_r'
    
    
    var sd_hgh_e = ""
    export default {
        data() {
            return {
                is_loadin: "",
                xian_s: "", //true显示二维码弹出层
                body_sdf: "",
                shopinfo_p: "",
                dianpou: 0,
                content: "",

                banner: "",
                        
                is_sdf:true,
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
            lunbo_r
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

        },
        mounted() {
            let index_h = {},
                th = this
            index_h.token = this.token

            this.shop_info(function(data) {
                th.shopinfo_p = data.data
                th.sd_eer = data.data
                th.Title(th.shopinfo_p.shop_name, 1)
                th.is_sdf=false
                let l_get = {}
                l_get.shop_id = data.data.shop_id
                l_get.id=2
                th.post("decorate/get",l_get,function(date_e){
                    th.content= JSON.parse(date_e.decorate_content)
                    th.banner= JSON.parse(date_e.decorate_banner)
                })
            }) 




        },
        created: function() {
            sd_hgh_e = this
        },
        activated() {








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
    }

</script>
<style>
    .Fixed_left_top,
    .googleUI-footer-info,
    .Fixed_left_bottom_menu {
        display: none
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

</style>
