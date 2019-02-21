<!--主页-->
<template>
	<div class="index_sddrtxc">
		<header class="mui-bar mui-bar-nav asd_uy_dftx">
<!--
			<a class=" mui-pull-left z3 df_jh_ex" @click="hf('https://api.cangniaowl.com/shop/311.html?from_shop='+$store.state.shopinfo.shop_id)">
				<img src="http://mall.cangniaowl.com/static/img/headF.png" class="headF_icon cz">
			</a>
-->
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

					<section class="lunbo_s">

						<mt-swipe :auto="4000"> 
							<mt-swipe-item v-for="(bann,idx) in body_sdf.banner" :key="idx">
								<!--<img :src="bann.img" @click="hf(bann.url)">-->
                                <div class="Sdf_jh_eert" :style="{'background-image': 'url('+bann.img+')'}"></div>
							</mt-swipe-item>

						</mt-swipe> 

					</section>

                   
					<section class="tioui_sd pl10 mui-row">
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

					<section class="index_e_jd " :class="dianpou==0?'show':''">

						<section v-html="body_sdf.body" id="sd_jh_drttx"></section>

						<p class="cen mt100 loiaui_sd_sdf show">
							<img src="http://mall.cangniaowl.com/static/img/load.svg" class="load_gif">
						</p>
					</section>

					<section class="index_e_jd show" v-if="dianpou>=1">
						<cplist_l :keyword="''" :dingbu="dingbu" :ty_pe="f_type" :we_ert="1"></cplist_l>
					</section>

					<p class="qc"></p>
                    
                  
<!--

					<advertising :position_id="1" class="mt10"></advertising>
                    
                    <showcase  :position_id="1"></showcase>
-->
<!--
                      <section v-if="sd_jhh_eert">
                    </section>
-->
                    
                    
                    

					<p class="cen mt20">
						<img src="http://mall.cangniaowl.com/static_youpin/img/dibu_e.png" class="copy_bottom_bg">
					</p>

					<p class="z6 cen fz12">
					 Copyright2018 All Rights Reserved
					</p>
                    <p class="fz12 z9 cen">
                        本商城由苍鸟网络提供技术支持
                    </p>

				</div>
				<erweima :xian_s='xian_s' @sd_jher="xian_s=''"></erweima>

			</section>
		

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
    var sd_hgh_e = ""
    export default {
        data() {
            return {
                is_loadin: "", 
                xian_s: "", //true显示二维码弹出层
                body_sdf: "",
                shopinfo_p: "",
                dianpou: 0,
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
            information
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
                }

            },
            list_info() {
                var SPZhidden = $(".SPZhidden").attr("ng-option"),
                    th = this
                if (SPZhidden) {
                    $(".SPZhidden").map(function(a, b) {
                        let categoryGoodsAjaxList = {}
                        categoryGoodsAjaxList.token = th.token
                        categoryGoodsAjaxList.value_content = SPZhidden
                        th.post("home/categoryGoodsAjaxList", categoryGoodsAjaxList, function(data, data_er) { //11111

                            $(".SPZhidden:eq(" + a + ")").parents(".goodAddCon").html(data);
                            $("#sd_jh_drttx").addClass("show")
                            $(".loiaui_sd_sdf").removeClass("show")


                        })
                    })
                } else {
                    $("#sd_jh_drttx").addClass("show")
                    $(".loiaui_sd_sdf").removeClass("show")
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
            async index_fo() { //获取首页信息
                let index_h = {},
                    th = this
                index_h.token = this.token
                var await_er = await new Promise((resolve) => {
                    this.post("home/index", index_h, function(data) {
                        th.body_sdf = data
                        th.is_loadin = true
                        resolve(data)
                    })
                })
                return await_er
            }
        },
        mounted() {
           
            if(this.$route.query.quanbu_s){
               this.sd_hsr(this.$route.query.quanbu_s)  
            }
            let index_h = {},
                th = this
            index_h.token = this.token


            this.index_fo().then(data => {
                th.list_info()




            }).then(function() { //初始轮播图
                setTimeout(function() {
                    var mySwiper = new Swiper('.swiper-container', {
                        autoplay: 3000,
                        pagination: '.swiper-pagination',
                        loop: true,
                    })


                    $(".Fixed-row.no-margin.goodAddCon>div").map(function() {
                        if ($(this).find(".Fixed-card").length >= 4) {
                            $(this).find(".google-for-u").addClass("sd_hjhg_dert")
                        }
                        console.log();
                    })

                }, 500);
            }).then(data => { //价格和销量初始化


                var data = this.body_sdf
                var goods_value_list = $("#need_replace_goods_list_sign").val();
                //json转为数组格式
                var array_goods_value_list = data.json_final_all_goods_list;
                $(".goodAddCon a").each(function(m) {

                    //获取商品href
                    var goood_href = $(this).attr("data-href");
                    //获取商品id
                    var reg = /\d+/;
                    var good_id = reg.exec(goood_href);
                    //替换图片
                    try {
                        $(this).find("img").attr("src", array_goods_value_list[good_id].goods_thumb);
                        //替换商品名称
                        $(this).parent().next(".Fixed-card-content").find("p").text(array_goods_value_list[good_id].goods_name);
                        //替换价格和销量
                        var text = $(this).parent().siblings('.Fixed-card-action').find('.blue-grey-text').text();
                        if (text) {
                            var mix_price_sales_nums = "￥" + array_goods_value_list[good_id].shop_price + ' <span class="right blue-grey-text f-x1">总销量' + array_goods_value_list[good_id].sales_gods_number + "件</span>";
                            $(this).parent().parent().find(".Fixed-card-action").html(mix_price_sales_nums);
                        } else {
                            $(this).parent().siblings('.Fixed-card-action').text(array_goods_value_list[good_id].shop_price);
                        }
                    } catch (e) {

                    }
                })
            })




        },
        created: function() {
            sd_hgh_e = this
        },
        computed: {
            getshopinfo() {
                return this.$store.state.shopinfo;
            }
        },
        watch: {
            getshopinfo(val) {
                 this.shopinfo_p = val
                  this.Title(val.shop_name, 1)
                 this.sd_eer = val
            }
        },
        activated() {
            this.carnumber(function(num) {
                $(".jh_dfd_derrt").text(num)
            })
            let th = this
           
           
          
                  this.Title(this.$store.state.shopinfo.shop_name, 1)
      


            $("body").on("click", ".link_a", function() {
                th.hf($(this).attr("data-href"))
            })
            $("body").on("click", ".link_a img", function() {
                th.hf($(this).parents(".link_a").attr("data-href"))
            })




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
<style lang="scss">
    .link_a {
        display: block !important;
    }

    .index_e_jd {
        display: none;
        min-height: 280px;
        p.cen.mt20.pl20.pr20 {
            display: none
        }
        p.cen.mt100 {
            margin-top: 50px !important;
        }
    }

    .mt45 {
        margin-top: 45px;
    }

    .load_gif {
        width: 80px;
    }

    .loiaui_sd_sdf {
        display: none
    }

    p.cen.mt100.loiaui_sd_sdf.show {
        margin-top: 80px !important
    }

    .index_sddrtxc {
        .dsf_jh_sdsd {
            position: relative !important;
            top: 0px !important;
            z-index: 1 !important
        }
        .load_am,
        .df_fr_errtt {
            display: none
        }
        section.qc.pt10.pm10.btm.fz13.cen {
            display: none
        }
    }

    #sd_jh_drttx {
        display: none;
        div,
        table {
            font-size: 12px;
            color: #676a6c;
        }
        .sd_hjhg_dert {
            max-width: 67px;
        }
        #indexBanner .swiper-container {
            height: 150px;
        }
        googleUI-caidan .swiper-slide img {
            width: 100%;
            height: 100%;
        }
        .swiper-container {
            width: 100vw;
        }
        .swiper-container2 {
            width: 100vw;
        }
        .swiper-slide a {
            display: inline-block;
            width: 100%;
        }
        .swiper-wrapper {
            height: auto;
        }
        .swiper-wrapper .swiper-slide {
            height: auto;
        }
        .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;
            /* Center slide text vertically */
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
        }
        p {
            color: #000
        }
        .canEditorHe.fuzhuxian {
            height: 10px;
        }
        .tongzhi a {
            color: #333;
            display: inline-block;
            line-height: 1;
            font-size: 14px;
            float: left;
            height: 40px !important;
            line-height: 40px;
        }
        .tongzhi a img {
            margin-top: 2px;
        }
        a.icon-speak {
            position: relative;
            top: 6px;
        }
        .googleUI-caidan.canEditorHe {
            clear: both;
        }
        .googleUI-caidan img {
            width: 100%;
        }
        .Fixed_left_bottom_menu {
            width: 100vw;
            height: 50px;
            position: fixed;
            bottom: 0;
            left: 0;
            background: white;
            z-index: 200;
        }
        .Fixed_left_bottom_menu .icon-container span {
            padding: 0;
        }
        .tongzhi {
            width: 100%;
            height: 46px;
            line-height: 1;
            color: #FFAB00;
        }
        .materialize-red {
            background-color: #e51c23 !important;
        }
        .materialize-red-text {
            color: #e51c23 !important;
        }
        .materialize-red.lighten-5 {
            background-color: #fdeaeb !important;
        }
        .materialize-red-text.text-lighten-5 {
            color: #fdeaeb !important;
        }
        .materialize-red.lighten-4 {
            background-color: #f8c1c3 !important;
        }
        .materialize-red-text.text-lighten-4 {
            color: #f8c1c3 !important;
        }
        .materialize-red.lighten-3 {
            background-color: #f3989b !important;
        }
        .materialize-red-text.text-lighten-3 {
            color: #f3989b !important;
        }
        .materialize-red.lighten-2 {
            background-color: #ee6e73 !important;
        }
        .materialize-red-text.text-lighten-2 {
            color: #ee6e73 !important;
        }
        .materialize-red.lighten-1 {
            background-color: #ea454b !important;
        }
        .materialize-red-text.text-lighten-1 {
            color: #ea454b !important;
        }
        .materialize-red.darken-1 {
            background-color: #d0181e !important;
        }
        .materialize-red-text.text-darken-1 {
            color: #d0181e !important;
        }
        .materialize-red.darken-2 {
            background-color: #b9151b !important;
        }
        .materialize-red-text.text-darken-2 {
            color: #b9151b !important;
        }
        .materialize-red.darken-3 {
            background-color: #a21318 !important;
        }
        .materialize-red-text.text-darken-3 {
            color: #a21318 !important;
        }
        .materialize-red.darken-4 {
            background-color: #8b1014 !important;
        }
        .materialize-red-text.text-darken-4 {
            color: #8b1014 !important;
        }
        .red-text {
            color: #F44336 !important;
        }
        .red.lighten-5 {
            background-color: #FFEBEE !important;
        }
        .red-text.text-lighten-5 {
            color: #FFEBEE !important;
        }
        .red.lighten-4 {
            background-color: #FFCDD2 !important;
        }
        .red-text.text-lighten-4 {
            color: #FFCDD2 !important;
        }
        .red.lighten-3 {
            background-color: #EF9A9A !important;
        }
        .red-text.text-lighten-3 {
            color: #EF9A9A !important;
        }
        .red.lighten-2 {
            background-color: #E57373 !important;
        }
        .red-text.text-lighten-2 {
            color: #E57373 !important;
        }
        .red.lighten-1 {
            background-color: #EF5350 !important;
        }
        .red-text.text-lighten-1 {
            color: #EF5350 !important;
        }
        .red.darken-1 {
            background-color: #E53935 !important;
        }
        .red-text.text-darken-1 {
            color: #E53935 !important;
        }
        .red.darken-2 {
            background-color: #D32F2F !important;
        }
        .grey-test {
            color: #9e9e9e !important
        }
        /*.red-text.text-darken-2 {*/
        /*color: #D32F2F !important;*/
        /*}*/
        .red.darken-3 {
            background-color: #C62828 !important;
        }
        .red-text.text-darken-3 {
            color: #C62828 !important;
        }
        .red.darken-4 {
            background-color: #B71C1C !important;
        }
        .red-text.text-darken-4 {
            color: #B71C1C !important;
        }
        .red.accent-1 {
            background-color: #FF8A80 !important;
        }
        .red-text.text-accent-1 {
            color: #FF8A80 !important;
        }
        .red.accent-2 {
            background-color: #FF5252 !important;
        }
        .red-text.text-accent-2 {
            color: #FF5252 !important;
        }
        .red.accent-3 {
            background-color: #FF1744 !important;
        }
        .red-text.text-accent-3 {
            color: #FF1744 !important;
        }
        .red.accent-4 {
            background-color: #D50000 !important;
        }
        .red-text.text-accent-4 {
            color: #D50000 !important;
        }
        .pink {
            background-color: #e91e63 !important;
        }
        .pink-text {
            color: #e91e63 !important;
        }
        .pink.lighten-5 {
            background-color: #fce4ec !important;
        }
        .pink-text.text-lighten-5 {
            color: #fce4ec !important;
        }
        .pink.lighten-4 {
            background-color: #f8bbd0 !important;
        }
        .pink-text.text-lighten-4 {
            color: #f8bbd0 !important;
        }
        .pink.lighten-3 {
            background-color: #f48fb1 !important;
        }
        .pink-text.text-lighten-3 {
            color: #f48fb1 !important;
        }
        .pink.lighten-2 {
            background-color: #f06292 !important;
        }
        .pink-text.text-lighten-2 {
            color: #f06292 !important;
        }
        .pink.lighten-1 {
            background-color: #ec407a !important;
        }
        .pink-text.text-lighten-1 {
            color: #ec407a !important;
        }
        .pink.darken-1 {
            background-color: #d81b60 !important;
        }
        .pink-text.text-darken-1 {
            color: #d81b60 !important;
        }
        .pink.darken-2 {
            background-color: #c2185b !important;
        }
        .pink-text.text-darken-2 {
            color: #c2185b !important;
        }
        .pink.darken-3 {
            background-color: #ad1457 !important;
        }
        .pink-text.text-darken-3 {
            color: #ad1457 !important;
        }
        .pink.darken-4 {
            background-color: #880e4f !important;
        }
        .pink-text.text-darken-4 {
            color: #880e4f !important;
        }
        .pink.accent-1 {
            background-color: #ff80ab !important;
        }
        .pink-text.text-accent-1 {
            color: #ff80ab !important;
        }
        .pink.accent-2 {
            background-color: #ff4081 !important;
        }
        .pink-text.text-accent-2 {
            color: #ff4081 !important;
        }
        .pink.accent-3 {
            background-color: #f50057 !important;
        }
        .pink-text.text-accent-3 {
            color: #f50057 !important;
        }
        .pink.accent-4 {
            background-color: #c51162 !important;
        }
        .pink-text.text-accent-4 {
            color: #c51162 !important;
        }
        .purple {
            background-color: #9c27b0 !important;
        }
        .purple-text {
            color: #9c27b0 !important;
        }
        .purple.lighten-5 {
            background-color: #f3e5f5 !important;
        }
        .purple-text.text-lighten-5 {
            color: #f3e5f5 !important;
        }
        .purple.lighten-4 {
            background-color: #e1bee7 !important;
        }
        .purple-text.text-lighten-4 {
            color: #e1bee7 !important;
        }
        .purple.lighten-3 {
            background-color: #ce93d8 !important;
        }
        .purple-text.text-lighten-3 {
            color: #ce93d8 !important;
        }
        .purple.lighten-2 {
            background-color: #ba68c8 !important;
        }
        .purple-text.text-lighten-2 {
            color: #ba68c8 !important;
        }
        .purple.lighten-1 {
            background-color: #ab47bc !important;
        }
        .purple-text.text-lighten-1 {
            color: #ab47bc !important;
        }
        .purple.darken-1 {
            background-color: #8e24aa !important;
        }
        .purple-text.text-darken-1 {
            color: #8e24aa !important;
        }
        .purple.darken-2 {
            background-color: #7b1fa2 !important;
        }
        .purple-text.text-darken-2 {
            color: #7b1fa2 !important;
        }
        .purple.darken-3 {
            background-color: #6a1b9a !important;
        }
        .purple-text.text-darken-3 {
            color: #6a1b9a !important;
        }
        .purple.darken-4 {
            background-color: #4a148c !important;
        }
        .purple-text.text-darken-4 {
            color: #4a148c !important;
        }
        .purple.accent-1 {
            background-color: #ea80fc !important;
        }
        .purple-text.text-accent-1 {
            color: #ea80fc !important;
        }
        .purple.accent-2 {
            background-color: #e040fb !important;
        }
        .purple-text.text-accent-2 {
            color: #e040fb !important;
        }
        .purple.accent-3 {
            background-color: #d500f9 !important;
        }
        .purple-text.text-accent-3 {
            color: #d500f9 !important;
        }
        .purple.accent-4 {
            background-color: #aa00ff !important;
        }
        .purple-text.text-accent-4 {
            color: #aa00ff !important;
        }
        .deep-purple {
            background-color: #673ab7 !important;
        }
        .deep-purple-text {
            color: #673ab7 !important;
        }
        .deep-purple.lighten-5 {
            background-color: #ede7f6 !important;
        }
        .deep-purple-text.text-lighten-5 {
            color: #ede7f6 !important;
        }
        .deep-purple.lighten-4 {
            background-color: #d1c4e9 !important;
        }
        .deep-purple-text.text-lighten-4 {
            color: #d1c4e9 !important;
        }
        .deep-purple.lighten-3 {
            background-color: #b39ddb !important;
        }
        .deep-purple-text.text-lighten-3 {
            color: #b39ddb !important;
        }
        .deep-purple.lighten-2 {
            background-color: #9575cd !important;
        }
        .deep-purple-text.text-lighten-2 {
            color: #9575cd !important;
        }
        .deep-purple.lighten-1 {
            background-color: #7e57c2 !important;
        }
        .deep-purple-text.text-lighten-1 {
            color: #7e57c2 !important;
        }
        .deep-purple.darken-1 {
            background-color: #5e35b1 !important;
        }
        .deep-purple-text.text-darken-1 {
            color: #5e35b1 !important;
        }
        .deep-purple.darken-2 {
            background-color: #512da8 !important;
        }
        .deep-purple-text.text-darken-2 {
            color: #512da8 !important;
        }
        .deep-purple.darken-3 {
            background-color: #4527a0 !important;
        }
        .deep-purple-text.text-darken-3 {
            color: #4527a0 !important;
        }
        .deep-purple.darken-4 {
            background-color: #311b92 !important;
        }
        .deep-purple-text.text-darken-4 {
            color: #311b92 !important;
        }
        .deep-purple.accent-1 {
            background-color: #b388ff !important;
        }
        .deep-purple-text.text-accent-1 {
            color: #b388ff !important;
        }
        .deep-purple.accent-2 {
            background-color: #7c4dff !important;
        }
        .deep-purple-text.text-accent-2 {
            color: #7c4dff !important;
        }
        .deep-purple.accent-3 {
            background-color: #651fff !important;
        }
        .deep-purple-text.text-accent-3 {
            color: #651fff !important;
        }
        .deep-purple.accent-4 {
            background-color: #6200ea !important;
        }
        .deep-purple-text.text-accent-4 {
            color: #6200ea !important;
        }
        .indigo {
            background-color: #3f51b5 !important;
        }
        .indigo-text {
            color: #3f51b5 !important;
        }
        .indigo.lighten-5 {
            background-color: #e8eaf6 !important;
        }
        .indigo-text.text-lighten-5 {
            color: #e8eaf6 !important;
        }
        .indigo.lighten-4 {
            background-color: #c5cae9 !important;
        }
        .indigo-text.text-lighten-4 {
            color: #c5cae9 !important;
        }
        .indigo.lighten-3 {
            background-color: #9fa8da !important;
        }
        .indigo-text.text-lighten-3 {
            color: #9fa8da !important;
        }
        .indigo.lighten-2 {
            background-color: #7986cb !important;
        }
        .indigo-text.text-lighten-2 {
            color: #7986cb !important;
        }
        .indigo.lighten-1 {
            background-color: #5c6bc0 !important;
        }
        .indigo-text.text-lighten-1 {
            color: #5c6bc0 !important;
        }
        .indigo.darken-1 {
            background-color: #3949ab !important;
        }
        .indigo-text.text-darken-1 {
            color: #3949ab !important;
        }
        .indigo.darken-2 {
            background-color: #303f9f !important;
        }
        .indigo-text.text-darken-2 {
            color: #303f9f !important;
        }
        .indigo.darken-3 {
            background-color: #283593 !important;
        }
        .indigo-text.text-darken-3 {
            color: #283593 !important;
        }
        .indigo.darken-4 {
            background-color: #1a237e !important;
        }
        .indigo-text.text-darken-4 {
            color: #1a237e !important;
        }
        .indigo.accent-1 {
            background-color: #8c9eff !important;
        }
        .indigo-text.text-accent-1 {
            color: #8c9eff !important;
        }
        .indigo.accent-2 {
            background-color: #536dfe !important;
        }
        .indigo-text.text-accent-2 {
            color: #536dfe !important;
        }
        .indigo.accent-3 {
            background-color: #3d5afe !important;
        }
        .indigo-text.text-accent-3 {
            color: #3d5afe !important;
        }
        .indigo.accent-4 {
            background-color: #304ffe !important;
        }
        .indigo-text.text-accent-4 {
            color: #304ffe !important;
        }
        .blue {
            background-color: #2196F3 !important;
        }
        .blue-text {
            color: #2196F3 !important;
        }
        .blue.lighten-5 {
            background-color: #E3F2FD !important;
        }
        .blue-text.text-lighten-5 {
            color: #E3F2FD !important;
        }
        .blue.lighten-4 {
            background-color: #BBDEFB !important;
        }
        .blue-text.text-lighten-4 {
            color: #BBDEFB !important;
        }
        .blue.lighten-3 {
            background-color: #90CAF9 !important;
        }
        .blue-text.text-lighten-3 {
            color: #90CAF9 !important;
        }
        .blue.lighten-2 {
            background-color: #64B5F6 !important;
        }
        .blue-text.text-lighten-2 {
            color: #64B5F6 !important;
        }
        .blue.lighten-1 {
            background-color: #42A5F5 !important;
        }
        .blue-text.text-lighten-1 {
            color: #42A5F5 !important;
        }
        .blue.darken-1 {
            background-color: #1E88E5 !important;
        }
        .blue-text.text-darken-1 {
            color: #1E88E5 !important;
        }
        .blue.darken-2 {
            background-color: #1976D2 !important;
        }
        .blue-text.text-darken-2 {
            color: #1976D2 !important;
        }
        .blue.darken-3 {
            background-color: #1565C0 !important;
        }
        .blue-text.text-darken-3 {
            color: #1565C0 !important;
        }
        .blue.darken-4 {
            background-color: #0D47A1 !important;
        }
        .blue-text.text-darken-4 {
            color: #0D47A1 !important;
        }
        .blue.accent-1 {
            background-color: #82B1FF !important;
        }
        .blue-text.text-accent-1 {
            color: #82B1FF !important;
        }
        .blue.accent-2 {
            background-color: #448AFF !important;
        }
        .blue-text.text-accent-2 {
            color: #448AFF !important;
        }
        .blue.accent-3 {
            background-color: #2979FF !important;
        }
        .blue-text.text-accent-3 {
            color: #2979FF !important;
        }
        .blue.accent-4 {
            background-color: #2962FF !important;
        }
        .blue-text.text-accent-4 {
            color: #2962FF !important;
        }
        .light-blue {
            background-color: #03a9f4 !important;
        }
        .light-blue-text {
            color: #03a9f4 !important;
        }
        .light-blue.lighten-5 {
            background-color: #e1f5fe !important;
        }
        .light-blue-text.text-lighten-5 {
            color: #e1f5fe !important;
        }
        .light-blue.lighten-4 {
            background-color: #b3e5fc !important;
        }
        .light-blue-text.text-lighten-4 {
            color: #b3e5fc !important;
        }
        .light-blue.lighten-3 {
            background-color: #81d4fa !important;
        }
        .light-blue-text.text-lighten-3 {
            color: #81d4fa !important;
        }
        .light-blue.lighten-2 {
            background-color: #4fc3f7 !important;
        }
        .light-blue-text.text-lighten-2 {
            color: #4fc3f7 !important;
        }
        .light-blue.lighten-1 {
            background-color: #29b6f6 !important;
        }
        .light-blue-text.text-lighten-1 {
            color: #29b6f6 !important;
        }
        .light-blue.darken-1 {
            background-color: #039be5 !important;
        }
        .light-blue-text.text-darken-1 {
            color: #039be5 !important;
        }
        .light-blue.darken-2 {
            background-color: #0288d1 !important;
        }
        .light-blue-text.text-darken-2 {
            color: #0288d1 !important;
        }
        .light-blue.darken-3 {
            background-color: #0277bd !important;
        }
        .light-blue-text.text-darken-3 {
            color: #0277bd !important;
        }
        .light-blue.darken-4 {
            background-color: #01579b !important;
        }
        .light-blue-text.text-darken-4 {
            color: #01579b !important;
        }
        .light-blue.accent-1 {
            background-color: #80d8ff !important;
        }
        .light-blue-text.text-accent-1 {
            color: #80d8ff !important;
        }
        .light-blue.accent-2 {
            background-color: #40c4ff !important;
        }
        .light-blue-text.text-accent-2 {
            color: #40c4ff !important;
        }
        .light-blue.accent-3 {
            background-color: #00b0ff !important;
        }
        .light-blue-text.text-accent-3 {
            color: #00b0ff !important;
        }
        .light-blue.accent-4 {
            background-color: #0091ea !important;
        }
        .light-blue-text.text-accent-4 {
            color: #0091ea !important;
        }
        .cyan {
            background-color: #00bcd4 !important;
        }
        .cyan-text {
            color: #00bcd4 !important;
        }
        .cyan.lighten-5 {
            background-color: #e0f7fa !important;
        }
        .cyan-text.text-lighten-5 {
            color: #e0f7fa !important;
        }
        .cyan.lighten-4 {
            background-color: #b2ebf2 !important;
        }
        .cyan-text.text-lighten-4 {
            color: #b2ebf2 !important;
        }
        .cyan.lighten-3 {
            background-color: #80deea !important;
        }
        .cyan-text.text-lighten-3 {
            color: #80deea !important;
        }
        .cyan.lighten-2 {
            background-color: #4dd0e1 !important;
        }
        .cyan-text.text-lighten-2 {
            color: #4dd0e1 !important;
        }
        .cyan.lighten-1 {
            background-color: #26c6da !important;
        }
        .cyan-text.text-lighten-1 {
            color: #26c6da !important;
        }
        .cyan.darken-1 {
            background-color: #00acc1 !important;
        }
        .cyan-text.text-darken-1 {
            color: #00acc1 !important;
        }
        .cyan.darken-2 {
            background-color: #0097a7 !important;
        }
        .cyan-text.text-darken-2 {
            color: #0097a7 !important;
        }
        .cyan.darken-3 {
            background-color: #00838f !important;
        }
        .cyan-text.text-darken-3 {
            color: #00838f !important;
        }
        .cyan.darken-4 {
            background-color: #006064 !important;
        }
        .cyan-text.text-darken-4 {
            color: #006064 !important;
        }
        .cyan.accent-1 {
            background-color: #84ffff !important;
        }
        .cyan-text.text-accent-1 {
            color: #84ffff !important;
        }
        .cyan.accent-2 {
            background-color: #18ffff !important;
        }
        .cyan-text.text-accent-2 {
            color: #18ffff !important;
        }
        .cyan.accent-3 {
            background-color: #00e5ff !important;
        }
        .cyan-text.text-accent-3 {
            color: #00e5ff !important;
        }
        .cyan.accent-4 {
            background-color: #00b8d4 !important;
        }
        .cyan-text.text-accent-4 {
            color: #00b8d4 !important;
        }
        .teal {
            background-color: #009688 !important;
        }
        .teal-text {
            color: #009688 !important;
        }
        .teal.lighten-5 {
            background-color: #e0f2f1 !important;
        }
        .teal-text.text-lighten-5 {
            color: #e0f2f1 !important;
        }
        .teal.lighten-4 {
            background-color: #b2dfdb !important;
        }
        .teal-text.text-lighten-4 {
            color: #b2dfdb !important;
        }
        .teal.lighten-3 {
            background-color: #80cbc4 !important;
        }
        .teal-text.text-lighten-3 {
            color: #80cbc4 !important;
        }
        .teal.lighten-2 {
            background-color: #4db6ac !important;
        }
        .teal-text.text-lighten-2 {
            color: #4db6ac !important;
        }
        .teal.lighten-1 {
            background-color: #26a69a !important;
        }
        .teal-text.text-lighten-1 {
            color: #26a69a !important;
        }
        .teal.darken-1 {
            background-color: #00897b !important;
        }
        .teal-text.text-darken-1 {
            color: #00897b !important;
        }
        .teal.darken-2 {
            background-color: #00796b !important;
        }
        .teal-text.text-darken-2 {
            color: #00796b !important;
        }
        .teal.darken-3 {
            background-color: #00695c !important;
        }
        .teal-text.text-darken-3 {
            color: #00695c !important;
        }
        .teal.darken-4 {
            background-color: #004d40 !important;
        }
        .teal-text.text-darken-4 {
            color: #004d40 !important;
        }
        .teal.accent-1 {
            background-color: #a7ffeb !important;
        }
        .teal-text.text-accent-1 {
            color: #a7ffeb !important;
        }
        .teal.accent-2 {
            background-color: #64ffda !important;
        }
        .teal-text.text-accent-2 {
            color: #64ffda !important;
        }
        .teal.accent-3 {
            background-color: #1de9b6 !important;
        }
        .teal-text.text-accent-3 {
            color: #1de9b6 !important;
        }
        .teal.accent-4 {
            background-color: #00bfa5 !important;
        }
        .teal-text.text-accent-4 {
            color: #00bfa5 !important;
        }
        .green {
            background-color: #4CAF50 !important;
        }
        .green-text {
            color: #4CAF50 !important;
        }
        .green.lighten-5 {
            background-color: #E8F5E9 !important;
        }
        .green-text.text-lighten-5 {
            color: #E8F5E9 !important;
        }
        .green.lighten-4 {
            background-color: #C8E6C9 !important;
        }
        .green-text.text-lighten-4 {
            color: #C8E6C9 !important;
        }
        .green.lighten-3 {
            background-color: #A5D6A7 !important;
        }
        .green-text.text-lighten-3 {
            color: #A5D6A7 !important;
        }
        .green.lighten-2 {
            background-color: #81C784 !important;
        }
        .green-text.text-lighten-2 {
            color: #81C784 !important;
        }
        .green.lighten-1 {
            background-color: #66BB6A !important;
        }
        .green-text.text-lighten-1 {
            color: #66BB6A !important;
        }
        .green.darken-1 {
            background-color: #43A047 !important;
        }
        .green-text.text-darken-1 {
            color: #43A047 !important;
        }
        .green.darken-2 {
            background-color: #388E3C !important;
        }
        .green-text.text-darken-2 {
            color: #388E3C !important;
        }
        .green.darken-3 {
            background-color: #2E7D32 !important;
        }
        .green-text.text-darken-3 {
            color: #2E7D32 !important;
        }
        .green.darken-4 {
            background-color: #1B5E20 !important;
        }
        .green-text.text-darken-4 {
            color: #1B5E20 !important;
        }
        .green.accent-1 {
            background-color: #B9F6CA !important;
        }
        .green-text.text-accent-1 {
            color: #B9F6CA !important;
        }
        .green.accent-2 {
            background-color: #69F0AE !important;
        }
        .green-text.text-accent-2 {
            color: #69F0AE !important;
        }
        .green.accent-3 {
            background-color: #00E676 !important;
        }
        .green-text.text-accent-3 {
            color: #00E676 !important;
        }
        .green.accent-4 {
            background-color: #00C853 !important;
        }
        .green-text.text-accent-4 {
            color: #00C853 !important;
        }
        .light-green {
            background-color: #8bc34a !important;
        }
        .light-green-text {
            color: #8bc34a !important;
        }
        .light-green.lighten-5 {
            background-color: #f1f8e9 !important;
        }
        .light-green-text.text-lighten-5 {
            color: #f1f8e9 !important;
        }
        .light-green.lighten-4 {
            background-color: #dcedc8 !important;
        }
        .light-green-text.text-lighten-4 {
            color: #dcedc8 !important;
        }
        .light-green.lighten-3 {
            background-color: #c5e1a5 !important;
        }
        .light-green-text.text-lighten-3 {
            color: #c5e1a5 !important;
        }
        .light-green.lighten-2 {
            background-color: #aed581 !important;
        }
        .light-green-text.text-lighten-2 {
            color: #aed581 !important;
        }
        .light-green.lighten-1 {
            background-color: #9ccc65 !important;
        }
        .light-green-text.text-lighten-1 {
            color: #9ccc65 !important;
        }
        .light-green.darken-1 {
            background-color: #7cb342 !important;
        }
        .light-green-text.text-darken-1 {
            color: #7cb342 !important;
        }
        .light-green.darken-2 {
            background-color: #689f38 !important;
        }
        .light-green-text.text-darken-2 {
            color: #689f38 !important;
        }
        .light-green.darken-3 {
            background-color: #558b2f !important;
        }
        .light-green-text.text-darken-3 {
            color: #558b2f !important;
        }
        .light-green.darken-4 {
            background-color: #33691e !important;
        }
        .light-green-text.text-darken-4 {
            color: #33691e !important;
        }
        .light-green.accent-1 {
            background-color: #ccff90 !important;
        }
        .light-green-text.text-accent-1 {
            color: #ccff90 !important;
        }
        .light-green.accent-2 {
            background-color: #b2ff59 !important;
        }
        .light-green-text.text-accent-2 {
            color: #b2ff59 !important;
        }
        .light-green.accent-3 {
            background-color: #76ff03 !important;
        }
        .light-green-text.text-accent-3 {
            color: #76ff03 !important;
        }
        .light-green.accent-4 {
            background-color: #64dd17 !important;
        }
        .light-green-text.text-accent-4 {
            color: #64dd17 !important;
        }
        .lime {
            background-color: #cddc39 !important;
        }
        .lime-text {
            color: #cddc39 !important;
        }
        .lime.lighten-5 {
            background-color: #f9fbe7 !important;
        }
        .lime-text.text-lighten-5 {
            color: #f9fbe7 !important;
        }
        .lime.lighten-4 {
            background-color: #f0f4c3 !important;
        }
        .lime-text.text-lighten-4 {
            color: #f0f4c3 !important;
        }
        .lime.lighten-3 {
            background-color: #e6ee9c !important;
        }
        .lime-text.text-lighten-3 {
            color: #e6ee9c !important;
        }
        .lime.lighten-2 {
            background-color: #dce775 !important;
        }
        .lime-text.text-lighten-2 {
            color: #dce775 !important;
        }
        .lime.lighten-1 {
            background-color: #d4e157 !important;
        }
        .lime-text.text-lighten-1 {
            color: #d4e157 !important;
        }
        .lime.darken-1 {
            background-color: #c0ca33 !important;
        }
        .lime-text.text-darken-1 {
            color: #c0ca33 !important;
        }
        .lime.darken-2 {
            background-color: #afb42b !important;
        }
        .lime-text.text-darken-2 {
            color: #afb42b !important;
        }
        .lime.darken-3 {
            background-color: #9e9d24 !important;
        }
        .lime-text.text-darken-3 {
            color: #9e9d24 !important;
        }
        .lime.darken-4 {
            background-color: #827717 !important;
        }
        .lime-text.text-darken-4 {
            color: #827717 !important;
        }
        .lime.accent-1 {
            background-color: #f4ff81 !important;
        }
        .lime-text.text-accent-1 {
            color: #f4ff81 !important;
        }
        .lime.accent-2 {
            background-color: #eeff41 !important;
        }
        .lime-text.text-accent-2 {
            color: #eeff41 !important;
        }
        .lime.accent-3 {
            background-color: #c6ff00 !important;
        }
        .lime-text.text-accent-3 {
            color: #c6ff00 !important;
        }
        .lime.accent-4 {
            background-color: #aeea00 !important;
        }
        .lime-text.text-accent-4 {
            color: #aeea00 !important;
        }
        .yellow {
            background-color: #ffeb3b !important;
        }
        .yellow-text {
            color: #ffeb3b !important;
        }
        .yellow.lighten-5 {
            background-color: #fffde7 !important;
        }
        .yellow-text.text-lighten-5 {
            color: #fffde7 !important;
        }
        .yellow.lighten-4 {
            background-color: #fff9c4 !important;
        }
        .yellow-text.text-lighten-4 {
            color: #fff9c4 !important;
        }
        .yellow.lighten-3 {
            background-color: #fff59d !important;
        }
        .yellow-text.text-lighten-3 {
            color: #fff59d !important;
        }
        .yellow.lighten-2 {
            background-color: #fff176 !important;
        }
        .yellow-text.text-lighten-2 {
            color: #fff176 !important;
        }
        .yellow.lighten-1 {
            background-color: #ffee58 !important;
        }
        .yellow-text.text-lighten-1 {
            color: #ffee58 !important;
        }
        .yellow.darken-1 {
            background-color: #fdd835 !important;
        }
        .yellow-text.text-darken-1 {
            color: #fdd835 !important;
        }
        .yellow.darken-2 {
            background-color: #fbc02d !important;
        }
        .yellow-text.text-darken-2 {
            color: #fbc02d !important;
        }
        .yellow.darken-3 {
            background-color: #f9a825 !important;
        }
        .yellow-text.text-darken-3 {
            color: #f9a825 !important;
        }
        .yellow.darken-4 {
            background-color: #f57f17 !important;
        }
        .yellow-text.text-darken-4 {
            color: #f57f17 !important;
        }
        .yellow.accent-1 {
            background-color: #ffff8d !important;
        }
        .yellow-text.text-accent-1 {
            color: #ffff8d !important;
        }
        .yellow.accent-2 {
            background-color: #ffff00 !important;
        }
        .yellow-text.text-accent-2 {
            color: #ffff00 !important;
        }
        .yellow.accent-3 {
            background-color: #ffea00 !important;
        }
        .yellow-text.text-accent-3 {
            color: #ffea00 !important;
        }
        .yellow.accent-4 {
            background-color: #ffd600 !important;
        }
        .yellow-text.text-accent-4 {
            color: #ffd600 !important;
        }
        .amber {
            background-color: #ffc107 !important;
        }
        .amber-text {
            color: #ffc107 !important;
        }
        .amber.lighten-5 {
            background-color: #fff8e1 !important;
        }
        .amber-text.text-lighten-5 {
            color: #fff8e1 !important;
        }
        .amber.lighten-4 {
            background-color: #ffecb3 !important;
        }
        .amber-text.text-lighten-4 {
            color: #ffecb3 !important;
        }
        .amber.lighten-3 {
            background-color: #ffe082 !important;
        }
        .amber-text.text-lighten-3 {
            color: #ffe082 !important;
        }
        .amber.lighten-2 {
            background-color: #ffd54f !important;
        }
        .amber-text.text-lighten-2 {
            color: #ffd54f !important;
        }
        .amber.lighten-1 {
            background-color: #ffca28 !important;
        }
        .amber-text.text-lighten-1 {
            color: #ffca28 !important;
        }
        .amber.darken-1 {
            background-color: #ffb300 !important;
        }
        .amber-text.text-darken-1 {
            color: #ffb300 !important;
        }
        .amber.darken-2 {
            background-color: #ffa000 !important;
        }
        .amber-text.text-darken-2 {
            color: #ffa000 !important;
        }
        .amber.darken-3 {
            background-color: #ff8f00 !important;
        }
        .amber-text.text-darken-3 {
            color: #ff8f00 !important;
        }
        .amber.darken-4 {
            background-color: #ff6f00 !important;
        }
        .amber-text.text-darken-4 {
            color: #ff6f00 !important;
        }
        .amber.accent-1 {
            background-color: #ffe57f !important;
        }
        .amber-text.text-accent-1 {
            color: #ffe57f !important;
        }
        .amber.accent-2 {
            background-color: #ffd740 !important;
        }
        .amber-text.text-accent-2 {
            color: #ffd740 !important;
        }
        .amber.accent-3 {
            background-color: #ffc400 !important;
        }
        .amber-text.text-accent-3 {
            color: #ffc400 !important;
        }
        .amber.accent-4 {
            background-color: #ffab00 !important;
        }
        .amber-text.text-accent-4 {
            color: #ffab00 !important;
        }
        .orange {
            background-color: #ff9800 !important;
        }
        .orange-text {
            color: #ff9800 !important;
        }
        .orange.lighten-5 {
            background-color: #fff3e0 !important;
        }
        .orange-text.text-lighten-5 {
            color: #fff3e0 !important;
        }
        .orange.lighten-4 {
            background-color: #ffe0b2 !important;
        }
        .orange-text.text-lighten-4 {
            color: #ffe0b2 !important;
        }
        .orange.lighten-3 {
            background-color: #ffcc80 !important;
        }
        .orange-text.text-lighten-3 {
            color: #ffcc80 !important;
        }
        .orange.lighten-2 {
            background-color: #ffb74d !important;
        }
        .orange-text.text-lighten-2 {
            color: #ffb74d !important;
        }
        .orange.lighten-1 {
            background-color: #ffa726 !important;
        }
        .orange-text.text-lighten-1 {
            color: #ffa726 !important;
        }
        .orange.darken-1 {
            background-color: #fb8c00 !important;
        }
        .orange-text.text-darken-1 {
            color: #fb8c00 !important;
        }
        .orange.darken-2 {
            background-color: #f57c00 !important;
        }
        .orange-text.text-darken-2 {
            color: #f57c00 !important;
        }
        .orange.darken-3 {
            background-color: #ef6c00 !important;
        }
        .orange-text.text-darken-3 {
            color: #ef6c00 !important;
        }
        .orange.darken-4 {
            background-color: #e65100 !important;
        }
        .orange-text.text-darken-4 {
            color: #e65100 !important;
        }
        .orange.accent-1 {
            background-color: #ffd180 !important;
        }
        .orange-text.text-accent-1 {
            color: #ffd180 !important;
        }
        .orange.accent-2 {
            background-color: #ffab40 !important;
        }
        .orange-text.text-accent-2 {
            color: #ffab40 !important;
        }
        .orange.accent-3 {
            background-color: #ff9100 !important;
        }
        .orange-text.text-accent-3 {
            color: #ff9100 !important;
        }
        .orange.accent-4 {
            background-color: #ff6d00 !important;
        }
        .orange-text.text-accent-4 {
            color: #ff6d00 !important;
        }
        .deep-orange {
            background-color: #ff5722 !important;
        }
        .deep-orange-text {
            color: #ff5722 !important;
        }
        .deep-orange.lighten-5 {
            background-color: #fbe9e7 !important;
        }
        .deep-orange-text.text-lighten-5 {
            color: #fbe9e7 !important;
        }
        .deep-orange.lighten-4 {
            background-color: #ffccbc !important;
        }
        .deep-orange-text.text-lighten-4 {
            color: #ffccbc !important;
        }
        .deep-orange.lighten-3 {
            background-color: #ffab91 !important;
        }
        .deep-orange-text.text-lighten-3 {
            color: #ffab91 !important;
        }
        .deep-orange.lighten-2 {
            background-color: #ff8a65 !important;
        }
        .deep-orange-text.text-lighten-2 {
            color: #ff8a65 !important;
        }
        .deep-orange.lighten-1 {
            background-color: #ff7043 !important;
        }
        .deep-orange-text.text-lighten-1 {
            color: #ff7043 !important;
        }
        .deep-orange.darken-1 {
            background-color: #f4511e !important;
        }
        .deep-orange-text.text-darken-1 {
            color: #f4511e !important;
        }
        .deep-orange.darken-2 {
            background-color: #e64a19 !important;
        }
        .deep-orange-text.text-darken-2 {
            color: #e64a19 !important;
        }
        .deep-orange.darken-3 {
            background-color: #d84315 !important;
        }
        .deep-orange-text.text-darken-3 {
            color: #d84315 !important;
        }
        .deep-orange.darken-4 {
            background-color: #bf360c !important;
        }
        .deep-orange-text.text-darken-4 {
            color: #bf360c !important;
        }
        .deep-orange.accent-1 {
            background-color: #ff9e80 !important;
        }
        .deep-orange-text.text-accent-1 {
            color: #ff9e80 !important;
        }
        .deep-orange.accent-2 {
            background-color: #ff6e40 !important;
        }
        .deep-orange-text.text-accent-2 {
            color: #ff6e40 !important;
        }
        .deep-orange.accent-3 {
            background-color: #ff3d00 !important;
        }
        .deep-orange-text.text-accent-3 {
            color: #ff3d00 !important;
        }
        .deep-orange.accent-4 {
            background-color: #dd2c00 !important;
        }
        .deep-orange-text.text-accent-4 {
            color: #dd2c00 !important;
        }
        .brown {
            background-color: #795548 !important;
        }
        .brown-text {
            color: #795548 !important;
        }
        .brown.lighten-5 {
            background-color: #efebe9 !important;
        }
        .brown-text.text-lighten-5 {
            color: #efebe9 !important;
        }
        .brown.lighten-4 {
            background-color: #d7ccc8 !important;
        }
        .brown-text.text-lighten-4 {
            color: #d7ccc8 !important;
        }
        .brown.lighten-3 {
            background-color: #bcaaa4 !important;
        }
        .brown-text.text-lighten-3 {
            color: #bcaaa4 !important;
        }
        .brown.lighten-2 {
            background-color: #a1887f !important;
        }
        .brown-text.text-lighten-2 {
            color: #a1887f !important;
        }
        .brown.lighten-1 {
            background-color: #8d6e63 !important;
        }
        .brown-text.text-lighten-1 {
            color: #8d6e63 !important;
        }
        .brown.darken-1 {
            background-color: #6d4c41 !important;
        }
        .brown-text.text-darken-1 {
            color: #6d4c41 !important;
        }
        .brown.darken-2 {
            background-color: #5d4037 !important;
        }
        .brown-text.text-darken-2 {
            color: #5d4037 !important;
        }
        .brown.darken-3 {
            background-color: #4e342e !important;
        }
        .brown-text.text-darken-3 {
            color: #4e342e !important;
        }
        .brown.darken-4 {
            background-color: #3e2723 !important;
        }
        .brown-text.text-darken-4 {
            color: #3e2723 !important;
        }
        .blue-grey {
            background-color: #607d8b !important;
        }
        .blue-grey-text {
            color: #607d8b !important;
        }
        .blue-grey.lighten-5 {
            background-color: #eceff1 !important;
        }
        .blue-grey-text.text-lighten-5 {
            color: #eceff1 !important;
        }
        .blue-grey.lighten-4 {
            background-color: #cfd8dc !important;
        }
        .blue-grey-text.text-lighten-4 {
            color: #cfd8dc !important;
        }
        .blue-grey.lighten-3 {
            background-color: #b0bec5 !important;
        }
        .blue-grey-text.text-lighten-3 {
            color: #b0bec5 !important;
        }
        .blue-grey.lighten-2 {
            background-color: #90a4ae !important;
        }
        .blue-grey-text.text-lighten-2 {
            color: #90a4ae !important;
        }
        .blue-grey.lighten-1 {
            background-color: #78909c !important;
        }
        .blue-grey-text.text-lighten-1 {
            color: #78909c !important;
        }
        .blue-grey.darken-1 {
            background-color: #546e7a !important;
        }
        .blue-grey-text.text-darken-1 {
            color: #546e7a !important;
        }
        .blue-grey.darken-2 {
            background-color: #455a64 !important;
        }
        .blue-grey-text.text-darken-2 {
            color: #455a64 !important;
        }
        .blue-grey.darken-3 {
            background-color: #37474f !important;
        }
        .blue-grey-text.text-darken-3 {
            color: #37474f !important;
        }
        .blue-grey.darken-4 {
            background-color: #263238 !important;
        }
        .blue-grey-text.text-darken-4 {
            color: #263238 !important;
        }
        .grey {
            background-color: #9e9e9e !important;
        }
        .grey-text {
            color: #9e9e9e !important;
        }
        .grey.lighten-5 {
            background-color: #fafafa !important;
        }
        .grey-text.text-lighten-5 {
            color: #fafafa !important;
        }
        .grey.lighten-4 {
            background-color: #f5f5f5 !important;
        }
        .grey-text.text-lighten-4 {
            color: #f5f5f5 !important;
        }
        .grey.lighten-3 {
            background-color: #eeeeee !important;
        }
        .grey-text.text-lighten-3 {
            color: #eeeeee !important;
        }
        .grey.lighten-2 {
            background-color: #e0e0e0 !important;
        }
        .grey-text.text-lighten-2 {
            color: #e0e0e0 !important;
        }
        .grey.lighten-1 {
            background-color: #bdbdbd !important;
        }
        .grey-text.text-lighten-1 {
            color: #bdbdbd !important;
        }
        .grey.darken-1 {
            background-color: #757575 !important;
        }
        .grey-text.text-darken-1 {
            color: #757575 !important;
        }
        .grey.darken-2 {
            background-color: #616161 !important;
        }
        .grey-text.text-darken-2 {
            color: #616161 !important;
        }
        .grey.darken-3 {
            background-color: #424242 !important;
        }
        .grey-text.text-darken-3 {
            color: #424242 !important;
        }
        .grey.darken-4 {
            background-color: #212121 !important;
        }
        .grey-text.text-darken-4 {
            color: #212121 !important;
        }
        .black {
            background-color: #000000 !important;
        }
        .black-text {
            color: #000000 !important;
        }
        .white {
            background-color: #FFFFFF !important;
        }
        .white-text {
            color: #FFFFFF !important;
        }
        .transparent {
            background-color: transparent !important;
        }
        .transparent-text {
            color: transparent !important;
        }
        .material-icons {
            font-family: 'Material Icons';
            font-weight: normal;
            font-style: normal;
            line-height: 1;
            letter-spacing: normal;
            text-transform: none;
            display: inline-block;
            white-space: nowrap;
            word-wrap: normal;
            direction: ltr;
            -webkit-font-feature-settings: 'liga';
            -webkit-font-smoothing: antialiased;
        }
        .truncate {
            display: block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .no-padding {
            padding: 0 !important;
        }
        .no-margin {
            margin: 0 !important;
        }
        .left {
            float: left !important;
        }
        .right {
            float: right !important;
        }
        .left-align {
            text-align: left;
        }
        .right-align {
            text-align: right;
        }
        .center,
        .center-align {
            text-align: center;
            cursor: pointer;
        }
        .Fixed-row {
            margin-left: auto;
            margin-right: auto;
        }
        .Fixed-row:after {
            content: "";
            display: table;
            clear: both;
        }
        .Fixed-row .col {
            float: left;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            padding: 0 0.25rem;
            min-height: 1px;
        }
        .Fixed-row-x .col img {
            width: 19px;
            height: 19px;
        }
        .Fixed-row-x .col {
            margin-top: 10px;
        }
        .Fixed-row .col[class*="push-"],
        .Fixed-row .col[class*="pull-"] {
            position: relative;
        }
        .Fixed-row .col.s1 {
            width: 8.3333333333%;
            margin-left: auto;
            left: auto;
            right: auto;
        }
        .Fixed-row .col.s2 {
            width: 16.6666666667%;
            margin-left: auto;
            left: auto;
            right: auto;
        }
        .Fixed-row .col.s3 {
            width: 25%;
            margin-left: auto;
            left: auto;
            right: auto;
        }
        .Fixed-row .col.s4 {
            width: 33.3333333333%;
            margin-left: auto;
            left: auto;
            right: auto;
        }
        .Fixed-row .col.s5 {
            width: 41.6666666667%;
            margin-left: auto;
            left: auto;
            right: auto;
        }
        .Fixed-row .col.s6 {
            width: 50%;
            margin-left: auto;
            left: auto;
            right: auto;
        }
        .js_scroll_x .Fixed-row .col.s6 {
            margin-bottom: 5px;
        }
        .Fixed-row .col.s7 {
            width: 58.3333333333%;
            margin-left: auto;
            left: auto;
            right: auto;
        }
        .Fixed-row .col.s8 {
            width: 66.6666666667%;
            margin-left: auto;
            left: auto;
            right: auto;
        }
        .Fixed-row .col.s9 {
            width: 75%;
            margin-left: auto;
            left: auto;
            right: auto;
        }
        .Fixed-row .col.s10 {
            width: 83.3333333333%;
            margin-left: auto;
            left: auto;
            right: auto;
        }
        .Fixed-row .col.s11 {
            width: 91.6666666667%;
            margin-left: auto;
            left: auto;
            right: auto;
        }
        .Fixed-row .col.s12 {
            width: 100%;
            margin-left: auto;
            left: auto;
            right: auto;
        }
        .Fixed-row .col.s20 {
            width: 20%;
            margin-left: auto;
            left: auto;
            right: auto;
        }
        .Fixed-row .col.offset-s1 {
            margin-left: 8.3333333333%;
        }
        .Fixed-row .col.pull-s1 {
            right: 8.3333333333%;
        }
        .Fixed-row .col.push-s1 {
            left: 8.3333333333%;
        }
        .Fixed-row .col.offset-s2 {
            margin-left: 16.6666666667%;
        }
        .Fixed-row .col.pull-s2 {
            right: 16.6666666667%;
        }
        .Fixed-row .col.push-s2 {
            left: 16.6666666667%;
        }
        .Fixed-row .col.offset-s3 {
            margin-left: 25%;
        }
        .Fixed-row .col.pull-s3 {
            right: 25%;
        }
        .Fixed-row .col.push-s3 {
            left: 25%;
        }
        .Fixed-row .col.offset-s4 {
            margin-left: 33.3333333333%;
        }
        .Fixed-row .col.pull-s4 {
            right: 33.3333333333%;
        }
        .Fixed-row .col.push-s4 {
            left: 33.3333333333%;
        }
        .Fixed-row .col.offset-s5 {
            margin-left: 41.6666666667%;
        }
        .Fixed-row .col.pull-s5 {
            right: 41.6666666667%;
        }
        .Fixed-row .col.push-s5 {
            left: 41.6666666667%;
        }
        .Fixed-row .col.offset-s6 {
            margin-left: 50%;
        }
        .Fixed-row .col.pull-s6 {
            right: 50%;
        }
        .Fixed-row .col.push-s6 {
            left: 50%;
        }
        .Fixed-row .col.offset-s7 {
            margin-left: 58.3333333333%;
        }
        .Fixed-row .col.pull-s7 {
            right: 58.3333333333%;
        }
        .Fixed-row .col.push-s7 {
            left: 58.3333333333%;
        }
        .Fixed-row .col.offset-s8 {
            margin-left: 66.6666666667%;
        }
        .Fixed-row .col.pull-s8 {
            right: 66.6666666667%;
        }
        .Fixed-row .col.push-s8 {
            left: 66.6666666667%;
        }
        .Fixed-row .col.offset-s9 {
            margin-left: 75%;
        }
        .Fixed-row .col.pull-s9 {
            right: 75%;
        }
        .Fixed-row .col.push-s9 {
            left: 75%;
        }
        .Fixed-row .col.offset-s10 {
            margin-left: 83.3333333333%;
        }
        .Fixed-row .col.pull-s10 {
            right: 83.3333333333%;
        }
        .Fixed-row .col.push-s10 {
            left: 83.3333333333%;
        }
        .Fixed-row .col.offset-s11 {
            margin-left: 91.6666666667%;
        }
        .Fixed-row .col.pull-s11 {
            right: 91.6666666667%;
        }
        .Fixed-row .col.push-s11 {
            left: 91.6666666667%;
        }
        .Fixed-row .col.offset-s12 {
            margin-left: 100%;
        }
        .Fixed-row .col.pull-s12 {
            right: 100%;
        }
        .Fixed-row .col.push-s12 {
            left: 100%;
        }
        .Fixed-row .link_a {
            flex: 1;
            text-align: center;
        }
        .link_a img {
            vertical-align: middle!important
        }
        .single-row-ad {
            width: 100%;
        }
        .shadow-font {
            text-shadow: 1px 1px 1px #333;
        }
        #last_name {
            text-indent: 1rem;
            color: #fff;
        }
        .input-field i {
            position: absolute;
            right: 1rem;
            top: .5rem;
            color: #fff;
        }
        .icon-container i {
            font-size: 18px;
            margin-bottom: 0rem;
        }
        .container i img {
            margin-top: .4rem;
        }
        .icon-container span {
            display: block;
            padding: 6px 0;
        }
        .Fixed-card {}
        .Fixed-card {
            position: relative;
            background-color: #fff;
            display: block;
        }
        #Fixed_left_x .Fixed-card {
            box-shadow: none;
            border: 1px solid #eee;
        }
        .Fixed-card .Fixed-card-title {
            font-weight: 300;
        }
        .Fixed-card .Fixed-card-title.activator {
            cursor: pointer;
        }
        .Fixed-card.small,
        .Fixed-card.medium,
        .Fixed-card.large {
            position: relative;
        }
        .Fixed-card.small .Fixed-card-image,
        .Fixed-card.medium .Fixed-card-image,
        .Fixed-card.large .Fixed-card-image {
            max-height: 60%;
            overflow: hidden;
        }
        .Fixed-card.small .Fixed-card-image+.Fixed-card-content,
        .Fixed-card.medium .Fixed-card-image+.Fixed-card-content,
        .Fixed-card.large .Fixed-card-image+.Fixed-card-content {
            max-height: 40%;
        }
        .Fixed-card.small .Fixed-card-content,
        .Fixed-card.medium .Fixed-card-content,
        .Fixed-card.large .Fixed-card-content {
            max-height: 100%;
            overflow: hidden;
        }
        .Fixed-card.small .Fixed-card-action,
        .Fixed-card.medium .Fixed-card-action,
        .Fixed-card.large .Fixed-card-action {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
        }
        .Fixed-card.small {
            height: 300px;
        }
        .Fixed-card.medium {
            height: 400px;
        }
        .Fixed-card.large {
            height: 500px;
        }
        .Fixed-card.horizontal {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
        }
        .Fixed-card.horizontal.small .Fixed-card-image,
        .Fixed-card.horizontal.medium .Fixed-card-image,
        .Fixed-card.horizontal.large .Fixed-card-image {
            height: 100%;
            max-height: none;
            overflow: visible;
        }
        .Fixed-card.horizontal.small .Fixed-card-image img,
        .Fixed-card.horizontal.medium .Fixed-card-image img,
        .Fixed-card.horizontal.large .Fixed-card-image img {
            height: 100%;
        }
        .Fixed-card.horizontal .Fixed-card-image {
            max-width: 50%;
        }
        .Fixed-card.horizontal .Fixed-card-image img {
            max-width: 100%;
            width: auto;
        }
        .Fixed-card.horizontal .Fixed-card-stacked {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            -ms-flex: 1;
            flex: 1;
            position: relative;
        }
        .Fixed-card.horizontal .Fixed-card-stacked .Fixed-card-content {
            -webkit-box-flex: 1;
            -webkit-flex-grow: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
        }
        .Fixed-card.sticky-action .Fixed-card-action {
            z-index: 2;
        }
        .Fixed-card.sticky-action .Fixed-card-reveal {
            z-index: 1;
            padding-bottom: 64px;
        }
        .Fixed-card .Fixed-card-image {
            position: relative;
        }
        .Fixed-card .Fixed-card-image_X {
            height: 0;
            padding-bottom: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
        }
        .Fixed-card .Fixed-card-image img {
            display: block;
            position: relative;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            width: 100%;
        }
        #logo_X {
            position: relative;
            top: -28px;
            left: 10px;
            z-index: 100;
            flex: 0 0 60px;
            width: 60px;
            height: 60px;
            box-shadow: 0 2px 14px 7px rgba(0, 0, 0, 0.1);
        }
        .Fixed_left_main {
            padding-top: 4px;
        }
        .logo_X_pic {
            width: 26px;
            margin-left: 28px;
            margin-right: 5px;
            cursor: pointer;
        }
        .icon_seach_X {
            height: 20px;
            width: 20px;
            display: block;
            background-size: 500px;
            background-position: -159px -118px;
        }
        .logo_X_pic2 {
            width: 100px;
            margin-left: 5px;
            margin-top: 1px;
            height: 30px;
            cursor: pointer;
            box-sizing: border-box;
            z-index: 100;
        }
        .logo_X_pic2 img {
            width: 26px !important;
            height: 30px;
        }
        .logo_X_pic2 span {
            line-height: 30px;
        }
        #logo_X a {
            height: 100%;
            width: 100%;
            display: block;
        }
        #logo_X img {
            height: 100%;
            width: 100%;
            display: block;
        }
        .Fixed-card .Fixed-card-image .Fixed-card-title {
            color: #fff;
            position: absolute;
            bottom: 0;
            left: 0;
            max-width: 100%;
            padding: 24px;
        }
        .Fixed-card .Fixed-card-content {
            padding: 24px;
        }
        .Fixed-card .Fixed-card-content p {
            margin: 0;
            color: inherit;
        }
        .Fixed-card .Fixed-card-content .Fixed-card-title {
            display: block;
            line-height: 32px;
            margin-bottom: 8px;
        }
        .Fixed-card .Fixed-card-content .Fixed-card-title i {
            line-height: 32px;
        }
        .Fixed-card .Fixed-card-action {
            position: relative;
            background-color: inherit;
            border-top: 1px solid rgba(160, 160, 160, 0.2);
            padding: 6px 24px;
        }
        .Fixed-card .Fixed-card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating) {
            color: #ffab40;
            margin-right: 24px;
            -webkit-transition: color .3s ease;
            transition: color .3s ease;
            text-transform: uppercase;
        }
        .Fixed-card .Fixed-card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating):hover {
            color: #ffd8a6;
        }
        .Fixed-card .Fixed-card-reveal {
            padding: 24px;
            position: absolute;
            background-color: #fff;
            width: 100%;
            overflow-y: auto;
            left: 0;
            top: 100%;
            height: 100%;
            z-index: 3;
            display: none;
        }
        .Fixed-card .Fixed-card-reveal .Fixed-card-title {
            cursor: pointer;
            display: block;
        }
        .google-footer {
            position: fixed;
            left: 0;
            bottom: 0;
            z-index: 3;
            width: 100%;
            height: 46px;
            overflow: hidden;
            border-top: 1px solid #e8e8e8;
            background: rgba(255, 255, 255, .98);
        }
        .google-footer div.icon-container i {
            line-height: 34px !important;
            font-size: 2.4rem !important;
            height: 26px !important;
            margin: 0 !important;
        }
        .google-footer div.icon-container span {
            font-size: 1rem;
            line-height: 6px !important;
            height: 1.8rem;
            padding: 0;
        }
        .google-footer div.icon-container {
            margin: 0 !important;
        }
        .clearfix {
            clear: both;
            width: 100%;
            line-height: 0;
            font-size: 0;
        }
        .pr {
            position: relative;
        }
        .pa {
            position: absolute;
        }
        .overhide {
            overflow: hidden !important;
        }
        .no-m-t {
            margin-top: 0 !important;
        }
        .no-m-b {
            margin-bottom: 0 !important;
        }
        .no-m-l {
            margin-left: 0 !important;
        }
        .no-m-r {
            margin-right: 0 !important;
        }
        .no-p-t {
            padding-top: 0 !important;
        }
        .no-p-b {
            padding-bottom: 0 !important;
        }
        .no-p-l {
            padding-left: 0 !important;
        }
        .no-p-r {
            padding-right: 0 !important;
        }
        .m-x1 {
            margin: 0.65rem !important;
        }
        .m-t-x1 {
            margin-top: 0.65rem !important;
        }
        .m-t-1 {
            margin-top: 1rem !important;
        }
        .m-t-1x {
            margin-top: 1.2rem !important;
        }
        .m-t-2x {
            margin-top: 1.5rem !important;
        }
        .m-t-3x {
            margin-top: 2rem !important;
        }
        .m-b-x1 {
            margin-bottom: 0.65rem !important;
        }
        .m-b-1 {
            margin-bottom: 1rem !important;
        }
        .m-b-1x {
            margin-bottom: 1.2rem !important;
        }
        .m-b-2x {
            margin-bottom: 1.5rem !important;
        }
        .m-b-3x {
            margin-bottom: 2rem !important;
        }
        .m-l-x1 {
            margin-left: 0.65rem !important;
        }
        .m-l-1 {
            margin-left: 1rem !important;
        }
        .m-l-1x {
            margin-left: 1.2rem !important;
        }
        .m-l-2x {
            margin-left: 1.5rem !important;
        }
        .m-l-3x {
            margin-left: 2rem !important;
        }
        .m-r-x1 {
            margin-right: 0.65rem !important;
        }
        .m-r-1 {
            margin-right: 1rem !important;
        }
        .m-r-1x {
            margin-right: 1.2rem !important;
        }
        .m-r-2x {
            margin-right: 1.5rem !important;
        }
        .m-r-3x {
            margin-right: 2rem !important;
        }
        .b-t-1 {
            border-top: 1px solid rgba(160, 160, 160, 0.2);
        }
        .b-l-1 {
            border-left: 1px solid rgba(160, 160, 160, 0.2);
        }
        .b-r-1 {
            border-right: 1px solid rgba(160, 160, 160, 0.2);
        }
        .b-b-1 {
            border-bottom: 1px solid rgba(160, 160, 160, 0.2);
        }
        .b-1-a {
            border: 1px solid rgba(160, 160, 160, 0.2);
        }
        .w100 {
            width: 100% !important;
        }
        .p-x1 {
            padding: 0.65rem !important;
        }
        .p-t-x1 {
            padding-top: 0.65rem !important;
        }
        .p-t-1 {
            padding-top: 1rem !important;
        }
        .p-t-1x {
            padding-top: 1.2rem !important;
        }
        .p-t-2x {
            padding-top: 1.5rem !important;
        }
        .p-t-3x {
            padding-top: 2rem !important;
        }
        .p-b-x1 {
            padding-bottom: 0.65rem !important;
        }
        .p-b-1 {
            padding-bottom: 1rem !important;
        }
        .p-b-1x {
            padding-bottom: 1.2rem !important;
        }
        .p-b-2x {
            padding-bottom: 1.5rem !important;
        }
        .p-b-3x {
            padding-bottom: 2rem !important;
        }
        .p-l-x1 {
            padding-left: 0.65rem !important;
        }
        .p-l-1 {
            padding-left: 1rem !important;
        }
        .p-l-1x {
            padding-left: 1.2rem !important;
        }
        .p-l-2x {
            padding-left: 1.5rem !important;
        }
        .p-l-3x {
            padding-left: 2rem !important;
        }
        .p-r-x1 {
            padding-right: 0.65rem !important;
        }
        .p-r-1 {
            padding-right: 1rem !important;
        }
        .p-r-1x {
            padding-right: 1.2rem !important;
        }
        .p-r-2x {
            padding-right: 1.5rem !important;
        }
        .p-r-3x {
            padding-right: 2rem !important;
        }
        .f-x1 {
            /*-webkit-transform: scale(0.7,0.7) !important;*/
        }
        .tc {
            text-align: center;
        }
        .tl {
            text-align: left;
        }
        .tr {
            text-align: right;
        }
        .googleUI-head {
            width: 100%;
        }
        .googleUI-fuwenben {
            width: 100%;
        }
        .googleUI-shangpin {
            width: 100%;
        }
        .googleUI-jiaodiantu {
            width: 100%;
        }
        .googleUI-shangpinc {
            width: 100%;
        }
        .googleUI-tupian {
            width: 100%;
            overflow: hidden;
        }
        .googleUI-tupian img {
            width: 100%;
        }
        .googleUI-kongbai {
            width: 100%;
            clear: both;
            line-height: 0;
            font-size: 0;
            overflow: hidden;
            min-height: 10px;
        }
        .googleUI-fengxian {
            position: relative;
            width: 100%;
            height: 2.8rem;
        }
        .googleUI-fengxian-line {
            width: 100%;
            border-top: 1px solid #cbcbcb;
            top: 1.4rem;
            overflow: hidden;
            clear: both;
            line-height: 0;
            font-size: 0;
            position: absolute;
            left: 0;
        }
        .googleUI-caidan {
            width: 100%;
            margin-top: 1px;
        }
        .googleUI-caidan i img {
            width: 4rem;
            height: 4rem;
            max-width: 40px;
            max-height: 40px;
            vertical-align: middle !important;
        }
        .gray-text {
            position: relative;
            display: -webkit-box;
            margin: .6rem 5px;
            color: #848689;
            -webkit-box-pack: center;
        }
        .gray-layout {
            padding: 0 10px;
            background-color: #f5f5f5;
            z-index: 2;
            position: relative;
            display: block;
        }
        .gray-text:after {
            content: "";
            height: 1px;
            width: 100%;
            position: absolute;
            top: 50%;
            left: 0;
            background-color: #cbcbcb;
            -webkit-transform: scaleY(0.5);
        }
        .font_format {
            font-family: 'Arial';
        }
        .google-for-u {
            overflow: hidden;
            display: -webkit-box;
            color: #454545 !important;
            margin: 0.5rem !important;
            height: 1.5rem;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }
        .google-for-uP {
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }
        .category-list {
            width: 100%;
            overflow: auto;
        }
        .category-list-B {
            width: 100%;
            overflow: hidden;
            clear: both;
        }
        .owl-demo div.item img {
            display: block;
            width: 100%;
            height: auto;
        }
        .googleUI-footer-info {
            width: 100%;
            margin-bottom: 60px;
            margin-top: 32px;
        }
        .googleUI-footer-info p {
            text-align: center;
            margin: 0;
            padding: 0;
            line-height: 1.8rem;
            font-size: 1rem;
            color: #666;
        }
        .googleUI-head-blank {
            width: 100%;
            height: 52px;
            display: none;
        }
        .googleUI-white {
            background: #fff;
        }
        .googleUI-head-nav {
            width: 100%;
            box-sizing: border-box;
            margin: 4px 0;
        }
        .googleUI-head-nav i {
            display: block;
            width: 2rem;
            height: 2rem;
            margin: 0 auto;
            font-size: 14px;
            line-height: 2.5rem;
            color: #666;
        }
        .googleUI-head-nav span {
            color: #666;
        }
        .googleUi-head-nav-css {
            border-bottom: 1px solid #e8e8e8;
            position: relative;
        }
        .googleUi-head-nav-css-current {
            border-bottom: 2px solid #F44336;
        }
        .googleUi-head-nav-css-current i {
            color: #F44336;
        }
        .googleUi-head-nav-css-current span {
            color: #F44336;
        }
        .border-right-line {
            width: 1px;
            border-right: 1px solid #ddd;
            height: 2.3rem;
            position: absolute;
            right: 0;
            top: 1rem;
        }
        .googleUI-shangpin-none {
            width: 100%;
            height: 5rem;
            line-height: 5rem;
            text-align: center;
            background: #fff;
        }
        .z-depth-4 {
            position: fixed;
            z-index: 50;
            left: 0;
            top: 0;
            -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }
        .border-caidan {
            box-sizing: border-box;
            border-right: 1px solid #ddd;
            border-bottom: 1px solid #ddd;
        }
        .border-caidan:nth-child(4) {
            border-right: 0;
        }
        .border-caidan:nth-child(8) {
            border-right: 0;
        }
        .border-caidan:nth-child(12) {
            border-right: 0;
        }
        .border-caidan:nth-child(16) {
            border-right: 0;
        }
        .border-caidan:nth-child(20) {
            border-right: 0;
        }
        .material-search {
            display: inline-block;
            width: 1.2rem!important;
            height: 1.2rem!important;
            background-size: 100% 100%;
        }
        .googleUI-index-search {
            width: 100%;
            background: #fff;
            height: 4rem;
        }
        .googleUI-index-search-back-logo {
            width: 3.2rem;
            height: 4rem;
            position: relative;
        }
        .googleUI-index-search-back-logo i {
            display: block;
            width: 3.2rem;
            height: 4rem;
            background-size: 110%;
            position: absolute;
            left: 7px;
            top: 3px;
        }
        .googleUI-index-search-cat {
            width: 4.5rem;
            height: 4rem;
            float: right;
            display: block;
            color: rgba(0, 0, 0, 0.87);
        }
        .googleUI-index-search-cat i {
            cursor: pointer;
            display: block;
            width: 4.5rem;
            height: 4rem;
            line-height: 4rem;
            text-align: center;
            font-size: 2.8rem;
            margin-top: .15rem;
            color: rgba(0, 0, 0, .6)
        }
        .googleUI-index-search-txt {
            cursor: pointer;
            width: 100%;
            overflow: hidden;
            margin: .8rem 0
        }
        .googleUI-index-search-bg {
            position: relative;
            z-index: 1;
            width: 98%;
            height: 2.7rem;
            margin-left: 1%;
            border-radius: 4rem;
            background: #eee;
            overflow: hidden;
        }
        .googleUI-index-search-bg input {
            width: 75%;
        }
        .googleUI-index-search-bg input {
            outline: none;
            border: 0;
            background-color: #eee;
            box-sizing: border-box;
            height: 100%;
            color: #000000;
        }
        .icon_seach_X {
            float: left;
            margin: 4px 5px 0px 7px;
        }
        .googleUI-index-search-bg span {
            width: 2.8rem;
            height: 4rem;
            position: absolute;
            right: 0;
            top: 0;
            font-size: 1.9rem;
            color: #454545;
            display: none;
            text-align: center;
            line-height: 4rem;
        }
        .googleUI-index-banner {
            width: 100%;
            overflow: hidden;
        }
        .googleUI-index-company {
            width: 100%;
            background: #fff;
            border-bottom: 1px solid #e8e8e8;
            padding: .5rem 0
        }
        .googleUI-index-company div.qr_code {
            background-size: 30%;
            width: 100%;
            height: 5rem;
            cursor: pointer;
            box-sizing: border-box;
            border-left: 1px solid #ddd;
        }
        .googleUI-index-company div.fans_count {
            width: 100%;
            height: 5rem;
            box-sizing: border-box;
            border-left: 1px solid #ddd;
            text-align: center;
            color: #666666;
        }
        .googleUI-index-company div.fans_count p {
            margin-bottom: 0rem;
            font-size: 1.5rem;
            margin-top: .65rem;
            font-weight: 600;
        }
        .googleUI-index-company div.com_info {
            width: 100%;
            height: 4rem;
            position: relative;
        }
        .googleUI-index-company div.com_info div.com_info_top {
            width: 100%;
            height: 5rem;
            top: -1.8rem;
            position: absolute;
        }
        .com_info_top_logo {
            width: 60px;
            height: 60px;
            box-sizing: border-box;
            border: 1px solid #ddd;
            border-radius: 2px;
            background: #fff;
            float: left;
            margin-left: 1rem;
        }
        .com_info_top_logo a {
            height: 100%;
            width: 100%;
            display: block;
        }
        .com_info_top_logo a img {
            height: 100%;
            width: 100%;
        }
        .googleUI-index-company div.com_info div.col_info_bottom {
            width: 90%;
            position: absolute;
            bottom: -1.4rem;
            left: 1.3rem;
            height: 2rem;
            font-size: 1.2rem;
        }
        .googleUI-index-company div.com_info div.col_info_bottom span {
            display: inline-block;
            line-height: 2rem;
            float: left;
        }
        .googleUI-index-company div.com_info div.col_info_bottom span i.go {
            font-size: 1.6rem;
            vertical-align: middle
        }
        .com_info_top_vip {
            width: 30px;
            height: 30px;
            float: left;
            padding: 2.2rem .2rem 0 .5rem;
        }
        .com_info_top_vip img {
            width: 100%;
        }
        .com_info_top_shop {
            width: 30px;
            float: left;
            height: 30px;
            padding-top: 23px;
            margin-left: 2px;
        }
        .com_info_top_shop img {
            width: 100%;
        }
        .index-Modal {
            display: none;
            width: 80%;
            border-radius: 1rem;
            background: #fff;
            position: fixed;
            z-index: 310;
            padding-bottom: 15px;
            left: 10%;
            top: 50%;
            transform: translateY(-50%);
        }
        .index-Modal-layer {
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .65);
            position: fixed;
            z-index: 300;
            display: none;
            top: 0;
            left: 0;
            cursor: pointer;
        }
        .shopQRcode,
        .isdeposits,
        .enterpriseShop {
            width: 100%;
            height: 100%;
            position: relative;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        .shopQRcode-bottom {
            border-top: 1px solid #ddd;
            text-align: center;
            line-height: 4rem;
            height: 4rem;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            font-size: 1.2rem;
            color: #fa5d5d;
        }
        .shopQRcode-top {
            margin: 0 0 .5rem 0;
            padding: 1rem 0 0 0;
            text-align: center;
            font-size: 1.2rem;
        }
        .shopQRcode-middle {
            width: 60%;
            margin: 0 auto;
            background: #f7f7f7;
            padding: .4rem .4rem 0rem .4rem;
            text-align: center;
            box-sizing: border-box;
            margin-top: 1.5rem
        }
        .shopQRcode-middle img {
            width: 100%;
        }
        .shopQRcode-middle p {
            margin: 0;
            padding: .2rem 0;
            font-size: 1.2rem
        }
        .deposits_logo {
            width: 50%;
            margin: 0 auto;
            padding-top: 2rem;
            text-align: center;
        }
        .deposits_logo img {
            width: 42%;
        }
        .deposits_note {
            width: 96%;
            margin: 0 auto;
        }
        .deposits_note_title {
            font-size: 1.2rem;
            margin: .5rem 0;
            text-align: center;
        }
        .deposits_note_title_top {
            text-align: left;
            line-height: 2rem
        }
        .isdeposits_x .statement,
        .enterpriseShop_x .statement {
            display: inline-block;
            width: 100%;
            padding: 0 10px;
            color: #999;
        }
        .isdeposits_x .statement {
            padding-bottom: 3px;
        }
        .enterpriseShop_x .statement {
            padding: 5px 10px;
            padding-bottom: 0;
            margin-bottom: 8px;
        }
        .enterpriseShop_x .company_name {
            display: inline;
            color: #fa5d5d;
        }
        .enterpriseShop_x .deposits_note_info_tit {
            color: #333;
            padding: 5px 10px;
            border-bottom: 1px dotted #ddd;
        }
        .enterpriseShop_x .hint {
            display: inline;
        }
        .isdeposits_x .tit {
            font-size: 14px;
            color: #333;
            margin-bottom: 5px;
            border-bottom: 1px dotted #ddd;
            padding: 3px 10px;
        }
        .deposits_note_info {
            text-align: left;
            border: 1px dotted #ddd;
            margin: 0 4%;
            color: rgba(0, 0, 0, .65)
        }
        .deposits_note_info span {
            display: inline-block;
        }
        .deposits_note_info a {
            color: #00b0ff;
            text-decoration: underline;
        }
        .enterpriseShop {
            text-align: center;
            padding-top: .2rem;
        }
        .enterpriseShop .shop_type {
            margin-bottom: 0;
        }
        .enterpriseShop .deposits_note_title {
            font-size: 14px;
        }
        .enterpriseShop img {
            width: 50px;
            margin: 0 auto;
            display: block;
        }
        .enterpriseShop .tit {
            margin-top: 10px;
        }
        .shop_hight_div {
            width: 100%;
            box-sizing: border-box;
            padding: 0rem 1.7rem;
            overflow-x: scroll
        }
        .text-detail {
            height: 37px;
            line-height: 37px;
            background-color: #f94f4f;
            border-radius: 5px;
            margin: 0 10%;
            margin-top: 15px;
        }
        .text-detail a {
            color: #fff;
            height: 100%;
            width: 100%;
            display: block;
        }
        .shop_hight_tag {
            margin: 0;
            margin-top: 10px;
            text-align: left;
            text-indent: 2rem;
            font-size: 1rem;
            color: #333;
        }
        .shop_hight_icon img {
            width: 100%;
        }
        .shop_hight_icon a {
            color: #00b0ff;
            text-decoration: underline;
            padding-top: 2rem;
        }
        .index-Modal-search {
            width: 100%;
            background: #fff;
            position: fixed;
            z-index: 15;
            height: 100%;
            box-sizing: border-box;
            padding: 10px;
            overflow: hidden;
        }
        .index-Modal-Search-Tap {
            width: 100%;
            height: 39px;
            overflow: hidden;
        }
        .index-Modal-Search-Tap div {
            width: 96px;
            height: 38px;
            text-align: center;
            line-height: 38px;
            float: left;
            color: #ccc;
            background: #fff;
            border: 1px solid #ddd;
            border-bottom: none;
            position: relative;
        }
        .index-Modal-Search-Tap div span {
            position: absolute;
            left: 45%;
            top: 4%;
            z-index: 9999
        }
        .index-Modal-Search-Tap div.iMSTa {
            font-size: 12px;
            position: relative;
        }
        .index-Modal-Search-Tap div.iMSTa:after {
            font-size: 12px;
            content: '';
            position: absolute;
            left: 59px;
            top: 10px;
            width: 55px;
            height: 55px;
            background-color: #fff;
            border-top: 1px solid #ddd;
            transform: rotate(60deg);
            -ms-transform: rotate(60deg);
            /* Internet Explorer */
            -moz-transform: rotate(60deg);
            /* Firefox */
            -webkit-transform: rotate(60deg);
        }
        .index-Modal-Search-Tap div.iMSTb {
            font-size: 12px;
            position: relative;
        }
        .index-Modal-Search-Tap div.iMSTb:after {
            content: '';
            position: absolute;
            left: 59px;
            top: 10px;
            width: 55px;
            height: 55px;
            background-color: #fff;
            border-top: 1px solid #ddd;
            transform: rotate(60deg);
            -ms-transform: rotate(60deg);
            /* Internet Explorer */
            -moz-transform: rotate(60deg);
            /* Firefox */
            -webkit-transform: rotate(60deg);
        }
        .index-Modal-Search-Tap div.iMSTa.current {
            color: #fff;
            background-color: #ddd;
            z-index: 20;
            border-top-left-radius: 7px;
        }
        .index-Modal-Search-Tap div.iMSTa.current:after {
            color: #fff;
            background-color: #ddd;
            z-index: 20
        }
        .index-Modal-Search-Tap div.iMSTb.current {
            z-index: 10;
            color: #fff;
            margin-left: 7px;
            background-color: #ddd;
            border-top-left-radius: 7px;
        }
        .index-Modal-Search-Tap div.iMSTb.current:after {
            color: #fff;
            background-color: #ddd;
            z-index: 20
        }
        .index-Modal-Search-main {
            width: 100%;
            overflow: hidden;
            margin-bottom: 1rem;
        }
        .iMSm-left {
            width: 80%;
            ;
            box-sizing: border-box;
            border: 1px solid #ddd;
            overflow: hidden;
            float: left;
            position: relative;
        }
        .iMSm-left input {
            width: 80%;
            border: 0;
            height: 35px;
            line-height: 35px;
            font-size: 1.4rem;
            olor: #333;
            z-index: 14;
        }
        .iMSm-right {
            width: 55px;
            float: right;
            height: 35px;
            line-height: 35px;
        }
        .iMSm-right div {
            width: 100%;
            text-align: center;
            border-radius: 2px;
        }
        .Event-cancel-search {
            background: #f94f4f;
            color: #fff;
        }
        .Event-go-result {
            background: #f94f4f;
            display: none;
            color: #fff;
        }
        .index-googleUI {
            width: 100%;
        }
        .clear-search-text {
            width: 3.5rem;
            height: 3.5rem;
            display: block;
            z-index: 15;
            position: absolute;
            right: 0;
            top: 0;
            font-size: 2.2rem;
            display: none;
            color: #555;
            text-align: center;
            line-height: 3.5rem;
        }
        .index-Search-div {
            width: 100%;
            display: none;
        }
        .index-Search-div1 .iSd-link a {
            /* margin: 0;
    width: 18%;
    text-align: center;
    padding: 0;
    margin-bottom: 3px;*/
        }
        .iSd-title {
            margin: 0;
            padding: 0;
            line-height: 3rem;
            font-size: 14px;
            color: #333;
            color: #666;
        }
        .iSd-link {
            width: 100%;
            overflow: hidden;
        }
        .iSd-link a {
            height: 25px;
            line-height: 25px;
            display: inline-block;
            max-width: 100px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            vertical-align: middle;
            color: #666;
            padding: 0 5px;
            background: #eee;
            margin-right: .4rem;
            margin-bottom: .8rem;
            border: 1px solid #ddd;
        }
        .iMSm-left-icon {
            width: 3.5rem;
            height: 3.5rem;
            display: block;
            z-index: 15;
            position: absolute;
            left: -.5rem;
            top: 0;
            font-size: 2.2rem;
            color: #555;
            text-align: center;
            line-height: 4rem;
        }
        .In_a_batch {
            margin-top: 10px;
        }
        .In_a_batch i {
            height: 15px;
            width: 15px;
            background-size: 700px;
            background-position: -411px -173px;
            background-repeat: no-repeat;
            display: inline-block;
            float: left;
            margin-right: 5px;
            margin-top: 1px;
        }
        #Fixed_left_x {
            width: 100%;
            overflow-x: hidden;
            background-color: #f6f6f6;
        }
        #Fixed_left_x .col_info_bottom {
            left: 10px;
        }
        .all_goods .googleUI-search-sort {
            border-top: none;
        }
        .all_goods .loading_img img {
            width: 20px;
            margin: 0 auto;
            display: block;
            margin-top: 20px;
        }
        .all_goods .loading_img {
            display: none;
        }
        .all_goods .googleUI-search-sort .item {
            width: 25%;
            float: left;
            cursor: pointer;
        }
        .all_goods .google-sort .filtrate_up span .i-up {
            color: #f94f4f;
        }
        .all_goods .google-sort .filtrate_donw span .i-down {
            color: #f94f4f;
        }
        .all_goods .new_goods img,
        .all_goods .marketing_campaign img {
            display: block;
            width: 80px;
            margin: 20px auto;
            margin-top: 70px;
        }
        .all_goods .new_goods,
        .all_goods .marketing_campaign {
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-bottom: 100px;
        }
        .all_goods .new_goods,
        .all_goods .marketing_campaign {
            display: none;
        }
        /*搜索页面*/
        .index-Modal-search .announcement {
            width: 280px;
            border-radius: 4px;
            margin: 30px auto;
            border: 1px solid #d8d8d8;
            overflow: hidden;
            position: relative;
            display: none;
        }
        .index-Modal-search .announcement .announcement_tit {
            position: relative;
            height: 65px;
            background-size: contain;
            background-repeat: no-repeat;
        }
        .index-Modal-search .announcement .announcement_tit img {
            width: 100%;
        }
        .index-Modal-search .announcement .announcement_tit p {
            color: #fff;
            font-size: 18px;
            position: absolute;
            z-index: 10;
            width: 100%;
            text-align: center;
            margin-top: 23px;
            top: 0;
        }
        .index-Modal-search .announcement .announcement_inner {
            padding: 20px;
            color: #333;
        }
        .index-Modal-search .announcement .announcement_inner p {
            text-indent: 2rem;
            line-height: 20px;
        }
        .index-Modal-search .announcement .announcement_inner .text {
            text-align: right;
            font-size: 14px;
            margin: 15px 0;
        }
        .index-Modal-search .announcement .announcement_inner .footer img {
            display: block;
            margin: 0 auto;
            width: 130px;
            margin-bottom: 10px;
            margin-top: 20px;
        }
        .index-Modal-search .announcement .announcement_inner .text {
            margin-top: 20px;
        }
        .index-Modal-search .announcement .announcement_inner .announcement_pic {
            margin: 15px 0;
        }
        .index-Modal-search .announcement .announcement_inner .announcement_pic li {
            height: 50px;
            width: 50px;
            border-radius: 50%;
            float: left;
            margin: 5px;
        }
        .index-Modal-search .announcement .announcement_inner .announcement_pic li img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
        /*商品样式*/
        #Fixed-card-image-x {
            height: 0;
            padding-bottom: 100%;
        }
    }

</style>
<style scoped>
    .asd_uy_dftx {
        position: relative
    }

    .lunbo_s {
        height: 9.2rem;
    }

    .lunbo_s img {
        width: 100%;
        height: 100%;
    }

    .df_jgh_drtx img {
        z-index: 100;
        flex: 0 0 60px;
        width: 100%;
        width: 60px;
        height: 60px;
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

    .Sdf_jh_eert {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%;


    }

</style>
