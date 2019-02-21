<!--购物车-->
<template>
	<div class="dsfrtxsc">
		<section class="gwc_oiwer">
			<header class="mui-bar mui-bar-nav asd_uy_dftx">

				<h1 class="mui-title cf fz15">全部商品</h1> 
				<span v-if="!shulu_d">
        <span class="mui-pull-right cf fz14" v-if="sd_ser==0" @click="sd_ser=1">
            编辑
        </span>
				<span class="mui-pull-right cf fz14" v-else @click="sd_ser=0">
            完成
        </span>
				</span>
			</header>

			<div class="mui-content dsf_d_drt " style="margin-bottom:40px">
				<!--        没有购物-->

				<section class="dsf_hg_dsdr show mb40" v-if="shulu_d">
					<p class="cen mt100">
						<i class="f_i sdf_kjhg_rert"></i>
					</p>
					<p class="cen mt20">
						购物车空空的！
					</p>
					<p class="mt20 cen">
						<a class="mui-btn bgls " @click="hf('fenlei')">去选购商品</a>
					</p>
                    <p class="qc"></p>
				</section>
				<!--        有商品1111-->
				<section class="dsf_hg_dsdr show" v-else>
					<section class="dfg_jh_row bgff mb10" v-for="(gl,idx) in gwc_l" v-if="gl.gwc_list">
						<p class="dsf_jh_row pd">
							<span class="dsf_jhsd yj cz " :class="gl.cls" @click="gouxuna(idx)">
                        <i class="dx icon-gou fz14 "></i>
                    </span>
							<span class="ml5">
<!--                        <i class="f_i iy_sd_sd"></i>-->
                        <span class="z3">{{gl.name}}</span>
							<i class="dx  icon-right fz12"></i>
							</span>
						</p>

						<ul>
							<li class="pd pt10 pm10 btm mui-row pr" v-for="(gt,idxer) in gl.gwc_list">
								<span class="dsf_jhsd yj cz fl mt30" :class="gt.cls" @click="zigoxuaun(idx,idxer)">
                          <i class="dx icon-gou fz14"></i>
                    </span>
								<p class="cp_icon_sdf fl ml10 pr" @click="hf('commodity_details',{goods_id:gt.goods_id})">
									<img :src="gt.img">
                                    <span class="fz12 d_jh_dertxc" v-if="gt.stock<10||gt.num>=gt.stock">仅剩{{gt.stock}}件</span>
								</p>

								<section class="ov pl10 mui-row pr">
									<section class="mui-col-xs-10" @click="hf('commodity_details',{goods_id:gt.goods_id})">
										<p class="dianer z3 sdf_jh_dertx">{{gt.name}}</p>
										<p class="fz12 dian df_der_ert">
											{{gt.leier}}
										</p>

										<p class="red mt2">
											￥ <span class="fz16" v-html="price_guo(gt.money)"></span>
										</p>
									</section>
									<section class="ov tr">
										<i class="dx icon-bianji fz16" @click="gt.bianji=true;list_idx=idxer"></i>
										<p class="fz12 dsf_hg_dser">
											x{{gt.num}}
										</p>
									</section>
									<section class="dsf_jh_rr_s" v-if="gt.bianji">
										<section class="dsf_jh_deer ">

											<section class="yj4 br sdf_hjgh_sdr box ov">
												<span class="dsf_jhh_s box_a   aa" @click="gt.num>1?gt.num--:1"><i class="dx icon-jian1 z3 fz14"></i></span>
												<section class="box_a dsf_juh_er blm brm">
													<input type="tel" v-model="gt.num" @blur="!gt.num?gt.num=1:gt.num=gt.num.replace(/[^\d]/g,'')" maxlength="5">
												</section>
                                                <span class="dsf_jhh_s box_a  ab z9" v-if="gt.num>=gt.stock"><i class="
                            dx icon-jia z3"></i></span>
												<span class="dsf_jhh_s box_a  ab" @click="gt.num++" v-else><i class="
                            dx icon-jia z3"></i></span>
											</section>
<!--                                                11111-->
											<section class="yj4 br sdf_hjgh_sdr mt20 fz12 z9 pl10 dian pr pr20" @click="tang_sd(gt,idxer)" v-if="gt.lei">
												{{gt.leier}} <i class="dx  icon-down df_jh_wetx"></i>

											</section>

										</section>
									</section>

								</section>
								<!--                    完成按钮-->
								<section class="ddf_jh_wer bgls" v-if="gt.bianji">
									<p class="h100 cz_w w100">
										<a class="cz_a cf" @click="wancheng(gt)">完成</a>
									</p>
								</section>

							</li>
						</ul>

					</section>

					<section class="dsf_jh_drf btm bgff  mui-row ov" v-if="sd_ser==0">
						<section class="mui-col-xs-9 pd">

							<span class="dsf_jhsd yj cz " @click="dibu_qx" :class="dibu_a">
                        <i class="dx icon-gou fz14 "></i>
                    </span>

							<span class="fz12 ml5">全选</span>
							<span class="fz12 z9 fr">不含运费
                        <span class="fz14 z6 f">合计:<span class="red ">￥
                            <span v-html="price_guo(huoquzong().jiage)" class="fz16"></span>
							</span>
							</span>
							</span>

						</section>
						<section class="mui-col-xs-3 bgls fz16 cen" @click="jiesuan_s">
							结算<span v-if="huoquzong().num" class="fz12">({{huoquzong().num}})</span>
						</section>

					</section>

					<section class="dsf_jh_drf btm bgff  mui-row pd" v-else>
						<section class="mui-col-xs-5 ">
							<span class="dsf_jhsd yj cz " @click="dibu_qx" :class="dibu_a">
                        <i class="dx icon-gou fz14 "></i>
                    </span>
							<span class="fz12 ml5">全选</span>

						</section>
						<section class="mui-col-xs-7 tr dfs_jgh_der">
							<a class="mui-btn ds_jg_dser" @click="yiruguc">移入收藏</a>
							<a class="mui-btn ml10 delect_bvtn" @click="dele_s">删除</a>
						</section>

					</section>

				</section>

			</div>

 

			<section v-if="is_loadin">
				<section class="bgff" v-if="list_inlength>0&&sd_jh_dert">
					<p class="dsf_jh_row pd z3">
						失效商品 {{list_inlength}}件
						<span class=" fr" @click="qingkong">

                <i class="dx icon-lajixiang red b"></i>
    </span>
					</p>

					<section v-for="(gl,idx) in gwc_l">
						<ul>
							<li class="pd pt10 pm10 btm mui-row pr" v-for="(gt,idxer) in gl.list_invalid">
								<span class="shixiao fz12  cz fl mt30">
    失效
                    </span>
								<!--
                      <span class="dsf_jhsd yj cz fl mt30" :class="gt.cls" @click="zigoxuaun(idx,idxer)">
                          <i class="dx icon-gou fz14"></i>
                    </span>
-->
								<p class="cp_icon_sdf fl " @click="hf('commodity_details',{goods_id:gt.goods_id})">
									<img :src="gt.img">
								</p>

								<section class="ov pl10 mui-row pr">
									<section class="" @click="hf('commodity_details',{goods_id:gt.goods_id})">
										<p class="dianer z3 sdf_jh_dertx">{{gt.name}}</p>
										<p class="fz12 dian df_der_ert">

										</p>

										<p class="red mt2 fz12">

											{{gt.error_code|shixiao}} <span class="ls fr fz12" @click.stop="efficacy(gt.rec_id)">移入收藏</span>
										</p>
									</section>

								</section>

							</li>
						</ul>

					</section>

				</section>

			</section>
			<loadin v-else></loadin>

<!--
              	<advertising :position_id="6" class="mt10"></advertising>
            <showcase :position_id="6" class="mt10"></showcase>
-->


            <section v-if="popupVisible">
            <lijigoumaidcc :popupVisible="popupVisible" @close="popupVisible=false;guce_rt=''" :purchase="purchase" @caozuo="caozuo" :isgm="'true'" :guce_rt="guce_rt"></lijigoumaidcc>
                </section>

		</section>

		<dibu :kjh_s="2" :gwcw="gwcw"></dibu>

<!--        限购或库存不足弹出-->
        <pup_tishi :is_s="is_s" :type="type" :data_list="data_list" @sd_ert="is_s=false"></pup_tishi>
	</div>
</template>
<script>
    import {
        Toast
    } from 'mint-ui';
    import dibu from "../components/dibu.vue"
    import lijigoumaidcc from "../components/lijigoumaidcc.vue"
    import loadin from "../components/loadin.vue"
    import pup_tishi from "../components/pup_tishi.vue"
    import advertising from "../components/advertising.vue"
    import showcase from "../components/showcase.vue"


    import {
        MessageBox
    } from 'mint-ui';
    export default {
        data() {
            return {
                is_s: false,
                type: "",
                data_list: "",
                is_loadin: "",
                shulu_d: false,
                dibu_a: "",
                popupVisible: false,
                guce_rt: "",
                purchase: "", //立即购买弹出层的数据
                sd_ser: 0, //0默认状态  1编辑状态
                list_idx: 0, //点击的数组下标
                gwcxg: {}, //购物车修改的数据
                gwcw: 0,
                sd_jh_dert: true,
                list_inlength: 0,
                gwc_l: [{
                    "name": "",
                    cls: "",
                    gwc_list: [],
                    list_invalid: []

                }],
            }
        },
        components: {
            dibu: dibu,
            lijigoumaidcc: lijigoumaidcc,
            loadin: loadin,
            pup_tishi: pup_tishi,
            advertising: advertising,
            showcase
        },
        methods: {
            gouxuna(idx) { //勾选
                if (this.gwc_l[idx].cls) {
                    this.gwc_l[idx].cls = ""
                    this.gwc_l[idx].gwc_list.map(function(a) {
                        a.cls = ""
                    })
                    this.dibu_a = ""
                } else {
                    this.gwc_l[idx].cls = "act"
                    this.gwc_l[idx].gwc_list.map(function(a) {
                        a.cls = "act"
                    })
                    this.dibu_a = "act"
                }

            },
            sddrrtr() {
                console.log(this.gt.num);
            },
            zigoxuaun(idx, idxer) { //列表的勾选
                this.dibu_a = ""
                if (this.gwc_l[idx].gwc_list[idxer].cls) {
                    this.gwc_l[idx].gwc_list[idxer].cls = ""
                    this.gwc_l[idx].cls = ""
                } else {
                    this.gwc_l[idx].gwc_list[idxer].cls = "act"
                    var sd_sr = 0
                    this.gwc_l[idx].gwc_list.map(function(a) {
                        if (a.cls) {
                            sd_sr++
                        }
                    })
                    if (sd_sr == this.gwc_l[idx].gwc_list.length) { //判断是否全选
                        this.gwc_l[idx].cls = "act"
                        this.dibu_a = "act"
                    }

                }

            },
            huoquzong() { //获取总价
                var zonbgjia = {}
                zonbgjia.jiage = 0
                zonbgjia.num = 0
                this.gwc_l.map(function(a) {
                    a.gwc_list.map(function(b) {
                        if (b.cls) { //判断是否选中
                            zonbgjia.jiage += (b.num * b.money)
                            zonbgjia.num++
                        }
                    })
                })
                return zonbgjia
            },
            dibu_qx() { //底部的全选
                if (this.dibu_a) {
                    this.dibu_a = ""
                    this.gwc_l.map(function(a) {
                        a.cls = ""
                        a.gwc_list.map(function(b) {
                            b.cls = ""
                        })
                    })
                } else {
                    this.dibu_a = "act"

                    this.gwc_l.map(function(a) {
                        a.cls = "act"
                        a.gwc_list.map(function(b) {
                            b.cls = "act"
                        })
                    })

                }
            },
            dele_s() { //编辑的删除按钮触发
                MessageBox.confirm('确定要删除吗?', '').then(action => {
                    if (action) {
                        let deled = []
                        this.gwc_l.map(function(a) {
                            a.gwc_list.map(function(b, x) {
                                if (b.cls) {
                                    deled.push(b.rec_id)
                                }
                            })
                        })
                        let s_del = {},
                            th = this
                        s_del.token = this.token
                        s_del.rec_id = deled.join(",")
                        this.shopping_del(s_del)

                    }
                });
            },
            qingkong() { //失效 的垃圾箱按钮触发
                let rec_id = []
                this.gwc_l[0].list_invalid.map(a => {
                    rec_id.push(a.rec_id)
                })
                this.sd_jh_dert = false
                //                console.log(3333);
                let s_del = {}
                s_del.token = this.token
                s_del.rec_id = rec_id.join(",")
                this.shopping_del(s_del)
            },
            shopping_del(s_del) { //删除商品
                let th = this
                this.post("shopping/del", s_del, function(data) {
                    th.carnumber(function(num) {

                        $(".jh_dfd_derrt").text(num)
                    })

                    th.ge_t("user/carnumber", {
                        token: th.token
                    }, function(datae) {

                        th.$store.state.carnumber = datae.data.number
                    })


                    th.getgwc()
                })
            },

            yiruguc() { //编辑的移入收藏按钮触发
                let remove = []
                this.gwc_l.map(function(a) {
                    a.gwc_list.map(function(b, x) {
                        if (b.cls) {
                            remove.push(b.rec_id)
                        }
                    })
                })
                let s_del = {},
                    th = this
                s_del.token = this.token
                s_del.rec_id = remove.join(",")
                if (!s_del.rec_id) {
                    return
                }
                this.collect(s_del)

            },
            efficacy(rec_id) { //失效的收藏按钮触发

                let s_del = {},
                    th = this
                s_del.token = this.token
                s_del.rec_id = rec_id
                this.collect(s_del)

            },

            collect(s_del) { //移入收藏
                let th = this
                this.post("shopping/remove", s_del, function() {
                    th.getgwc()
                    Toast({
                        message: '移入收藏成功',
                        iconClass: 'dx icon-gou fz30'
                    });
                })
            },

            jiesuan_s() { //结算按钮触发
                var sd_jh_ds = false,
                    deled = []
                this.gwc_l.map(function(a) {
                    a.gwc_list.map(function(b) {
                        if (b.cls) { //判断是否选中
                            sd_jh_ds = true
                            deled.push(b.rec_id)
                        }
                    })
                })
                if (!sd_jh_ds) {
                    MessageBox.alert("请选择商品", "提示");
                } else {
                    deled = deled.join(",")
                    let checkout = {},
                        th = this
                    checkout.token = this.token
                    checkout.rec_id = deled
                    this.post("shopping/checkout", checkout, function(data) {
                        if (data.error_type == 2) { //库存不足
                            th.type = data.error_type
                            th.data_list = data.goods_list
                            th.is_s = true
                            return
                        }

                        if (data.error_type == 1) { //限购

                            th.type = 1
                            th.data_list = []
                            th.data_list.push(data)
                            th.is_s = true
                            return
                        }
                        th.hf('order_formqueren', checkout)
                    })





                    //                    this.hf('order_formqueren')
                }
            },
            getgwc(cls_e) { //获取购物车列表
                let shop = {},
                    th = this
                shop.token = this.token
                th.gwc_l[0].gwc_list = []
                th.gwc_l[0].list_invalid = []
                this.post("shopping/index", shop, function(data) {
                    $(".gwc_oiwer").addClass("show")
                    th.is_loadin = true
                    if (data.list.length <= 0) {
                        th.shulu_d = true

                    }
                    console.log(data.list);
                    if (data.list.length > 0) {
                        try {
                            cls_e(data.list.length)
                        } catch (e) {

                        }
                        data.list.map(a => { //没有失效的商品
                            let gwc_sf = {}
                            gwc_sf.goods_id = a.goods_id
                            gwc_sf.rec_id = a.rec_id
                            gwc_sf.img = a.goods_thumb
                            gwc_sf.name = a.goods_name
                            gwc_sf.money = a.goods_price
                            gwc_sf.num = a.goods_number
                            gwc_sf.market_price = a.market_price
                            gwc_sf.cls = ""
                            gwc_sf.bianji = ""
                            gwc_sf.lei = a.goods_mn
                            gwc_sf.leier = a.goods_attr
                            gwc_sf.stock = a.stock
                            th.gwc_l[0].gwc_list.push(gwc_sf)
                        })
                    }
                    if (data.list_invalid.length > 0) {
                        th.list_inlength = data.list_invalid.length
                        data.list_invalid.map(a => { //失效的商品
                            let gwc_sf = {}
                            gwc_sf.goods_id = a.goods_id
                            gwc_sf.rec_id = a.rec_id
                            gwc_sf.img = a.goods_thumb
                            gwc_sf.name = a.goods_name
                            gwc_sf.money = a.goods_price
                            gwc_sf.num = a.goods_number
                            gwc_sf.market_price = a.market_price
                            gwc_sf.cls = ""
                            gwc_sf.error_code = a.error_code
                            gwc_sf.bianji = ""
                            gwc_sf.lei = a.goods_mn
                            gwc_sf.leier = a.goods_attr
                            th.gwc_l[0].list_invalid.push(gwc_sf)
                        })
                    }

                })
            },
            tang_sd(data, idx) { //显示下拉
                this.gwcxg = {}
                this.list_idx = idx

                let p_info = {},
                    th = this
                p_info.goods_id = data.goods_id
                p_info.token = this.token
                this.post('product/info', p_info, function(data_er) {
                    let dat_fo = {}
                    dat_fo.goods_id = data.goods_id
                    dat_fo.shop_price = data.market_price
                    dat_fo.market_price = data.market_price
                    dat_fo.goods_thumb = data.img
                    dat_fo.properties = data_er.properties
                    dat_fo.goods_number = data.goods_number
                    dat_fo.goods_attr = data.lei
                    th.popupVisible = true
                    th.guce_rt = true;
                    th.purchase = dat_fo
                    console.log(JSON.stringify(th.purchase));
                })
            },
            caozuo(data, idx) { //sku的确定按钮触发
                this.popupVisible = false
                this.guce_rt = ""
                this.gwcxg.goods_attr_id = data.goods_attr_id
                this.gwc_l[0].gwc_list[this.list_idx].leier = data.leier

            },
            wancheng(gt) { //完成按钮触发
                gt.bianji = false;
                let gwc_dat = this.gwc_l[0].gwc_list[this.list_idx],
                    th = this

                this.gwc_l[0].gwc_list.map(a => {
                    console.log(a.num);
                })
                this.gwcxg.rec_id = gwc_dat.rec_id
                this.gwcxg.token = this.token
                this.gwcxg.goods_number = gwc_dat.num

                this.post("shopping/edit", this.gwcxg, function(a) {
                    Toast({
                        message: '修改成功',
                        iconClass: 'dx icon-gou fz30'
                    });
                    th.carnumber(function(num) {
                        $(".jh_dfd_derrt").text(num)
                    })
                    th.gwcw++
                }, '', function() {
                    th.gwc_l[0].gwc_list[th.list_idx].num = th.gwc_l[0].gwc_list[th.list_idx].stock
                })

            }
        },
        computed: {
            getshopinfo() {
                return this.$store.state.shopinfo;
            }
        },
        watch: {
            getshopinfo(val) {
                this.gwc_l[0].name = val.shop_name
            }
        },
        mounted() {
            this.Title("购物车")


        },
        beforeRouteLeave(to, from, next) {

            // 设置下一个路由的 meta
            console.log(to.path);
            if (to.path == "/commodity_details") {
                to.meta.keepAlive = false
            }

            next();
        },
        activated() {
            let th = this
            this.Title("购物车")
            this.getgwc(function(data) {
                if (data > 0) {
                    th.shulu_d = false
                }
            })
            this.carnumber(function(num) {
                $(".jh_dfd_derrt").text(num)
            })

        }
    }

</script>
<style scoped>
    .d_jh_dertxc {
        background: rgba(0, 0, 0, 0.4);
        color: #fff;
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 100%;
        text-align: center;
    }

    .shixiao {
        color: #fff;
        background: #989898;
        border-radius: 10px;
        padding: 1px 8px;
        margin-left: -10px;
        transform: scale(0.8)
    }

    .df_der_ert {
        min-height: 22px;
    }

    .gwc_oiwer {
        display: none
    }

    .asd_uy_dftx {
        background: #0076EF
    }

    .sdf_kjhg_rert {
        width: 114px;
        height: 114px;
        background-position: -11px -146px;
    }

    .dsf_hg_dsdr {
        display: none
    }

    .dsf_jh_row {
        line-height: 40px;
    }

    .iy_sd_sd {
        width: 21px;
        height: 24px;
        background-position: -151px -236px;
    }

    .dsf_jhh_s {
        text-align: center;
        line-height: 30px;
        font-size: 22px;
        position: relative;
    }



    .df_jh_wetx {
        position: absolute;
        right: 5px;
        top: 0px
    }

    .dsf_kj_wer {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100;
        height: 100%;
        opacity: 0;
    }

    .ddf_jh_wer {
        position: absolute;
        right: 0px;
        height: 100%;
        top: 0px;
        z-index: 10;
        width: 50px;
    }

    .ddf_jh_wer a {
        font-size: 12px !important;
    }

    .dsf_jh_drf {
        bottom: 50px;
    }

    .ds_jg_dser {
        border: 1px solid #0076ef;
        color: #0076ef;
    }

    .dfs_jgh_der a {
        width: 80px;
        line-height: 15px;
        position: relative;
        top: 2px;
        font-size: 12px;
    }

    .dfs_jgh_der {
        padding-top: 8px;
    }

    .mui-pull-right.cf {
        margin-top: 3px;
    }

    .dsf_jh_deer {
        padding-left: 20px;
    }

    .dsf_juh_er input {
        width: 65px !important;
    }

    .delect_bvtn {
        border: 1px solid #F44336;
        color: #F44336;
    }

    .dsf_d_drt {
        min-height: 28rem;
    }

    @media screen and (max-width: 340px) {
        .dsf_jh_deer {
            width: 125px;
        }
        .ddf_jh_wer {
            width: 50px;
        }
        .dsf_juh_er input {
            width: 70px;
        }
    }

</style>
